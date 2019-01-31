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
