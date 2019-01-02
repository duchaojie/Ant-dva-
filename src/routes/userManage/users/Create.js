import React from 'react';
import { Form, Row, Col } from 'antd';
import ModalBox from '../../../components/ModalBox';
import FormItem from '../../../components/FormItem';
import BaseSelect from '../../../components/BaseSelect';
import { toast } from '../../../utils'

export default class UserModal extends React.Component {
  state = {
    type: 'add',
  }
  show = (type) => {
    if (this.modal) {
      this.setState({ type });
      this.modal.show();
    }
  }
  hide = () => {
    if (this.modal && this.userForm) {
      this.modal.hide();
      this.userForm.resetFields();
    }
  }
  handleOk = () => {
    const { type } = this.state;
    const { dispatch, searchKeywords, userDetail, data } = this.props;
    if (this.userForm) {
      this.userForm.validateFields((err, values) => {
        if (!err) {
          const editType = type === 'edit';
          const paramsObj = {
            ...values,
            password: '888888',
            confirmPassword: '888888',
            pertainCode: 'org',
          }
          if (editType) {
            // 编辑状态下
            paramsObj.userCode = userDetail.userCode;
            delete paramsObj.password;
            delete paramsObj.confirmPassword;
          }
          dispatch({
            type: 'userManage_list/CREATE_OR_EDIT',
            payload: {
              paramsObj,
              type,
            },
          }).then((success) => {
            if (success) {
              const tipInfo = editType ? '编辑成功' : '新增成功';
              toast('success', tipInfo);
              this.hide();
              dispatch({
                type: 'userManage_list/FETCH_USER_LIST',
                payload: {
                  currPageNo: editType ? data.currPageNo : 1,
                  paramsObj: searchKeywords,
                },
              });
            }
          })
        }
      });
    }
  };

  render() {
    const { type } = this.state;
    const { roleList, userDetail, confirmLoading } = this.props;
    const addType = type === 'add';
    const detail = addType ? {} : userDetail;
    const title = addType ? '新增用户' : '编辑用户';
    return [
      <ModalBox
        ref={(r) => { this.modal = r; }}
        title={title}
        handleOk={this.handleOk}
        handleCancel={this.hide}
        width={700}
        confirmLoading={confirmLoading}
      >
        <UserForm
          ref={(r) => { this.userForm = r }}
          roleList={roleList}
          detail={detail}
          type={type}
        />
      </ModalBox>,
    ];
  }
}

const UserForm = Form.create()((props) => {
  const { form, roleList, detail, type } = props;
  const formProps = {
    form,
    cols: [7, 14],
  };

  return (
    <Form>
      <Row>
        <Col span={12}>
          <FormItem
            {...formProps}
            label="姓名"
            fieldName="userName"
            inputProps={{ placeholder: '请填写姓名' }}
            initialValue={detail.userName}
          />
        </Col>
        <Col span={12}>
          <FormItem
            {...formProps}
            label="账号"
            fieldName="account"
            inputProps={{ placeholder: '请填写账号' }}
            initialValue={detail.account}
          />
        </Col>
        <Col span={12}>
          <FormItem
            {...formProps}
            label="角色"
            fieldName="roleCodes"
            initialValue={detail.roleCodes}
          >
            <BaseSelect data={roleList} dataFormat={{key: 'value', value: 'label'}} mode="multiple" placeholder="请选择角色" />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem
            {...formProps}
            required={false}
            label="邮箱"
            fieldName="email"
            extraRules={[{
              type: 'email',
              message: '请输入正确的邮箱格式',
            }]}
            inputProps={{ placeholder: '请填写邮箱' }}
            initialValue={detail.email}
          />
        </Col>
        <Col span={12}>
          <FormItem
            {...formProps}
            required={false}
            label="手机号"
            fieldName="phone"
            extraRules={[{
              pattern: /^1[34578]\d{9}$/,
              message: '请填写正确格式的手机号',
            }]}
            inputProps={{ placeholder: '请填写手机号' }}
            initialValue={detail.phone}
          />
        </Col>
        <Col span={12}>
          <FormItem
            {...formProps}
            required={false}
            label="备注"
            fieldName="description"
            inputProps={{ placeholder: '请填写备注' }}
            initialValue={detail.description}
          />
        </Col>
        {
          type === 'add' && (
            <React.Fragment>
              <Col span={12}>
                <FormItem
                  {...formProps}
                  readOnly
                  label="初始密码"
                  initialValue="888888"
                />
              </Col>
            </React.Fragment>
          )
        }
      </Row>
    </Form>
  )
});
