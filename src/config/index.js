// 审批状态
export const APPROVE_STATUS = {
  OUTOFDATE: "已过时",
  UNSUBMIT: "未提交",
  PENDING: "审批中",
  PASSED: "已通过",
  FAILED: "未通过",
  CANCEL: "已撤销",
  UNWANTED: "无审批",
};

// 资产状态 选择内容为： 正常、关注、次级、可疑、损失
export const ASSET_STATUS = {
  1: '正常',
  2: '关注',
  3: '次级',
  4: '可疑',
  5: '损失',
};

// 招募方式
export const RECRUI_TYPE = {
  PUBLIC: '公募',
  PRIVATE: '私募',
};
// 交易场所
export const EXCHANGE = {
  INTERBANKBONDMARKET: '全国银行间债券市场',
  SHANGHAISTOCKEXCHANGE: '上海证券交易所',
  SHENZHENSTOCKEXCHANGE: '深圳证券交易所',
  YINDENG: '银登中心',
  OTHER: '其他',
};
// 付息频率
export const INTEREST_RATE = {
  M: '月',
  S: '季度',
  HY: '半年',
  Y: '年',
};
// 计息方式
export const INTEREST_TYPE = {
  'ACT_360': 'ACT/360',
  'ACT_365': 'ACT/365',
};
// 转让周期
export const TRANSFER_TERM = {
  // S: '静态',
  D: '日',
  W: '周',
  M: '月',
  Q: '季',
  Y: '年',
};

// 层级结构
export const LEVEL_TYPE = {
  LT01: '优先级',
  LT02: '劣后级',
};
// 默认计费时间
export const FEES_TIME_ENUM = {
  TERM: '按期计费',
  PFCD: '首次结算日',
  PETD: '项目起息日',
  PEDD: '项目到期日',
};
// 计算方式
export const CALCULAT_TYPE_ENUM = {
  FCT001: '固定金额',
  // FCT002: '固定费率',
  FCT003: '年化费率',
  FCT005: '金融服务费',
};
// 支付类型
export const PAY_TYPE = {
  WITHHOLD: '服务机构代扣',
};

// 费率基准
export const FEES_DATUM_ENUM = {
  // START: '信托初始规模',
  REMAIN: '信托剩余规模',
  // PRISTART: '优先级信托初始规模',
  PRIREMAIN: '优先级信托剩余规模',
};
// 分配类型
export const ASSIGN_TYPE = {
  PRIN: '本金',
  INVEST: '收益',
  FEE: '费用',
};
// 项目状态
export const PLAN_STATUS = {
  // PREPARING: '准备中',
  ONGOING: '存续中',
  COMPLETED: '已清算',
}

// 报表时间段
export const QUARTER = {
  Q1TH: '第一季度',
  Q2TH: '第二季度',
  Q3TH: '第三季度',
  Q4TH: '第四季度',
};
// 报表时间选择
export const YEAR_TYPE = {
  H1: '上半年',
  H2: '下半年',
};
// 资产列表——受让池交易资金流水类型
export const CHANGE_TYPE = {
  PCT02: '资产回收兑付',
  PCT03: '资产交易兑付',
  PC403: '分配',
  PCT05: '放款冲正',
  PCT06: '还款冲正',
  PCT07: '支付应付利息',
};
// 资产列表——放款池交易资金流水类型
export const CHANGE_TYPE_LOADING_POOL = {
  PCT11: '未转资产回收划账',
  PCT12: '资产交易兑付划账',
  PCT13: '还款冲正',
  PCT14: '应付利息兑付回收划账',
  PCT15: '放款冲正',
  PCT16: '放款池分配',
  PCT20: '向回款户资金划账',
};
