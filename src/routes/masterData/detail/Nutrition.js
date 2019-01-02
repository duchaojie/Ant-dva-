// import React from 'react';
// import { Select, Transfer, Table, Divider, Popconfirm, Form } from 'antd';
// import SearchForm, { ColDom, FormItem } from '../../../components/SearchForm';
// import PathButton from '../../../components/PathButton';
// import ModalBox from '../../../components/ModalBox';
// import NutritionModel from './NutritionModel';
// import { genNonDuplicateID, setStorage, getStorage, storageModify } from '../../../utils';


// class Nutrition extends React.PureComponent{
//   state= {
//     columns:[
//       {
//         title:'营养成分',
//         dataIndex:'yycf',
//       },{
//         title:'含量',
//         dataIndex:'hl',
//       },{
//         title:'单位',
//         dataIndex:'dw',
//       },{
//         title:'操作',
//         render:(_,record) =>(
//           <React.Fragment>
//             <a onClick ={()=>this.handleModify(record)}>编辑</a>
//             <Divider type ='vertical' />
//             <Popconfirm title =" 确认删除吗？" onConfirm = {()=>{this.onRemove()}}>
//             <a>删除</a>
//             </Popconfirm>
//           </React.Fragment>
//         ),
//       },
//     ],
//     data:getStorage(`master_nut_${this.props.id}`),
//     active:{},
//     mockData:[
//       {
//         key:'能量',
//         title:'能量',
//       },{
//         key:'蛋白质',
//         title:'蛋白质',
//       },{
//         key:'碳水化物',
//         title:'碳水化物',
//       },{
//         key:'水',
//         title:'水',
//       },{
//         key:'糖分',
//         title:'糖分',
//       },
//     ],
//     targetKeys: [],
//   };
//   //方法
//   add = () => {
//     this.setState({ targetKeys:[]} ,() =>{
//       this.modalRef.show();
//     });
//   };
//   handleModify =record =>{
//     this.setState({ active: record,},()=>{
//       this.formRef.modalRef.hide();
//     });
//   };
//   handChange = (targetKeys) =>{
//     this.setState({targetKeys});
//   };
//   modifySave = values =>{
//     const list= storageModify(`modify_nut_${this.props.id}`,'id',values);
//     this.setState({ data:list },() =>{
//       this.formRef.modalRef.hide();
//     });
//   };
//   //删除
//   onRemove = (id)=>{
//      const list = storageRemove(`master_nut_${this.props.id}`,'id',id);
//      this.setState({ data:list });
//   };
//   handleOk =()=>{
//     const { targetKeys } = this.state;
//     const NMAE = `master_nut_${this.props.id}`;
//      if( targetKeys.length>0 ){
//        const arr = getStorage(NMAE);
//        targetKeys.forEach(item =>{
//          arr.push({
//            id:genNonDuplicateID(1),
//            yycf:item,
//          });
//        });
//        setStorage(NMAE,arr);
//        this.setState({data:arr});
//      }
//      this.modalRef.hide();
//   };
//   render() {
//         const { mockData,targetKeys,columns, data, active } = this.state;
//         return(
//           <React.Fragment>
//             <SearchForm 
//             extraNode ={(formProps,colSpan)=>(
//               <React.Fragment>
//                 <ColDom span={colSpan}>
//                 <FormItem
//                 {...formProps}
//                 label="供应商"
//                 fieldName ="a"
//                 >
//                   <Select style ={{ width:'100%'}}>
//                     <Select.Option key =" 供应1">供应商1</Select.Option>
//                     <Select.Option key =" 供应1">供应商1</Select.Option>
//                   </Select>
//                 </FormItem>
//                 </ColDom>
//                 <ColDom span={colSpan}>
//                 <FormItem
//                   {...formProps}
//                   label="营养成分"
//                   fieldName="b"
//                 />
//               </ColDom>
//               </React.Fragment>
//             )}
//             />
//             <PathButton name="添加营养值" onClick={this.add} />
//               <Table
//                 bordered
//                 // loading={loading}
//                 rowKey="id"
//                 columns={columns}
//                 dataSource={data}
//                 pagination={false}
//               />
//               <ModalBox
//                 ref={(r) => {this.modalRef = r}}
//                 title="添加营养值"
//                 width={750}
//                 handleOk={this.handleOk}
//               >
//                 <Transfer
//                   dataSource={mockData}
//                   showSearch
//                   listStyle={{
//                     width: 300,
//                     height: 300,
//                   }}
//                   targetKeys={targetKeys}
//                   onChange={this.handleChange}
//                   render={item => item.title}
//                 />
//               </ModalBox>
//               <NutritionModel
//                 data={active}
//                 wrappedComponentRef={(r) => {this.formRef = r}}
//                 callback={this.modifySave}
//               />
//           </React.Fragment>
//         );
//       }
//     }
// export default Nutrition;
import React from 'react';
import { Select, Transfer, Table, Divider, Popconfirm } from 'antd';
import SearchForm, { ColDom, FormItem } from '../../../components/SearchForm';
import PathButton from '../../../components/PathButton';
import ModalBox from '../../../components/ModalBox';
import NutritionModal from './NutritionModal';
import { genNonDuplicateID, setStorage, getStorage, storageModify, storageRemove } from '../../../utils';

class Nutrition extends React.PureComponent {
  state = {
    columns: [
      {
        title: '营养成分',
        dataIndex: 'yycf',
      }, {
        title: '含量',
        dataIndex: 'hl',
      }, {
        title: '单位',
        dataIndex: 'dw',
      }, {
        title: '操作',
        render: (_, record) => (
          <React.Fragment>
            <a onClick={() => this.handleModify(record)}>编辑</a>
            <Divider type="vertical" />
            <Popconfirm title="是否删除该项？" onConfirm={() => this.onRemove(record.id)}>
              <a>删除</a>
            </Popconfirm>
          </React.Fragment>
        ),
      },
    ],
    data: getStorage(`master_nut_${this.props.id}`),
    active: {},
    mockData: [
      {
        key: '能量',
        title: '能量',
      }, {
        key: '蛋白质',
        title: '蛋白质',
      }, {
        key: '脂肪',
        title: '脂肪',
      }, {
        key: '碳水化合物',
        title: '碳水化合物',
      }, {
        key: '钠',
        title: '钠',
      },
    ],
    targetKeys: [],
  };

  add = () => {
    this.setState({ targetKeys: [] }, () => {
      this.modalRef.show();
    })
  };

  handleChange = (targetKeys) => {
    this.setState({ targetKeys });
  };

  handleModify = record => {
    this.setState({
      active: record,
    }, () => {
      this.formRef.modalRef.show();
    });
  };
   //编辑框 的修改值  修改之后确认保存
  modifySave = values => {
    const list = storageModify(`master_nut_${this.props.id}`, 'id', values);
    this.setState({ data: list }, () => {
      this.formRef.modalRef.hide();  //隐藏
    });
  };

  onRemove = (id)=>{
    const list = storageRemove(`master_nut_${this.props.id}`,'id',id);
    this.setState({ data:list});
    };

  handleOk = () => {
    const { targetKeys } = this.state;
    const NAME = `master_nut_${this.props.id}`;

    if (targetKeys.length > 0) {
      const arr = getStorage(NAME);
      targetKeys.forEach(item => {
        arr.push({
          id: genNonDuplicateID(1),
          yycf: item,
        });
      });

      setStorage(NAME, arr);
      this.setState({ data: arr });
    }

    this.modalRef.hide();
  };

  render() {
    const { mockData, targetKeys, columns, data, active } = this.state;

    return(
      <React.Fragment>
        <SearchForm
          extraNode={(formProps, colSpan) => (
            <React.Fragment>
              <ColDom span={colSpan}>
                <FormItem
                  {...formProps}
                  label="供应商"
                  fieldName="a"
                >
                  <Select style={{ width: '100%' }}>
                    <Select.Option key="供应商1">供应商1</Select.Option>
                    <Select.Option key="供应商2">供应商2</Select.Option>
                    <Select.Option key="供应商3">供应商3</Select.Option>
                  </Select>
                </FormItem>
              </ColDom>
              <ColDom span={colSpan}>
                <FormItem
                  {...formProps}
                  label="营养成分"
                  fieldName="b"
                />
              </ColDom>
            </React.Fragment>
          )}
        />
        <PathButton name="添加营养值" onClick={this.add} />
        <Table
          bordered
          // loading={loading}
          rowKey="id"
          columns={columns}
          dataSource={data}
          pagination={false}
        />
        <ModalBox
          ref={(r) => {this.modalRef = r}}
          title="添加营养值"
          width={750}
          handleOk={this.handleOk}
        >
          <Transfer
            dataSource={mockData}
            showSearch
            listStyle={{
              width: 300,
              height: 300,
            }}
            targetKeys={targetKeys}
            onChange={this.handleChange}
            render={item => item.title}
          />
        </ModalBox>
        <NutritionModal 
          data={active}
          wrappedComponentRef={(r) => {this.formRef = r}}
          callback={this.modifySave}
        />
      </React.Fragment>
    );
  }
}

export default Nutrition;
