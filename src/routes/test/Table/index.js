/**
 * 动态添加和拖拽
 */
import React, { Component } from 'react'
import { Table, Tooltip, Icon, InputNumber, Popconfirm, Button, Radio } from 'antd';
import { connect } from 'dva';
import { DragDropContext, DragSource, DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import BaseSelect from '../../../components/BaseSelect';
import { ASSIGN_TYPE } from '../../../config';

let dragingIndex = -1;

const BodyRow = props => {
  const { isOver, connectDragSource, connectDropTarget, moveRow, ...restProps } = props;
  const style = { ...restProps.style, cursor: "move" };

  let className = restProps.className;
  if (isOver) {
    if (restProps.index > dragingIndex) {
      className += ' drop-over-downward';
    }
    if (restProps.index < dragingIndex) {
      className += ' drop-over-upward';
    }
  }

  return connectDragSource(
    connectDropTarget(<tr {...restProps} className={className} style={style} />)
  );
};
const rowSource = {
  beginDrag(props) {
    dragingIndex = props.index;
    return {
      index: props.index,
    };
  },
};

const rowTarget = {
  drop(props, monitor) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Time to actually perform the action
    props.moveRow(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    // eslint-disable-next-line
    monitor.getItem().index = hoverIndex;
  },
};

const DragableBodyRow = DropTarget('row', rowTarget, (connects, monitor) => ({
  connectDropTarget: connects.dropTarget(),
  isOver: monitor.isOver(),
}))(
  DragSource('row', rowSource, connects => ({
    connectDragSource: connects.dragSource(),
  }))(BodyRow),
);


@connect(({ plan }) => ({
  titleNameData: plan.titleNameData,
}))

class Tables extends Component {
  state = {
    loading: false,
    data: [{
      type: 'INVEST',
      trialAmt: 1232313,
      trialTaxAmt: 12,
      current: 3000,
      editable: 'true',
      tax: true,
      key: '01',
    }, {
      type: 'INVEST',
      trialAmt: 3847,
      trialTaxAmt: 490,
      current: 34000,
      editable: 'true',
      tax: false,
      key: '02',
    }],
  }

  index = 0; // 添加行的动态index
  components = {
    body: {
      row: DragableBodyRow,
    },
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'plan/queryTitleNameData',
      payload: 'ALD2019121509532013821127',
    });
    console.log('123', this.props.titleNameData);
  }

  //  行值
  getRowByKey(key, newData) {
    const { data } = this.state;
    return (newData || data).filter(item => item.key === key)[0];
  }
  delete = (key) => {
    const { data } = this.state;
    const newData = data.filter(item => item.key !== key);
    this.setState({ data: newData });
  }
  newMember = () => {
    const { data } = this.state;
    const newData = data.map(item => ({ ...item })) // 获取当前的数据列表
    newData.push({
      key: `NEW_TEMP_ID_${this.index}`, // 新增行时index
      // 动态添加参数
      type: '',
      tax: false,
      money: '',
      newMember: '',
      editable: 'true',
    });
    this.index += 1; // ?
    this.setState({ data: newData });
    // this.props.change(newData); // ?
  }

  moveRow = (dragIndex, hoverIndex) => {
    const { data } = this.state;
    const dragRow = data[dragIndex];
    this.setState(
      update(this.state, {
        data: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragRow]],
        },
      }),
    );
  };

  handleChange = (e, fieldName, key) => {
    const { data } = this.state;
    const { titleNameData } = this.props; // 本页面请求
    const newData = data.map((item) => ({ ...item }));
    const target = this.getRowByKey(key, newData); // getRowByKey 函数的作用
    if (target) {
      // 是否计税默认为否
      if (!target.tax) {
        target.tax = false;
      }
      if (fieldName === 'type') {
        // target[fieldName] = e;
        target.titleNameList = titleNameData[e];  // ???
        target.titleNo = '';
      }
      if (fieldName === 'tax') {
        const isTax = e.target.value;
        target.tax = isTax;
        // 是否计税为否时，确认增值税设为 0
        target.confirmTaxAmt = 0;
      } else {
        target[fieldName] = e;
      }
      // this.props.change(newData);
      this.setState({ data: newData });
    }
  }

  render() {
    const columns = [
      {
        title: '类型',
        dataIndex: 'type',
        width: "20%",
        render: (text, record) => {
          if (record.editable) {
            return (
              <BaseSelect
                value={record.type}  // 默认值
                data={ASSIGN_TYPE}
                onChange={e => { this.handleChange(e, 'type', record.key) }}
                style={{ width: '100%' }}
              />
            );
          }
          return text;
        },
      },
      {
        title: '是否计税',
        dataIndex: 'tax',
        key: 'tax',
        render: (text, record) => {
          if (record.editable) {
            return (
              <Radio.Group onChange={e => this.handleChange(e, 'tax', record.key)} value={record.tax}>
                <Radio value>是</Radio>
                <Radio value={false}>否</Radio>
              </Radio.Group>
            )
          }
          return text;
        },
      },
      {
        title: (
          <span>
            当期应付金额(元)
            <Tooltip
              placement="top"
              title="不含税"
            >
              <Icon type="question-circle-o" style={{ color: '#1890ff', marginLeft: 4 }} />
            </Tooltip>
          </span>
        ),
        dataIndex: 'trialAmt',
        key: 'trialAmt',
        width: "20%",
      },
      {
        title: '应付增值税(元)',
        dataIndex: 'trialTaxAmt',
        key: 'trialTaxAmt',
        width: '20%',
      }, {
        title: '当前可用资金',
        dataIndex: 'current',
        key: 'current',
        width: '10%',
      },
      {
        title: '确认分配金额',
        dataIndex: 'money',
        key: 'money',
        width: "10%",
        render: (money, record) => {
          return (
            <InputNumber
              value={money}
              onChange={value => this.handleChange(value, 'money', record.key)}
              // onBlur={e => this.handleCalculate(e, record.key)}
              placeholder="确认分配"
              // addonAfter="元"
              min={0}
              formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/\$\s?|(,*)/g, '')}
              style={{ width: '86%' }}
            />
          )
        },
      },
      {
        title: '操作',
        key: 'action',
        width: '20%',
        render: (text, record) => {
          const { loading } = this.state;
          if (!!record.editable && loading) {
            return null;
          }
          return (
            <span>
              <Popconfirm title="是否要删除此行？" onConfirm={() => this.delete(record.key)}>
                <Icon style={{ fontSize: 20, cursor: 'pointer' }} type="minus-circle-o" />
              </Popconfirm>
            </span>
          );
        },
      },
    ];
    return (
      <div>
        <Table
          rowKey='key'
          title={() => (
            <div>
              <Button type="primary" icon="plus" onClick={this.newMember}>新增Tablelsit</Button>
            </div>
          )}
          columns={columns}
          dataSource={this.state.data}
          pagination={false}
          components={this.components}
          onRow={(record, index) => ({
            index,
            moveRow: this.moveRow,
          })}
          bordered
        />
      </div>
    )
  }
}
const DragProgramTable = DragDropContext(HTML5Backend)(Tables);
export default DragProgramTable;
