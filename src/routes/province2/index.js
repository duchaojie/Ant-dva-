


// const province=Object.keys(List);
// console.log(province);

import { Cascader } from 'antd';
import List from '../../config/list';

const arr = List;

console.log(arr);

arr.map(item => {
  // console.log(item.value);
  // console.log(item.children);
  const chil = item.children;
  chil.map( item =>{
    console.log(item.value);
  })

  // return {
  //   value:item.value,
  //   label:item.value,
  // children: item.city.map(city => {
  //   return {
  //     value:item.value,
  //     label:item.value,
  //     children:city.area.map(area => {
  //       return {
  //         name: area,
  //         label:area,
  //       }
  //     })
  //   }
  // })
  // }
});





const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
},{
  value: "伊犁哈萨克",
  label: "伊犁哈萨克",
  children: [
    {
      value: "伊宁市",
      label: "伊宁市",
    },
    {
      value: "奎屯市",
      label: "奎屯市",
    },
    {
      value: "伊宁县",
      label: "伊宁县",
    },
    {
      value: "察布查尔锡伯自治县",
      label: "察布查尔锡伯自治县",
    },
    {
      value: "霍城县",
      label: "霍城县",
    },
    {
      value: "巩留县",
      label: "巩留县",
    },
    {
      value: "新源县",
      label: "新源县",
    },
    {
      value: "昭苏县",
      label: "昭苏县",
    },
    {
      value: "特克斯县",
      label: "特克斯县",
    },
    {
      value: "尼勒克县",
      label: "尼勒克县",
    },
  ],
},

];

function onChange(value) {
  console.log(value);
}

export default function Text(){
  return (
    <div>
    <Cascader options={options} onChange={onChange} placeholder="Please select" />
</div>
)
}





/*
完整的联动方式
* https://codesandbox.io/s/m4ljw91j0j
import provinces from 'china-division/dist/provinces.json';
import cities from 'china-division/dist/cities.json';
import areas from 'china-division/dist/areas.json';

areas.forEach((area) => {
  const matchCity = cities.filter(city => city.code === area.cityCode)[0];
  if (matchCity) {
    matchCity.children = matchCity.children || [];
    matchCity.children.push({
      label: area.name,
      value: area.code,
    });
  }
});

cities.forEach((city) => {
  const matchProvince = provinces.filter(province => province.code === city.provinceCode)[0];
  if (matchProvince) {
    matchProvince.children = matchProvince.children || [];
    matchProvince.children.push({
      label: city.name,
      value: city.code,
      children: city.children,
    });
  }
});

const options = provinces.map(province => ({
  label: province.name,
  value: province.code,
  children: province.children,
}));

export default options;

*/


