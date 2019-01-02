import React, { Component } from 'react';
import { Form, Input, Tree, Button } from 'antd';
import ModalBox from '../../components/ModalBox';
import FormItem from '../../components/FormItem';
import { toast } from '../../utils/index';

const { TextArea } = Input;
const { TreeNode } = Tree;

export default class RoleModal extends Component {
  state = {
    checkedKeys: [],
    type: 'add',
    detail: {},
  }
  filterChildren = (authorList, item) => {
    authorList.forEach((ele) => {
      if (ele.children) {
        // eslint-disable-next-line
        item[ele.key] = true;
        this.filterChildren(ele.children, item);
      } else {
        // eslint-disable-next-line
        item[ele.key] = false;
      }
    })
  }
  show = (type) => {
    if (this.modalBox) {
      const addType = type === 'add';
      const { roleDetail, authorList } = this.props;
      let filterChecked = [];
      if (!addType) {
        const childrenItem = {};
        this.filterChildren(authorList, childrenItem);
        filterChecked = (roleDetail.menuCodes || []).filter((ele) => {
          return !childrenItem[ele];
        })
      }
      this.setState({
        type,
        detail: addType ? {} : roleDetail,
        checkedKeys: filterChecked,
      });
      this.modalBox.show();
    }
  }
  hide = () => {
    if (this.modalBox && this.roleForm) {
      this.modalBox.hide();
      this.roleForm.resetFields();
      this.setState({ checkedKeys: [] });
    }
  }
  handleSubmit = () => {
    if (this.roleForm) {
      this.roleForm.validateFields((err, values) => {
        if (!err) {
          const { dispatch, roleListObj, roleDetail, searchRoleName } = this.props;
          const {checkedKeys, type } = this.state;
          if (checkedKeys.length === 0) {
            return toast('error', '请选择权限配置');
          }
          const editType = type === 'edit';
          const paramsObj = {
            ...values,
            menuCodes: checkedKeys,
          };
          if (editType) {
            paramsObj.roleCode = roleDetail.roleCode;
          }
          dispatch({
            type: 'roleManage/addOrEdit',
            payload: {
              params: paramsObj,
              type,
            },
          }).then((success) => {
            if (success) {
              const tipInfo = editType ? '编辑成功' : '新增成功';
              toast('success', tipInfo);
              this.hide();
              dispatch({
                type: 'roleManage/getRoleList',
                payload: {
                  roleName: searchRoleName,
                  currPageNo: editType ? roleListObj.currPageNo : 1,
                },
              });
            }
          });
        }
      })
    }
  }
  onCheck = (checkedKeys) => {
    this.setState({ checkedKeys });
  }
  renderTreeNodes = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} />;
    });
  }
  renderBtn = () => {
    return [
      <Button onClick={this.hide.bind(this)} key="1">取消</Button>,
      <Button onClick={this.handleSubmit.bind(this)} key="2" type="primary">确定</Button>,
    ]
  }
  render() {
    const { checkedKeys, detail, type } = this.state;
    const { authorList, confirmLoading } = this.props;
    const detailType = type === 'detail';
    let title = '新增角色';
    if (type === 'edit') {
      title = '编辑角色';
    } else if (type === 'detail') {
      title = '查看角色';
    }
    return (
      <div>
        <ModalBox
          title={title}
          ref={(r) => { this.modalBox = r }}
          footer={detailType ? null : this.renderBtn()}
          confirmLoading={confirmLoading}
        >
          <RoleForm
            // eslint-disable-next-line
            ref={r => this.roleForm = r}
            checkedKeys={checkedKeys}
            detail={detail}
            authorList={authorList}
            renderTreeNodes={this.renderTreeNodes}
            onCheck={this.onCheck.bind(this)}
            detailType={detailType}
          />
        </ModalBox>
      </div>
    )
  }
}

const RoleForm = Form.create()((props) => {
  const { form, authorList, checkedKeys, renderTreeNodes, onCheck, detail, detailType } = props;
  const formProps = { form, cols: [6, 14] };
  return (
    <Form>
      <FormItem
        {...formProps}
        label="角色名称"
        fieldName="roleName"
        inputProps={{ placeholder: '请填写角色名称', disabled: detailType }}
        initialValue={detail.roleName}
      />
      <FormItem
        {...formProps}
        label="角色备注"
        fieldName="description"
        required={false}
        initialValue={detail.description}
      >
        <TextArea placeholder="请填写角色备注" rows={4} disabled={detailType} />
      </FormItem>
      <FormItem
        {...formProps}
        label="权限配置"
        fieldName="menuCodes"
        required={false}
      >
        <Tree
          checkable
          onCheck={onCheck}
          checkedKeys={checkedKeys}
          defaultExpandAll
          disabled={detailType}
        >
          {renderTreeNodes(authorList)}
        </Tree>
      </FormItem>
    </Form>
  )
})
