// 产品新增/编辑提交  只有有文件上传的时候采用 formData;
// export function addProduct(params) {
//   const {
//     orgName,
//     trtProdName,
//     trtProdCode, // 产品编号
//     intrRule,// 计息规则
//     couponFrequency, // 计息频率
//     amortTerms, // 摊还期数
//     cycleTerms, // 循环期数
//     prinAmount, // 本金规模
//     interRateType, // 利率类型
//     baseInterRate , // 基准利率
//     interRate , // 上浮/ 利率
//     allotOrder, // 分配方案
//   }=params;
//   const formData = new FormData();
//   formData.append('orgName', orgName);
//   formData.append('trtProdName', trtProdName);
//   formData.append('couponFrequency', couponFrequency);
//   formData.append('amortTerms', amortTerms);
//   formData.append('cycleTerms', cycleTerms);
//   formData.append('prinAmount', prinAmount);
//   formData.append('interRateType', interRateType);
//   formData.append('baseInterRate', baseInterRate);
//   formData.append('interRate', interRate);
//   formData.append('intrRule', intrRule);
//   if (trtProdCode) {
//     formData.append('trtProdCode', trtProdCode);
//   }
//   if (allotOrder) {
//     formData.append('allotOrder', allotOrder);
//   }

//   return request({
//     url: '/trtProd/detail.json',
//     method: 'POST',
//     body: formData,
//   });
// }







componentDidMount() {
  // const { match, dispatch } = this.props;
  // const { taskId } = match.params;
  // this.taskId = taskId;
  // if (taskId) {
  //   dispatch({
  //     type: 'productManage/queryDetail',
  //     payload: taskId,
  //   });
  // } else {
  //   dispatch({
  //     type: 'productManage/queryTaskCode',
  //   })
  //    // 新增清除之前数据
  //   dispatch({
  //     type: 'productManage/getDetailInfo',
  //     payload: { detailInfo: {} },
  //   })
  // }
  // this.props.dispatch({
  //   type: 'productManage/queryOrgList',
  // })
}



handleSearch = (e) => {
  e.preventDefault();
  const { form, dispatch, trtProdCode } = this.props;
  // const taskId = this.taskId;
  const text = '新增成功';
  // if (taskId) {
  //   text = '编辑成功';
  // }
  form.validateFields((err, fileldsValue) => {
    if (!err) {
      console.log(fileldsValue)
      dispatch({
        type: 'productManage/addProduct',
        payload: {
          ...fileldsValue,
          trtProdCode,
        },
      }).then(res => {
        // console.log('res',res);
        if (res.success) {
          message.success(text, 1);
          dispatch(routerRedux.push({ pathname: "/masterProject/product" }));
        }
      });
    };
  });
}
