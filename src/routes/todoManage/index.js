import React, { Fragment } from 'react';
import { Button, Popconfirm, Icon, Table, Divider } from 'antd';
import List from './list';
import AddModal from './components/AddModal';
import UserDetail from './components/UserDetail';
import Update from './components/Update';

export default class TodoPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      n: 2,
      count: 0,
      value: 'aaa',
      arr: 'cccc',
      uplist: 'uuu',
      dataSource: [
        { key: 1, nid: 1, name: '小花', gender: '男', age: 12, schoolname: '西湖远洋', description: '热爱班级活动，尊敬老师' },
        { key: 2, nid: 2, name: '小草', gender: '男', age: 23, schoolname: '浙大湖边', description: '热爱班级活动，尊敬老师' },
        { key: 3, nid: 3, name: '小树', gender: '男', age: 1, schoolname: '拱墅小城', description: '热爱班级活动，尊敬老师' },
        { key: 4, nid: 4, name: '小河', gender: '女', age: 3, schoolname: '西湖', description: '热爱班级活动，尊敬老师' },
        { key: 5, nid: 5, name: '小唐', gender: '女', age: 4, schoolname: '紫金港', description: '热爱班级活动，尊敬老师' },
      ],
    }
    this.columns = [
      { title: '编号', dataIndex: 'nid', key: 'nid', width: '8%' },
      { title: '姓名', dataIndex: 'name', key: 'name', width: '15%' },
      { title: '性别', dataIndex: 'gender', key: 'gender', width: '10%' },
      { title: '年龄', dataIndex: 'age', key: 'age', width: '15%' },
      { title: '学校', dataIndex: 'schoolname', key: 'schoolname', width: '15%' },
      { title: '在校表现', dataIndex: 'description', key: 'description', width: '20%' },
      {
        title: '操作', dataIndex: '', key: 'operation', width: '32%',
        render: (text, record) => (
          <span>
            <Popconfirm title="删除不可恢复，你确定要删除吗?" onConfirm={this.onDelete.bind(this, record)}>
              <Icon type="delete" />
            </Popconfirm>
            <Divider type="vertical" />
            <UserDetail pass={record} />
            <Divider type="vertical" />
            <Update pass={record} handleUpdata={uplist => this.handleUpdata(uplist)} />
          </span>
        ),
      },
    ];
    this.change = this.change.bind(this);
  }
  componentDidMount() {
    const list = [];
    const d = this.state.dataSource.map((item) => {
      // console.log(index)
      // console.log(item.key)
      const ni = item.key
      return ni;
    })
    list.push(d);
    console.log(list); // 下标

  }

  onDelete(record) {
    const dataSource = [...this.state.dataSource];
    dataSource.splice(record, 1); // recode为获取的索引，后面的 1 是删除几行
    this.setState({ dataSource });
  }
  handleChang = (value) => {
    this.setState({ value });
  }
  add = (arr) => {
    this.setState({ arr });
    this.setState(this.state.dataSource.unshift(JSON.parse(arr)));
  }
  handleUpdata = (uplist) => {
    this.setState({ uplist });
    this.setState(this.state.dataSource.splice(0, 1, JSON.parse(uplist)));
  }

  change() {
    this.setState({
      n: this.state.n + 1,
      count: this.state.count + 1,
    })
  }

  render() {
    return (
      <Fragment>
        <List handleChang={value => this.handleChang(value)} />
        <ul>
          <li>list:{this.state.value}</li>
          <li>add:{this.state.arr}</li>
          <li>uplist:{this.state.uplist}</li>
        </ul>
        <p>{this.state.n}</p>
        <p>你点击了{this.state.count}次</p>
        <Button onClick={this.change}>点</Button>
        <AddModal add={arr => this.add(arr)} />
        <Table
          columns={this.columns}
          dataSource={this.state.dataSource}
          rowKey={record => record.key}
        />
      </Fragment>

    )
  }
}




















































    // const crr = { key: 6, nid: 6, name: '小帅', gender: '男', age: 12, schoolname: '西湖远洋', description: '热爱班级活动，尊敬老师' };
    // this.setState(this.state.dataSource.unshift(crr));

// 下标

    // const list =[];
    // const d =this.state.dataSource.map((item,index)=>{
    // // console.log(index)
    // // console.log(item.key)
    // const ni = item.key
    // return ni;
    // })
    // list.push(d);
    // console.log(list); // 下标


// 去重
// for( let i = 0 ;i < list.length ; i++ ){
      //   if(p.indexOf(list[i]===-1)){
      //     p.push(list)
      //   }
      //   return p;
      // }
    //  console.log(p);



// export default class TodoPage extends React.Component{
//   state={
//     value:'aaa',
//   }
//   componentDidMount(){

//   }
//   handleChang = (value) => {
//     this.setState({value});
//   }


//   render(){
//     return(
//       <Fragment>
//         <p>list value::{this.state.value}</p>
//         <List  handleChang={value => this.handleChang(value)}/>
//         <p>{this.state.list}</p>
//       </Fragment>

//     )
//   }
// }





// const dealListData = (result) => {
//   // console.log('listR', result);
//   if (result.length===0) {
//       result.push({
//           selfId:1
//       });
//   } else {
//       result.map((item, index) => {
//           item.selfId = String(index + 1);
//           return item;
//       });
//   }
//   // console.log(result);
//   return result;
// };


// handleAdd = () => {
//   let selfId = Number(this.state.list[this.state.list.length-1].selfId) + 1;
//   // console.log(this.state.list[this.state.list.length-1].selfId +1);
//   this.props.form.validateFields((err, value) => {
//      if (!err) {
//          this.state.list.push({
//              selfId:selfId
//      });
//      this.props.onChange(this.state.list);
//    }
// });
// }



// handleDeleteItem = (i, selfId) => {
//   this.setState({ list: this.state.list.filter(item => item.selfId !== selfId) }, () => {
//         // console.log('delete', this.state.list);
//         this.props.onChange(this.state.list);
//   });
// }
