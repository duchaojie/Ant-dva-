import React from 'react'
import { Link } from 'dva/router'
import { stringify } from 'qs'
import { Table } from 'antd'
import { formatMoney } from '../../utils'
import useFetch from '../../utils/useFetch'

const queryParams = {
  pageNum: 1,
  pageSize: 10,
}
export default function analysisList() {
  const [data] = useFetch({
    url: `/analyse/plan/page.json?${stringify(queryParams)}`,
  })
  const { datas } = data.dataObject || {};
  console.log(datas);

  const columns = [
    {
      title: '项目名称',
      dataIndex: 'planName',
    }, {
      title: '本金规模（万元）',
      dataIndex: 'prinScale',
      render: prinScale => <span>{prinScale && `${formatMoney(prinScale.ttAmt)}万元`}</span>,
    }, {
      title: '当前资产规模（万元）',
      dataIndex: 'astScale',
      render: astScale => <span>{astScale && `${formatMoney(astScale.ttAmt)}万元`}</span>,
    }, {
      title: '资金余额（万元）',
      dataIndex: 'ableBal',
      render: ableBal => <span>{ableBal && `${formatMoney(ableBal.ttAmt)}万元`}</span>,
    }, {
      title: '整体逾期率（%）',
      dataIndex: 'ovdRate',
    }, {
      title: '日均闲置率（%）',
      dataIndex: 'idleRate',
    }, {
      title: '资金计划更新日期',
      dataIndex: 'fundPlanDate',
    }, {
      title: '操作',
      render: (_, record) => {
        return (
          <Link to={`/projectAnalysis/${record.planNo}`}>查看</Link>
        )
      },
    },
  ]

  return (
    <div>
      <Table
        bordered
        columns={columns}
        dataSource={datas}
        pagination={false}
      />
    </div>
  )
}
