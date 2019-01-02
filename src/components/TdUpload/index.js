/*
* 业务上传组件：文件上传，文件 list 展示，文件 h5 下载，预览等功能
* API: {
*   label: 名称标题，默认 = "附件"
*   action: 接口，默认 = '/adminservice/doc/upfile.json'
*   accept: 文件类型，
*   ButtonText: 按钮文案，默认 = Upload
*   name: 发到后台的文件参数名，默认 = files
*   data: 入参
*   fileList: 文件展示，严格格式 = [ { id: xxx, name: xxx, url: xxx }, ... ]
*   maxFiles: 最多可上传文件数， 默认 = 5
*   maxSize: 文件大小，默认 = 1MB，auto = 不限制
*   onSuccess: 成功后回调, function(fileList, url, info.file)
*   onRemove: 删除后回调, function(fileList)
*   isRemove: 是否可删除，默认 true
*   required: 是否必填，默认 = true
*   extra: 提示文案，默认无
*   preview: 是否可预览，默认 false
*   template: 模板下载，string，cdn资源
*   multiple: 是否支持多选，默认 false
*   cols: [10, 14] 布局比例
* }
* */

import React from 'react';
import { Upload, Button, Icon, Row, Col, Modal, Progress } from 'antd';
import { toast } from '../../utils';
import styles from './index.less';

const ACCEPT_TYPE = 'image/gif, image/png, image/jpg, image/jpeg, image/psd, application/pdf, application/zip';

class TdUpload extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      cols: props.cols || [10, 14],
      label: props.label || '附件',
      action: props.action || '/adminservice/doc/upfile.json',
      accept: props.accept || ACCEPT_TYPE,
      ButtonText: props.ButtonText || 'Upload',
      name: props.name || 'files',
      data: props.data || { type: 'plan' },
      required: props.required,
      extra: props.extra || '',
      template: props.template,
      preview: props.preview,
      onRemove: props.onRemove || null,
      isRemove: props.isRemove,
      disabled: props.disabled,
      maxFiles: props.maxFiles || 5,
      fileList: props.fileList || [],
      maxSize: props.maxSize || 1, // 默认 10MB，auto：不限制
      multiple: props.multiple,
      progressDelay: props.progressDelay || 100, // 进度条延时时间
      previewVisible: false,
      previewImage: '',
      progress: 0,
      progressHidden: true,
    };

    this.fileQueue = []; // 解决多文件上传时，在文件还没完全上传完毕，而进度条消失的情况

    this.onChange = this.onChange.bind(this);
    this.beforeUpload = this.beforeUpload.bind(this);
    this.renderFiles = this.renderFiles.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      disabled: nextProps.disabled,
      isRemove: nextProps.isRemove,
    });

    if (nextProps.fileList) {
      this.setState({
        fileList: nextProps.fileList,
      });
    }
  }

  // 文件上传前回调，检查文件是否符合要求，返回 Promise 对象，否则会有 key 秘钥重复，造成 file 对象丢失的问题
  beforeUpload = (file, files) => {
    const { maxSize, fileList, maxFiles } = this.state;
    const nowFileLength = files.length + fileList.length;
    if (nowFileLength > maxFiles) {
      toast('error', `最多只能上传 ${maxFiles} 个文件`);
      return Promise.reject();
    }

    if (maxSize !== 'auto' && ((file.size / 1048576) > maxSize)) {
      toast('error', `${file.name}: 文件大小不能超过 ${maxSize}MB`);
      return Promise.reject();
    }
    // 存储文件队列
    this.fileQueue.push(file.uid);
  };

  // 文件上传回调函数
  onChange(info) {
    const that = this;
    const { file } = info;

    // 上传中...
    if (file.status === 'uploading') {
      that.setState({
        progressHidden: false,
        disabled: true,
      });

      // uploading 状态会被多次调用
      if (!window.progressTime) {
        const { progressDelay } = this.state;
        window.progressTime = setInterval(() => {
          const { progress } = that.state;
          if (progress < 99) {
            that.setState({
              progress: progress + 1,
              progressHidden: false,
            });
          }
        }, progressDelay);
      }
    }

    // 上传结束...
    if (file.status === 'done' || file.status === 'error') {
      // 删除队列中已经上传完成的文件id
      this.fileQueue.forEach((item, index) => {
        if (item === file.uid) {
          this.fileQueue = this.fileQueue.remove(index);
        }
      });

      // 当队列清空时，再清除定时器
      if (this.fileQueue.length === 0) {
        this.setState({
          progressHidden: true,
          disabled: false,
          progress: 0,
        });
        // 清除定时器，并将定时器初始化
        clearInterval(window.progressTime);
        window.progressTime = null;
      }

      if (file.error) {
        toast('error', file.error.message || '上传失败');
      }
    }

    // 上传结束后进行的业务处理
    if (file.status === 'done') {
      const { response } = file;

      if (response && response.success) {
        const { onSuccess } = that.props;
        const { maxFiles, fileList } = that.state;
        const { url } = response.dataObject;
        const filesLength = fileList.length + 1;
        // 内部处理业务逻辑
        fileList.push({
          id: new Date().getTime(),
          name: file.name,
          url: url[0],
        });

        that.setState({
          fileList,
        });

        // eslint-disable-next-line
        onSuccess ? onSuccess(fileList, url, info.file) : null;
        toast('warning', `还能上传 ${maxFiles - filesLength} 个文件`);
        return;
      }

      toast('error', response.message || '上传失败');
    }
  }

  // 图片预览
  handlePreview(file) {
    const { preview } = this.state;

    if (preview) {
      this.setState({
        previewVisible: true,
        previewImage: file.url,
      });
    }
  }

  // 关闭预览
  handleCancel() {
    this.setState({
      previewVisible: false,
    });
  }

  previewRemove(record) {
    const { fileList, onRemove } = this.state;
    const arr = [];

    fileList.forEach((item) => {
      if (item.id !== record.id) {
        arr.push(item);
      }
    });

    this.setState({
      fileList: arr,
    });

    // eslint-disable-next-line
    onRemove ? onRemove(arr, record) : null;
  }

  // 渲染图片列表列表
  renderFiles() {
    const {
      fileList,
      isRemove,
    } = this.state;
    if (fileList.length > 0) {
      return fileList.map((item) => {
        if (!isRemove) {
          return (
            // eslint-disable-next-line
            <div key={item.id} className={styles.fileItem}>
              <p onClick={this.handlePreview.bind(this, item)}>{item.name}</p>
              <span onClick={this.previewRemove.bind(this, item)}><Icon type="close" /></span>
            </div>
          );
        }

        return (
          // eslint-disable-next-line
          <div key={item.id} className={styles.fileItem}>
            <p onClick={this.handlePreview.bind(this, item)}>{item.name}</p>
          </div>
        );
      });
    }
  }

  render() {
    const {
      cols,
      name,
      data,
      label,
      extra,
      action,
      accept,
      template,
      required,
      ButtonText,
      previewVisible,
      previewImage,
      progressHidden,
      progress,
      disabled,
      maxFiles,
      fileList,
      multiple,
    } = this.state;

    return (
      <div className={styles.upload}>
        <Row>
          <Col span={cols[0]}>
            <div className={`${styles.label} ${!required ? styles.required : ''}`}>{label} :</div>
          </Col>
          <Col span={cols[1]} className={styles.upload_btn}>
            <Upload
              action={action}
              accept={accept}
              onChange={this.onChange}
              beforeUpload={this.beforeUpload}
              name={name}
              data={data}
              multiple={multiple}
            >
              {
                <Button disabled={disabled || fileList.length === maxFiles}><Icon type="upload" />{ButtonText}</Button>
              }
            </Upload>
            <div className={styles.extra}>{extra}</div>
            <div className={styles.fileList}>
              { this.renderFiles() }
            </div>
            <Progress hidden={progressHidden} percent={progress} size="small" status="active" />
            {template ? <a className={styles.template} href={template} download="w3logo">模板下载</a> : null}
          </Col>
        </Row>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <div>
            <a href={previewImage} download="w3logo">下载</a>
          </div>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

export default TdUpload;
