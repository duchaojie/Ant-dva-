 const areas =[
    {
        "code": "110101", 
        "name": "东城区", 
        "cityCode": "1101", 
        "provinceCode": "11"
    }, 
    {
        "code": "110102", 
        "name": "西城区", 
        "cityCode": "1101", 
        "provinceCode": "11"
    }, 
    {
        "code": "110105", 
        "name": "朝阳区", 
        "cityCode": "1101", 
        "provinceCode": "11"
    }, 
    {
        "code": "110106", 
        "name": "丰台区", 
        "cityCode": "1101", 
        "provinceCode": "11"
    }, 
    {
        "code": "110107", 
        "name": "石景山区", 
        "cityCode": "1101", 
        "provinceCode": "11"
    }, 
    {
        "code": "110108", 
        "name": "海淀区", 
        "cityCode": "1101", 
        "provinceCode": "11"
    }, 
    {
        "code": "110109", 
        "name": "门头沟区", 
        "cityCode": "1101", 
        "provinceCode": "11"
    }, 
    {
        "code": "110111", 
        "name": "房山区", 
        "cityCode": "1101", 
        "provinceCode": "11"
    }, 
    {
        "code": "110112", 
        "name": "通州区", 
        "cityCode": "1101", 
        "provinceCode": "11"
    }, 
    {
        "code": "110113", 
        "name": "顺义区", 
        "cityCode": "1101", 
        "provinceCode": "11"
    }, 
    {
        "code": "110114", 
        "name": "昌平区", 
        "cityCode": "1101", 
        "provinceCode": "11"
    }, 
    {
        "code": "110115", 
        "name": "大兴区", 
        "cityCode": "1101", 
        "provinceCode": "11"
    }, 
    {
        "code": "110116", 
        "name": "怀柔区", 
        "cityCode": "1101", 
        "provinceCode": "11"
    }, 
    {
        "code": "110117", 
        "name": "平谷区", 
        "cityCode": "1101", 
        "provinceCode": "11"
    }, 
    {
        "code": "110118", 
        "name": "密云区", 
        "cityCode": "1101", 
        "provinceCode": "11"
    }, 
    {
        "code": "110119", 
        "name": "延庆区", 
        "cityCode": "1101", 
        "provinceCode": "11"
    }, 
    {
        "code": "120101", 
        "name": "和平区", 
        "cityCode": "1201", 
        "provinceCode": "12"
    }, 
    {
        "code": "120102", 
        "name": "河东区", 
        "cityCode": "1201", 
        "provinceCode": "12"
    }, 
    {
        "code": "120103", 
        "name": "河西区", 
        "cityCode": "1201", 
        "provinceCode": "12"
    }, 
    {
        "code": "120104", 
        "name": "南开区", 
        "cityCode": "1201", 
        "provinceCode": "12"
    }, 
    {
        "code": "120105", 
        "name": "河北区", 
        "cityCode": "1201", 
        "provinceCode": "12"
    }, 
    {
        "code": "120106", 
        "name": "红桥区", 
        "cityCode": "1201", 
        "provinceCode": "12"
    }, 
    {
        "code": "120110", 
        "name": "东丽区", 
        "cityCode": "1201", 
        "provinceCode": "12"
    }, 
    {
        "code": "120111", 
        "name": "西青区", 
        "cityCode": "1201", 
        "provinceCode": "12"
    }, 
    {
        "code": "120112", 
        "name": "津南区", 
        "cityCode": "1201", 
        "provinceCode": "12"
    }, 
    {
        "code": "120113", 
        "name": "北辰区", 
        "cityCode": "1201", 
        "provinceCode": "12"
    }, 
    {
        "code": "120114", 
        "name": "武清区", 
        "cityCode": "1201", 
        "provinceCode": "12"
    }, 
    {
        "code": "120115", 
        "name": "宝坻区", 
        "cityCode": "1201", 
        "provinceCode": "12"
    }, 
    {
        "code": "120116", 
        "name": "滨海新区", 
        "cityCode": "1201", 
        "provinceCode": "12"
    }, 
    {
        "code": "120117", 
        "name": "宁河区", 
        "cityCode": "1201", 
        "provinceCode": "12"
    }, 
    {
        "code": "120118", 
        "name": "静海区", 
        "cityCode": "1201", 
        "provinceCode": "12"
    }, 
    {
        "code": "120119", 
        "name": "蓟州区", 
        "cityCode": "1201", 
        "provinceCode": "12"
    }, 
    {
        "code": "130102", 
        "name": "长安区", 
        "cityCode": "1301", 
        "provinceCode": "13"
    }, 
    {
        "code": "130104", 
        "name": "桥西区", 
        "cityCode": "1301", 
        "provinceCode": "13"
    }, 
    {
        "code": "130105", 
        "name": "新华区", 
        "cityCode": "1301", 
        "provinceCode": "13"
    }, 
    {
        "code": "130107", 
        "name": "井陉矿区", 
        "cityCode": "1301", 
        "provinceCode": "13"
    }, 
    {
        "code": "130108", 
        "name": "裕华区", 
        "cityCode": "1301", 
        "provinceCode": "13"
    }, 
    {
        "code": "130109", 
        "name": "藁城区", 
        "cityCode": "1301", 
        "provinceCode": "13"
    }, 
    {
        "code": "130110", 
        "name": "鹿泉区", 
        "cityCode": "1301", 
        "provinceCode": "13"
    }, 
    {
        "code": "130111", 
        "name": "栾城区", 
        "cityCode": "1301", 
        "provinceCode": "13"
    }, 
    {
        "code": "130121", 
        "name": "井陉县", 
        "cityCode": "1301", 
        "provinceCode": "13"
    }, 
    {
        "code": "130123", 
        "name": "正定县", 
        "cityCode": "1301", 
        "provinceCode": "13"
    }, 
    {
        "code": "130125", 
        "name": "行唐县", 
        "cityCode": "1301", 
        "provinceCode": "13"
    }, 
    {
        "code": "130126", 
        "name": "灵寿县", 
        "cityCode": "1301", 
        "provinceCode": "13"
    }, 
    {
        "code": "130127", 
        "name": "高邑县", 
        "cityCode": "1301", 
        "provinceCode": "13"
    }, 
    {
        "code": "130128", 
        "name": "深泽县", 
        "cityCode": "1301", 
        "provinceCode": "13"
    }, 
    {
        "code": "130129", 
        "name": "赞皇县", 
        "cityCode": "1301", 
        "provinceCode": "13"
    }, 
    {
        "code": "130130", 
        "name": "无极县", 
        "cityCode": "1301", 
        "provinceCode": "13"
    }, 
    {
        "code": "130131", 
        "name": "平山县", 
        "cityCode": "1301", 
        "provinceCode": "13"
    }, 
    {
        "code": "130132", 
        "name": "元氏县", 
        "cityCode": "1301", 
        "provinceCode": "13"
    }, 
    {
        "code": "130133", 
        "name": "赵县", 
        "cityCode": "1301", 
        "provinceCode": "13"
    }, 
    {
        "code": "130171", 
        "name": "石家庄高新技术产业开发区", 
        "cityCode": "1301", 
        "provinceCode": "13"
    }, 
    {
        "code": "130172", 
        "name": "石家庄循环化工园区", 
        "cityCode": "1301", 
        "provinceCode": "13"
    }, 
    {
        "code": "130181", 
        "name": "辛集市", 
        "cityCode": "1301", 
        "provinceCode": "13"
    }, 
    {
        "code": "130183", 
        "name": "晋州市", 
        "cityCode": "1301", 
        "provinceCode": "13"
    }, 
    {
        "code": "130184", 
        "name": "新乐市", 
        "cityCode": "1301", 
        "provinceCode": "13"
    }, 
    {
        "code": "130202", 
        "name": "路南区", 
        "cityCode": "1302", 
        "provinceCode": "13"
    }, 
    {
        "code": "130203", 
        "name": "路北区", 
        "cityCode": "1302", 
        "provinceCode": "13"
    }, 
    {
        "code": "130204", 
        "name": "古冶区", 
        "cityCode": "1302", 
        "provinceCode": "13"
    }, 
    {
        "code": "130205", 
        "name": "开平区", 
        "cityCode": "1302", 
        "provinceCode": "13"
    }, 
    {
        "code": "130207", 
        "name": "丰南区", 
        "cityCode": "1302", 
        "provinceCode": "13"
    }, 
    {
        "code": "130208", 
        "name": "丰润区", 
        "cityCode": "1302", 
        "provinceCode": "13"
    }, 
    {
        "code": "130209", 
        "name": "曹妃甸区", 
        "cityCode": "1302", 
        "provinceCode": "13"
    }, 
    {
        "code": "130223", 
        "name": "滦县", 
        "cityCode": "1302", 
        "provinceCode": "13"
    }, 
    {
        "code": "130224", 
        "name": "滦南县", 
        "cityCode": "1302", 
        "provinceCode": "13"
    }, 
    {
        "code": "130225", 
        "name": "乐亭县", 
        "cityCode": "1302", 
        "provinceCode": "13"
    }, 
    {
        "code": "130227", 
        "name": "迁西县", 
        "cityCode": "1302", 
        "provinceCode": "13"
    }, 
    {
        "code": "130229", 
        "name": "玉田县", 
        "cityCode": "1302", 
        "provinceCode": "13"
    }, 
    {
        "code": "130271", 
        "name": "唐山市芦台经济技术开发区", 
        "cityCode": "1302", 
        "provinceCode": "13"
    }, 
    {
        "code": "130272", 
        "name": "唐山市汉沽管理区", 
        "cityCode": "1302", 
        "provinceCode": "13"
    }, 
    {
        "code": "130273", 
        "name": "唐山高新技术产业开发区", 
        "cityCode": "1302", 
        "provinceCode": "13"
    }, 
    {
        "code": "130274", 
        "name": "河北唐山海港经济开发区", 
        "cityCode": "1302", 
        "provinceCode": "13"
    }, 
    {
        "code": "130281", 
        "name": "遵化市", 
        "cityCode": "1302", 
        "provinceCode": "13"
    }, 
    {
        "code": "130283", 
        "name": "迁安市", 
        "cityCode": "1302", 
        "provinceCode": "13"
    }, 
    {
        "code": "130302", 
        "name": "海港区", 
        "cityCode": "1303", 
        "provinceCode": "13"
    }, 
    {
        "code": "130303", 
        "name": "山海关区", 
        "cityCode": "1303", 
        "provinceCode": "13"
    }, 
    {
        "code": "130304", 
        "name": "北戴河区", 
        "cityCode": "1303", 
        "provinceCode": "13"
    }, 
    {
        "code": "130306", 
        "name": "抚宁区", 
        "cityCode": "1303", 
        "provinceCode": "13"
    }, 
    {
        "code": "130321", 
        "name": "青龙满族自治县", 
        "cityCode": "1303", 
        "provinceCode": "13"
    }, 
    {
        "code": "130322", 
        "name": "昌黎县", 
        "cityCode": "1303", 
        "provinceCode": "13"
    }, 
    {
        "code": "130324", 
        "name": "卢龙县", 
        "cityCode": "1303", 
        "provinceCode": "13"
    }, 
    {
        "code": "130371", 
        "name": "秦皇岛市经济技术开发区", 
        "cityCode": "1303", 
        "provinceCode": "13"
    }, 
    {
        "code": "130372", 
        "name": "北戴河新区", 
        "cityCode": "1303", 
        "provinceCode": "13"
    }, 
    {
        "code": "130402", 
        "name": "邯山区", 
        "cityCode": "1304", 
        "provinceCode": "13"
    }, 
    {
        "code": "130403", 
        "name": "丛台区", 
        "cityCode": "1304", 
        "provinceCode": "13"
    }, 
    {
        "code": "130404", 
        "name": "复兴区", 
        "cityCode": "1304", 
        "provinceCode": "13"
    }, 
    {
        "code": "130406", 
        "name": "峰峰矿区", 
        "cityCode": "1304", 
        "provinceCode": "13"
    }, 
    {
        "code": "130407", 
        "name": "肥乡区", 
        "cityCode": "1304", 
        "provinceCode": "13"
    }, 
    {
        "code": "130408", 
        "name": "永年区", 
        "cityCode": "1304", 
        "provinceCode": "13"
    }, 
    {
        "code": "130423", 
        "name": "临漳县", 
        "cityCode": "1304", 
        "provinceCode": "13"
    }, 
    {
        "code": "130424", 
        "name": "成安县", 
        "cityCode": "1304", 
        "provinceCode": "13"
    }, 
    {
        "code": "130425", 
        "name": "大名县", 
        "cityCode": "1304", 
        "provinceCode": "13"
    }, 
    {
        "code": "130426", 
        "name": "涉县", 
        "cityCode": "1304", 
        "provinceCode": "13"
    }, 
    {
        "code": "130427", 
        "name": "磁县", 
        "cityCode": "1304", 
        "provinceCode": "13"
    }, 
    {
        "code": "130430", 
        "name": "邱县", 
        "cityCode": "1304", 
        "provinceCode": "13"
    }, 
    {
        "code": "130431", 
        "name": "鸡泽县", 
        "cityCode": "1304", 
        "provinceCode": "13"
    }, 
    {
        "code": "130432", 
        "name": "广平县", 
        "cityCode": "1304", 
        "provinceCode": "13"
    }, 
    {
        "code": "130433", 
        "name": "馆陶县", 
        "cityCode": "1304", 
        "provinceCode": "13"
    }, 
    {
        "code": "130434", 
        "name": "魏县", 
        "cityCode": "1304", 
        "provinceCode": "13"
    }, 
    {
        "code": "130435", 
        "name": "曲周县", 
        "cityCode": "1304", 
        "provinceCode": "13"
    }, 
    {
        "code": "130471", 
        "name": "邯郸经济技术开发区", 
        "cityCode": "1304", 
        "provinceCode": "13"
    }, 
    {
        "code": "130473", 
        "name": "邯郸冀南新区", 
        "cityCode": "1304", 
        "provinceCode": "13"
    }, 
    {
        "code": "130481", 
        "name": "武安市", 
        "cityCode": "1304", 
        "provinceCode": "13"
    }, 
    {
        "code": "130502", 
        "name": "桥东区", 
        "cityCode": "1305", 
        "provinceCode": "13"
    }, 
    {
        "code": "130503", 
        "name": "桥西区", 
        "cityCode": "1305", 
        "provinceCode": "13"
    }, 
    {
        "code": "130521", 
        "name": "邢台县", 
        "cityCode": "1305", 
        "provinceCode": "13"
    }, 
    {
        "code": "130522", 
        "name": "临城县", 
        "cityCode": "1305", 
        "provinceCode": "13"
    }, 
    {
        "code": "130523", 
        "name": "内丘县", 
        "cityCode": "1305", 
        "provinceCode": "13"
    }, 
    {
        "code": "130524", 
        "name": "柏乡县", 
        "cityCode": "1305", 
        "provinceCode": "13"
    }, 
    {
        "code": "130525", 
        "name": "隆尧县", 
        "cityCode": "1305", 
        "provinceCode": "13"
    }, 
    {
        "code": "130526", 
        "name": "任县", 
        "cityCode": "1305", 
        "provinceCode": "13"
    }, 
    {
        "code": "130527", 
        "name": "南和县", 
        "cityCode": "1305", 
        "provinceCode": "13"
    }, 
    {
        "code": "130528", 
        "name": "宁晋县", 
        "cityCode": "1305", 
        "provinceCode": "13"
    }, 
    {
        "code": "130529", 
        "name": "巨鹿县", 
        "cityCode": "1305", 
        "provinceCode": "13"
    }, 
    {
        "code": "130530", 
        "name": "新河县", 
        "cityCode": "1305", 
        "provinceCode": "13"
    }, 
    {
        "code": "130531", 
        "name": "广宗县", 
        "cityCode": "1305", 
        "provinceCode": "13"
    }, 
    {
        "code": "130532", 
        "name": "平乡县", 
        "cityCode": "1305", 
        "provinceCode": "13"
    }, 
    {
        "code": "130533", 
        "name": "威县", 
        "cityCode": "1305", 
        "provinceCode": "13"
    }, 
    {
        "code": "130534", 
        "name": "清河县", 
        "cityCode": "1305", 
        "provinceCode": "13"
    }, 
    {
        "code": "130535", 
        "name": "临西县", 
        "cityCode": "1305", 
        "provinceCode": "13"
    }, 
    {
        "code": "130571", 
        "name": "河北邢台经济开发区", 
        "cityCode": "1305", 
        "provinceCode": "13"
    }, 
    {
        "code": "130581", 
        "name": "南宫市", 
        "cityCode": "1305", 
        "provinceCode": "13"
    }, 
    {
        "code": "130582", 
        "name": "沙河市", 
        "cityCode": "1305", 
        "provinceCode": "13"
    }, 
    {
        "code": "130602", 
        "name": "竞秀区", 
        "cityCode": "1306", 
        "provinceCode": "13"
    }, 
    {
        "code": "130606", 
        "name": "莲池区", 
        "cityCode": "1306", 
        "provinceCode": "13"
    }, 
    {
        "code": "130607", 
        "name": "满城区", 
        "cityCode": "1306", 
        "provinceCode": "13"
    }, 
    {
        "code": "130608", 
        "name": "清苑区", 
        "cityCode": "1306", 
        "provinceCode": "13"
    }, 
    {
        "code": "130609", 
        "name": "徐水区", 
        "cityCode": "1306", 
        "provinceCode": "13"
    }, 
    {
        "code": "130623", 
        "name": "涞水县", 
        "cityCode": "1306", 
        "provinceCode": "13"
    }, 
    {
        "code": "130624", 
        "name": "阜平县", 
        "cityCode": "1306", 
        "provinceCode": "13"
    }, 
    {
        "code": "130626", 
        "name": "定兴县", 
        "cityCode": "1306", 
        "provinceCode": "13"
    }, 
    {
        "code": "130627", 
        "name": "唐县", 
        "cityCode": "1306", 
        "provinceCode": "13"
    }, 
    {
        "code": "130628", 
        "name": "高阳县", 
        "cityCode": "1306", 
        "provinceCode": "13"
    }, 
    {
        "code": "130629", 
        "name": "容城县", 
        "cityCode": "1306", 
        "provinceCode": "13"
    }, 
    {
        "code": "130630", 
        "name": "涞源县", 
        "cityCode": "1306", 
        "provinceCode": "13"
    }, 
    {
        "code": "130631", 
        "name": "望都县", 
        "cityCode": "1306", 
        "provinceCode": "13"
    }, 
    {
        "code": "130632", 
        "name": "安新县", 
        "cityCode": "1306", 
        "provinceCode": "13"
    }, 
    {
        "code": "130633", 
        "name": "易县", 
        "cityCode": "1306", 
        "provinceCode": "13"
    }, 
    {
        "code": "130634", 
        "name": "曲阳县", 
        "cityCode": "1306", 
        "provinceCode": "13"
    }, 
    {
        "code": "130635", 
        "name": "蠡县", 
        "cityCode": "1306", 
        "provinceCode": "13"
    }, 
    {
        "code": "130636", 
        "name": "顺平县", 
        "cityCode": "1306", 
        "provinceCode": "13"
    }, 
    {
        "code": "130637", 
        "name": "博野县", 
        "cityCode": "1306", 
        "provinceCode": "13"
    }, 
    {
        "code": "130638", 
        "name": "雄县", 
        "cityCode": "1306", 
        "provinceCode": "13"
    }, 
    {
        "code": "130671", 
        "name": "保定高新技术产业开发区", 
        "cityCode": "1306", 
        "provinceCode": "13"
    }, 
    {
        "code": "130672", 
        "name": "保定白沟新城", 
        "cityCode": "1306", 
        "provinceCode": "13"
    }, 
    {
        "code": "130681", 
        "name": "涿州市", 
        "cityCode": "1306", 
        "provinceCode": "13"
    }, 
    {
        "code": "130682", 
        "name": "定州市", 
        "cityCode": "1306", 
        "provinceCode": "13"
    }, 
    {
        "code": "130683", 
        "name": "安国市", 
        "cityCode": "1306", 
        "provinceCode": "13"
    }, 
    {
        "code": "130684", 
        "name": "高碑店市", 
        "cityCode": "1306", 
        "provinceCode": "13"
    }, 
    {
        "code": "130702", 
        "name": "桥东区", 
        "cityCode": "1307", 
        "provinceCode": "13"
    }, 
    {
        "code": "130703", 
        "name": "桥西区", 
        "cityCode": "1307", 
        "provinceCode": "13"
    }, 
    {
        "code": "130705", 
        "name": "宣化区", 
        "cityCode": "1307", 
        "provinceCode": "13"
    }, 
    {
        "code": "130706", 
        "name": "下花园区", 
        "cityCode": "1307", 
        "provinceCode": "13"
    }, 
    {
        "code": "130708", 
        "name": "万全区", 
        "cityCode": "1307", 
        "provinceCode": "13"
    }, 
    {
        "code": "130709", 
        "name": "崇礼区", 
        "cityCode": "1307", 
        "provinceCode": "13"
    }, 
    {
        "code": "130722", 
        "name": "张北县", 
        "cityCode": "1307", 
        "provinceCode": "13"
    }, 
    {
        "code": "130723", 
        "name": "康保县", 
        "cityCode": "1307", 
        "provinceCode": "13"
    }, 
    {
        "code": "130724", 
        "name": "沽源县", 
        "cityCode": "1307", 
        "provinceCode": "13"
    }, 
    {
        "code": "130725", 
        "name": "尚义县", 
        "cityCode": "1307", 
        "provinceCode": "13"
    }, 
    {
        "code": "130726", 
        "name": "蔚县", 
        "cityCode": "1307", 
        "provinceCode": "13"
    }, 
    {
        "code": "130727", 
        "name": "阳原县", 
        "cityCode": "1307", 
        "provinceCode": "13"
    }, 
    {
        "code": "130728", 
        "name": "怀安县", 
        "cityCode": "1307", 
        "provinceCode": "13"
    }, 
    {
        "code": "130730", 
        "name": "怀来县", 
        "cityCode": "1307", 
        "provinceCode": "13"
    }, 
    {
        "code": "130731", 
        "name": "涿鹿县", 
        "cityCode": "1307", 
        "provinceCode": "13"
    }, 
    {
        "code": "130732", 
        "name": "赤城县", 
        "cityCode": "1307", 
        "provinceCode": "13"
    }, 
    {
        "code": "130771", 
        "name": "张家口市高新技术产业开发区", 
        "cityCode": "1307", 
        "provinceCode": "13"
    }, 
    {
        "code": "130772", 
        "name": "张家口市察北管理区", 
        "cityCode": "1307", 
        "provinceCode": "13"
    }, 
    {
        "code": "130773", 
        "name": "张家口市塞北管理区", 
        "cityCode": "1307", 
        "provinceCode": "13"
    }, 
    {
        "code": "130802", 
        "name": "双桥区", 
        "cityCode": "1308", 
        "provinceCode": "13"
    }, 
    {
        "code": "130803", 
        "name": "双滦区", 
        "cityCode": "1308", 
        "provinceCode": "13"
    }, 
    {
        "code": "130804", 
        "name": "鹰手营子矿区", 
        "cityCode": "1308", 
        "provinceCode": "13"
    }, 
    {
        "code": "130821", 
        "name": "承德县", 
        "cityCode": "1308", 
        "provinceCode": "13"
    }, 
    {
        "code": "130822", 
        "name": "兴隆县", 
        "cityCode": "1308", 
        "provinceCode": "13"
    }, 
    {
        "code": "130824", 
        "name": "滦平县", 
        "cityCode": "1308", 
        "provinceCode": "13"
    }, 
    {
        "code": "130825", 
        "name": "隆化县", 
        "cityCode": "1308", 
        "provinceCode": "13"
    }, 
    {
        "code": "130826", 
        "name": "丰宁满族自治县", 
        "cityCode": "1308", 
        "provinceCode": "13"
    }, 
    {
        "code": "130827", 
        "name": "宽城满族自治县", 
        "cityCode": "1308", 
        "provinceCode": "13"
    }, 
    {
        "code": "130828", 
        "name": "围场满族蒙古族自治县", 
        "cityCode": "1308", 
        "provinceCode": "13"
    }, 
    {
        "code": "130871", 
        "name": "承德高新技术产业开发区", 
        "cityCode": "1308", 
        "provinceCode": "13"
    }, 
    {
        "code": "130881", 
        "name": "平泉市", 
        "cityCode": "1308", 
        "provinceCode": "13"
    }, 
    {
        "code": "130902", 
        "name": "新华区", 
        "cityCode": "1309", 
        "provinceCode": "13"
    }, 
    {
        "code": "130903", 
        "name": "运河区", 
        "cityCode": "1309", 
        "provinceCode": "13"
    }, 
    {
        "code": "130921", 
        "name": "沧县", 
        "cityCode": "1309", 
        "provinceCode": "13"
    }, 
    {
        "code": "130922", 
        "name": "青县", 
        "cityCode": "1309", 
        "provinceCode": "13"
    }, 
    {
        "code": "130923", 
        "name": "东光县", 
        "cityCode": "1309", 
        "provinceCode": "13"
    }, 
    {
        "code": "130924", 
        "name": "海兴县", 
        "cityCode": "1309", 
        "provinceCode": "13"
    }, 
    {
        "code": "130925", 
        "name": "盐山县", 
        "cityCode": "1309", 
        "provinceCode": "13"
    }, 
    {
        "code": "130926", 
        "name": "肃宁县", 
        "cityCode": "1309", 
        "provinceCode": "13"
    }, 
    {
        "code": "130927", 
        "name": "南皮县", 
        "cityCode": "1309", 
        "provinceCode": "13"
    }, 
    {
        "code": "130928", 
        "name": "吴桥县", 
        "cityCode": "1309", 
        "provinceCode": "13"
    }, 
    {
        "code": "130929", 
        "name": "献县", 
        "cityCode": "1309", 
        "provinceCode": "13"
    }, 
    {
        "code": "130930", 
        "name": "孟村回族自治县", 
        "cityCode": "1309", 
        "provinceCode": "13"
    }, 
    {
        "code": "130971", 
        "name": "河北沧州经济开发区", 
        "cityCode": "1309", 
        "provinceCode": "13"
    }, 
    {
        "code": "130972", 
        "name": "沧州高新技术产业开发区", 
        "cityCode": "1309", 
        "provinceCode": "13"
    }, 
    {
        "code": "130973", 
        "name": "沧州渤海新区", 
        "cityCode": "1309", 
        "provinceCode": "13"
    }, 
    {
        "code": "130981", 
        "name": "泊头市", 
        "cityCode": "1309", 
        "provinceCode": "13"
    }, 
    {
        "code": "130982", 
        "name": "任丘市", 
        "cityCode": "1309", 
        "provinceCode": "13"
    }, 
    {
        "code": "130983", 
        "name": "黄骅市", 
        "cityCode": "1309", 
        "provinceCode": "13"
    }, 
    {
        "code": "130984", 
        "name": "河间市", 
        "cityCode": "1309", 
        "provinceCode": "13"
    }, 
    {
        "code": "131002", 
        "name": "安次区", 
        "cityCode": "1310", 
        "provinceCode": "13"
    }, 
    {
        "code": "131003", 
        "name": "广阳区", 
        "cityCode": "1310", 
        "provinceCode": "13"
    }, 
    {
        "code": "131022", 
        "name": "固安县", 
        "cityCode": "1310", 
        "provinceCode": "13"
    }, 
    {
        "code": "131023", 
        "name": "永清县", 
        "cityCode": "1310", 
        "provinceCode": "13"
    }, 
    {
        "code": "131024", 
        "name": "香河县", 
        "cityCode": "1310", 
        "provinceCode": "13"
    }, 
    {
        "code": "131025", 
        "name": "大城县", 
        "cityCode": "1310", 
        "provinceCode": "13"
    }, 
    {
        "code": "131026", 
        "name": "文安县", 
        "cityCode": "1310", 
        "provinceCode": "13"
    }, 
    {
        "code": "131028", 
        "name": "大厂回族自治县", 
        "cityCode": "1310", 
        "provinceCode": "13"
    }, 
    {
        "code": "131071", 
        "name": "廊坊经济技术开发区", 
        "cityCode": "1310", 
        "provinceCode": "13"
    }, 
    {
        "code": "131081", 
        "name": "霸州市", 
        "cityCode": "1310", 
        "provinceCode": "13"
    }, 
    {
        "code": "131082", 
        "name": "三河市", 
        "cityCode": "1310", 
        "provinceCode": "13"
    }, 
    {
        "code": "131102", 
        "name": "桃城区", 
        "cityCode": "1311", 
        "provinceCode": "13"
    }, 
    {
        "code": "131103", 
        "name": "冀州区", 
        "cityCode": "1311", 
        "provinceCode": "13"
    }, 
    {
        "code": "131121", 
        "name": "枣强县", 
        "cityCode": "1311", 
        "provinceCode": "13"
    }, 
    {
        "code": "131122", 
        "name": "武邑县", 
        "cityCode": "1311", 
        "provinceCode": "13"
    }, 
    {
        "code": "131123", 
        "name": "武强县", 
        "cityCode": "1311", 
        "provinceCode": "13"
    }, 
    {
        "code": "131124", 
        "name": "饶阳县", 
        "cityCode": "1311", 
        "provinceCode": "13"
    }, 
    {
        "code": "131125", 
        "name": "安平县", 
        "cityCode": "1311", 
        "provinceCode": "13"
    }, 
    {
        "code": "131126", 
        "name": "故城县", 
        "cityCode": "1311", 
        "provinceCode": "13"
    }, 
    {
        "code": "131127", 
        "name": "景县", 
        "cityCode": "1311", 
        "provinceCode": "13"
    }, 
    {
        "code": "131128", 
        "name": "阜城县", 
        "cityCode": "1311", 
        "provinceCode": "13"
    }, 
    {
        "code": "131171", 
        "name": "河北衡水经济开发区", 
        "cityCode": "1311", 
        "provinceCode": "13"
    }, 
    {
        "code": "131172", 
        "name": "衡水滨湖新区", 
        "cityCode": "1311", 
        "provinceCode": "13"
    }, 
    {
        "code": "131182", 
        "name": "深州市", 
        "cityCode": "1311", 
        "provinceCode": "13"
    }, 
    {
        "code": "140105", 
        "name": "小店区", 
        "cityCode": "1401", 
        "provinceCode": "14"
    }, 
    {
        "code": "140106", 
        "name": "迎泽区", 
        "cityCode": "1401", 
        "provinceCode": "14"
    }, 
    {
        "code": "140107", 
        "name": "杏花岭区", 
        "cityCode": "1401", 
        "provinceCode": "14"
    }, 
    {
        "code": "140108", 
        "name": "尖草坪区", 
        "cityCode": "1401", 
        "provinceCode": "14"
    }, 
    {
        "code": "140109", 
        "name": "万柏林区", 
        "cityCode": "1401", 
        "provinceCode": "14"
    }, 
    {
        "code": "140110", 
        "name": "晋源区", 
        "cityCode": "1401", 
        "provinceCode": "14"
    }, 
    {
        "code": "140121", 
        "name": "清徐县", 
        "cityCode": "1401", 
        "provinceCode": "14"
    }, 
    {
        "code": "140122", 
        "name": "阳曲县", 
        "cityCode": "1401", 
        "provinceCode": "14"
    }, 
    {
        "code": "140123", 
        "name": "娄烦县", 
        "cityCode": "1401", 
        "provinceCode": "14"
    }, 
    {
        "code": "140171", 
        "name": "山西转型综合改革示范区", 
        "cityCode": "1401", 
        "provinceCode": "14"
    }, 
    {
        "code": "140181", 
        "name": "古交市", 
        "cityCode": "1401", 
        "provinceCode": "14"
    }, 
    {
        "code": "140202", 
        "name": "城区", 
        "cityCode": "1402", 
        "provinceCode": "14"
    }, 
    {
        "code": "140203", 
        "name": "矿区", 
        "cityCode": "1402", 
        "provinceCode": "14"
    }, 
    {
        "code": "140211", 
        "name": "南郊区", 
        "cityCode": "1402", 
        "provinceCode": "14"
    }, 
    {
        "code": "140212", 
        "name": "新荣区", 
        "cityCode": "1402", 
        "provinceCode": "14"
    }, 
    {
        "code": "140221", 
        "name": "阳高县", 
        "cityCode": "1402", 
        "provinceCode": "14"
    }, 
    {
        "code": "140222", 
        "name": "天镇县", 
        "cityCode": "1402", 
        "provinceCode": "14"
    }, 
    {
        "code": "140223", 
        "name": "广灵县", 
        "cityCode": "1402", 
        "provinceCode": "14"
    }, 
    {
        "code": "140224", 
        "name": "灵丘县", 
        "cityCode": "1402", 
        "provinceCode": "14"
    }, 
    {
        "code": "140225", 
        "name": "浑源县", 
        "cityCode": "1402", 
        "provinceCode": "14"
    }, 
    {
        "code": "140226", 
        "name": "左云县", 
        "cityCode": "1402", 
        "provinceCode": "14"
    }, 
    {
        "code": "140227", 
        "name": "大同县", 
        "cityCode": "1402", 
        "provinceCode": "14"
    }, 
    {
        "code": "140271", 
        "name": "山西大同经济开发区", 
        "cityCode": "1402", 
        "provinceCode": "14"
    }, 
    {
        "code": "140302", 
        "name": "城区", 
        "cityCode": "1403", 
        "provinceCode": "14"
    }, 
    {
        "code": "140303", 
        "name": "矿区", 
        "cityCode": "1403", 
        "provinceCode": "14"
    }, 
    {
        "code": "140311", 
        "name": "郊区", 
        "cityCode": "1403", 
        "provinceCode": "14"
    }, 
    {
        "code": "140321", 
        "name": "平定县", 
        "cityCode": "1403", 
        "provinceCode": "14"
    }, 
    {
        "code": "140322", 
        "name": "盂县", 
        "cityCode": "1403", 
        "provinceCode": "14"
    }, 
    {
        "code": "140371", 
        "name": "山西阳泉经济开发区", 
        "cityCode": "1403", 
        "provinceCode": "14"
    }, 
    {
        "code": "140402", 
        "name": "城区", 
        "cityCode": "1404", 
        "provinceCode": "14"
    }, 
    {
        "code": "140411", 
        "name": "郊区", 
        "cityCode": "1404", 
        "provinceCode": "14"
    }, 
    {
        "code": "140421", 
        "name": "长治县", 
        "cityCode": "1404", 
        "provinceCode": "14"
    }, 
    {
        "code": "140423", 
        "name": "襄垣县", 
        "cityCode": "1404", 
        "provinceCode": "14"
    }, 
    {
        "code": "140424", 
        "name": "屯留县", 
        "cityCode": "1404", 
        "provinceCode": "14"
    }, 
    {
        "code": "140425", 
        "name": "平顺县", 
        "cityCode": "1404", 
        "provinceCode": "14"
    }, 
    {
        "code": "140426", 
        "name": "黎城县", 
        "cityCode": "1404", 
        "provinceCode": "14"
    }, 
    {
        "code": "140427", 
        "name": "壶关县", 
        "cityCode": "1404", 
        "provinceCode": "14"
    }, 
    {
        "code": "140428", 
        "name": "长子县", 
        "cityCode": "1404", 
        "provinceCode": "14"
    }, 
    {
        "code": "140429", 
        "name": "武乡县", 
        "cityCode": "1404", 
        "provinceCode": "14"
    }, 
    {
        "code": "140430", 
        "name": "沁县", 
        "cityCode": "1404", 
        "provinceCode": "14"
    }, 
    {
        "code": "140431", 
        "name": "沁源县", 
        "cityCode": "1404", 
        "provinceCode": "14"
    }, 
    {
        "code": "140471", 
        "name": "山西长治高新技术产业园区", 
        "cityCode": "1404", 
        "provinceCode": "14"
    }, 
    {
        "code": "140481", 
        "name": "潞城市", 
        "cityCode": "1404", 
        "provinceCode": "14"
    }, 
    {
        "code": "140502", 
        "name": "城区", 
        "cityCode": "1405", 
        "provinceCode": "14"
    }, 
    {
        "code": "140521", 
        "name": "沁水县", 
        "cityCode": "1405", 
        "provinceCode": "14"
    }, 
    {
        "code": "140522", 
        "name": "阳城县", 
        "cityCode": "1405", 
        "provinceCode": "14"
    }, 
    {
        "code": "140524", 
        "name": "陵川县", 
        "cityCode": "1405", 
        "provinceCode": "14"
    }, 
    {
        "code": "140525", 
        "name": "泽州县", 
        "cityCode": "1405", 
        "provinceCode": "14"
    }, 
    {
        "code": "140581", 
        "name": "高平市", 
        "cityCode": "1405", 
        "provinceCode": "14"
    }, 
    {
        "code": "140602", 
        "name": "朔城区", 
        "cityCode": "1406", 
        "provinceCode": "14"
    }, 
    {
        "code": "140603", 
        "name": "平鲁区", 
        "cityCode": "1406", 
        "provinceCode": "14"
    }, 
    {
        "code": "140621", 
        "name": "山阴县", 
        "cityCode": "1406", 
        "provinceCode": "14"
    }, 
    {
        "code": "140622", 
        "name": "应县", 
        "cityCode": "1406", 
        "provinceCode": "14"
    }, 
    {
        "code": "140623", 
        "name": "右玉县", 
        "cityCode": "1406", 
        "provinceCode": "14"
    }, 
    {
        "code": "140624", 
        "name": "怀仁县", 
        "cityCode": "1406", 
        "provinceCode": "14"
    }, 
    {
        "code": "140671", 
        "name": "山西朔州经济开发区", 
        "cityCode": "1406", 
        "provinceCode": "14"
    }, 
    {
        "code": "140702", 
        "name": "榆次区", 
        "cityCode": "1407", 
        "provinceCode": "14"
    }, 
    {
        "code": "140721", 
        "name": "榆社县", 
        "cityCode": "1407", 
        "provinceCode": "14"
    }, 
    {
        "code": "140722", 
        "name": "左权县", 
        "cityCode": "1407", 
        "provinceCode": "14"
    }, 
    {
        "code": "140723", 
        "name": "和顺县", 
        "cityCode": "1407", 
        "provinceCode": "14"
    }, 
    {
        "code": "140724", 
        "name": "昔阳县", 
        "cityCode": "1407", 
        "provinceCode": "14"
    }, 
    {
        "code": "140725", 
        "name": "寿阳县", 
        "cityCode": "1407", 
        "provinceCode": "14"
    }, 
    {
        "code": "140726", 
        "name": "太谷县", 
        "cityCode": "1407", 
        "provinceCode": "14"
    }, 
    {
        "code": "140727", 
        "name": "祁县", 
        "cityCode": "1407", 
        "provinceCode": "14"
    }, 
    {
        "code": "140728", 
        "name": "平遥县", 
        "cityCode": "1407", 
        "provinceCode": "14"
    }, 
    {
        "code": "140729", 
        "name": "灵石县", 
        "cityCode": "1407", 
        "provinceCode": "14"
    }, 
    {
        "code": "140781", 
        "name": "介休市", 
        "cityCode": "1407", 
        "provinceCode": "14"
    }, 
    {
        "code": "140802", 
        "name": "盐湖区", 
        "cityCode": "1408", 
        "provinceCode": "14"
    }, 
    {
        "code": "140821", 
        "name": "临猗县", 
        "cityCode": "1408", 
        "provinceCode": "14"
    }, 
    {
        "code": "140822", 
        "name": "万荣县", 
        "cityCode": "1408", 
        "provinceCode": "14"
    }, 
    {
        "code": "140823", 
        "name": "闻喜县", 
        "cityCode": "1408", 
        "provinceCode": "14"
    }, 
    {
        "code": "140824", 
        "name": "稷山县", 
        "cityCode": "1408", 
        "provinceCode": "14"
    }, 
    {
        "code": "140825", 
        "name": "新绛县", 
        "cityCode": "1408", 
        "provinceCode": "14"
    }, 
    {
        "code": "140826", 
        "name": "绛县", 
        "cityCode": "1408", 
        "provinceCode": "14"
    }, 
    {
        "code": "140827", 
        "name": "垣曲县", 
        "cityCode": "1408", 
        "provinceCode": "14"
    }, 
    {
        "code": "140828", 
        "name": "夏县", 
        "cityCode": "1408", 
        "provinceCode": "14"
    }, 
    {
        "code": "140829", 
        "name": "平陆县", 
        "cityCode": "1408", 
        "provinceCode": "14"
    }, 
    {
        "code": "140830", 
        "name": "芮城县", 
        "cityCode": "1408", 
        "provinceCode": "14"
    }, 
    {
        "code": "140881", 
        "name": "永济市", 
        "cityCode": "1408", 
        "provinceCode": "14"
    }, 
    {
        "code": "140882", 
        "name": "河津市", 
        "cityCode": "1408", 
        "provinceCode": "14"
    }, 
    {
        "code": "140902", 
        "name": "忻府区", 
        "cityCode": "1409", 
        "provinceCode": "14"
    }, 
    {
        "code": "140921", 
        "name": "定襄县", 
        "cityCode": "1409", 
        "provinceCode": "14"
    }, 
    {
        "code": "140922", 
        "name": "五台县", 
        "cityCode": "1409", 
        "provinceCode": "14"
    }, 
    {
        "code": "140923", 
        "name": "代县", 
        "cityCode": "1409", 
        "provinceCode": "14"
    }, 
    {
        "code": "140924", 
        "name": "繁峙县", 
        "cityCode": "1409", 
        "provinceCode": "14"
    }, 
    {
        "code": "140925", 
        "name": "宁武县", 
        "cityCode": "1409", 
        "provinceCode": "14"
    }, 
    {
        "code": "140926", 
        "name": "静乐县", 
        "cityCode": "1409", 
        "provinceCode": "14"
    }, 
    {
        "code": "140927", 
        "name": "神池县", 
        "cityCode": "1409", 
        "provinceCode": "14"
    }, 
    {
        "code": "140928", 
        "name": "五寨县", 
        "cityCode": "1409", 
        "provinceCode": "14"
    }, 
    {
        "code": "140929", 
        "name": "岢岚县", 
        "cityCode": "1409", 
        "provinceCode": "14"
    }, 
    {
        "code": "140930", 
        "name": "河曲县", 
        "cityCode": "1409", 
        "provinceCode": "14"
    }, 
    {
        "code": "140931", 
        "name": "保德县", 
        "cityCode": "1409", 
        "provinceCode": "14"
    }, 
    {
        "code": "140932", 
        "name": "偏关县", 
        "cityCode": "1409", 
        "provinceCode": "14"
    }, 
    {
        "code": "140971", 
        "name": "五台山风景名胜区", 
        "cityCode": "1409", 
        "provinceCode": "14"
    }, 
    {
        "code": "140981", 
        "name": "原平市", 
        "cityCode": "1409", 
        "provinceCode": "14"
    }, 
    {
        "code": "141002", 
        "name": "尧都区", 
        "cityCode": "1410", 
        "provinceCode": "14"
    }, 
    {
        "code": "141021", 
        "name": "曲沃县", 
        "cityCode": "1410", 
        "provinceCode": "14"
    }, 
    {
        "code": "141022", 
        "name": "翼城县", 
        "cityCode": "1410", 
        "provinceCode": "14"
    }, 
    {
        "code": "141023", 
        "name": "襄汾县", 
        "cityCode": "1410", 
        "provinceCode": "14"
    }, 
    {
        "code": "141024", 
        "name": "洪洞县", 
        "cityCode": "1410", 
        "provinceCode": "14"
    }, 
    {
        "code": "141025", 
        "name": "古县", 
        "cityCode": "1410", 
        "provinceCode": "14"
    }, 
    {
        "code": "141026", 
        "name": "安泽县", 
        "cityCode": "1410", 
        "provinceCode": "14"
    }, 
    {
        "code": "141027", 
        "name": "浮山县", 
        "cityCode": "1410", 
        "provinceCode": "14"
    }, 
    {
        "code": "141028", 
        "name": "吉县", 
        "cityCode": "1410", 
        "provinceCode": "14"
    }, 
    {
        "code": "141029", 
        "name": "乡宁县", 
        "cityCode": "1410", 
        "provinceCode": "14"
    }, 
    {
        "code": "141030", 
        "name": "大宁县", 
        "cityCode": "1410", 
        "provinceCode": "14"
    }, 
    {
        "code": "141031", 
        "name": "隰县", 
        "cityCode": "1410", 
        "provinceCode": "14"
    }, 
    {
        "code": "141032", 
        "name": "永和县", 
        "cityCode": "1410", 
        "provinceCode": "14"
    }, 
    {
        "code": "141033", 
        "name": "蒲县", 
        "cityCode": "1410", 
        "provinceCode": "14"
    }, 
    {
        "code": "141034", 
        "name": "汾西县", 
        "cityCode": "1410", 
        "provinceCode": "14"
    }, 
    {
        "code": "141081", 
        "name": "侯马市", 
        "cityCode": "1410", 
        "provinceCode": "14"
    }, 
    {
        "code": "141082", 
        "name": "霍州市", 
        "cityCode": "1410", 
        "provinceCode": "14"
    }, 
    {
        "code": "141102", 
        "name": "离石区", 
        "cityCode": "1411", 
        "provinceCode": "14"
    }, 
    {
        "code": "141121", 
        "name": "文水县", 
        "cityCode": "1411", 
        "provinceCode": "14"
    }, 
    {
        "code": "141122", 
        "name": "交城县", 
        "cityCode": "1411", 
        "provinceCode": "14"
    }, 
    {
        "code": "141123", 
        "name": "兴县", 
        "cityCode": "1411", 
        "provinceCode": "14"
    }, 
    {
        "code": "141124", 
        "name": "临县", 
        "cityCode": "1411", 
        "provinceCode": "14"
    }, 
    {
        "code": "141125", 
        "name": "柳林县", 
        "cityCode": "1411", 
        "provinceCode": "14"
    }, 
    {
        "code": "141126", 
        "name": "石楼县", 
        "cityCode": "1411", 
        "provinceCode": "14"
    }, 
    {
        "code": "141127", 
        "name": "岚县", 
        "cityCode": "1411", 
        "provinceCode": "14"
    }, 
    {
        "code": "141128", 
        "name": "方山县", 
        "cityCode": "1411", 
        "provinceCode": "14"
    }, 
    {
        "code": "141129", 
        "name": "中阳县", 
        "cityCode": "1411", 
        "provinceCode": "14"
    }, 
    {
        "code": "141130", 
        "name": "交口县", 
        "cityCode": "1411", 
        "provinceCode": "14"
    }, 
    {
        "code": "141181", 
        "name": "孝义市", 
        "cityCode": "1411", 
        "provinceCode": "14"
    }, 
    {
        "code": "141182", 
        "name": "汾阳市", 
        "cityCode": "1411", 
        "provinceCode": "14"
    }, 
    {
        "code": "150102", 
        "name": "新城区", 
        "cityCode": "1501", 
        "provinceCode": "15"
    }, 
    {
        "code": "150103", 
        "name": "回民区", 
        "cityCode": "1501", 
        "provinceCode": "15"
    }, 
    {
        "code": "150104", 
        "name": "玉泉区", 
        "cityCode": "1501", 
        "provinceCode": "15"
    }, 
    {
        "code": "150105", 
        "name": "赛罕区", 
        "cityCode": "1501", 
        "provinceCode": "15"
    }, 
    {
        "code": "150121", 
        "name": "土默特左旗", 
        "cityCode": "1501", 
        "provinceCode": "15"
    }, 
    {
        "code": "150122", 
        "name": "托克托县", 
        "cityCode": "1501", 
        "provinceCode": "15"
    }, 
    {
        "code": "150123", 
        "name": "和林格尔县", 
        "cityCode": "1501", 
        "provinceCode": "15"
    }, 
    {
        "code": "150124", 
        "name": "清水河县", 
        "cityCode": "1501", 
        "provinceCode": "15"
    }, 
    {
        "code": "150125", 
        "name": "武川县", 
        "cityCode": "1501", 
        "provinceCode": "15"
    }, 
    {
        "code": "150171", 
        "name": "呼和浩特金海工业园区", 
        "cityCode": "1501", 
        "provinceCode": "15"
    }, 
    {
        "code": "150172", 
        "name": "呼和浩特经济技术开发区", 
        "cityCode": "1501", 
        "provinceCode": "15"
    }, 
    {
        "code": "150202", 
        "name": "东河区", 
        "cityCode": "1502", 
        "provinceCode": "15"
    }, 
    {
        "code": "150203", 
        "name": "昆都仑区", 
        "cityCode": "1502", 
        "provinceCode": "15"
    }, 
    {
        "code": "150204", 
        "name": "青山区", 
        "cityCode": "1502", 
        "provinceCode": "15"
    }, 
    {
        "code": "150205", 
        "name": "石拐区", 
        "cityCode": "1502", 
        "provinceCode": "15"
    }, 
    {
        "code": "150206", 
        "name": "白云鄂博矿区", 
        "cityCode": "1502", 
        "provinceCode": "15"
    }, 
    {
        "code": "150207", 
        "name": "九原区", 
        "cityCode": "1502", 
        "provinceCode": "15"
    }, 
    {
        "code": "150221", 
        "name": "土默特右旗", 
        "cityCode": "1502", 
        "provinceCode": "15"
    }, 
    {
        "code": "150222", 
        "name": "固阳县", 
        "cityCode": "1502", 
        "provinceCode": "15"
    }, 
    {
        "code": "150223", 
        "name": "达尔罕茂明安联合旗", 
        "cityCode": "1502", 
        "provinceCode": "15"
    }, 
    {
        "code": "150271", 
        "name": "包头稀土高新技术产业开发区", 
        "cityCode": "1502", 
        "provinceCode": "15"
    }, 
    {
        "code": "150302", 
        "name": "海勃湾区", 
        "cityCode": "1503", 
        "provinceCode": "15"
    }, 
    {
        "code": "150303", 
        "name": "海南区", 
        "cityCode": "1503", 
        "provinceCode": "15"
    }, 
    {
        "code": "150304", 
        "name": "乌达区", 
        "cityCode": "1503", 
        "provinceCode": "15"
    }, 
    {
        "code": "150402", 
        "name": "红山区", 
        "cityCode": "1504", 
        "provinceCode": "15"
    }, 
    {
        "code": "150403", 
        "name": "元宝山区", 
        "cityCode": "1504", 
        "provinceCode": "15"
    }, 
    {
        "code": "150404", 
        "name": "松山区", 
        "cityCode": "1504", 
        "provinceCode": "15"
    }, 
    {
        "code": "150421", 
        "name": "阿鲁科尔沁旗", 
        "cityCode": "1504", 
        "provinceCode": "15"
    }, 
    {
        "code": "150422", 
        "name": "巴林左旗", 
        "cityCode": "1504", 
        "provinceCode": "15"
    }, 
    {
        "code": "150423", 
        "name": "巴林右旗", 
        "cityCode": "1504", 
        "provinceCode": "15"
    }, 
    {
        "code": "150424", 
        "name": "林西县", 
        "cityCode": "1504", 
        "provinceCode": "15"
    }, 
    {
        "code": "150425", 
        "name": "克什克腾旗", 
        "cityCode": "1504", 
        "provinceCode": "15"
    }, 
    {
        "code": "150426", 
        "name": "翁牛特旗", 
        "cityCode": "1504", 
        "provinceCode": "15"
    }, 
    {
        "code": "150428", 
        "name": "喀喇沁旗", 
        "cityCode": "1504", 
        "provinceCode": "15"
    }, 
    {
        "code": "150429", 
        "name": "宁城县", 
        "cityCode": "1504", 
        "provinceCode": "15"
    }, 
    {
        "code": "150430", 
        "name": "敖汉旗", 
        "cityCode": "1504", 
        "provinceCode": "15"
    }, 
    {
        "code": "150502", 
        "name": "科尔沁区", 
        "cityCode": "1505", 
        "provinceCode": "15"
    }, 
    {
        "code": "150521", 
        "name": "科尔沁左翼中旗", 
        "cityCode": "1505", 
        "provinceCode": "15"
    }, 
    {
        "code": "150522", 
        "name": "科尔沁左翼后旗", 
        "cityCode": "1505", 
        "provinceCode": "15"
    }, 
    {
        "code": "150523", 
        "name": "开鲁县", 
        "cityCode": "1505", 
        "provinceCode": "15"
    }, 
    {
        "code": "150524", 
        "name": "库伦旗", 
        "cityCode": "1505", 
        "provinceCode": "15"
    }, 
    {
        "code": "150525", 
        "name": "奈曼旗", 
        "cityCode": "1505", 
        "provinceCode": "15"
    }, 
    {
        "code": "150526", 
        "name": "扎鲁特旗", 
        "cityCode": "1505", 
        "provinceCode": "15"
    }, 
    {
        "code": "150571", 
        "name": "通辽经济技术开发区", 
        "cityCode": "1505", 
        "provinceCode": "15"
    }, 
    {
        "code": "150581", 
        "name": "霍林郭勒市", 
        "cityCode": "1505", 
        "provinceCode": "15"
    }, 
    {
        "code": "150602", 
        "name": "东胜区", 
        "cityCode": "1506", 
        "provinceCode": "15"
    }, 
    {
        "code": "150603", 
        "name": "康巴什区", 
        "cityCode": "1506", 
        "provinceCode": "15"
    }, 
    {
        "code": "150621", 
        "name": "达拉特旗", 
        "cityCode": "1506", 
        "provinceCode": "15"
    }, 
    {
        "code": "150622", 
        "name": "准格尔旗", 
        "cityCode": "1506", 
        "provinceCode": "15"
    }, 
    {
        "code": "150623", 
        "name": "鄂托克前旗", 
        "cityCode": "1506", 
        "provinceCode": "15"
    }, 
    {
        "code": "150624", 
        "name": "鄂托克旗", 
        "cityCode": "1506", 
        "provinceCode": "15"
    }, 
    {
        "code": "150625", 
        "name": "杭锦旗", 
        "cityCode": "1506", 
        "provinceCode": "15"
    }, 
    {
        "code": "150626", 
        "name": "乌审旗", 
        "cityCode": "1506", 
        "provinceCode": "15"
    }, 
    {
        "code": "150627", 
        "name": "伊金霍洛旗", 
        "cityCode": "1506", 
        "provinceCode": "15"
    }, 
    {
        "code": "150702", 
        "name": "海拉尔区", 
        "cityCode": "1507", 
        "provinceCode": "15"
    }, 
    {
        "code": "150703", 
        "name": "扎赉诺尔区", 
        "cityCode": "1507", 
        "provinceCode": "15"
    }, 
    {
        "code": "150721", 
        "name": "阿荣旗", 
        "cityCode": "1507", 
        "provinceCode": "15"
    }, 
    {
        "code": "150722", 
        "name": "莫力达瓦达斡尔族自治旗", 
        "cityCode": "1507", 
        "provinceCode": "15"
    }, 
    {
        "code": "150723", 
        "name": "鄂伦春自治旗", 
        "cityCode": "1507", 
        "provinceCode": "15"
    }, 
    {
        "code": "150724", 
        "name": "鄂温克族自治旗", 
        "cityCode": "1507", 
        "provinceCode": "15"
    }, 
    {
        "code": "150725", 
        "name": "陈巴尔虎旗", 
        "cityCode": "1507", 
        "provinceCode": "15"
    }, 
    {
        "code": "150726", 
        "name": "新巴尔虎左旗", 
        "cityCode": "1507", 
        "provinceCode": "15"
    }, 
    {
        "code": "150727", 
        "name": "新巴尔虎右旗", 
        "cityCode": "1507", 
        "provinceCode": "15"
    }, 
    {
        "code": "150781", 
        "name": "满洲里市", 
        "cityCode": "1507", 
        "provinceCode": "15"
    }, 
    {
        "code": "150782", 
        "name": "牙克石市", 
        "cityCode": "1507", 
        "provinceCode": "15"
    }, 
    {
        "code": "150783", 
        "name": "扎兰屯市", 
        "cityCode": "1507", 
        "provinceCode": "15"
    }, 
    {
        "code": "150784", 
        "name": "额尔古纳市", 
        "cityCode": "1507", 
        "provinceCode": "15"
    }, 
    {
        "code": "150785", 
        "name": "根河市", 
        "cityCode": "1507", 
        "provinceCode": "15"
    }, 
    {
        "code": "150802", 
        "name": "临河区", 
        "cityCode": "1508", 
        "provinceCode": "15"
    }, 
    {
        "code": "150821", 
        "name": "五原县", 
        "cityCode": "1508", 
        "provinceCode": "15"
    }, 
    {
        "code": "150822", 
        "name": "磴口县", 
        "cityCode": "1508", 
        "provinceCode": "15"
    }, 
    {
        "code": "150823", 
        "name": "乌拉特前旗", 
        "cityCode": "1508", 
        "provinceCode": "15"
    }, 
    {
        "code": "150824", 
        "name": "乌拉特中旗", 
        "cityCode": "1508", 
        "provinceCode": "15"
    }, 
    {
        "code": "150825", 
        "name": "乌拉特后旗", 
        "cityCode": "1508", 
        "provinceCode": "15"
    }, 
    {
        "code": "150826", 
        "name": "杭锦后旗", 
        "cityCode": "1508", 
        "provinceCode": "15"
    }, 
    {
        "code": "150902", 
        "name": "集宁区", 
        "cityCode": "1509", 
        "provinceCode": "15"
    }, 
    {
        "code": "150921", 
        "name": "卓资县", 
        "cityCode": "1509", 
        "provinceCode": "15"
    }, 
    {
        "code": "150922", 
        "name": "化德县", 
        "cityCode": "1509", 
        "provinceCode": "15"
    }, 
    {
        "code": "150923", 
        "name": "商都县", 
        "cityCode": "1509", 
        "provinceCode": "15"
    }, 
    {
        "code": "150924", 
        "name": "兴和县", 
        "cityCode": "1509", 
        "provinceCode": "15"
    }, 
    {
        "code": "150925", 
        "name": "凉城县", 
        "cityCode": "1509", 
        "provinceCode": "15"
    }, 
    {
        "code": "150926", 
        "name": "察哈尔右翼前旗", 
        "cityCode": "1509", 
        "provinceCode": "15"
    }, 
    {
        "code": "150927", 
        "name": "察哈尔右翼中旗", 
        "cityCode": "1509", 
        "provinceCode": "15"
    }, 
    {
        "code": "150928", 
        "name": "察哈尔右翼后旗", 
        "cityCode": "1509", 
        "provinceCode": "15"
    }, 
    {
        "code": "150929", 
        "name": "四子王旗", 
        "cityCode": "1509", 
        "provinceCode": "15"
    }, 
    {
        "code": "150981", 
        "name": "丰镇市", 
        "cityCode": "1509", 
        "provinceCode": "15"
    }, 
    {
        "code": "152201", 
        "name": "乌兰浩特市", 
        "cityCode": "1522", 
        "provinceCode": "15"
    }, 
    {
        "code": "152202", 
        "name": "阿尔山市", 
        "cityCode": "1522", 
        "provinceCode": "15"
    }, 
    {
        "code": "152221", 
        "name": "科尔沁右翼前旗", 
        "cityCode": "1522", 
        "provinceCode": "15"
    }, 
    {
        "code": "152222", 
        "name": "科尔沁右翼中旗", 
        "cityCode": "1522", 
        "provinceCode": "15"
    }, 
    {
        "code": "152223", 
        "name": "扎赉特旗", 
        "cityCode": "1522", 
        "provinceCode": "15"
    }, 
    {
        "code": "152224", 
        "name": "突泉县", 
        "cityCode": "1522", 
        "provinceCode": "15"
    }, 
    {
        "code": "152501", 
        "name": "二连浩特市", 
        "cityCode": "1525", 
        "provinceCode": "15"
    }, 
    {
        "code": "152502", 
        "name": "锡林浩特市", 
        "cityCode": "1525", 
        "provinceCode": "15"
    }, 
    {
        "code": "152522", 
        "name": "阿巴嘎旗", 
        "cityCode": "1525", 
        "provinceCode": "15"
    }, 
    {
        "code": "152523", 
        "name": "苏尼特左旗", 
        "cityCode": "1525", 
        "provinceCode": "15"
    }, 
    {
        "code": "152524", 
        "name": "苏尼特右旗", 
        "cityCode": "1525", 
        "provinceCode": "15"
    }, 
    {
        "code": "152525", 
        "name": "东乌珠穆沁旗", 
        "cityCode": "1525", 
        "provinceCode": "15"
    }, 
    {
        "code": "152526", 
        "name": "西乌珠穆沁旗", 
        "cityCode": "1525", 
        "provinceCode": "15"
    }, 
    {
        "code": "152527", 
        "name": "太仆寺旗", 
        "cityCode": "1525", 
        "provinceCode": "15"
    }, 
    {
        "code": "152528", 
        "name": "镶黄旗", 
        "cityCode": "1525", 
        "provinceCode": "15"
    }, 
    {
        "code": "152529", 
        "name": "正镶白旗", 
        "cityCode": "1525", 
        "provinceCode": "15"
    }, 
    {
        "code": "152530", 
        "name": "正蓝旗", 
        "cityCode": "1525", 
        "provinceCode": "15"
    }, 
    {
        "code": "152531", 
        "name": "多伦县", 
        "cityCode": "1525", 
        "provinceCode": "15"
    }, 
    {
        "code": "152571", 
        "name": "乌拉盖管委会", 
        "cityCode": "1525", 
        "provinceCode": "15"
    }, 
    {
        "code": "152921", 
        "name": "阿拉善左旗", 
        "cityCode": "1529", 
        "provinceCode": "15"
    }, 
    {
        "code": "152922", 
        "name": "阿拉善右旗", 
        "cityCode": "1529", 
        "provinceCode": "15"
    }, 
    {
        "code": "152923", 
        "name": "额济纳旗", 
        "cityCode": "1529", 
        "provinceCode": "15"
    }, 
    {
        "code": "152971", 
        "name": "内蒙古阿拉善经济开发区", 
        "cityCode": "1529", 
        "provinceCode": "15"
    }, 
    {
        "code": "210102", 
        "name": "和平区", 
        "cityCode": "2101", 
        "provinceCode": "21"
    }, 
    {
        "code": "210103", 
        "name": "沈河区", 
        "cityCode": "2101", 
        "provinceCode": "21"
    }, 
    {
        "code": "210104", 
        "name": "大东区", 
        "cityCode": "2101", 
        "provinceCode": "21"
    }, 
    {
        "code": "210105", 
        "name": "皇姑区", 
        "cityCode": "2101", 
        "provinceCode": "21"
    }, 
    {
        "code": "210106", 
        "name": "铁西区", 
        "cityCode": "2101", 
        "provinceCode": "21"
    }, 
    {
        "code": "210111", 
        "name": "苏家屯区", 
        "cityCode": "2101", 
        "provinceCode": "21"
    }, 
    {
        "code": "210112", 
        "name": "浑南区", 
        "cityCode": "2101", 
        "provinceCode": "21"
    }, 
    {
        "code": "210113", 
        "name": "沈北新区", 
        "cityCode": "2101", 
        "provinceCode": "21"
    }, 
    {
        "code": "210114", 
        "name": "于洪区", 
        "cityCode": "2101", 
        "provinceCode": "21"
    }, 
    {
        "code": "210115", 
        "name": "辽中区", 
        "cityCode": "2101", 
        "provinceCode": "21"
    }, 
    {
        "code": "210123", 
        "name": "康平县", 
        "cityCode": "2101", 
        "provinceCode": "21"
    }, 
    {
        "code": "210124", 
        "name": "法库县", 
        "cityCode": "2101", 
        "provinceCode": "21"
    }, 
    {
        "code": "210181", 
        "name": "新民市", 
        "cityCode": "2101", 
        "provinceCode": "21"
    }, 
    {
        "code": "210202", 
        "name": "中山区", 
        "cityCode": "2102", 
        "provinceCode": "21"
    }, 
    {
        "code": "210203", 
        "name": "西岗区", 
        "cityCode": "2102", 
        "provinceCode": "21"
    }, 
    {
        "code": "210204", 
        "name": "沙河口区", 
        "cityCode": "2102", 
        "provinceCode": "21"
    }, 
    {
        "code": "210211", 
        "name": "甘井子区", 
        "cityCode": "2102", 
        "provinceCode": "21"
    }, 
    {
        "code": "210212", 
        "name": "旅顺口区", 
        "cityCode": "2102", 
        "provinceCode": "21"
    }, 
    {
        "code": "210213", 
        "name": "金州区", 
        "cityCode": "2102", 
        "provinceCode": "21"
    }, 
    {
        "code": "210214", 
        "name": "普兰店区", 
        "cityCode": "2102", 
        "provinceCode": "21"
    }, 
    {
        "code": "210224", 
        "name": "长海县", 
        "cityCode": "2102", 
        "provinceCode": "21"
    }, 
    {
        "code": "210281", 
        "name": "瓦房店市", 
        "cityCode": "2102", 
        "provinceCode": "21"
    }, 
    {
        "code": "210283", 
        "name": "庄河市", 
        "cityCode": "2102", 
        "provinceCode": "21"
    }, 
    {
        "code": "210302", 
        "name": "铁东区", 
        "cityCode": "2103", 
        "provinceCode": "21"
    }, 
    {
        "code": "210303", 
        "name": "铁西区", 
        "cityCode": "2103", 
        "provinceCode": "21"
    }, 
    {
        "code": "210304", 
        "name": "立山区", 
        "cityCode": "2103", 
        "provinceCode": "21"
    }, 
    {
        "code": "210311", 
        "name": "千山区", 
        "cityCode": "2103", 
        "provinceCode": "21"
    }, 
    {
        "code": "210321", 
        "name": "台安县", 
        "cityCode": "2103", 
        "provinceCode": "21"
    }, 
    {
        "code": "210323", 
        "name": "岫岩满族自治县", 
        "cityCode": "2103", 
        "provinceCode": "21"
    }, 
    {
        "code": "210381", 
        "name": "海城市", 
        "cityCode": "2103", 
        "provinceCode": "21"
    }, 
    {
        "code": "210402", 
        "name": "新抚区", 
        "cityCode": "2104", 
        "provinceCode": "21"
    }, 
    {
        "code": "210403", 
        "name": "东洲区", 
        "cityCode": "2104", 
        "provinceCode": "21"
    }, 
    {
        "code": "210404", 
        "name": "望花区", 
        "cityCode": "2104", 
        "provinceCode": "21"
    }, 
    {
        "code": "210411", 
        "name": "顺城区", 
        "cityCode": "2104", 
        "provinceCode": "21"
    }, 
    {
        "code": "210421", 
        "name": "抚顺县", 
        "cityCode": "2104", 
        "provinceCode": "21"
    }, 
    {
        "code": "210422", 
        "name": "新宾满族自治县", 
        "cityCode": "2104", 
        "provinceCode": "21"
    }, 
    {
        "code": "210423", 
        "name": "清原满族自治县", 
        "cityCode": "2104", 
        "provinceCode": "21"
    }, 
    {
        "code": "210502", 
        "name": "平山区", 
        "cityCode": "2105", 
        "provinceCode": "21"
    }, 
    {
        "code": "210503", 
        "name": "溪湖区", 
        "cityCode": "2105", 
        "provinceCode": "21"
    }, 
    {
        "code": "210504", 
        "name": "明山区", 
        "cityCode": "2105", 
        "provinceCode": "21"
    }, 
    {
        "code": "210505", 
        "name": "南芬区", 
        "cityCode": "2105", 
        "provinceCode": "21"
    }, 
    {
        "code": "210521", 
        "name": "本溪满族自治县", 
        "cityCode": "2105", 
        "provinceCode": "21"
    }, 
    {
        "code": "210522", 
        "name": "桓仁满族自治县", 
        "cityCode": "2105", 
        "provinceCode": "21"
    }, 
    {
        "code": "210602", 
        "name": "元宝区", 
        "cityCode": "2106", 
        "provinceCode": "21"
    }, 
    {
        "code": "210603", 
        "name": "振兴区", 
        "cityCode": "2106", 
        "provinceCode": "21"
    }, 
    {
        "code": "210604", 
        "name": "振安区", 
        "cityCode": "2106", 
        "provinceCode": "21"
    }, 
    {
        "code": "210624", 
        "name": "宽甸满族自治县", 
        "cityCode": "2106", 
        "provinceCode": "21"
    }, 
    {
        "code": "210681", 
        "name": "东港市", 
        "cityCode": "2106", 
        "provinceCode": "21"
    }, 
    {
        "code": "210682", 
        "name": "凤城市", 
        "cityCode": "2106", 
        "provinceCode": "21"
    }, 
    {
        "code": "210702", 
        "name": "古塔区", 
        "cityCode": "2107", 
        "provinceCode": "21"
    }, 
    {
        "code": "210703", 
        "name": "凌河区", 
        "cityCode": "2107", 
        "provinceCode": "21"
    }, 
    {
        "code": "210711", 
        "name": "太和区", 
        "cityCode": "2107", 
        "provinceCode": "21"
    }, 
    {
        "code": "210726", 
        "name": "黑山县", 
        "cityCode": "2107", 
        "provinceCode": "21"
    }, 
    {
        "code": "210727", 
        "name": "义县", 
        "cityCode": "2107", 
        "provinceCode": "21"
    }, 
    {
        "code": "210781", 
        "name": "凌海市", 
        "cityCode": "2107", 
        "provinceCode": "21"
    }, 
    {
        "code": "210782", 
        "name": "北镇市", 
        "cityCode": "2107", 
        "provinceCode": "21"
    }, 
    {
        "code": "210802", 
        "name": "站前区", 
        "cityCode": "2108", 
        "provinceCode": "21"
    }, 
    {
        "code": "210803", 
        "name": "西市区", 
        "cityCode": "2108", 
        "provinceCode": "21"
    }, 
    {
        "code": "210804", 
        "name": "鲅鱼圈区", 
        "cityCode": "2108", 
        "provinceCode": "21"
    }, 
    {
        "code": "210811", 
        "name": "老边区", 
        "cityCode": "2108", 
        "provinceCode": "21"
    }, 
    {
        "code": "210881", 
        "name": "盖州市", 
        "cityCode": "2108", 
        "provinceCode": "21"
    }, 
    {
        "code": "210882", 
        "name": "大石桥市", 
        "cityCode": "2108", 
        "provinceCode": "21"
    }, 
    {
        "code": "210902", 
        "name": "海州区", 
        "cityCode": "2109", 
        "provinceCode": "21"
    }, 
    {
        "code": "210903", 
        "name": "新邱区", 
        "cityCode": "2109", 
        "provinceCode": "21"
    }, 
    {
        "code": "210904", 
        "name": "太平区", 
        "cityCode": "2109", 
        "provinceCode": "21"
    }, 
    {
        "code": "210905", 
        "name": "清河门区", 
        "cityCode": "2109", 
        "provinceCode": "21"
    }, 
    {
        "code": "210911", 
        "name": "细河区", 
        "cityCode": "2109", 
        "provinceCode": "21"
    }, 
    {
        "code": "210921", 
        "name": "阜新蒙古族自治县", 
        "cityCode": "2109", 
        "provinceCode": "21"
    }, 
    {
        "code": "210922", 
        "name": "彰武县", 
        "cityCode": "2109", 
        "provinceCode": "21"
    }, 
    {
        "code": "211002", 
        "name": "白塔区", 
        "cityCode": "2110", 
        "provinceCode": "21"
    }, 
    {
        "code": "211003", 
        "name": "文圣区", 
        "cityCode": "2110", 
        "provinceCode": "21"
    }, 
    {
        "code": "211004", 
        "name": "宏伟区", 
        "cityCode": "2110", 
        "provinceCode": "21"
    }, 
    {
        "code": "211005", 
        "name": "弓长岭区", 
        "cityCode": "2110", 
        "provinceCode": "21"
    }, 
    {
        "code": "211011", 
        "name": "太子河区", 
        "cityCode": "2110", 
        "provinceCode": "21"
    }, 
    {
        "code": "211021", 
        "name": "辽阳县", 
        "cityCode": "2110", 
        "provinceCode": "21"
    }, 
    {
        "code": "211081", 
        "name": "灯塔市", 
        "cityCode": "2110", 
        "provinceCode": "21"
    }, 
    {
        "code": "211102", 
        "name": "双台子区", 
        "cityCode": "2111", 
        "provinceCode": "21"
    }, 
    {
        "code": "211103", 
        "name": "兴隆台区", 
        "cityCode": "2111", 
        "provinceCode": "21"
    }, 
    {
        "code": "211104", 
        "name": "大洼区", 
        "cityCode": "2111", 
        "provinceCode": "21"
    }, 
    {
        "code": "211122", 
        "name": "盘山县", 
        "cityCode": "2111", 
        "provinceCode": "21"
    }, 
    {
        "code": "211202", 
        "name": "银州区", 
        "cityCode": "2112", 
        "provinceCode": "21"
    }, 
    {
        "code": "211204", 
        "name": "清河区", 
        "cityCode": "2112", 
        "provinceCode": "21"
    }, 
    {
        "code": "211221", 
        "name": "铁岭县", 
        "cityCode": "2112", 
        "provinceCode": "21"
    }, 
    {
        "code": "211223", 
        "name": "西丰县", 
        "cityCode": "2112", 
        "provinceCode": "21"
    }, 
    {
        "code": "211224", 
        "name": "昌图县", 
        "cityCode": "2112", 
        "provinceCode": "21"
    }, 
    {
        "code": "211281", 
        "name": "调兵山市", 
        "cityCode": "2112", 
        "provinceCode": "21"
    }, 
    {
        "code": "211282", 
        "name": "开原市", 
        "cityCode": "2112", 
        "provinceCode": "21"
    }, 
    {
        "code": "211302", 
        "name": "双塔区", 
        "cityCode": "2113", 
        "provinceCode": "21"
    }, 
    {
        "code": "211303", 
        "name": "龙城区", 
        "cityCode": "2113", 
        "provinceCode": "21"
    }, 
    {
        "code": "211321", 
        "name": "朝阳县", 
        "cityCode": "2113", 
        "provinceCode": "21"
    }, 
    {
        "code": "211322", 
        "name": "建平县", 
        "cityCode": "2113", 
        "provinceCode": "21"
    }, 
    {
        "code": "211324", 
        "name": "喀喇沁左翼蒙古族自治县", 
        "cityCode": "2113", 
        "provinceCode": "21"
    }, 
    {
        "code": "211381", 
        "name": "北票市", 
        "cityCode": "2113", 
        "provinceCode": "21"
    }, 
    {
        "code": "211382", 
        "name": "凌源市", 
        "cityCode": "2113", 
        "provinceCode": "21"
    }, 
    {
        "code": "211402", 
        "name": "连山区", 
        "cityCode": "2114", 
        "provinceCode": "21"
    }, 
    {
        "code": "211403", 
        "name": "龙港区", 
        "cityCode": "2114", 
        "provinceCode": "21"
    }, 
    {
        "code": "211404", 
        "name": "南票区", 
        "cityCode": "2114", 
        "provinceCode": "21"
    }, 
    {
        "code": "211421", 
        "name": "绥中县", 
        "cityCode": "2114", 
        "provinceCode": "21"
    }, 
    {
        "code": "211422", 
        "name": "建昌县", 
        "cityCode": "2114", 
        "provinceCode": "21"
    }, 
    {
        "code": "211481", 
        "name": "兴城市", 
        "cityCode": "2114", 
        "provinceCode": "21"
    }, 
    {
        "code": "220102", 
        "name": "南关区", 
        "cityCode": "2201", 
        "provinceCode": "22"
    }, 
    {
        "code": "220103", 
        "name": "宽城区", 
        "cityCode": "2201", 
        "provinceCode": "22"
    }, 
    {
        "code": "220104", 
        "name": "朝阳区", 
        "cityCode": "2201", 
        "provinceCode": "22"
    }, 
    {
        "code": "220105", 
        "name": "二道区", 
        "cityCode": "2201", 
        "provinceCode": "22"
    }, 
    {
        "code": "220106", 
        "name": "绿园区", 
        "cityCode": "2201", 
        "provinceCode": "22"
    }, 
    {
        "code": "220112", 
        "name": "双阳区", 
        "cityCode": "2201", 
        "provinceCode": "22"
    }, 
    {
        "code": "220113", 
        "name": "九台区", 
        "cityCode": "2201", 
        "provinceCode": "22"
    }, 
    {
        "code": "220122", 
        "name": "农安县", 
        "cityCode": "2201", 
        "provinceCode": "22"
    }, 
    {
        "code": "220171", 
        "name": "长春经济技术开发区", 
        "cityCode": "2201", 
        "provinceCode": "22"
    }, 
    {
        "code": "220172", 
        "name": "长春净月高新技术产业开发区", 
        "cityCode": "2201", 
        "provinceCode": "22"
    }, 
    {
        "code": "220173", 
        "name": "长春高新技术产业开发区", 
        "cityCode": "2201", 
        "provinceCode": "22"
    }, 
    {
        "code": "220174", 
        "name": "长春汽车经济技术开发区", 
        "cityCode": "2201", 
        "provinceCode": "22"
    }, 
    {
        "code": "220182", 
        "name": "榆树市", 
        "cityCode": "2201", 
        "provinceCode": "22"
    }, 
    {
        "code": "220183", 
        "name": "德惠市", 
        "cityCode": "2201", 
        "provinceCode": "22"
    }, 
    {
        "code": "220202", 
        "name": "昌邑区", 
        "cityCode": "2202", 
        "provinceCode": "22"
    }, 
    {
        "code": "220203", 
        "name": "龙潭区", 
        "cityCode": "2202", 
        "provinceCode": "22"
    }, 
    {
        "code": "220204", 
        "name": "船营区", 
        "cityCode": "2202", 
        "provinceCode": "22"
    }, 
    {
        "code": "220211", 
        "name": "丰满区", 
        "cityCode": "2202", 
        "provinceCode": "22"
    }, 
    {
        "code": "220221", 
        "name": "永吉县", 
        "cityCode": "2202", 
        "provinceCode": "22"
    }, 
    {
        "code": "220271", 
        "name": "吉林经济开发区", 
        "cityCode": "2202", 
        "provinceCode": "22"
    }, 
    {
        "code": "220272", 
        "name": "吉林高新技术产业开发区", 
        "cityCode": "2202", 
        "provinceCode": "22"
    }, 
    {
        "code": "220273", 
        "name": "吉林中国新加坡食品区", 
        "cityCode": "2202", 
        "provinceCode": "22"
    }, 
    {
        "code": "220281", 
        "name": "蛟河市", 
        "cityCode": "2202", 
        "provinceCode": "22"
    }, 
    {
        "code": "220282", 
        "name": "桦甸市", 
        "cityCode": "2202", 
        "provinceCode": "22"
    }, 
    {
        "code": "220283", 
        "name": "舒兰市", 
        "cityCode": "2202", 
        "provinceCode": "22"
    }, 
    {
        "code": "220284", 
        "name": "磐石市", 
        "cityCode": "2202", 
        "provinceCode": "22"
    }, 
    {
        "code": "220302", 
        "name": "铁西区", 
        "cityCode": "2203", 
        "provinceCode": "22"
    }, 
    {
        "code": "220303", 
        "name": "铁东区", 
        "cityCode": "2203", 
        "provinceCode": "22"
    }, 
    {
        "code": "220322", 
        "name": "梨树县", 
        "cityCode": "2203", 
        "provinceCode": "22"
    }, 
    {
        "code": "220323", 
        "name": "伊通满族自治县", 
        "cityCode": "2203", 
        "provinceCode": "22"
    }, 
    {
        "code": "220381", 
        "name": "公主岭市", 
        "cityCode": "2203", 
        "provinceCode": "22"
    }, 
    {
        "code": "220382", 
        "name": "双辽市", 
        "cityCode": "2203", 
        "provinceCode": "22"
    }, 
    {
        "code": "220402", 
        "name": "龙山区", 
        "cityCode": "2204", 
        "provinceCode": "22"
    }, 
    {
        "code": "220403", 
        "name": "西安区", 
        "cityCode": "2204", 
        "provinceCode": "22"
    }, 
    {
        "code": "220421", 
        "name": "东丰县", 
        "cityCode": "2204", 
        "provinceCode": "22"
    }, 
    {
        "code": "220422", 
        "name": "东辽县", 
        "cityCode": "2204", 
        "provinceCode": "22"
    }, 
    {
        "code": "220502", 
        "name": "东昌区", 
        "cityCode": "2205", 
        "provinceCode": "22"
    }, 
    {
        "code": "220503", 
        "name": "二道江区", 
        "cityCode": "2205", 
        "provinceCode": "22"
    }, 
    {
        "code": "220521", 
        "name": "通化县", 
        "cityCode": "2205", 
        "provinceCode": "22"
    }, 
    {
        "code": "220523", 
        "name": "辉南县", 
        "cityCode": "2205", 
        "provinceCode": "22"
    }, 
    {
        "code": "220524", 
        "name": "柳河县", 
        "cityCode": "2205", 
        "provinceCode": "22"
    }, 
    {
        "code": "220581", 
        "name": "梅河口市", 
        "cityCode": "2205", 
        "provinceCode": "22"
    }, 
    {
        "code": "220582", 
        "name": "集安市", 
        "cityCode": "2205", 
        "provinceCode": "22"
    }, 
    {
        "code": "220602", 
        "name": "浑江区", 
        "cityCode": "2206", 
        "provinceCode": "22"
    }, 
    {
        "code": "220605", 
        "name": "江源区", 
        "cityCode": "2206", 
        "provinceCode": "22"
    }, 
    {
        "code": "220621", 
        "name": "抚松县", 
        "cityCode": "2206", 
        "provinceCode": "22"
    }, 
    {
        "code": "220622", 
        "name": "靖宇县", 
        "cityCode": "2206", 
        "provinceCode": "22"
    }, 
    {
        "code": "220623", 
        "name": "长白朝鲜族自治县", 
        "cityCode": "2206", 
        "provinceCode": "22"
    }, 
    {
        "code": "220681", 
        "name": "临江市", 
        "cityCode": "2206", 
        "provinceCode": "22"
    }, 
    {
        "code": "220702", 
        "name": "宁江区", 
        "cityCode": "2207", 
        "provinceCode": "22"
    }, 
    {
        "code": "220721", 
        "name": "前郭尔罗斯蒙古族自治县", 
        "cityCode": "2207", 
        "provinceCode": "22"
    }, 
    {
        "code": "220722", 
        "name": "长岭县", 
        "cityCode": "2207", 
        "provinceCode": "22"
    }, 
    {
        "code": "220723", 
        "name": "乾安县", 
        "cityCode": "2207", 
        "provinceCode": "22"
    }, 
    {
        "code": "220771", 
        "name": "吉林松原经济开发区", 
        "cityCode": "2207", 
        "provinceCode": "22"
    }, 
    {
        "code": "220781", 
        "name": "扶余市", 
        "cityCode": "2207", 
        "provinceCode": "22"
    }, 
    {
        "code": "220802", 
        "name": "洮北区", 
        "cityCode": "2208", 
        "provinceCode": "22"
    }, 
    {
        "code": "220821", 
        "name": "镇赉县", 
        "cityCode": "2208", 
        "provinceCode": "22"
    }, 
    {
        "code": "220822", 
        "name": "通榆县", 
        "cityCode": "2208", 
        "provinceCode": "22"
    }, 
    {
        "code": "220871", 
        "name": "吉林白城经济开发区", 
        "cityCode": "2208", 
        "provinceCode": "22"
    }, 
    {
        "code": "220881", 
        "name": "洮南市", 
        "cityCode": "2208", 
        "provinceCode": "22"
    }, 
    {
        "code": "220882", 
        "name": "大安市", 
        "cityCode": "2208", 
        "provinceCode": "22"
    }, 
    {
        "code": "222401", 
        "name": "延吉市", 
        "cityCode": "2224", 
        "provinceCode": "22"
    }, 
    {
        "code": "222402", 
        "name": "图们市", 
        "cityCode": "2224", 
        "provinceCode": "22"
    }, 
    {
        "code": "222403", 
        "name": "敦化市", 
        "cityCode": "2224", 
        "provinceCode": "22"
    }, 
    {
        "code": "222404", 
        "name": "珲春市", 
        "cityCode": "2224", 
        "provinceCode": "22"
    }, 
    {
        "code": "222405", 
        "name": "龙井市", 
        "cityCode": "2224", 
        "provinceCode": "22"
    }, 
    {
        "code": "222406", 
        "name": "和龙市", 
        "cityCode": "2224", 
        "provinceCode": "22"
    }, 
    {
        "code": "222424", 
        "name": "汪清县", 
        "cityCode": "2224", 
        "provinceCode": "22"
    }, 
    {
        "code": "222426", 
        "name": "安图县", 
        "cityCode": "2224", 
        "provinceCode": "22"
    }, 
    {
        "code": "230102", 
        "name": "道里区", 
        "cityCode": "2301", 
        "provinceCode": "23"
    }, 
    {
        "code": "230103", 
        "name": "南岗区", 
        "cityCode": "2301", 
        "provinceCode": "23"
    }, 
    {
        "code": "230104", 
        "name": "道外区", 
        "cityCode": "2301", 
        "provinceCode": "23"
    }, 
    {
        "code": "230108", 
        "name": "平房区", 
        "cityCode": "2301", 
        "provinceCode": "23"
    }, 
    {
        "code": "230109", 
        "name": "松北区", 
        "cityCode": "2301", 
        "provinceCode": "23"
    }, 
    {
        "code": "230110", 
        "name": "香坊区", 
        "cityCode": "2301", 
        "provinceCode": "23"
    }, 
    {
        "code": "230111", 
        "name": "呼兰区", 
        "cityCode": "2301", 
        "provinceCode": "23"
    }, 
    {
        "code": "230112", 
        "name": "阿城区", 
        "cityCode": "2301", 
        "provinceCode": "23"
    }, 
    {
        "code": "230113", 
        "name": "双城区", 
        "cityCode": "2301", 
        "provinceCode": "23"
    }, 
    {
        "code": "230123", 
        "name": "依兰县", 
        "cityCode": "2301", 
        "provinceCode": "23"
    }, 
    {
        "code": "230124", 
        "name": "方正县", 
        "cityCode": "2301", 
        "provinceCode": "23"
    }, 
    {
        "code": "230125", 
        "name": "宾县", 
        "cityCode": "2301", 
        "provinceCode": "23"
    }, 
    {
        "code": "230126", 
        "name": "巴彦县", 
        "cityCode": "2301", 
        "provinceCode": "23"
    }, 
    {
        "code": "230127", 
        "name": "木兰县", 
        "cityCode": "2301", 
        "provinceCode": "23"
    }, 
    {
        "code": "230128", 
        "name": "通河县", 
        "cityCode": "2301", 
        "provinceCode": "23"
    }, 
    {
        "code": "230129", 
        "name": "延寿县", 
        "cityCode": "2301", 
        "provinceCode": "23"
    }, 
    {
        "code": "230183", 
        "name": "尚志市", 
        "cityCode": "2301", 
        "provinceCode": "23"
    }, 
    {
        "code": "230184", 
        "name": "五常市", 
        "cityCode": "2301", 
        "provinceCode": "23"
    }, 
    {
        "code": "230202", 
        "name": "龙沙区", 
        "cityCode": "2302", 
        "provinceCode": "23"
    }, 
    {
        "code": "230203", 
        "name": "建华区", 
        "cityCode": "2302", 
        "provinceCode": "23"
    }, 
    {
        "code": "230204", 
        "name": "铁锋区", 
        "cityCode": "2302", 
        "provinceCode": "23"
    }, 
    {
        "code": "230205", 
        "name": "昂昂溪区", 
        "cityCode": "2302", 
        "provinceCode": "23"
    }, 
    {
        "code": "230206", 
        "name": "富拉尔基区", 
        "cityCode": "2302", 
        "provinceCode": "23"
    }, 
    {
        "code": "230207", 
        "name": "碾子山区", 
        "cityCode": "2302", 
        "provinceCode": "23"
    }, 
    {
        "code": "230208", 
        "name": "梅里斯达斡尔族区", 
        "cityCode": "2302", 
        "provinceCode": "23"
    }, 
    {
        "code": "230221", 
        "name": "龙江县", 
        "cityCode": "2302", 
        "provinceCode": "23"
    }, 
    {
        "code": "230223", 
        "name": "依安县", 
        "cityCode": "2302", 
        "provinceCode": "23"
    }, 
    {
        "code": "230224", 
        "name": "泰来县", 
        "cityCode": "2302", 
        "provinceCode": "23"
    }, 
    {
        "code": "230225", 
        "name": "甘南县", 
        "cityCode": "2302", 
        "provinceCode": "23"
    }, 
    {
        "code": "230227", 
        "name": "富裕县", 
        "cityCode": "2302", 
        "provinceCode": "23"
    }, 
    {
        "code": "230229", 
        "name": "克山县", 
        "cityCode": "2302", 
        "provinceCode": "23"
    }, 
    {
        "code": "230230", 
        "name": "克东县", 
        "cityCode": "2302", 
        "provinceCode": "23"
    }, 
    {
        "code": "230231", 
        "name": "拜泉县", 
        "cityCode": "2302", 
        "provinceCode": "23"
    }, 
    {
        "code": "230281", 
        "name": "讷河市", 
        "cityCode": "2302", 
        "provinceCode": "23"
    }, 
    {
        "code": "230302", 
        "name": "鸡冠区", 
        "cityCode": "2303", 
        "provinceCode": "23"
    }, 
    {
        "code": "230303", 
        "name": "恒山区", 
        "cityCode": "2303", 
        "provinceCode": "23"
    }, 
    {
        "code": "230304", 
        "name": "滴道区", 
        "cityCode": "2303", 
        "provinceCode": "23"
    }, 
    {
        "code": "230305", 
        "name": "梨树区", 
        "cityCode": "2303", 
        "provinceCode": "23"
    }, 
    {
        "code": "230306", 
        "name": "城子河区", 
        "cityCode": "2303", 
        "provinceCode": "23"
    }, 
    {
        "code": "230307", 
        "name": "麻山区", 
        "cityCode": "2303", 
        "provinceCode": "23"
    }, 
    {
        "code": "230321", 
        "name": "鸡东县", 
        "cityCode": "2303", 
        "provinceCode": "23"
    }, 
    {
        "code": "230381", 
        "name": "虎林市", 
        "cityCode": "2303", 
        "provinceCode": "23"
    }, 
    {
        "code": "230382", 
        "name": "密山市", 
        "cityCode": "2303", 
        "provinceCode": "23"
    }, 
    {
        "code": "230402", 
        "name": "向阳区", 
        "cityCode": "2304", 
        "provinceCode": "23"
    }, 
    {
        "code": "230403", 
        "name": "工农区", 
        "cityCode": "2304", 
        "provinceCode": "23"
    }, 
    {
        "code": "230404", 
        "name": "南山区", 
        "cityCode": "2304", 
        "provinceCode": "23"
    }, 
    {
        "code": "230405", 
        "name": "兴安区", 
        "cityCode": "2304", 
        "provinceCode": "23"
    }, 
    {
        "code": "230406", 
        "name": "东山区", 
        "cityCode": "2304", 
        "provinceCode": "23"
    }, 
    {
        "code": "230407", 
        "name": "兴山区", 
        "cityCode": "2304", 
        "provinceCode": "23"
    }, 
    {
        "code": "230421", 
        "name": "萝北县", 
        "cityCode": "2304", 
        "provinceCode": "23"
    }, 
    {
        "code": "230422", 
        "name": "绥滨县", 
        "cityCode": "2304", 
        "provinceCode": "23"
    }, 
    {
        "code": "230502", 
        "name": "尖山区", 
        "cityCode": "2305", 
        "provinceCode": "23"
    }, 
    {
        "code": "230503", 
        "name": "岭东区", 
        "cityCode": "2305", 
        "provinceCode": "23"
    }, 
    {
        "code": "230505", 
        "name": "四方台区", 
        "cityCode": "2305", 
        "provinceCode": "23"
    }, 
    {
        "code": "230506", 
        "name": "宝山区", 
        "cityCode": "2305", 
        "provinceCode": "23"
    }, 
    {
        "code": "230521", 
        "name": "集贤县", 
        "cityCode": "2305", 
        "provinceCode": "23"
    }, 
    {
        "code": "230522", 
        "name": "友谊县", 
        "cityCode": "2305", 
        "provinceCode": "23"
    }, 
    {
        "code": "230523", 
        "name": "宝清县", 
        "cityCode": "2305", 
        "provinceCode": "23"
    }, 
    {
        "code": "230524", 
        "name": "饶河县", 
        "cityCode": "2305", 
        "provinceCode": "23"
    }, 
    {
        "code": "230602", 
        "name": "萨尔图区", 
        "cityCode": "2306", 
        "provinceCode": "23"
    }, 
    {
        "code": "230603", 
        "name": "龙凤区", 
        "cityCode": "2306", 
        "provinceCode": "23"
    }, 
    {
        "code": "230604", 
        "name": "让胡路区", 
        "cityCode": "2306", 
        "provinceCode": "23"
    }, 
    {
        "code": "230605", 
        "name": "红岗区", 
        "cityCode": "2306", 
        "provinceCode": "23"
    }, 
    {
        "code": "230606", 
        "name": "大同区", 
        "cityCode": "2306", 
        "provinceCode": "23"
    }, 
    {
        "code": "230621", 
        "name": "肇州县", 
        "cityCode": "2306", 
        "provinceCode": "23"
    }, 
    {
        "code": "230622", 
        "name": "肇源县", 
        "cityCode": "2306", 
        "provinceCode": "23"
    }, 
    {
        "code": "230623", 
        "name": "林甸县", 
        "cityCode": "2306", 
        "provinceCode": "23"
    }, 
    {
        "code": "230624", 
        "name": "杜尔伯特蒙古族自治县", 
        "cityCode": "2306", 
        "provinceCode": "23"
    }, 
    {
        "code": "230671", 
        "name": "大庆高新技术产业开发区", 
        "cityCode": "2306", 
        "provinceCode": "23"
    }, 
    {
        "code": "230702", 
        "name": "伊春区", 
        "cityCode": "2307", 
        "provinceCode": "23"
    }, 
    {
        "code": "230703", 
        "name": "南岔区", 
        "cityCode": "2307", 
        "provinceCode": "23"
    }, 
    {
        "code": "230704", 
        "name": "友好区", 
        "cityCode": "2307", 
        "provinceCode": "23"
    }, 
    {
        "code": "230705", 
        "name": "西林区", 
        "cityCode": "2307", 
        "provinceCode": "23"
    }, 
    {
        "code": "230706", 
        "name": "翠峦区", 
        "cityCode": "2307", 
        "provinceCode": "23"
    }, 
    {
        "code": "230707", 
        "name": "新青区", 
        "cityCode": "2307", 
        "provinceCode": "23"
    }, 
    {
        "code": "230708", 
        "name": "美溪区", 
        "cityCode": "2307", 
        "provinceCode": "23"
    }, 
    {
        "code": "230709", 
        "name": "金山屯区", 
        "cityCode": "2307", 
        "provinceCode": "23"
    }, 
    {
        "code": "230710", 
        "name": "五营区", 
        "cityCode": "2307", 
        "provinceCode": "23"
    }, 
    {
        "code": "230711", 
        "name": "乌马河区", 
        "cityCode": "2307", 
        "provinceCode": "23"
    }, 
    {
        "code": "230712", 
        "name": "汤旺河区", 
        "cityCode": "2307", 
        "provinceCode": "23"
    }, 
    {
        "code": "230713", 
        "name": "带岭区", 
        "cityCode": "2307", 
        "provinceCode": "23"
    }, 
    {
        "code": "230714", 
        "name": "乌伊岭区", 
        "cityCode": "2307", 
        "provinceCode": "23"
    }, 
    {
        "code": "230715", 
        "name": "红星区", 
        "cityCode": "2307", 
        "provinceCode": "23"
    }, 
    {
        "code": "230716", 
        "name": "上甘岭区", 
        "cityCode": "2307", 
        "provinceCode": "23"
    }, 
    {
        "code": "230722", 
        "name": "嘉荫县", 
        "cityCode": "2307", 
        "provinceCode": "23"
    }, 
    {
        "code": "230781", 
        "name": "铁力市", 
        "cityCode": "2307", 
        "provinceCode": "23"
    }, 
    {
        "code": "230803", 
        "name": "向阳区", 
        "cityCode": "2308", 
        "provinceCode": "23"
    }, 
    {
        "code": "230804", 
        "name": "前进区", 
        "cityCode": "2308", 
        "provinceCode": "23"
    }, 
    {
        "code": "230805", 
        "name": "东风区", 
        "cityCode": "2308", 
        "provinceCode": "23"
    }, 
    {
        "code": "230811", 
        "name": "郊区", 
        "cityCode": "2308", 
        "provinceCode": "23"
    }, 
    {
        "code": "230822", 
        "name": "桦南县", 
        "cityCode": "2308", 
        "provinceCode": "23"
    }, 
    {
        "code": "230826", 
        "name": "桦川县", 
        "cityCode": "2308", 
        "provinceCode": "23"
    }, 
    {
        "code": "230828", 
        "name": "汤原县", 
        "cityCode": "2308", 
        "provinceCode": "23"
    }, 
    {
        "code": "230881", 
        "name": "同江市", 
        "cityCode": "2308", 
        "provinceCode": "23"
    }, 
    {
        "code": "230882", 
        "name": "富锦市", 
        "cityCode": "2308", 
        "provinceCode": "23"
    }, 
    {
        "code": "230883", 
        "name": "抚远市", 
        "cityCode": "2308", 
        "provinceCode": "23"
    }, 
    {
        "code": "230902", 
        "name": "新兴区", 
        "cityCode": "2309", 
        "provinceCode": "23"
    }, 
    {
        "code": "230903", 
        "name": "桃山区", 
        "cityCode": "2309", 
        "provinceCode": "23"
    }, 
    {
        "code": "230904", 
        "name": "茄子河区", 
        "cityCode": "2309", 
        "provinceCode": "23"
    }, 
    {
        "code": "230921", 
        "name": "勃利县", 
        "cityCode": "2309", 
        "provinceCode": "23"
    }, 
    {
        "code": "231002", 
        "name": "东安区", 
        "cityCode": "2310", 
        "provinceCode": "23"
    }, 
    {
        "code": "231003", 
        "name": "阳明区", 
        "cityCode": "2310", 
        "provinceCode": "23"
    }, 
    {
        "code": "231004", 
        "name": "爱民区", 
        "cityCode": "2310", 
        "provinceCode": "23"
    }, 
    {
        "code": "231005", 
        "name": "西安区", 
        "cityCode": "2310", 
        "provinceCode": "23"
    }, 
    {
        "code": "231025", 
        "name": "林口县", 
        "cityCode": "2310", 
        "provinceCode": "23"
    }, 
    {
        "code": "231071", 
        "name": "牡丹江经济技术开发区", 
        "cityCode": "2310", 
        "provinceCode": "23"
    }, 
    {
        "code": "231081", 
        "name": "绥芬河市", 
        "cityCode": "2310", 
        "provinceCode": "23"
    }, 
    {
        "code": "231083", 
        "name": "海林市", 
        "cityCode": "2310", 
        "provinceCode": "23"
    }, 
    {
        "code": "231084", 
        "name": "宁安市", 
        "cityCode": "2310", 
        "provinceCode": "23"
    }, 
    {
        "code": "231085", 
        "name": "穆棱市", 
        "cityCode": "2310", 
        "provinceCode": "23"
    }, 
    {
        "code": "231086", 
        "name": "东宁市", 
        "cityCode": "2310", 
        "provinceCode": "23"
    }, 
    {
        "code": "231102", 
        "name": "爱辉区", 
        "cityCode": "2311", 
        "provinceCode": "23"
    }, 
    {
        "code": "231121", 
        "name": "嫩江县", 
        "cityCode": "2311", 
        "provinceCode": "23"
    }, 
    {
        "code": "231123", 
        "name": "逊克县", 
        "cityCode": "2311", 
        "provinceCode": "23"
    }, 
    {
        "code": "231124", 
        "name": "孙吴县", 
        "cityCode": "2311", 
        "provinceCode": "23"
    }, 
    {
        "code": "231181", 
        "name": "北安市", 
        "cityCode": "2311", 
        "provinceCode": "23"
    }, 
    {
        "code": "231182", 
        "name": "五大连池市", 
        "cityCode": "2311", 
        "provinceCode": "23"
    }, 
    {
        "code": "231202", 
        "name": "北林区", 
        "cityCode": "2312", 
        "provinceCode": "23"
    }, 
    {
        "code": "231221", 
        "name": "望奎县", 
        "cityCode": "2312", 
        "provinceCode": "23"
    }, 
    {
        "code": "231222", 
        "name": "兰西县", 
        "cityCode": "2312", 
        "provinceCode": "23"
    }, 
    {
        "code": "231223", 
        "name": "青冈县", 
        "cityCode": "2312", 
        "provinceCode": "23"
    }, 
    {
        "code": "231224", 
        "name": "庆安县", 
        "cityCode": "2312", 
        "provinceCode": "23"
    }, 
    {
        "code": "231225", 
        "name": "明水县", 
        "cityCode": "2312", 
        "provinceCode": "23"
    }, 
    {
        "code": "231226", 
        "name": "绥棱县", 
        "cityCode": "2312", 
        "provinceCode": "23"
    }, 
    {
        "code": "231281", 
        "name": "安达市", 
        "cityCode": "2312", 
        "provinceCode": "23"
    }, 
    {
        "code": "231282", 
        "name": "肇东市", 
        "cityCode": "2312", 
        "provinceCode": "23"
    }, 
    {
        "code": "231283", 
        "name": "海伦市", 
        "cityCode": "2312", 
        "provinceCode": "23"
    }, 
    {
        "code": "232701", 
        "name": "加格达奇区", 
        "cityCode": "2327", 
        "provinceCode": "23"
    }, 
    {
        "code": "232702", 
        "name": "松岭区", 
        "cityCode": "2327", 
        "provinceCode": "23"
    }, 
    {
        "code": "232703", 
        "name": "新林区", 
        "cityCode": "2327", 
        "provinceCode": "23"
    }, 
    {
        "code": "232704", 
        "name": "呼中区", 
        "cityCode": "2327", 
        "provinceCode": "23"
    }, 
    {
        "code": "232721", 
        "name": "呼玛县", 
        "cityCode": "2327", 
        "provinceCode": "23"
    }, 
    {
        "code": "232722", 
        "name": "塔河县", 
        "cityCode": "2327", 
        "provinceCode": "23"
    }, 
    {
        "code": "232723", 
        "name": "漠河县", 
        "cityCode": "2327", 
        "provinceCode": "23"
    }, 
    {
        "code": "310101", 
        "name": "黄浦区", 
        "cityCode": "3101", 
        "provinceCode": "31"
    }, 
    {
        "code": "310104", 
        "name": "徐汇区", 
        "cityCode": "3101", 
        "provinceCode": "31"
    }, 
    {
        "code": "310105", 
        "name": "长宁区", 
        "cityCode": "3101", 
        "provinceCode": "31"
    }, 
    {
        "code": "310106", 
        "name": "静安区", 
        "cityCode": "3101", 
        "provinceCode": "31"
    }, 
    {
        "code": "310107", 
        "name": "普陀区", 
        "cityCode": "3101", 
        "provinceCode": "31"
    }, 
    {
        "code": "310109", 
        "name": "虹口区", 
        "cityCode": "3101", 
        "provinceCode": "31"
    }, 
    {
        "code": "310110", 
        "name": "杨浦区", 
        "cityCode": "3101", 
        "provinceCode": "31"
    }, 
    {
        "code": "310112", 
        "name": "闵行区", 
        "cityCode": "3101", 
        "provinceCode": "31"
    }, 
    {
        "code": "310113", 
        "name": "宝山区", 
        "cityCode": "3101", 
        "provinceCode": "31"
    }, 
    {
        "code": "310114", 
        "name": "嘉定区", 
        "cityCode": "3101", 
        "provinceCode": "31"
    }, 
    {
        "code": "310115", 
        "name": "浦东新区", 
        "cityCode": "3101", 
        "provinceCode": "31"
    }, 
    {
        "code": "310116", 
        "name": "金山区", 
        "cityCode": "3101", 
        "provinceCode": "31"
    }, 
    {
        "code": "310117", 
        "name": "松江区", 
        "cityCode": "3101", 
        "provinceCode": "31"
    }, 
    {
        "code": "310118", 
        "name": "青浦区", 
        "cityCode": "3101", 
        "provinceCode": "31"
    }, 
    {
        "code": "310120", 
        "name": "奉贤区", 
        "cityCode": "3101", 
        "provinceCode": "31"
    }, 
    {
        "code": "310151", 
        "name": "崇明区", 
        "cityCode": "3101", 
        "provinceCode": "31"
    }, 
    {
        "code": "320102", 
        "name": "玄武区", 
        "cityCode": "3201", 
        "provinceCode": "32"
    }, 
    {
        "code": "320104", 
        "name": "秦淮区", 
        "cityCode": "3201", 
        "provinceCode": "32"
    }, 
    {
        "code": "320105", 
        "name": "建邺区", 
        "cityCode": "3201", 
        "provinceCode": "32"
    }, 
    {
        "code": "320106", 
        "name": "鼓楼区", 
        "cityCode": "3201", 
        "provinceCode": "32"
    }, 
    {
        "code": "320111", 
        "name": "浦口区", 
        "cityCode": "3201", 
        "provinceCode": "32"
    }, 
    {
        "code": "320113", 
        "name": "栖霞区", 
        "cityCode": "3201", 
        "provinceCode": "32"
    }, 
    {
        "code": "320114", 
        "name": "雨花台区", 
        "cityCode": "3201", 
        "provinceCode": "32"
    }, 
    {
        "code": "320115", 
        "name": "江宁区", 
        "cityCode": "3201", 
        "provinceCode": "32"
    }, 
    {
        "code": "320116", 
        "name": "六合区", 
        "cityCode": "3201", 
        "provinceCode": "32"
    }, 
    {
        "code": "320117", 
        "name": "溧水区", 
        "cityCode": "3201", 
        "provinceCode": "32"
    }, 
    {
        "code": "320118", 
        "name": "高淳区", 
        "cityCode": "3201", 
        "provinceCode": "32"
    }, 
    {
        "code": "320205", 
        "name": "锡山区", 
        "cityCode": "3202", 
        "provinceCode": "32"
    }, 
    {
        "code": "320206", 
        "name": "惠山区", 
        "cityCode": "3202", 
        "provinceCode": "32"
    }, 
    {
        "code": "320211", 
        "name": "滨湖区", 
        "cityCode": "3202", 
        "provinceCode": "32"
    }, 
    {
        "code": "320213", 
        "name": "梁溪区", 
        "cityCode": "3202", 
        "provinceCode": "32"
    }, 
    {
        "code": "320214", 
        "name": "新吴区", 
        "cityCode": "3202", 
        "provinceCode": "32"
    }, 
    {
        "code": "320281", 
        "name": "江阴市", 
        "cityCode": "3202", 
        "provinceCode": "32"
    }, 
    {
        "code": "320282", 
        "name": "宜兴市", 
        "cityCode": "3202", 
        "provinceCode": "32"
    }, 
    {
        "code": "320302", 
        "name": "鼓楼区", 
        "cityCode": "3203", 
        "provinceCode": "32"
    }, 
    {
        "code": "320303", 
        "name": "云龙区", 
        "cityCode": "3203", 
        "provinceCode": "32"
    }, 
    {
        "code": "320305", 
        "name": "贾汪区", 
        "cityCode": "3203", 
        "provinceCode": "32"
    }, 
    {
        "code": "320311", 
        "name": "泉山区", 
        "cityCode": "3203", 
        "provinceCode": "32"
    }, 
    {
        "code": "320312", 
        "name": "铜山区", 
        "cityCode": "3203", 
        "provinceCode": "32"
    }, 
    {
        "code": "320321", 
        "name": "丰县", 
        "cityCode": "3203", 
        "provinceCode": "32"
    }, 
    {
        "code": "320322", 
        "name": "沛县", 
        "cityCode": "3203", 
        "provinceCode": "32"
    }, 
    {
        "code": "320324", 
        "name": "睢宁县", 
        "cityCode": "3203", 
        "provinceCode": "32"
    }, 
    {
        "code": "320371", 
        "name": "徐州经济技术开发区", 
        "cityCode": "3203", 
        "provinceCode": "32"
    }, 
    {
        "code": "320381", 
        "name": "新沂市", 
        "cityCode": "3203", 
        "provinceCode": "32"
    }, 
    {
        "code": "320382", 
        "name": "邳州市", 
        "cityCode": "3203", 
        "provinceCode": "32"
    }, 
    {
        "code": "320402", 
        "name": "天宁区", 
        "cityCode": "3204", 
        "provinceCode": "32"
    }, 
    {
        "code": "320404", 
        "name": "钟楼区", 
        "cityCode": "3204", 
        "provinceCode": "32"
    }, 
    {
        "code": "320411", 
        "name": "新北区", 
        "cityCode": "3204", 
        "provinceCode": "32"
    }, 
    {
        "code": "320412", 
        "name": "武进区", 
        "cityCode": "3204", 
        "provinceCode": "32"
    }, 
    {
        "code": "320413", 
        "name": "金坛区", 
        "cityCode": "3204", 
        "provinceCode": "32"
    }, 
    {
        "code": "320481", 
        "name": "溧阳市", 
        "cityCode": "3204", 
        "provinceCode": "32"
    }, 
    {
        "code": "320505", 
        "name": "虎丘区", 
        "cityCode": "3205", 
        "provinceCode": "32"
    }, 
    {
        "code": "320506", 
        "name": "吴中区", 
        "cityCode": "3205", 
        "provinceCode": "32"
    }, 
    {
        "code": "320507", 
        "name": "相城区", 
        "cityCode": "3205", 
        "provinceCode": "32"
    }, 
    {
        "code": "320508", 
        "name": "姑苏区", 
        "cityCode": "3205", 
        "provinceCode": "32"
    }, 
    {
        "code": "320509", 
        "name": "吴江区", 
        "cityCode": "3205", 
        "provinceCode": "32"
    }, 
    {
        "code": "320571", 
        "name": "苏州工业园区", 
        "cityCode": "3205", 
        "provinceCode": "32"
    }, 
    {
        "code": "320581", 
        "name": "常熟市", 
        "cityCode": "3205", 
        "provinceCode": "32"
    }, 
    {
        "code": "320582", 
        "name": "张家港市", 
        "cityCode": "3205", 
        "provinceCode": "32"
    }, 
    {
        "code": "320583", 
        "name": "昆山市", 
        "cityCode": "3205", 
        "provinceCode": "32"
    }, 
    {
        "code": "320585", 
        "name": "太仓市", 
        "cityCode": "3205", 
        "provinceCode": "32"
    }, 
    {
        "code": "320602", 
        "name": "崇川区", 
        "cityCode": "3206", 
        "provinceCode": "32"
    }, 
    {
        "code": "320611", 
        "name": "港闸区", 
        "cityCode": "3206", 
        "provinceCode": "32"
    }, 
    {
        "code": "320612", 
        "name": "通州区", 
        "cityCode": "3206", 
        "provinceCode": "32"
    }, 
    {
        "code": "320621", 
        "name": "海安县", 
        "cityCode": "3206", 
        "provinceCode": "32"
    }, 
    {
        "code": "320623", 
        "name": "如东县", 
        "cityCode": "3206", 
        "provinceCode": "32"
    }, 
    {
        "code": "320671", 
        "name": "南通经济技术开发区", 
        "cityCode": "3206", 
        "provinceCode": "32"
    }, 
    {
        "code": "320681", 
        "name": "启东市", 
        "cityCode": "3206", 
        "provinceCode": "32"
    }, 
    {
        "code": "320682", 
        "name": "如皋市", 
        "cityCode": "3206", 
        "provinceCode": "32"
    }, 
    {
        "code": "320684", 
        "name": "海门市", 
        "cityCode": "3206", 
        "provinceCode": "32"
    }, 
    {
        "code": "320703", 
        "name": "连云区", 
        "cityCode": "3207", 
        "provinceCode": "32"
    }, 
    {
        "code": "320706", 
        "name": "海州区", 
        "cityCode": "3207", 
        "provinceCode": "32"
    }, 
    {
        "code": "320707", 
        "name": "赣榆区", 
        "cityCode": "3207", 
        "provinceCode": "32"
    }, 
    {
        "code": "320722", 
        "name": "东海县", 
        "cityCode": "3207", 
        "provinceCode": "32"
    }, 
    {
        "code": "320723", 
        "name": "灌云县", 
        "cityCode": "3207", 
        "provinceCode": "32"
    }, 
    {
        "code": "320724", 
        "name": "灌南县", 
        "cityCode": "3207", 
        "provinceCode": "32"
    }, 
    {
        "code": "320771", 
        "name": "连云港经济技术开发区", 
        "cityCode": "3207", 
        "provinceCode": "32"
    }, 
    {
        "code": "320772", 
        "name": "连云港高新技术产业开发区", 
        "cityCode": "3207", 
        "provinceCode": "32"
    }, 
    {
        "code": "320803", 
        "name": "淮安区", 
        "cityCode": "3208", 
        "provinceCode": "32"
    }, 
    {
        "code": "320804", 
        "name": "淮阴区", 
        "cityCode": "3208", 
        "provinceCode": "32"
    }, 
    {
        "code": "320812", 
        "name": "清江浦区", 
        "cityCode": "3208", 
        "provinceCode": "32"
    }, 
    {
        "code": "320813", 
        "name": "洪泽区", 
        "cityCode": "3208", 
        "provinceCode": "32"
    }, 
    {
        "code": "320826", 
        "name": "涟水县", 
        "cityCode": "3208", 
        "provinceCode": "32"
    }, 
    {
        "code": "320830", 
        "name": "盱眙县", 
        "cityCode": "3208", 
        "provinceCode": "32"
    }, 
    {
        "code": "320831", 
        "name": "金湖县", 
        "cityCode": "3208", 
        "provinceCode": "32"
    }, 
    {
        "code": "320871", 
        "name": "淮安经济技术开发区", 
        "cityCode": "3208", 
        "provinceCode": "32"
    }, 
    {
        "code": "320902", 
        "name": "亭湖区", 
        "cityCode": "3209", 
        "provinceCode": "32"
    }, 
    {
        "code": "320903", 
        "name": "盐都区", 
        "cityCode": "3209", 
        "provinceCode": "32"
    }, 
    {
        "code": "320904", 
        "name": "大丰区", 
        "cityCode": "3209", 
        "provinceCode": "32"
    }, 
    {
        "code": "320921", 
        "name": "响水县", 
        "cityCode": "3209", 
        "provinceCode": "32"
    }, 
    {
        "code": "320922", 
        "name": "滨海县", 
        "cityCode": "3209", 
        "provinceCode": "32"
    }, 
    {
        "code": "320923", 
        "name": "阜宁县", 
        "cityCode": "3209", 
        "provinceCode": "32"
    }, 
    {
        "code": "320924", 
        "name": "射阳县", 
        "cityCode": "3209", 
        "provinceCode": "32"
    }, 
    {
        "code": "320925", 
        "name": "建湖县", 
        "cityCode": "3209", 
        "provinceCode": "32"
    }, 
    {
        "code": "320971", 
        "name": "盐城经济技术开发区", 
        "cityCode": "3209", 
        "provinceCode": "32"
    }, 
    {
        "code": "320981", 
        "name": "东台市", 
        "cityCode": "3209", 
        "provinceCode": "32"
    }, 
    {
        "code": "321002", 
        "name": "广陵区", 
        "cityCode": "3210", 
        "provinceCode": "32"
    }, 
    {
        "code": "321003", 
        "name": "邗江区", 
        "cityCode": "3210", 
        "provinceCode": "32"
    }, 
    {
        "code": "321012", 
        "name": "江都区", 
        "cityCode": "3210", 
        "provinceCode": "32"
    }, 
    {
        "code": "321023", 
        "name": "宝应县", 
        "cityCode": "3210", 
        "provinceCode": "32"
    }, 
    {
        "code": "321071", 
        "name": "扬州经济技术开发区", 
        "cityCode": "3210", 
        "provinceCode": "32"
    }, 
    {
        "code": "321081", 
        "name": "仪征市", 
        "cityCode": "3210", 
        "provinceCode": "32"
    }, 
    {
        "code": "321084", 
        "name": "高邮市", 
        "cityCode": "3210", 
        "provinceCode": "32"
    }, 
    {
        "code": "321102", 
        "name": "京口区", 
        "cityCode": "3211", 
        "provinceCode": "32"
    }, 
    {
        "code": "321111", 
        "name": "润州区", 
        "cityCode": "3211", 
        "provinceCode": "32"
    }, 
    {
        "code": "321112", 
        "name": "丹徒区", 
        "cityCode": "3211", 
        "provinceCode": "32"
    }, 
    {
        "code": "321171", 
        "name": "镇江新区", 
        "cityCode": "3211", 
        "provinceCode": "32"
    }, 
    {
        "code": "321181", 
        "name": "丹阳市", 
        "cityCode": "3211", 
        "provinceCode": "32"
    }, 
    {
        "code": "321182", 
        "name": "扬中市", 
        "cityCode": "3211", 
        "provinceCode": "32"
    }, 
    {
        "code": "321183", 
        "name": "句容市", 
        "cityCode": "3211", 
        "provinceCode": "32"
    }, 
    {
        "code": "321202", 
        "name": "海陵区", 
        "cityCode": "3212", 
        "provinceCode": "32"
    }, 
    {
        "code": "321203", 
        "name": "高港区", 
        "cityCode": "3212", 
        "provinceCode": "32"
    }, 
    {
        "code": "321204", 
        "name": "姜堰区", 
        "cityCode": "3212", 
        "provinceCode": "32"
    }, 
    {
        "code": "321271", 
        "name": "泰州医药高新技术产业开发区", 
        "cityCode": "3212", 
        "provinceCode": "32"
    }, 
    {
        "code": "321281", 
        "name": "兴化市", 
        "cityCode": "3212", 
        "provinceCode": "32"
    }, 
    {
        "code": "321282", 
        "name": "靖江市", 
        "cityCode": "3212", 
        "provinceCode": "32"
    }, 
    {
        "code": "321283", 
        "name": "泰兴市", 
        "cityCode": "3212", 
        "provinceCode": "32"
    }, 
    {
        "code": "321302", 
        "name": "宿城区", 
        "cityCode": "3213", 
        "provinceCode": "32"
    }, 
    {
        "code": "321311", 
        "name": "宿豫区", 
        "cityCode": "3213", 
        "provinceCode": "32"
    }, 
    {
        "code": "321322", 
        "name": "沭阳县", 
        "cityCode": "3213", 
        "provinceCode": "32"
    }, 
    {
        "code": "321323", 
        "name": "泗阳县", 
        "cityCode": "3213", 
        "provinceCode": "32"
    }, 
    {
        "code": "321324", 
        "name": "泗洪县", 
        "cityCode": "3213", 
        "provinceCode": "32"
    }, 
    {
        "code": "321371", 
        "name": "宿迁经济技术开发区", 
        "cityCode": "3213", 
        "provinceCode": "32"
    }, 
    {
        "code": "330102", 
        "name": "上城区", 
        "cityCode": "3301", 
        "provinceCode": "33"
    }, 
    {
        "code": "330103", 
        "name": "下城区", 
        "cityCode": "3301", 
        "provinceCode": "33"
    }, 
    {
        "code": "330104", 
        "name": "江干区", 
        "cityCode": "3301", 
        "provinceCode": "33"
    }, 
    {
        "code": "330105", 
        "name": "拱墅区", 
        "cityCode": "3301", 
        "provinceCode": "33"
    }, 
    {
        "code": "330106", 
        "name": "西湖区", 
        "cityCode": "3301", 
        "provinceCode": "33"
    }, 
    {
        "code": "330108", 
        "name": "滨江区", 
        "cityCode": "3301", 
        "provinceCode": "33"
    }, 
    {
        "code": "330109", 
        "name": "萧山区", 
        "cityCode": "3301", 
        "provinceCode": "33"
    }, 
    {
        "code": "330110", 
        "name": "余杭区", 
        "cityCode": "3301", 
        "provinceCode": "33"
    }, 
    {
        "code": "330111", 
        "name": "富阳区", 
        "cityCode": "3301", 
        "provinceCode": "33"
    }, 
    {
        "code": "330112", 
        "name": "临安区", 
        "cityCode": "3301", 
        "provinceCode": "33"
    }, 
    {
        "code": "330122", 
        "name": "桐庐县", 
        "cityCode": "3301", 
        "provinceCode": "33"
    }, 
    {
        "code": "330127", 
        "name": "淳安县", 
        "cityCode": "3301", 
        "provinceCode": "33"
    }, 
    {
        "code": "330182", 
        "name": "建德市", 
        "cityCode": "3301", 
        "provinceCode": "33"
    }, 
    {
        "code": "330203", 
        "name": "海曙区", 
        "cityCode": "3302", 
        "provinceCode": "33"
    }, 
    {
        "code": "330205", 
        "name": "江北区", 
        "cityCode": "3302", 
        "provinceCode": "33"
    }, 
    {
        "code": "330206", 
        "name": "北仑区", 
        "cityCode": "3302", 
        "provinceCode": "33"
    }, 
    {
        "code": "330211", 
        "name": "镇海区", 
        "cityCode": "3302", 
        "provinceCode": "33"
    }, 
    {
        "code": "330212", 
        "name": "鄞州区", 
        "cityCode": "3302", 
        "provinceCode": "33"
    }, 
    {
        "code": "330213", 
        "name": "奉化区", 
        "cityCode": "3302", 
        "provinceCode": "33"
    }, 
    {
        "code": "330225", 
        "name": "象山县", 
        "cityCode": "3302", 
        "provinceCode": "33"
    }, 
    {
        "code": "330226", 
        "name": "宁海县", 
        "cityCode": "3302", 
        "provinceCode": "33"
    }, 
    {
        "code": "330281", 
        "name": "余姚市", 
        "cityCode": "3302", 
        "provinceCode": "33"
    }, 
    {
        "code": "330282", 
        "name": "慈溪市", 
        "cityCode": "3302", 
        "provinceCode": "33"
    }, 
    {
        "code": "330302", 
        "name": "鹿城区", 
        "cityCode": "3303", 
        "provinceCode": "33"
    }, 
    {
        "code": "330303", 
        "name": "龙湾区", 
        "cityCode": "3303", 
        "provinceCode": "33"
    }, 
    {
        "code": "330304", 
        "name": "瓯海区", 
        "cityCode": "3303", 
        "provinceCode": "33"
    }, 
    {
        "code": "330305", 
        "name": "洞头区", 
        "cityCode": "3303", 
        "provinceCode": "33"
    }, 
    {
        "code": "330324", 
        "name": "永嘉县", 
        "cityCode": "3303", 
        "provinceCode": "33"
    }, 
    {
        "code": "330326", 
        "name": "平阳县", 
        "cityCode": "3303", 
        "provinceCode": "33"
    }, 
    {
        "code": "330327", 
        "name": "苍南县", 
        "cityCode": "3303", 
        "provinceCode": "33"
    }, 
    {
        "code": "330328", 
        "name": "文成县", 
        "cityCode": "3303", 
        "provinceCode": "33"
    }, 
    {
        "code": "330329", 
        "name": "泰顺县", 
        "cityCode": "3303", 
        "provinceCode": "33"
    }, 
    {
        "code": "330371", 
        "name": "温州经济技术开发区", 
        "cityCode": "3303", 
        "provinceCode": "33"
    }, 
    {
        "code": "330381", 
        "name": "瑞安市", 
        "cityCode": "3303", 
        "provinceCode": "33"
    }, 
    {
        "code": "330382", 
        "name": "乐清市", 
        "cityCode": "3303", 
        "provinceCode": "33"
    }, 
    {
        "code": "330402", 
        "name": "南湖区", 
        "cityCode": "3304", 
        "provinceCode": "33"
    }, 
    {
        "code": "330411", 
        "name": "秀洲区", 
        "cityCode": "3304", 
        "provinceCode": "33"
    }, 
    {
        "code": "330421", 
        "name": "嘉善县", 
        "cityCode": "3304", 
        "provinceCode": "33"
    }, 
    {
        "code": "330424", 
        "name": "海盐县", 
        "cityCode": "3304", 
        "provinceCode": "33"
    }, 
    {
        "code": "330481", 
        "name": "海宁市", 
        "cityCode": "3304", 
        "provinceCode": "33"
    }, 
    {
        "code": "330482", 
        "name": "平湖市", 
        "cityCode": "3304", 
        "provinceCode": "33"
    }, 
    {
        "code": "330483", 
        "name": "桐乡市", 
        "cityCode": "3304", 
        "provinceCode": "33"
    }, 
    {
        "code": "330502", 
        "name": "吴兴区", 
        "cityCode": "3305", 
        "provinceCode": "33"
    }, 
    {
        "code": "330503", 
        "name": "南浔区", 
        "cityCode": "3305", 
        "provinceCode": "33"
    }, 
    {
        "code": "330521", 
        "name": "德清县", 
        "cityCode": "3305", 
        "provinceCode": "33"
    }, 
    {
        "code": "330522", 
        "name": "长兴县", 
        "cityCode": "3305", 
        "provinceCode": "33"
    }, 
    {
        "code": "330523", 
        "name": "安吉县", 
        "cityCode": "3305", 
        "provinceCode": "33"
    }, 
    {
        "code": "330602", 
        "name": "越城区", 
        "cityCode": "3306", 
        "provinceCode": "33"
    }, 
    {
        "code": "330603", 
        "name": "柯桥区", 
        "cityCode": "3306", 
        "provinceCode": "33"
    }, 
    {
        "code": "330604", 
        "name": "上虞区", 
        "cityCode": "3306", 
        "provinceCode": "33"
    }, 
    {
        "code": "330624", 
        "name": "新昌县", 
        "cityCode": "3306", 
        "provinceCode": "33"
    }, 
    {
        "code": "330681", 
        "name": "诸暨市", 
        "cityCode": "3306", 
        "provinceCode": "33"
    }, 
    {
        "code": "330683", 
        "name": "嵊州市", 
        "cityCode": "3306", 
        "provinceCode": "33"
    }, 
    {
        "code": "330702", 
        "name": "婺城区", 
        "cityCode": "3307", 
        "provinceCode": "33"
    }, 
    {
        "code": "330703", 
        "name": "金东区", 
        "cityCode": "3307", 
        "provinceCode": "33"
    }, 
    {
        "code": "330723", 
        "name": "武义县", 
        "cityCode": "3307", 
        "provinceCode": "33"
    }, 
    {
        "code": "330726", 
        "name": "浦江县", 
        "cityCode": "3307", 
        "provinceCode": "33"
    }, 
    {
        "code": "330727", 
        "name": "磐安县", 
        "cityCode": "3307", 
        "provinceCode": "33"
    }, 
    {
        "code": "330781", 
        "name": "兰溪市", 
        "cityCode": "3307", 
        "provinceCode": "33"
    }, 
    {
        "code": "330782", 
        "name": "义乌市", 
        "cityCode": "3307", 
        "provinceCode": "33"
    }, 
    {
        "code": "330783", 
        "name": "东阳市", 
        "cityCode": "3307", 
        "provinceCode": "33"
    }, 
    {
        "code": "330784", 
        "name": "永康市", 
        "cityCode": "3307", 
        "provinceCode": "33"
    }, 
    {
        "code": "330802", 
        "name": "柯城区", 
        "cityCode": "3308", 
        "provinceCode": "33"
    }, 
    {
        "code": "330803", 
        "name": "衢江区", 
        "cityCode": "3308", 
        "provinceCode": "33"
    }, 
    {
        "code": "330822", 
        "name": "常山县", 
        "cityCode": "3308", 
        "provinceCode": "33"
    }, 
    {
        "code": "330824", 
        "name": "开化县", 
        "cityCode": "3308", 
        "provinceCode": "33"
    }, 
    {
        "code": "330825", 
        "name": "龙游县", 
        "cityCode": "3308", 
        "provinceCode": "33"
    }, 
    {
        "code": "330881", 
        "name": "江山市", 
        "cityCode": "3308", 
        "provinceCode": "33"
    }, 
    {
        "code": "330902", 
        "name": "定海区", 
        "cityCode": "3309", 
        "provinceCode": "33"
    }, 
    {
        "code": "330903", 
        "name": "普陀区", 
        "cityCode": "3309", 
        "provinceCode": "33"
    }, 
    {
        "code": "330921", 
        "name": "岱山县", 
        "cityCode": "3309", 
        "provinceCode": "33"
    }, 
    {
        "code": "330922", 
        "name": "嵊泗县", 
        "cityCode": "3309", 
        "provinceCode": "33"
    }, 
    {
        "code": "331002", 
        "name": "椒江区", 
        "cityCode": "3310", 
        "provinceCode": "33"
    }, 
    {
        "code": "331003", 
        "name": "黄岩区", 
        "cityCode": "3310", 
        "provinceCode": "33"
    }, 
    {
        "code": "331004", 
        "name": "路桥区", 
        "cityCode": "3310", 
        "provinceCode": "33"
    }, 
    {
        "code": "331022", 
        "name": "三门县", 
        "cityCode": "3310", 
        "provinceCode": "33"
    }, 
    {
        "code": "331023", 
        "name": "天台县", 
        "cityCode": "3310", 
        "provinceCode": "33"
    }, 
    {
        "code": "331024", 
        "name": "仙居县", 
        "cityCode": "3310", 
        "provinceCode": "33"
    }, 
    {
        "code": "331081", 
        "name": "温岭市", 
        "cityCode": "3310", 
        "provinceCode": "33"
    }, 
    {
        "code": "331082", 
        "name": "临海市", 
        "cityCode": "3310", 
        "provinceCode": "33"
    }, 
    {
        "code": "331083", 
        "name": "玉环市", 
        "cityCode": "3310", 
        "provinceCode": "33"
    }, 
    {
        "code": "331102", 
        "name": "莲都区", 
        "cityCode": "3311", 
        "provinceCode": "33"
    }, 
    {
        "code": "331121", 
        "name": "青田县", 
        "cityCode": "3311", 
        "provinceCode": "33"
    }, 
    {
        "code": "331122", 
        "name": "缙云县", 
        "cityCode": "3311", 
        "provinceCode": "33"
    }, 
    {
        "code": "331123", 
        "name": "遂昌县", 
        "cityCode": "3311", 
        "provinceCode": "33"
    }, 
    {
        "code": "331124", 
        "name": "松阳县", 
        "cityCode": "3311", 
        "provinceCode": "33"
    }, 
    {
        "code": "331125", 
        "name": "云和县", 
        "cityCode": "3311", 
        "provinceCode": "33"
    }, 
    {
        "code": "331126", 
        "name": "庆元县", 
        "cityCode": "3311", 
        "provinceCode": "33"
    }, 
    {
        "code": "331127", 
        "name": "景宁畲族自治县", 
        "cityCode": "3311", 
        "provinceCode": "33"
    }, 
    {
        "code": "331181", 
        "name": "龙泉市", 
        "cityCode": "3311", 
        "provinceCode": "33"
    }, 
    {
        "code": "340102", 
        "name": "瑶海区", 
        "cityCode": "3401", 
        "provinceCode": "34"
    }, 
    {
        "code": "340103", 
        "name": "庐阳区", 
        "cityCode": "3401", 
        "provinceCode": "34"
    }, 
    {
        "code": "340104", 
        "name": "蜀山区", 
        "cityCode": "3401", 
        "provinceCode": "34"
    }, 
    {
        "code": "340111", 
        "name": "包河区", 
        "cityCode": "3401", 
        "provinceCode": "34"
    }, 
    {
        "code": "340121", 
        "name": "长丰县", 
        "cityCode": "3401", 
        "provinceCode": "34"
    }, 
    {
        "code": "340122", 
        "name": "肥东县", 
        "cityCode": "3401", 
        "provinceCode": "34"
    }, 
    {
        "code": "340123", 
        "name": "肥西县", 
        "cityCode": "3401", 
        "provinceCode": "34"
    }, 
    {
        "code": "340124", 
        "name": "庐江县", 
        "cityCode": "3401", 
        "provinceCode": "34"
    }, 
    {
        "code": "340171", 
        "name": "合肥高新技术产业开发区", 
        "cityCode": "3401", 
        "provinceCode": "34"
    }, 
    {
        "code": "340172", 
        "name": "合肥经济技术开发区", 
        "cityCode": "3401", 
        "provinceCode": "34"
    }, 
    {
        "code": "340173", 
        "name": "合肥新站高新技术产业开发区", 
        "cityCode": "3401", 
        "provinceCode": "34"
    }, 
    {
        "code": "340181", 
        "name": "巢湖市", 
        "cityCode": "3401", 
        "provinceCode": "34"
    }, 
    {
        "code": "340202", 
        "name": "镜湖区", 
        "cityCode": "3402", 
        "provinceCode": "34"
    }, 
    {
        "code": "340203", 
        "name": "弋江区", 
        "cityCode": "3402", 
        "provinceCode": "34"
    }, 
    {
        "code": "340207", 
        "name": "鸠江区", 
        "cityCode": "3402", 
        "provinceCode": "34"
    }, 
    {
        "code": "340208", 
        "name": "三山区", 
        "cityCode": "3402", 
        "provinceCode": "34"
    }, 
    {
        "code": "340221", 
        "name": "芜湖县", 
        "cityCode": "3402", 
        "provinceCode": "34"
    }, 
    {
        "code": "340222", 
        "name": "繁昌县", 
        "cityCode": "3402", 
        "provinceCode": "34"
    }, 
    {
        "code": "340223", 
        "name": "南陵县", 
        "cityCode": "3402", 
        "provinceCode": "34"
    }, 
    {
        "code": "340225", 
        "name": "无为县", 
        "cityCode": "3402", 
        "provinceCode": "34"
    }, 
    {
        "code": "340271", 
        "name": "芜湖经济技术开发区", 
        "cityCode": "3402", 
        "provinceCode": "34"
    }, 
    {
        "code": "340272", 
        "name": "安徽芜湖长江大桥经济开发区", 
        "cityCode": "3402", 
        "provinceCode": "34"
    }, 
    {
        "code": "340302", 
        "name": "龙子湖区", 
        "cityCode": "3403", 
        "provinceCode": "34"
    }, 
    {
        "code": "340303", 
        "name": "蚌山区", 
        "cityCode": "3403", 
        "provinceCode": "34"
    }, 
    {
        "code": "340304", 
        "name": "禹会区", 
        "cityCode": "3403", 
        "provinceCode": "34"
    }, 
    {
        "code": "340311", 
        "name": "淮上区", 
        "cityCode": "3403", 
        "provinceCode": "34"
    }, 
    {
        "code": "340321", 
        "name": "怀远县", 
        "cityCode": "3403", 
        "provinceCode": "34"
    }, 
    {
        "code": "340322", 
        "name": "五河县", 
        "cityCode": "3403", 
        "provinceCode": "34"
    }, 
    {
        "code": "340323", 
        "name": "固镇县", 
        "cityCode": "3403", 
        "provinceCode": "34"
    }, 
    {
        "code": "340371", 
        "name": "蚌埠市高新技术开发区", 
        "cityCode": "3403", 
        "provinceCode": "34"
    }, 
    {
        "code": "340372", 
        "name": "蚌埠市经济开发区", 
        "cityCode": "3403", 
        "provinceCode": "34"
    }, 
    {
        "code": "340402", 
        "name": "大通区", 
        "cityCode": "3404", 
        "provinceCode": "34"
    }, 
    {
        "code": "340403", 
        "name": "田家庵区", 
        "cityCode": "3404", 
        "provinceCode": "34"
    }, 
    {
        "code": "340404", 
        "name": "谢家集区", 
        "cityCode": "3404", 
        "provinceCode": "34"
    }, 
    {
        "code": "340405", 
        "name": "八公山区", 
        "cityCode": "3404", 
        "provinceCode": "34"
    }, 
    {
        "code": "340406", 
        "name": "潘集区", 
        "cityCode": "3404", 
        "provinceCode": "34"
    }, 
    {
        "code": "340421", 
        "name": "凤台县", 
        "cityCode": "3404", 
        "provinceCode": "34"
    }, 
    {
        "code": "340422", 
        "name": "寿县", 
        "cityCode": "3404", 
        "provinceCode": "34"
    }, 
    {
        "code": "340503", 
        "name": "花山区", 
        "cityCode": "3405", 
        "provinceCode": "34"
    }, 
    {
        "code": "340504", 
        "name": "雨山区", 
        "cityCode": "3405", 
        "provinceCode": "34"
    }, 
    {
        "code": "340506", 
        "name": "博望区", 
        "cityCode": "3405", 
        "provinceCode": "34"
    }, 
    {
        "code": "340521", 
        "name": "当涂县", 
        "cityCode": "3405", 
        "provinceCode": "34"
    }, 
    {
        "code": "340522", 
        "name": "含山县", 
        "cityCode": "3405", 
        "provinceCode": "34"
    }, 
    {
        "code": "340523", 
        "name": "和县", 
        "cityCode": "3405", 
        "provinceCode": "34"
    }, 
    {
        "code": "340602", 
        "name": "杜集区", 
        "cityCode": "3406", 
        "provinceCode": "34"
    }, 
    {
        "code": "340603", 
        "name": "相山区", 
        "cityCode": "3406", 
        "provinceCode": "34"
    }, 
    {
        "code": "340604", 
        "name": "烈山区", 
        "cityCode": "3406", 
        "provinceCode": "34"
    }, 
    {
        "code": "340621", 
        "name": "濉溪县", 
        "cityCode": "3406", 
        "provinceCode": "34"
    }, 
    {
        "code": "340705", 
        "name": "铜官区", 
        "cityCode": "3407", 
        "provinceCode": "34"
    }, 
    {
        "code": "340706", 
        "name": "义安区", 
        "cityCode": "3407", 
        "provinceCode": "34"
    }, 
    {
        "code": "340711", 
        "name": "郊区", 
        "cityCode": "3407", 
        "provinceCode": "34"
    }, 
    {
        "code": "340722", 
        "name": "枞阳县", 
        "cityCode": "3407", 
        "provinceCode": "34"
    }, 
    {
        "code": "340802", 
        "name": "迎江区", 
        "cityCode": "3408", 
        "provinceCode": "34"
    }, 
    {
        "code": "340803", 
        "name": "大观区", 
        "cityCode": "3408", 
        "provinceCode": "34"
    }, 
    {
        "code": "340811", 
        "name": "宜秀区", 
        "cityCode": "3408", 
        "provinceCode": "34"
    }, 
    {
        "code": "340822", 
        "name": "怀宁县", 
        "cityCode": "3408", 
        "provinceCode": "34"
    }, 
    {
        "code": "340824", 
        "name": "潜山县", 
        "cityCode": "3408", 
        "provinceCode": "34"
    }, 
    {
        "code": "340825", 
        "name": "太湖县", 
        "cityCode": "3408", 
        "provinceCode": "34"
    }, 
    {
        "code": "340826", 
        "name": "宿松县", 
        "cityCode": "3408", 
        "provinceCode": "34"
    }, 
    {
        "code": "340827", 
        "name": "望江县", 
        "cityCode": "3408", 
        "provinceCode": "34"
    }, 
    {
        "code": "340828", 
        "name": "岳西县", 
        "cityCode": "3408", 
        "provinceCode": "34"
    }, 
    {
        "code": "340871", 
        "name": "安徽安庆经济开发区", 
        "cityCode": "3408", 
        "provinceCode": "34"
    }, 
    {
        "code": "340881", 
        "name": "桐城市", 
        "cityCode": "3408", 
        "provinceCode": "34"
    }, 
    {
        "code": "341002", 
        "name": "屯溪区", 
        "cityCode": "3410", 
        "provinceCode": "34"
    }, 
    {
        "code": "341003", 
        "name": "黄山区", 
        "cityCode": "3410", 
        "provinceCode": "34"
    }, 
    {
        "code": "341004", 
        "name": "徽州区", 
        "cityCode": "3410", 
        "provinceCode": "34"
    }, 
    {
        "code": "341021", 
        "name": "歙县", 
        "cityCode": "3410", 
        "provinceCode": "34"
    }, 
    {
        "code": "341022", 
        "name": "休宁县", 
        "cityCode": "3410", 
        "provinceCode": "34"
    }, 
    {
        "code": "341023", 
        "name": "黟县", 
        "cityCode": "3410", 
        "provinceCode": "34"
    }, 
    {
        "code": "341024", 
        "name": "祁门县", 
        "cityCode": "3410", 
        "provinceCode": "34"
    }, 
    {
        "code": "341102", 
        "name": "琅琊区", 
        "cityCode": "3411", 
        "provinceCode": "34"
    }, 
    {
        "code": "341103", 
        "name": "南谯区", 
        "cityCode": "3411", 
        "provinceCode": "34"
    }, 
    {
        "code": "341122", 
        "name": "来安县", 
        "cityCode": "3411", 
        "provinceCode": "34"
    }, 
    {
        "code": "341124", 
        "name": "全椒县", 
        "cityCode": "3411", 
        "provinceCode": "34"
    }, 
    {
        "code": "341125", 
        "name": "定远县", 
        "cityCode": "3411", 
        "provinceCode": "34"
    }, 
    {
        "code": "341126", 
        "name": "凤阳县", 
        "cityCode": "3411", 
        "provinceCode": "34"
    }, 
    {
        "code": "341171", 
        "name": "苏滁现代产业园", 
        "cityCode": "3411", 
        "provinceCode": "34"
    }, 
    {
        "code": "341172", 
        "name": "滁州经济技术开发区", 
        "cityCode": "3411", 
        "provinceCode": "34"
    }, 
    {
        "code": "341181", 
        "name": "天长市", 
        "cityCode": "3411", 
        "provinceCode": "34"
    }, 
    {
        "code": "341182", 
        "name": "明光市", 
        "cityCode": "3411", 
        "provinceCode": "34"
    }, 
    {
        "code": "341202", 
        "name": "颍州区", 
        "cityCode": "3412", 
        "provinceCode": "34"
    }, 
    {
        "code": "341203", 
        "name": "颍东区", 
        "cityCode": "3412", 
        "provinceCode": "34"
    }, 
    {
        "code": "341204", 
        "name": "颍泉区", 
        "cityCode": "3412", 
        "provinceCode": "34"
    }, 
    {
        "code": "341221", 
        "name": "临泉县", 
        "cityCode": "3412", 
        "provinceCode": "34"
    }, 
    {
        "code": "341222", 
        "name": "太和县", 
        "cityCode": "3412", 
        "provinceCode": "34"
    }, 
    {
        "code": "341225", 
        "name": "阜南县", 
        "cityCode": "3412", 
        "provinceCode": "34"
    }, 
    {
        "code": "341226", 
        "name": "颍上县", 
        "cityCode": "3412", 
        "provinceCode": "34"
    }, 
    {
        "code": "341271", 
        "name": "阜阳合肥现代产业园区", 
        "cityCode": "3412", 
        "provinceCode": "34"
    }, 
    {
        "code": "341272", 
        "name": "阜阳经济技术开发区", 
        "cityCode": "3412", 
        "provinceCode": "34"
    }, 
    {
        "code": "341282", 
        "name": "界首市", 
        "cityCode": "3412", 
        "provinceCode": "34"
    }, 
    {
        "code": "341302", 
        "name": "埇桥区", 
        "cityCode": "3413", 
        "provinceCode": "34"
    }, 
    {
        "code": "341321", 
        "name": "砀山县", 
        "cityCode": "3413", 
        "provinceCode": "34"
    }, 
    {
        "code": "341322", 
        "name": "萧县", 
        "cityCode": "3413", 
        "provinceCode": "34"
    }, 
    {
        "code": "341323", 
        "name": "灵璧县", 
        "cityCode": "3413", 
        "provinceCode": "34"
    }, 
    {
        "code": "341324", 
        "name": "泗县", 
        "cityCode": "3413", 
        "provinceCode": "34"
    }, 
    {
        "code": "341371", 
        "name": "宿州马鞍山现代产业园区", 
        "cityCode": "3413", 
        "provinceCode": "34"
    }, 
    {
        "code": "341372", 
        "name": "宿州经济技术开发区", 
        "cityCode": "3413", 
        "provinceCode": "34"
    }, 
    {
        "code": "341502", 
        "name": "金安区", 
        "cityCode": "3415", 
        "provinceCode": "34"
    }, 
    {
        "code": "341503", 
        "name": "裕安区", 
        "cityCode": "3415", 
        "provinceCode": "34"
    }, 
    {
        "code": "341504", 
        "name": "叶集区", 
        "cityCode": "3415", 
        "provinceCode": "34"
    }, 
    {
        "code": "341522", 
        "name": "霍邱县", 
        "cityCode": "3415", 
        "provinceCode": "34"
    }, 
    {
        "code": "341523", 
        "name": "舒城县", 
        "cityCode": "3415", 
        "provinceCode": "34"
    }, 
    {
        "code": "341524", 
        "name": "金寨县", 
        "cityCode": "3415", 
        "provinceCode": "34"
    }, 
    {
        "code": "341525", 
        "name": "霍山县", 
        "cityCode": "3415", 
        "provinceCode": "34"
    }, 
    {
        "code": "341602", 
        "name": "谯城区", 
        "cityCode": "3416", 
        "provinceCode": "34"
    }, 
    {
        "code": "341621", 
        "name": "涡阳县", 
        "cityCode": "3416", 
        "provinceCode": "34"
    }, 
    {
        "code": "341622", 
        "name": "蒙城县", 
        "cityCode": "3416", 
        "provinceCode": "34"
    }, 
    {
        "code": "341623", 
        "name": "利辛县", 
        "cityCode": "3416", 
        "provinceCode": "34"
    }, 
    {
        "code": "341702", 
        "name": "贵池区", 
        "cityCode": "3417", 
        "provinceCode": "34"
    }, 
    {
        "code": "341721", 
        "name": "东至县", 
        "cityCode": "3417", 
        "provinceCode": "34"
    }, 
    {
        "code": "341722", 
        "name": "石台县", 
        "cityCode": "3417", 
        "provinceCode": "34"
    }, 
    {
        "code": "341723", 
        "name": "青阳县", 
        "cityCode": "3417", 
        "provinceCode": "34"
    }, 
    {
        "code": "341802", 
        "name": "宣州区", 
        "cityCode": "3418", 
        "provinceCode": "34"
    }, 
    {
        "code": "341821", 
        "name": "郎溪县", 
        "cityCode": "3418", 
        "provinceCode": "34"
    }, 
    {
        "code": "341822", 
        "name": "广德县", 
        "cityCode": "3418", 
        "provinceCode": "34"
    }, 
    {
        "code": "341823", 
        "name": "泾县", 
        "cityCode": "3418", 
        "provinceCode": "34"
    }, 
    {
        "code": "341824", 
        "name": "绩溪县", 
        "cityCode": "3418", 
        "provinceCode": "34"
    }, 
    {
        "code": "341825", 
        "name": "旌德县", 
        "cityCode": "3418", 
        "provinceCode": "34"
    }, 
    {
        "code": "341871", 
        "name": "宣城市经济开发区", 
        "cityCode": "3418", 
        "provinceCode": "34"
    }, 
    {
        "code": "341881", 
        "name": "宁国市", 
        "cityCode": "3418", 
        "provinceCode": "34"
    }, 
    {
        "code": "350102", 
        "name": "鼓楼区", 
        "cityCode": "3501", 
        "provinceCode": "35"
    }, 
    {
        "code": "350103", 
        "name": "台江区", 
        "cityCode": "3501", 
        "provinceCode": "35"
    }, 
    {
        "code": "350104", 
        "name": "仓山区", 
        "cityCode": "3501", 
        "provinceCode": "35"
    }, 
    {
        "code": "350105", 
        "name": "马尾区", 
        "cityCode": "3501", 
        "provinceCode": "35"
    }, 
    {
        "code": "350111", 
        "name": "晋安区", 
        "cityCode": "3501", 
        "provinceCode": "35"
    }, 
    {
        "code": "350121", 
        "name": "闽侯县", 
        "cityCode": "3501", 
        "provinceCode": "35"
    }, 
    {
        "code": "350122", 
        "name": "连江县", 
        "cityCode": "3501", 
        "provinceCode": "35"
    }, 
    {
        "code": "350123", 
        "name": "罗源县", 
        "cityCode": "3501", 
        "provinceCode": "35"
    }, 
    {
        "code": "350124", 
        "name": "闽清县", 
        "cityCode": "3501", 
        "provinceCode": "35"
    }, 
    {
        "code": "350125", 
        "name": "永泰县", 
        "cityCode": "3501", 
        "provinceCode": "35"
    }, 
    {
        "code": "350128", 
        "name": "平潭县", 
        "cityCode": "3501", 
        "provinceCode": "35"
    }, 
    {
        "code": "350181", 
        "name": "福清市", 
        "cityCode": "3501", 
        "provinceCode": "35"
    }, 
    {
        "code": "350182", 
        "name": "长乐市", 
        "cityCode": "3501", 
        "provinceCode": "35"
    }, 
    {
        "code": "350203", 
        "name": "思明区", 
        "cityCode": "3502", 
        "provinceCode": "35"
    }, 
    {
        "code": "350205", 
        "name": "海沧区", 
        "cityCode": "3502", 
        "provinceCode": "35"
    }, 
    {
        "code": "350206", 
        "name": "湖里区", 
        "cityCode": "3502", 
        "provinceCode": "35"
    }, 
    {
        "code": "350211", 
        "name": "集美区", 
        "cityCode": "3502", 
        "provinceCode": "35"
    }, 
    {
        "code": "350212", 
        "name": "同安区", 
        "cityCode": "3502", 
        "provinceCode": "35"
    }, 
    {
        "code": "350213", 
        "name": "翔安区", 
        "cityCode": "3502", 
        "provinceCode": "35"
    }, 
    {
        "code": "350302", 
        "name": "城厢区", 
        "cityCode": "3503", 
        "provinceCode": "35"
    }, 
    {
        "code": "350303", 
        "name": "涵江区", 
        "cityCode": "3503", 
        "provinceCode": "35"
    }, 
    {
        "code": "350304", 
        "name": "荔城区", 
        "cityCode": "3503", 
        "provinceCode": "35"
    }, 
    {
        "code": "350305", 
        "name": "秀屿区", 
        "cityCode": "3503", 
        "provinceCode": "35"
    }, 
    {
        "code": "350322", 
        "name": "仙游县", 
        "cityCode": "3503", 
        "provinceCode": "35"
    }, 
    {
        "code": "350402", 
        "name": "梅列区", 
        "cityCode": "3504", 
        "provinceCode": "35"
    }, 
    {
        "code": "350403", 
        "name": "三元区", 
        "cityCode": "3504", 
        "provinceCode": "35"
    }, 
    {
        "code": "350421", 
        "name": "明溪县", 
        "cityCode": "3504", 
        "provinceCode": "35"
    }, 
    {
        "code": "350423", 
        "name": "清流县", 
        "cityCode": "3504", 
        "provinceCode": "35"
    }, 
    {
        "code": "350424", 
        "name": "宁化县", 
        "cityCode": "3504", 
        "provinceCode": "35"
    }, 
    {
        "code": "350425", 
        "name": "大田县", 
        "cityCode": "3504", 
        "provinceCode": "35"
    }, 
    {
        "code": "350426", 
        "name": "尤溪县", 
        "cityCode": "3504", 
        "provinceCode": "35"
    }, 
    {
        "code": "350427", 
        "name": "沙县", 
        "cityCode": "3504", 
        "provinceCode": "35"
    }, 
    {
        "code": "350428", 
        "name": "将乐县", 
        "cityCode": "3504", 
        "provinceCode": "35"
    }, 
    {
        "code": "350429", 
        "name": "泰宁县", 
        "cityCode": "3504", 
        "provinceCode": "35"
    }, 
    {
        "code": "350430", 
        "name": "建宁县", 
        "cityCode": "3504", 
        "provinceCode": "35"
    }, 
    {
        "code": "350481", 
        "name": "永安市", 
        "cityCode": "3504", 
        "provinceCode": "35"
    }, 
    {
        "code": "350502", 
        "name": "鲤城区", 
        "cityCode": "3505", 
        "provinceCode": "35"
    }, 
    {
        "code": "350503", 
        "name": "丰泽区", 
        "cityCode": "3505", 
        "provinceCode": "35"
    }, 
    {
        "code": "350504", 
        "name": "洛江区", 
        "cityCode": "3505", 
        "provinceCode": "35"
    }, 
    {
        "code": "350505", 
        "name": "泉港区", 
        "cityCode": "3505", 
        "provinceCode": "35"
    }, 
    {
        "code": "350521", 
        "name": "惠安县", 
        "cityCode": "3505", 
        "provinceCode": "35"
    }, 
    {
        "code": "350524", 
        "name": "安溪县", 
        "cityCode": "3505", 
        "provinceCode": "35"
    }, 
    {
        "code": "350525", 
        "name": "永春县", 
        "cityCode": "3505", 
        "provinceCode": "35"
    }, 
    {
        "code": "350526", 
        "name": "德化县", 
        "cityCode": "3505", 
        "provinceCode": "35"
    }, 
    {
        "code": "350527", 
        "name": "金门县", 
        "cityCode": "3505", 
        "provinceCode": "35"
    }, 
    {
        "code": "350581", 
        "name": "石狮市", 
        "cityCode": "3505", 
        "provinceCode": "35"
    }, 
    {
        "code": "350582", 
        "name": "晋江市", 
        "cityCode": "3505", 
        "provinceCode": "35"
    }, 
    {
        "code": "350583", 
        "name": "南安市", 
        "cityCode": "3505", 
        "provinceCode": "35"
    }, 
    {
        "code": "350602", 
        "name": "芗城区", 
        "cityCode": "3506", 
        "provinceCode": "35"
    }, 
    {
        "code": "350603", 
        "name": "龙文区", 
        "cityCode": "3506", 
        "provinceCode": "35"
    }, 
    {
        "code": "350622", 
        "name": "云霄县", 
        "cityCode": "3506", 
        "provinceCode": "35"
    }, 
    {
        "code": "350623", 
        "name": "漳浦县", 
        "cityCode": "3506", 
        "provinceCode": "35"
    }, 
    {
        "code": "350624", 
        "name": "诏安县", 
        "cityCode": "3506", 
        "provinceCode": "35"
    }, 
    {
        "code": "350625", 
        "name": "长泰县", 
        "cityCode": "3506", 
        "provinceCode": "35"
    }, 
    {
        "code": "350626", 
        "name": "东山县", 
        "cityCode": "3506", 
        "provinceCode": "35"
    }, 
    {
        "code": "350627", 
        "name": "南靖县", 
        "cityCode": "3506", 
        "provinceCode": "35"
    }, 
    {
        "code": "350628", 
        "name": "平和县", 
        "cityCode": "3506", 
        "provinceCode": "35"
    }, 
    {
        "code": "350629", 
        "name": "华安县", 
        "cityCode": "3506", 
        "provinceCode": "35"
    }, 
    {
        "code": "350681", 
        "name": "龙海市", 
        "cityCode": "3506", 
        "provinceCode": "35"
    }, 
    {
        "code": "350702", 
        "name": "延平区", 
        "cityCode": "3507", 
        "provinceCode": "35"
    }, 
    {
        "code": "350703", 
        "name": "建阳区", 
        "cityCode": "3507", 
        "provinceCode": "35"
    }, 
    {
        "code": "350721", 
        "name": "顺昌县", 
        "cityCode": "3507", 
        "provinceCode": "35"
    }, 
    {
        "code": "350722", 
        "name": "浦城县", 
        "cityCode": "3507", 
        "provinceCode": "35"
    }, 
    {
        "code": "350723", 
        "name": "光泽县", 
        "cityCode": "3507", 
        "provinceCode": "35"
    }, 
    {
        "code": "350724", 
        "name": "松溪县", 
        "cityCode": "3507", 
        "provinceCode": "35"
    }, 
    {
        "code": "350725", 
        "name": "政和县", 
        "cityCode": "3507", 
        "provinceCode": "35"
    }, 
    {
        "code": "350781", 
        "name": "邵武市", 
        "cityCode": "3507", 
        "provinceCode": "35"
    }, 
    {
        "code": "350782", 
        "name": "武夷山市", 
        "cityCode": "3507", 
        "provinceCode": "35"
    }, 
    {
        "code": "350783", 
        "name": "建瓯市", 
        "cityCode": "3507", 
        "provinceCode": "35"
    }, 
    {
        "code": "350802", 
        "name": "新罗区", 
        "cityCode": "3508", 
        "provinceCode": "35"
    }, 
    {
        "code": "350803", 
        "name": "永定区", 
        "cityCode": "3508", 
        "provinceCode": "35"
    }, 
    {
        "code": "350821", 
        "name": "长汀县", 
        "cityCode": "3508", 
        "provinceCode": "35"
    }, 
    {
        "code": "350823", 
        "name": "上杭县", 
        "cityCode": "3508", 
        "provinceCode": "35"
    }, 
    {
        "code": "350824", 
        "name": "武平县", 
        "cityCode": "3508", 
        "provinceCode": "35"
    }, 
    {
        "code": "350825", 
        "name": "连城县", 
        "cityCode": "3508", 
        "provinceCode": "35"
    }, 
    {
        "code": "350881", 
        "name": "漳平市", 
        "cityCode": "3508", 
        "provinceCode": "35"
    }, 
    {
        "code": "350902", 
        "name": "蕉城区", 
        "cityCode": "3509", 
        "provinceCode": "35"
    }, 
    {
        "code": "350921", 
        "name": "霞浦县", 
        "cityCode": "3509", 
        "provinceCode": "35"
    }, 
    {
        "code": "350922", 
        "name": "古田县", 
        "cityCode": "3509", 
        "provinceCode": "35"
    }, 
    {
        "code": "350923", 
        "name": "屏南县", 
        "cityCode": "3509", 
        "provinceCode": "35"
    }, 
    {
        "code": "350924", 
        "name": "寿宁县", 
        "cityCode": "3509", 
        "provinceCode": "35"
    }, 
    {
        "code": "350925", 
        "name": "周宁县", 
        "cityCode": "3509", 
        "provinceCode": "35"
    }, 
    {
        "code": "350926", 
        "name": "柘荣县", 
        "cityCode": "3509", 
        "provinceCode": "35"
    }, 
    {
        "code": "350981", 
        "name": "福安市", 
        "cityCode": "3509", 
        "provinceCode": "35"
    }, 
    {
        "code": "350982", 
        "name": "福鼎市", 
        "cityCode": "3509", 
        "provinceCode": "35"
    }, 
    {
        "code": "360102", 
        "name": "东湖区", 
        "cityCode": "3601", 
        "provinceCode": "36"
    }, 
    {
        "code": "360103", 
        "name": "西湖区", 
        "cityCode": "3601", 
        "provinceCode": "36"
    }, 
    {
        "code": "360104", 
        "name": "青云谱区", 
        "cityCode": "3601", 
        "provinceCode": "36"
    }, 
    {
        "code": "360105", 
        "name": "湾里区", 
        "cityCode": "3601", 
        "provinceCode": "36"
    }, 
    {
        "code": "360111", 
        "name": "青山湖区", 
        "cityCode": "3601", 
        "provinceCode": "36"
    }, 
    {
        "code": "360112", 
        "name": "新建区", 
        "cityCode": "3601", 
        "provinceCode": "36"
    }, 
    {
        "code": "360121", 
        "name": "南昌县", 
        "cityCode": "3601", 
        "provinceCode": "36"
    }, 
    {
        "code": "360123", 
        "name": "安义县", 
        "cityCode": "3601", 
        "provinceCode": "36"
    }, 
    {
        "code": "360124", 
        "name": "进贤县", 
        "cityCode": "3601", 
        "provinceCode": "36"
    }, 
    {
        "code": "360202", 
        "name": "昌江区", 
        "cityCode": "3602", 
        "provinceCode": "36"
    }, 
    {
        "code": "360203", 
        "name": "珠山区", 
        "cityCode": "3602", 
        "provinceCode": "36"
    }, 
    {
        "code": "360222", 
        "name": "浮梁县", 
        "cityCode": "3602", 
        "provinceCode": "36"
    }, 
    {
        "code": "360281", 
        "name": "乐平市", 
        "cityCode": "3602", 
        "provinceCode": "36"
    }, 
    {
        "code": "360302", 
        "name": "安源区", 
        "cityCode": "3603", 
        "provinceCode": "36"
    }, 
    {
        "code": "360313", 
        "name": "湘东区", 
        "cityCode": "3603", 
        "provinceCode": "36"
    }, 
    {
        "code": "360321", 
        "name": "莲花县", 
        "cityCode": "3603", 
        "provinceCode": "36"
    }, 
    {
        "code": "360322", 
        "name": "上栗县", 
        "cityCode": "3603", 
        "provinceCode": "36"
    }, 
    {
        "code": "360323", 
        "name": "芦溪县", 
        "cityCode": "3603", 
        "provinceCode": "36"
    }, 
    {
        "code": "360402", 
        "name": "濂溪区", 
        "cityCode": "3604", 
        "provinceCode": "36"
    }, 
    {
        "code": "360403", 
        "name": "浔阳区", 
        "cityCode": "3604", 
        "provinceCode": "36"
    }, 
    {
        "code": "360404", 
        "name": "柴桑区", 
        "cityCode": "3604", 
        "provinceCode": "36"
    }, 
    {
        "code": "360423", 
        "name": "武宁县", 
        "cityCode": "3604", 
        "provinceCode": "36"
    }, 
    {
        "code": "360424", 
        "name": "修水县", 
        "cityCode": "3604", 
        "provinceCode": "36"
    }, 
    {
        "code": "360425", 
        "name": "永修县", 
        "cityCode": "3604", 
        "provinceCode": "36"
    }, 
    {
        "code": "360426", 
        "name": "德安县", 
        "cityCode": "3604", 
        "provinceCode": "36"
    }, 
    {
        "code": "360428", 
        "name": "都昌县", 
        "cityCode": "3604", 
        "provinceCode": "36"
    }, 
    {
        "code": "360429", 
        "name": "湖口县", 
        "cityCode": "3604", 
        "provinceCode": "36"
    }, 
    {
        "code": "360430", 
        "name": "彭泽县", 
        "cityCode": "3604", 
        "provinceCode": "36"
    }, 
    {
        "code": "360481", 
        "name": "瑞昌市", 
        "cityCode": "3604", 
        "provinceCode": "36"
    }, 
    {
        "code": "360482", 
        "name": "共青城市", 
        "cityCode": "3604", 
        "provinceCode": "36"
    }, 
    {
        "code": "360483", 
        "name": "庐山市", 
        "cityCode": "3604", 
        "provinceCode": "36"
    }, 
    {
        "code": "360502", 
        "name": "渝水区", 
        "cityCode": "3605", 
        "provinceCode": "36"
    }, 
    {
        "code": "360521", 
        "name": "分宜县", 
        "cityCode": "3605", 
        "provinceCode": "36"
    }, 
    {
        "code": "360602", 
        "name": "月湖区", 
        "cityCode": "3606", 
        "provinceCode": "36"
    }, 
    {
        "code": "360622", 
        "name": "余江县", 
        "cityCode": "3606", 
        "provinceCode": "36"
    }, 
    {
        "code": "360681", 
        "name": "贵溪市", 
        "cityCode": "3606", 
        "provinceCode": "36"
    }, 
    {
        "code": "360702", 
        "name": "章贡区", 
        "cityCode": "3607", 
        "provinceCode": "36"
    }, 
    {
        "code": "360703", 
        "name": "南康区", 
        "cityCode": "3607", 
        "provinceCode": "36"
    }, 
    {
        "code": "360704", 
        "name": "赣县区", 
        "cityCode": "3607", 
        "provinceCode": "36"
    }, 
    {
        "code": "360722", 
        "name": "信丰县", 
        "cityCode": "3607", 
        "provinceCode": "36"
    }, 
    {
        "code": "360723", 
        "name": "大余县", 
        "cityCode": "3607", 
        "provinceCode": "36"
    }, 
    {
        "code": "360724", 
        "name": "上犹县", 
        "cityCode": "3607", 
        "provinceCode": "36"
    }, 
    {
        "code": "360725", 
        "name": "崇义县", 
        "cityCode": "3607", 
        "provinceCode": "36"
    }, 
    {
        "code": "360726", 
        "name": "安远县", 
        "cityCode": "3607", 
        "provinceCode": "36"
    }, 
    {
        "code": "360727", 
        "name": "龙南县", 
        "cityCode": "3607", 
        "provinceCode": "36"
    }, 
    {
        "code": "360728", 
        "name": "定南县", 
        "cityCode": "3607", 
        "provinceCode": "36"
    }, 
    {
        "code": "360729", 
        "name": "全南县", 
        "cityCode": "3607", 
        "provinceCode": "36"
    }, 
    {
        "code": "360730", 
        "name": "宁都县", 
        "cityCode": "3607", 
        "provinceCode": "36"
    }, 
    {
        "code": "360731", 
        "name": "于都县", 
        "cityCode": "3607", 
        "provinceCode": "36"
    }, 
    {
        "code": "360732", 
        "name": "兴国县", 
        "cityCode": "3607", 
        "provinceCode": "36"
    }, 
    {
        "code": "360733", 
        "name": "会昌县", 
        "cityCode": "3607", 
        "provinceCode": "36"
    }, 
    {
        "code": "360734", 
        "name": "寻乌县", 
        "cityCode": "3607", 
        "provinceCode": "36"
    }, 
    {
        "code": "360735", 
        "name": "石城县", 
        "cityCode": "3607", 
        "provinceCode": "36"
    }, 
    {
        "code": "360781", 
        "name": "瑞金市", 
        "cityCode": "3607", 
        "provinceCode": "36"
    }, 
    {
        "code": "360802", 
        "name": "吉州区", 
        "cityCode": "3608", 
        "provinceCode": "36"
    }, 
    {
        "code": "360803", 
        "name": "青原区", 
        "cityCode": "3608", 
        "provinceCode": "36"
    }, 
    {
        "code": "360821", 
        "name": "吉安县", 
        "cityCode": "3608", 
        "provinceCode": "36"
    }, 
    {
        "code": "360822", 
        "name": "吉水县", 
        "cityCode": "3608", 
        "provinceCode": "36"
    }, 
    {
        "code": "360823", 
        "name": "峡江县", 
        "cityCode": "3608", 
        "provinceCode": "36"
    }, 
    {
        "code": "360824", 
        "name": "新干县", 
        "cityCode": "3608", 
        "provinceCode": "36"
    }, 
    {
        "code": "360825", 
        "name": "永丰县", 
        "cityCode": "3608", 
        "provinceCode": "36"
    }, 
    {
        "code": "360826", 
        "name": "泰和县", 
        "cityCode": "3608", 
        "provinceCode": "36"
    }, 
    {
        "code": "360827", 
        "name": "遂川县", 
        "cityCode": "3608", 
        "provinceCode": "36"
    }, 
    {
        "code": "360828", 
        "name": "万安县", 
        "cityCode": "3608", 
        "provinceCode": "36"
    }, 
    {
        "code": "360829", 
        "name": "安福县", 
        "cityCode": "3608", 
        "provinceCode": "36"
    }, 
    {
        "code": "360830", 
        "name": "永新县", 
        "cityCode": "3608", 
        "provinceCode": "36"
    }, 
    {
        "code": "360881", 
        "name": "井冈山市", 
        "cityCode": "3608", 
        "provinceCode": "36"
    }, 
    {
        "code": "360902", 
        "name": "袁州区", 
        "cityCode": "3609", 
        "provinceCode": "36"
    }, 
    {
        "code": "360921", 
        "name": "奉新县", 
        "cityCode": "3609", 
        "provinceCode": "36"
    }, 
    {
        "code": "360922", 
        "name": "万载县", 
        "cityCode": "3609", 
        "provinceCode": "36"
    }, 
    {
        "code": "360923", 
        "name": "上高县", 
        "cityCode": "3609", 
        "provinceCode": "36"
    }, 
    {
        "code": "360924", 
        "name": "宜丰县", 
        "cityCode": "3609", 
        "provinceCode": "36"
    }, 
    {
        "code": "360925", 
        "name": "靖安县", 
        "cityCode": "3609", 
        "provinceCode": "36"
    }, 
    {
        "code": "360926", 
        "name": "铜鼓县", 
        "cityCode": "3609", 
        "provinceCode": "36"
    }, 
    {
        "code": "360981", 
        "name": "丰城市", 
        "cityCode": "3609", 
        "provinceCode": "36"
    }, 
    {
        "code": "360982", 
        "name": "樟树市", 
        "cityCode": "3609", 
        "provinceCode": "36"
    }, 
    {
        "code": "360983", 
        "name": "高安市", 
        "cityCode": "3609", 
        "provinceCode": "36"
    }, 
    {
        "code": "361002", 
        "name": "临川区", 
        "cityCode": "3610", 
        "provinceCode": "36"
    }, 
    {
        "code": "361003", 
        "name": "东乡区", 
        "cityCode": "3610", 
        "provinceCode": "36"
    }, 
    {
        "code": "361021", 
        "name": "南城县", 
        "cityCode": "3610", 
        "provinceCode": "36"
    }, 
    {
        "code": "361022", 
        "name": "黎川县", 
        "cityCode": "3610", 
        "provinceCode": "36"
    }, 
    {
        "code": "361023", 
        "name": "南丰县", 
        "cityCode": "3610", 
        "provinceCode": "36"
    }, 
    {
        "code": "361024", 
        "name": "崇仁县", 
        "cityCode": "3610", 
        "provinceCode": "36"
    }, 
    {
        "code": "361025", 
        "name": "乐安县", 
        "cityCode": "3610", 
        "provinceCode": "36"
    }, 
    {
        "code": "361026", 
        "name": "宜黄县", 
        "cityCode": "3610", 
        "provinceCode": "36"
    }, 
    {
        "code": "361027", 
        "name": "金溪县", 
        "cityCode": "3610", 
        "provinceCode": "36"
    }, 
    {
        "code": "361028", 
        "name": "资溪县", 
        "cityCode": "3610", 
        "provinceCode": "36"
    }, 
    {
        "code": "361030", 
        "name": "广昌县", 
        "cityCode": "3610", 
        "provinceCode": "36"
    }, 
    {
        "code": "361102", 
        "name": "信州区", 
        "cityCode": "3611", 
        "provinceCode": "36"
    }, 
    {
        "code": "361103", 
        "name": "广丰区", 
        "cityCode": "3611", 
        "provinceCode": "36"
    }, 
    {
        "code": "361121", 
        "name": "上饶县", 
        "cityCode": "3611", 
        "provinceCode": "36"
    }, 
    {
        "code": "361123", 
        "name": "玉山县", 
        "cityCode": "3611", 
        "provinceCode": "36"
    }, 
    {
        "code": "361124", 
        "name": "铅山县", 
        "cityCode": "3611", 
        "provinceCode": "36"
    }, 
    {
        "code": "361125", 
        "name": "横峰县", 
        "cityCode": "3611", 
        "provinceCode": "36"
    }, 
    {
        "code": "361126", 
        "name": "弋阳县", 
        "cityCode": "3611", 
        "provinceCode": "36"
    }, 
    {
        "code": "361127", 
        "name": "余干县", 
        "cityCode": "3611", 
        "provinceCode": "36"
    }, 
    {
        "code": "361128", 
        "name": "鄱阳县", 
        "cityCode": "3611", 
        "provinceCode": "36"
    }, 
    {
        "code": "361129", 
        "name": "万年县", 
        "cityCode": "3611", 
        "provinceCode": "36"
    }, 
    {
        "code": "361130", 
        "name": "婺源县", 
        "cityCode": "3611", 
        "provinceCode": "36"
    }, 
    {
        "code": "361181", 
        "name": "德兴市", 
        "cityCode": "3611", 
        "provinceCode": "36"
    }, 
    {
        "code": "370102", 
        "name": "历下区", 
        "cityCode": "3701", 
        "provinceCode": "37"
    }, 
    {
        "code": "370103", 
        "name": "市中区", 
        "cityCode": "3701", 
        "provinceCode": "37"
    }, 
    {
        "code": "370104", 
        "name": "槐荫区", 
        "cityCode": "3701", 
        "provinceCode": "37"
    }, 
    {
        "code": "370105", 
        "name": "天桥区", 
        "cityCode": "3701", 
        "provinceCode": "37"
    }, 
    {
        "code": "370112", 
        "name": "历城区", 
        "cityCode": "3701", 
        "provinceCode": "37"
    }, 
    {
        "code": "370113", 
        "name": "长清区", 
        "cityCode": "3701", 
        "provinceCode": "37"
    }, 
    {
        "code": "370114", 
        "name": "章丘区", 
        "cityCode": "3701", 
        "provinceCode": "37"
    }, 
    {
        "code": "370124", 
        "name": "平阴县", 
        "cityCode": "3701", 
        "provinceCode": "37"
    }, 
    {
        "code": "370125", 
        "name": "济阳县", 
        "cityCode": "3701", 
        "provinceCode": "37"
    }, 
    {
        "code": "370126", 
        "name": "商河县", 
        "cityCode": "3701", 
        "provinceCode": "37"
    }, 
    {
        "code": "370171", 
        "name": "济南高新技术产业开发区", 
        "cityCode": "3701", 
        "provinceCode": "37"
    }, 
    {
        "code": "370202", 
        "name": "市南区", 
        "cityCode": "3702", 
        "provinceCode": "37"
    }, 
    {
        "code": "370203", 
        "name": "市北区", 
        "cityCode": "3702", 
        "provinceCode": "37"
    }, 
    {
        "code": "370211", 
        "name": "黄岛区", 
        "cityCode": "3702", 
        "provinceCode": "37"
    }, 
    {
        "code": "370212", 
        "name": "崂山区", 
        "cityCode": "3702", 
        "provinceCode": "37"
    }, 
    {
        "code": "370213", 
        "name": "李沧区", 
        "cityCode": "3702", 
        "provinceCode": "37"
    }, 
    {
        "code": "370214", 
        "name": "城阳区", 
        "cityCode": "3702", 
        "provinceCode": "37"
    }, 
    {
        "code": "370215", 
        "name": "即墨区", 
        "cityCode": "3702", 
        "provinceCode": "37"
    }, 
    {
        "code": "370271", 
        "name": "青岛高新技术产业开发区", 
        "cityCode": "3702", 
        "provinceCode": "37"
    }, 
    {
        "code": "370281", 
        "name": "胶州市", 
        "cityCode": "3702", 
        "provinceCode": "37"
    }, 
    {
        "code": "370283", 
        "name": "平度市", 
        "cityCode": "3702", 
        "provinceCode": "37"
    }, 
    {
        "code": "370285", 
        "name": "莱西市", 
        "cityCode": "3702", 
        "provinceCode": "37"
    }, 
    {
        "code": "370302", 
        "name": "淄川区", 
        "cityCode": "3703", 
        "provinceCode": "37"
    }, 
    {
        "code": "370303", 
        "name": "张店区", 
        "cityCode": "3703", 
        "provinceCode": "37"
    }, 
    {
        "code": "370304", 
        "name": "博山区", 
        "cityCode": "3703", 
        "provinceCode": "37"
    }, 
    {
        "code": "370305", 
        "name": "临淄区", 
        "cityCode": "3703", 
        "provinceCode": "37"
    }, 
    {
        "code": "370306", 
        "name": "周村区", 
        "cityCode": "3703", 
        "provinceCode": "37"
    }, 
    {
        "code": "370321", 
        "name": "桓台县", 
        "cityCode": "3703", 
        "provinceCode": "37"
    }, 
    {
        "code": "370322", 
        "name": "高青县", 
        "cityCode": "3703", 
        "provinceCode": "37"
    }, 
    {
        "code": "370323", 
        "name": "沂源县", 
        "cityCode": "3703", 
        "provinceCode": "37"
    }, 
    {
        "code": "370402", 
        "name": "市中区", 
        "cityCode": "3704", 
        "provinceCode": "37"
    }, 
    {
        "code": "370403", 
        "name": "薛城区", 
        "cityCode": "3704", 
        "provinceCode": "37"
    }, 
    {
        "code": "370404", 
        "name": "峄城区", 
        "cityCode": "3704", 
        "provinceCode": "37"
    }, 
    {
        "code": "370405", 
        "name": "台儿庄区", 
        "cityCode": "3704", 
        "provinceCode": "37"
    }, 
    {
        "code": "370406", 
        "name": "山亭区", 
        "cityCode": "3704", 
        "provinceCode": "37"
    }, 
    {
        "code": "370481", 
        "name": "滕州市", 
        "cityCode": "3704", 
        "provinceCode": "37"
    }, 
    {
        "code": "370502", 
        "name": "东营区", 
        "cityCode": "3705", 
        "provinceCode": "37"
    }, 
    {
        "code": "370503", 
        "name": "河口区", 
        "cityCode": "3705", 
        "provinceCode": "37"
    }, 
    {
        "code": "370505", 
        "name": "垦利区", 
        "cityCode": "3705", 
        "provinceCode": "37"
    }, 
    {
        "code": "370522", 
        "name": "利津县", 
        "cityCode": "3705", 
        "provinceCode": "37"
    }, 
    {
        "code": "370523", 
        "name": "广饶县", 
        "cityCode": "3705", 
        "provinceCode": "37"
    }, 
    {
        "code": "370571", 
        "name": "东营经济技术开发区", 
        "cityCode": "3705", 
        "provinceCode": "37"
    }, 
    {
        "code": "370572", 
        "name": "东营港经济开发区", 
        "cityCode": "3705", 
        "provinceCode": "37"
    }, 
    {
        "code": "370602", 
        "name": "芝罘区", 
        "cityCode": "3706", 
        "provinceCode": "37"
    }, 
    {
        "code": "370611", 
        "name": "福山区", 
        "cityCode": "3706", 
        "provinceCode": "37"
    }, 
    {
        "code": "370612", 
        "name": "牟平区", 
        "cityCode": "3706", 
        "provinceCode": "37"
    }, 
    {
        "code": "370613", 
        "name": "莱山区", 
        "cityCode": "3706", 
        "provinceCode": "37"
    }, 
    {
        "code": "370634", 
        "name": "长岛县", 
        "cityCode": "3706", 
        "provinceCode": "37"
    }, 
    {
        "code": "370671", 
        "name": "烟台高新技术产业开发区", 
        "cityCode": "3706", 
        "provinceCode": "37"
    }, 
    {
        "code": "370672", 
        "name": "烟台经济技术开发区", 
        "cityCode": "3706", 
        "provinceCode": "37"
    }, 
    {
        "code": "370681", 
        "name": "龙口市", 
        "cityCode": "3706", 
        "provinceCode": "37"
    }, 
    {
        "code": "370682", 
        "name": "莱阳市", 
        "cityCode": "3706", 
        "provinceCode": "37"
    }, 
    {
        "code": "370683", 
        "name": "莱州市", 
        "cityCode": "3706", 
        "provinceCode": "37"
    }, 
    {
        "code": "370684", 
        "name": "蓬莱市", 
        "cityCode": "3706", 
        "provinceCode": "37"
    }, 
    {
        "code": "370685", 
        "name": "招远市", 
        "cityCode": "3706", 
        "provinceCode": "37"
    }, 
    {
        "code": "370686", 
        "name": "栖霞市", 
        "cityCode": "3706", 
        "provinceCode": "37"
    }, 
    {
        "code": "370687", 
        "name": "海阳市", 
        "cityCode": "3706", 
        "provinceCode": "37"
    }, 
    {
        "code": "370702", 
        "name": "潍城区", 
        "cityCode": "3707", 
        "provinceCode": "37"
    }, 
    {
        "code": "370703", 
        "name": "寒亭区", 
        "cityCode": "3707", 
        "provinceCode": "37"
    }, 
    {
        "code": "370704", 
        "name": "坊子区", 
        "cityCode": "3707", 
        "provinceCode": "37"
    }, 
    {
        "code": "370705", 
        "name": "奎文区", 
        "cityCode": "3707", 
        "provinceCode": "37"
    }, 
    {
        "code": "370724", 
        "name": "临朐县", 
        "cityCode": "3707", 
        "provinceCode": "37"
    }, 
    {
        "code": "370725", 
        "name": "昌乐县", 
        "cityCode": "3707", 
        "provinceCode": "37"
    }, 
    {
        "code": "370772", 
        "name": "潍坊滨海经济技术开发区", 
        "cityCode": "3707", 
        "provinceCode": "37"
    }, 
    {
        "code": "370781", 
        "name": "青州市", 
        "cityCode": "3707", 
        "provinceCode": "37"
    }, 
    {
        "code": "370782", 
        "name": "诸城市", 
        "cityCode": "3707", 
        "provinceCode": "37"
    }, 
    {
        "code": "370783", 
        "name": "寿光市", 
        "cityCode": "3707", 
        "provinceCode": "37"
    }, 
    {
        "code": "370784", 
        "name": "安丘市", 
        "cityCode": "3707", 
        "provinceCode": "37"
    }, 
    {
        "code": "370785", 
        "name": "高密市", 
        "cityCode": "3707", 
        "provinceCode": "37"
    }, 
    {
        "code": "370786", 
        "name": "昌邑市", 
        "cityCode": "3707", 
        "provinceCode": "37"
    }, 
    {
        "code": "370811", 
        "name": "任城区", 
        "cityCode": "3708", 
        "provinceCode": "37"
    }, 
    {
        "code": "370812", 
        "name": "兖州区", 
        "cityCode": "3708", 
        "provinceCode": "37"
    }, 
    {
        "code": "370826", 
        "name": "微山县", 
        "cityCode": "3708", 
        "provinceCode": "37"
    }, 
    {
        "code": "370827", 
        "name": "鱼台县", 
        "cityCode": "3708", 
        "provinceCode": "37"
    }, 
    {
        "code": "370828", 
        "name": "金乡县", 
        "cityCode": "3708", 
        "provinceCode": "37"
    }, 
    {
        "code": "370829", 
        "name": "嘉祥县", 
        "cityCode": "3708", 
        "provinceCode": "37"
    }, 
    {
        "code": "370830", 
        "name": "汶上县", 
        "cityCode": "3708", 
        "provinceCode": "37"
    }, 
    {
        "code": "370831", 
        "name": "泗水县", 
        "cityCode": "3708", 
        "provinceCode": "37"
    }, 
    {
        "code": "370832", 
        "name": "梁山县", 
        "cityCode": "3708", 
        "provinceCode": "37"
    }, 
    {
        "code": "370871", 
        "name": "济宁高新技术产业开发区", 
        "cityCode": "3708", 
        "provinceCode": "37"
    }, 
    {
        "code": "370881", 
        "name": "曲阜市", 
        "cityCode": "3708", 
        "provinceCode": "37"
    }, 
    {
        "code": "370883", 
        "name": "邹城市", 
        "cityCode": "3708", 
        "provinceCode": "37"
    }, 
    {
        "code": "370902", 
        "name": "泰山区", 
        "cityCode": "3709", 
        "provinceCode": "37"
    }, 
    {
        "code": "370911", 
        "name": "岱岳区", 
        "cityCode": "3709", 
        "provinceCode": "37"
    }, 
    {
        "code": "370921", 
        "name": "宁阳县", 
        "cityCode": "3709", 
        "provinceCode": "37"
    }, 
    {
        "code": "370923", 
        "name": "东平县", 
        "cityCode": "3709", 
        "provinceCode": "37"
    }, 
    {
        "code": "370982", 
        "name": "新泰市", 
        "cityCode": "3709", 
        "provinceCode": "37"
    }, 
    {
        "code": "370983", 
        "name": "肥城市", 
        "cityCode": "3709", 
        "provinceCode": "37"
    }, 
    {
        "code": "371002", 
        "name": "环翠区", 
        "cityCode": "3710", 
        "provinceCode": "37"
    }, 
    {
        "code": "371003", 
        "name": "文登区", 
        "cityCode": "3710", 
        "provinceCode": "37"
    }, 
    {
        "code": "371071", 
        "name": "威海火炬高技术产业开发区", 
        "cityCode": "3710", 
        "provinceCode": "37"
    }, 
    {
        "code": "371072", 
        "name": "威海经济技术开发区", 
        "cityCode": "3710", 
        "provinceCode": "37"
    }, 
    {
        "code": "371073", 
        "name": "威海临港经济技术开发区", 
        "cityCode": "3710", 
        "provinceCode": "37"
    }, 
    {
        "code": "371082", 
        "name": "荣成市", 
        "cityCode": "3710", 
        "provinceCode": "37"
    }, 
    {
        "code": "371083", 
        "name": "乳山市", 
        "cityCode": "3710", 
        "provinceCode": "37"
    }, 
    {
        "code": "371102", 
        "name": "东港区", 
        "cityCode": "3711", 
        "provinceCode": "37"
    }, 
    {
        "code": "371103", 
        "name": "岚山区", 
        "cityCode": "3711", 
        "provinceCode": "37"
    }, 
    {
        "code": "371121", 
        "name": "五莲县", 
        "cityCode": "3711", 
        "provinceCode": "37"
    }, 
    {
        "code": "371122", 
        "name": "莒县", 
        "cityCode": "3711", 
        "provinceCode": "37"
    }, 
    {
        "code": "371171", 
        "name": "日照经济技术开发区", 
        "cityCode": "3711", 
        "provinceCode": "37"
    }, 
    {
        "code": "371172", 
        "name": "日照国际海洋城", 
        "cityCode": "3711", 
        "provinceCode": "37"
    }, 
    {
        "code": "371202", 
        "name": "莱城区", 
        "cityCode": "3712", 
        "provinceCode": "37"
    }, 
    {
        "code": "371203", 
        "name": "钢城区", 
        "cityCode": "3712", 
        "provinceCode": "37"
    }, 
    {
        "code": "371302", 
        "name": "兰山区", 
        "cityCode": "3713", 
        "provinceCode": "37"
    }, 
    {
        "code": "371311", 
        "name": "罗庄区", 
        "cityCode": "3713", 
        "provinceCode": "37"
    }, 
    {
        "code": "371312", 
        "name": "河东区", 
        "cityCode": "3713", 
        "provinceCode": "37"
    }, 
    {
        "code": "371321", 
        "name": "沂南县", 
        "cityCode": "3713", 
        "provinceCode": "37"
    }, 
    {
        "code": "371322", 
        "name": "郯城县", 
        "cityCode": "3713", 
        "provinceCode": "37"
    }, 
    {
        "code": "371323", 
        "name": "沂水县", 
        "cityCode": "3713", 
        "provinceCode": "37"
    }, 
    {
        "code": "371324", 
        "name": "兰陵县", 
        "cityCode": "3713", 
        "provinceCode": "37"
    }, 
    {
        "code": "371325", 
        "name": "费县", 
        "cityCode": "3713", 
        "provinceCode": "37"
    }, 
    {
        "code": "371326", 
        "name": "平邑县", 
        "cityCode": "3713", 
        "provinceCode": "37"
    }, 
    {
        "code": "371327", 
        "name": "莒南县", 
        "cityCode": "3713", 
        "provinceCode": "37"
    }, 
    {
        "code": "371328", 
        "name": "蒙阴县", 
        "cityCode": "3713", 
        "provinceCode": "37"
    }, 
    {
        "code": "371329", 
        "name": "临沭县", 
        "cityCode": "3713", 
        "provinceCode": "37"
    }, 
    {
        "code": "371371", 
        "name": "临沂高新技术产业开发区", 
        "cityCode": "3713", 
        "provinceCode": "37"
    }, 
    {
        "code": "371372", 
        "name": "临沂经济技术开发区", 
        "cityCode": "3713", 
        "provinceCode": "37"
    }, 
    {
        "code": "371373", 
        "name": "临沂临港经济开发区", 
        "cityCode": "3713", 
        "provinceCode": "37"
    }, 
    {
        "code": "371402", 
        "name": "德城区", 
        "cityCode": "3714", 
        "provinceCode": "37"
    }, 
    {
        "code": "371403", 
        "name": "陵城区", 
        "cityCode": "3714", 
        "provinceCode": "37"
    }, 
    {
        "code": "371422", 
        "name": "宁津县", 
        "cityCode": "3714", 
        "provinceCode": "37"
    }, 
    {
        "code": "371423", 
        "name": "庆云县", 
        "cityCode": "3714", 
        "provinceCode": "37"
    }, 
    {
        "code": "371424", 
        "name": "临邑县", 
        "cityCode": "3714", 
        "provinceCode": "37"
    }, 
    {
        "code": "371425", 
        "name": "齐河县", 
        "cityCode": "3714", 
        "provinceCode": "37"
    }, 
    {
        "code": "371426", 
        "name": "平原县", 
        "cityCode": "3714", 
        "provinceCode": "37"
    }, 
    {
        "code": "371427", 
        "name": "夏津县", 
        "cityCode": "3714", 
        "provinceCode": "37"
    }, 
    {
        "code": "371428", 
        "name": "武城县", 
        "cityCode": "3714", 
        "provinceCode": "37"
    }, 
    {
        "code": "371471", 
        "name": "德州经济技术开发区", 
        "cityCode": "3714", 
        "provinceCode": "37"
    }, 
    {
        "code": "371472", 
        "name": "德州运河经济开发区", 
        "cityCode": "3714", 
        "provinceCode": "37"
    }, 
    {
        "code": "371481", 
        "name": "乐陵市", 
        "cityCode": "3714", 
        "provinceCode": "37"
    }, 
    {
        "code": "371482", 
        "name": "禹城市", 
        "cityCode": "3714", 
        "provinceCode": "37"
    }, 
    {
        "code": "371502", 
        "name": "东昌府区", 
        "cityCode": "3715", 
        "provinceCode": "37"
    }, 
    {
        "code": "371521", 
        "name": "阳谷县", 
        "cityCode": "3715", 
        "provinceCode": "37"
    }, 
    {
        "code": "371522", 
        "name": "莘县", 
        "cityCode": "3715", 
        "provinceCode": "37"
    }, 
    {
        "code": "371523", 
        "name": "茌平县", 
        "cityCode": "3715", 
        "provinceCode": "37"
    }, 
    {
        "code": "371524", 
        "name": "东阿县", 
        "cityCode": "3715", 
        "provinceCode": "37"
    }, 
    {
        "code": "371525", 
        "name": "冠县", 
        "cityCode": "3715", 
        "provinceCode": "37"
    }, 
    {
        "code": "371526", 
        "name": "高唐县", 
        "cityCode": "3715", 
        "provinceCode": "37"
    }, 
    {
        "code": "371581", 
        "name": "临清市", 
        "cityCode": "3715", 
        "provinceCode": "37"
    }, 
    {
        "code": "371602", 
        "name": "滨城区", 
        "cityCode": "3716", 
        "provinceCode": "37"
    }, 
    {
        "code": "371603", 
        "name": "沾化区", 
        "cityCode": "3716", 
        "provinceCode": "37"
    }, 
    {
        "code": "371621", 
        "name": "惠民县", 
        "cityCode": "3716", 
        "provinceCode": "37"
    }, 
    {
        "code": "371622", 
        "name": "阳信县", 
        "cityCode": "3716", 
        "provinceCode": "37"
    }, 
    {
        "code": "371623", 
        "name": "无棣县", 
        "cityCode": "3716", 
        "provinceCode": "37"
    }, 
    {
        "code": "371625", 
        "name": "博兴县", 
        "cityCode": "3716", 
        "provinceCode": "37"
    }, 
    {
        "code": "371626", 
        "name": "邹平县", 
        "cityCode": "3716", 
        "provinceCode": "37"
    }, 
    {
        "code": "371702", 
        "name": "牡丹区", 
        "cityCode": "3717", 
        "provinceCode": "37"
    }, 
    {
        "code": "371703", 
        "name": "定陶区", 
        "cityCode": "3717", 
        "provinceCode": "37"
    }, 
    {
        "code": "371721", 
        "name": "曹县", 
        "cityCode": "3717", 
        "provinceCode": "37"
    }, 
    {
        "code": "371722", 
        "name": "单县", 
        "cityCode": "3717", 
        "provinceCode": "37"
    }, 
    {
        "code": "371723", 
        "name": "成武县", 
        "cityCode": "3717", 
        "provinceCode": "37"
    }, 
    {
        "code": "371724", 
        "name": "巨野县", 
        "cityCode": "3717", 
        "provinceCode": "37"
    }, 
    {
        "code": "371725", 
        "name": "郓城县", 
        "cityCode": "3717", 
        "provinceCode": "37"
    }, 
    {
        "code": "371726", 
        "name": "鄄城县", 
        "cityCode": "3717", 
        "provinceCode": "37"
    }, 
    {
        "code": "371728", 
        "name": "东明县", 
        "cityCode": "3717", 
        "provinceCode": "37"
    }, 
    {
        "code": "371771", 
        "name": "菏泽经济技术开发区", 
        "cityCode": "3717", 
        "provinceCode": "37"
    }, 
    {
        "code": "371772", 
        "name": "菏泽高新技术开发区", 
        "cityCode": "3717", 
        "provinceCode": "37"
    }, 
    {
        "code": "410102", 
        "name": "中原区", 
        "cityCode": "4101", 
        "provinceCode": "41"
    }, 
    {
        "code": "410103", 
        "name": "二七区", 
        "cityCode": "4101", 
        "provinceCode": "41"
    }, 
    {
        "code": "410104", 
        "name": "管城回族区", 
        "cityCode": "4101", 
        "provinceCode": "41"
    }, 
    {
        "code": "410105", 
        "name": "金水区", 
        "cityCode": "4101", 
        "provinceCode": "41"
    }, 
    {
        "code": "410106", 
        "name": "上街区", 
        "cityCode": "4101", 
        "provinceCode": "41"
    }, 
    {
        "code": "410108", 
        "name": "惠济区", 
        "cityCode": "4101", 
        "provinceCode": "41"
    }, 
    {
        "code": "410122", 
        "name": "中牟县", 
        "cityCode": "4101", 
        "provinceCode": "41"
    }, 
    {
        "code": "410171", 
        "name": "郑州经济技术开发区", 
        "cityCode": "4101", 
        "provinceCode": "41"
    }, 
    {
        "code": "410172", 
        "name": "郑州高新技术产业开发区", 
        "cityCode": "4101", 
        "provinceCode": "41"
    }, 
    {
        "code": "410173", 
        "name": "郑州航空港经济综合实验区", 
        "cityCode": "4101", 
        "provinceCode": "41"
    }, 
    {
        "code": "410181", 
        "name": "巩义市", 
        "cityCode": "4101", 
        "provinceCode": "41"
    }, 
    {
        "code": "410182", 
        "name": "荥阳市", 
        "cityCode": "4101", 
        "provinceCode": "41"
    }, 
    {
        "code": "410183", 
        "name": "新密市", 
        "cityCode": "4101", 
        "provinceCode": "41"
    }, 
    {
        "code": "410184", 
        "name": "新郑市", 
        "cityCode": "4101", 
        "provinceCode": "41"
    }, 
    {
        "code": "410185", 
        "name": "登封市", 
        "cityCode": "4101", 
        "provinceCode": "41"
    }, 
    {
        "code": "410202", 
        "name": "龙亭区", 
        "cityCode": "4102", 
        "provinceCode": "41"
    }, 
    {
        "code": "410203", 
        "name": "顺河回族区", 
        "cityCode": "4102", 
        "provinceCode": "41"
    }, 
    {
        "code": "410204", 
        "name": "鼓楼区", 
        "cityCode": "4102", 
        "provinceCode": "41"
    }, 
    {
        "code": "410205", 
        "name": "禹王台区", 
        "cityCode": "4102", 
        "provinceCode": "41"
    }, 
    {
        "code": "410212", 
        "name": "祥符区", 
        "cityCode": "4102", 
        "provinceCode": "41"
    }, 
    {
        "code": "410221", 
        "name": "杞县", 
        "cityCode": "4102", 
        "provinceCode": "41"
    }, 
    {
        "code": "410222", 
        "name": "通许县", 
        "cityCode": "4102", 
        "provinceCode": "41"
    }, 
    {
        "code": "410223", 
        "name": "尉氏县", 
        "cityCode": "4102", 
        "provinceCode": "41"
    }, 
    {
        "code": "410225", 
        "name": "兰考县", 
        "cityCode": "4102", 
        "provinceCode": "41"
    }, 
    {
        "code": "410302", 
        "name": "老城区", 
        "cityCode": "4103", 
        "provinceCode": "41"
    }, 
    {
        "code": "410303", 
        "name": "西工区", 
        "cityCode": "4103", 
        "provinceCode": "41"
    }, 
    {
        "code": "410304", 
        "name": "瀍河回族区", 
        "cityCode": "4103", 
        "provinceCode": "41"
    }, 
    {
        "code": "410305", 
        "name": "涧西区", 
        "cityCode": "4103", 
        "provinceCode": "41"
    }, 
    {
        "code": "410306", 
        "name": "吉利区", 
        "cityCode": "4103", 
        "provinceCode": "41"
    }, 
    {
        "code": "410311", 
        "name": "洛龙区", 
        "cityCode": "4103", 
        "provinceCode": "41"
    }, 
    {
        "code": "410322", 
        "name": "孟津县", 
        "cityCode": "4103", 
        "provinceCode": "41"
    }, 
    {
        "code": "410323", 
        "name": "新安县", 
        "cityCode": "4103", 
        "provinceCode": "41"
    }, 
    {
        "code": "410324", 
        "name": "栾川县", 
        "cityCode": "4103", 
        "provinceCode": "41"
    }, 
    {
        "code": "410325", 
        "name": "嵩县", 
        "cityCode": "4103", 
        "provinceCode": "41"
    }, 
    {
        "code": "410326", 
        "name": "汝阳县", 
        "cityCode": "4103", 
        "provinceCode": "41"
    }, 
    {
        "code": "410327", 
        "name": "宜阳县", 
        "cityCode": "4103", 
        "provinceCode": "41"
    }, 
    {
        "code": "410328", 
        "name": "洛宁县", 
        "cityCode": "4103", 
        "provinceCode": "41"
    }, 
    {
        "code": "410329", 
        "name": "伊川县", 
        "cityCode": "4103", 
        "provinceCode": "41"
    }, 
    {
        "code": "410371", 
        "name": "洛阳高新技术产业开发区", 
        "cityCode": "4103", 
        "provinceCode": "41"
    }, 
    {
        "code": "410381", 
        "name": "偃师市", 
        "cityCode": "4103", 
        "provinceCode": "41"
    }, 
    {
        "code": "410402", 
        "name": "新华区", 
        "cityCode": "4104", 
        "provinceCode": "41"
    }, 
    {
        "code": "410403", 
        "name": "卫东区", 
        "cityCode": "4104", 
        "provinceCode": "41"
    }, 
    {
        "code": "410404", 
        "name": "石龙区", 
        "cityCode": "4104", 
        "provinceCode": "41"
    }, 
    {
        "code": "410411", 
        "name": "湛河区", 
        "cityCode": "4104", 
        "provinceCode": "41"
    }, 
    {
        "code": "410421", 
        "name": "宝丰县", 
        "cityCode": "4104", 
        "provinceCode": "41"
    }, 
    {
        "code": "410422", 
        "name": "叶县", 
        "cityCode": "4104", 
        "provinceCode": "41"
    }, 
    {
        "code": "410423", 
        "name": "鲁山县", 
        "cityCode": "4104", 
        "provinceCode": "41"
    }, 
    {
        "code": "410425", 
        "name": "郏县", 
        "cityCode": "4104", 
        "provinceCode": "41"
    }, 
    {
        "code": "410471", 
        "name": "平顶山高新技术产业开发区", 
        "cityCode": "4104", 
        "provinceCode": "41"
    }, 
    {
        "code": "410472", 
        "name": "平顶山市新城区", 
        "cityCode": "4104", 
        "provinceCode": "41"
    }, 
    {
        "code": "410481", 
        "name": "舞钢市", 
        "cityCode": "4104", 
        "provinceCode": "41"
    }, 
    {
        "code": "410482", 
        "name": "汝州市", 
        "cityCode": "4104", 
        "provinceCode": "41"
    }, 
    {
        "code": "410502", 
        "name": "文峰区", 
        "cityCode": "4105", 
        "provinceCode": "41"
    }, 
    {
        "code": "410503", 
        "name": "北关区", 
        "cityCode": "4105", 
        "provinceCode": "41"
    }, 
    {
        "code": "410505", 
        "name": "殷都区", 
        "cityCode": "4105", 
        "provinceCode": "41"
    }, 
    {
        "code": "410506", 
        "name": "龙安区", 
        "cityCode": "4105", 
        "provinceCode": "41"
    }, 
    {
        "code": "410522", 
        "name": "安阳县", 
        "cityCode": "4105", 
        "provinceCode": "41"
    }, 
    {
        "code": "410523", 
        "name": "汤阴县", 
        "cityCode": "4105", 
        "provinceCode": "41"
    }, 
    {
        "code": "410526", 
        "name": "滑县", 
        "cityCode": "4105", 
        "provinceCode": "41"
    }, 
    {
        "code": "410527", 
        "name": "内黄县", 
        "cityCode": "4105", 
        "provinceCode": "41"
    }, 
    {
        "code": "410571", 
        "name": "安阳高新技术产业开发区", 
        "cityCode": "4105", 
        "provinceCode": "41"
    }, 
    {
        "code": "410581", 
        "name": "林州市", 
        "cityCode": "4105", 
        "provinceCode": "41"
    }, 
    {
        "code": "410602", 
        "name": "鹤山区", 
        "cityCode": "4106", 
        "provinceCode": "41"
    }, 
    {
        "code": "410603", 
        "name": "山城区", 
        "cityCode": "4106", 
        "provinceCode": "41"
    }, 
    {
        "code": "410611", 
        "name": "淇滨区", 
        "cityCode": "4106", 
        "provinceCode": "41"
    }, 
    {
        "code": "410621", 
        "name": "浚县", 
        "cityCode": "4106", 
        "provinceCode": "41"
    }, 
    {
        "code": "410622", 
        "name": "淇县", 
        "cityCode": "4106", 
        "provinceCode": "41"
    }, 
    {
        "code": "410671", 
        "name": "鹤壁经济技术开发区", 
        "cityCode": "4106", 
        "provinceCode": "41"
    }, 
    {
        "code": "410702", 
        "name": "红旗区", 
        "cityCode": "4107", 
        "provinceCode": "41"
    }, 
    {
        "code": "410703", 
        "name": "卫滨区", 
        "cityCode": "4107", 
        "provinceCode": "41"
    }, 
    {
        "code": "410704", 
        "name": "凤泉区", 
        "cityCode": "4107", 
        "provinceCode": "41"
    }, 
    {
        "code": "410711", 
        "name": "牧野区", 
        "cityCode": "4107", 
        "provinceCode": "41"
    }, 
    {
        "code": "410721", 
        "name": "新乡县", 
        "cityCode": "4107", 
        "provinceCode": "41"
    }, 
    {
        "code": "410724", 
        "name": "获嘉县", 
        "cityCode": "4107", 
        "provinceCode": "41"
    }, 
    {
        "code": "410725", 
        "name": "原阳县", 
        "cityCode": "4107", 
        "provinceCode": "41"
    }, 
    {
        "code": "410726", 
        "name": "延津县", 
        "cityCode": "4107", 
        "provinceCode": "41"
    }, 
    {
        "code": "410727", 
        "name": "封丘县", 
        "cityCode": "4107", 
        "provinceCode": "41"
    }, 
    {
        "code": "410728", 
        "name": "长垣县", 
        "cityCode": "4107", 
        "provinceCode": "41"
    }, 
    {
        "code": "410771", 
        "name": "新乡高新技术产业开发区", 
        "cityCode": "4107", 
        "provinceCode": "41"
    }, 
    {
        "code": "410772", 
        "name": "新乡经济技术开发区", 
        "cityCode": "4107", 
        "provinceCode": "41"
    }, 
    {
        "code": "410773", 
        "name": "新乡市平原城乡一体化示范区", 
        "cityCode": "4107", 
        "provinceCode": "41"
    }, 
    {
        "code": "410781", 
        "name": "卫辉市", 
        "cityCode": "4107", 
        "provinceCode": "41"
    }, 
    {
        "code": "410782", 
        "name": "辉县市", 
        "cityCode": "4107", 
        "provinceCode": "41"
    }, 
    {
        "code": "410802", 
        "name": "解放区", 
        "cityCode": "4108", 
        "provinceCode": "41"
    }, 
    {
        "code": "410803", 
        "name": "中站区", 
        "cityCode": "4108", 
        "provinceCode": "41"
    }, 
    {
        "code": "410804", 
        "name": "马村区", 
        "cityCode": "4108", 
        "provinceCode": "41"
    }, 
    {
        "code": "410811", 
        "name": "山阳区", 
        "cityCode": "4108", 
        "provinceCode": "41"
    }, 
    {
        "code": "410821", 
        "name": "修武县", 
        "cityCode": "4108", 
        "provinceCode": "41"
    }, 
    {
        "code": "410822", 
        "name": "博爱县", 
        "cityCode": "4108", 
        "provinceCode": "41"
    }, 
    {
        "code": "410823", 
        "name": "武陟县", 
        "cityCode": "4108", 
        "provinceCode": "41"
    }, 
    {
        "code": "410825", 
        "name": "温县", 
        "cityCode": "4108", 
        "provinceCode": "41"
    }, 
    {
        "code": "410871", 
        "name": "焦作城乡一体化示范区", 
        "cityCode": "4108", 
        "provinceCode": "41"
    }, 
    {
        "code": "410882", 
        "name": "沁阳市", 
        "cityCode": "4108", 
        "provinceCode": "41"
    }, 
    {
        "code": "410883", 
        "name": "孟州市", 
        "cityCode": "4108", 
        "provinceCode": "41"
    }, 
    {
        "code": "410902", 
        "name": "华龙区", 
        "cityCode": "4109", 
        "provinceCode": "41"
    }, 
    {
        "code": "410922", 
        "name": "清丰县", 
        "cityCode": "4109", 
        "provinceCode": "41"
    }, 
    {
        "code": "410923", 
        "name": "南乐县", 
        "cityCode": "4109", 
        "provinceCode": "41"
    }, 
    {
        "code": "410926", 
        "name": "范县", 
        "cityCode": "4109", 
        "provinceCode": "41"
    }, 
    {
        "code": "410927", 
        "name": "台前县", 
        "cityCode": "4109", 
        "provinceCode": "41"
    }, 
    {
        "code": "410928", 
        "name": "濮阳县", 
        "cityCode": "4109", 
        "provinceCode": "41"
    }, 
    {
        "code": "410971", 
        "name": "河南濮阳工业园区", 
        "cityCode": "4109", 
        "provinceCode": "41"
    }, 
    {
        "code": "410972", 
        "name": "濮阳经济技术开发区", 
        "cityCode": "4109", 
        "provinceCode": "41"
    }, 
    {
        "code": "411002", 
        "name": "魏都区", 
        "cityCode": "4110", 
        "provinceCode": "41"
    }, 
    {
        "code": "411003", 
        "name": "建安区", 
        "cityCode": "4110", 
        "provinceCode": "41"
    }, 
    {
        "code": "411024", 
        "name": "鄢陵县", 
        "cityCode": "4110", 
        "provinceCode": "41"
    }, 
    {
        "code": "411025", 
        "name": "襄城县", 
        "cityCode": "4110", 
        "provinceCode": "41"
    }, 
    {
        "code": "411071", 
        "name": "许昌经济技术开发区", 
        "cityCode": "4110", 
        "provinceCode": "41"
    }, 
    {
        "code": "411081", 
        "name": "禹州市", 
        "cityCode": "4110", 
        "provinceCode": "41"
    }, 
    {
        "code": "411082", 
        "name": "长葛市", 
        "cityCode": "4110", 
        "provinceCode": "41"
    }, 
    {
        "code": "411102", 
        "name": "源汇区", 
        "cityCode": "4111", 
        "provinceCode": "41"
    }, 
    {
        "code": "411103", 
        "name": "郾城区", 
        "cityCode": "4111", 
        "provinceCode": "41"
    }, 
    {
        "code": "411104", 
        "name": "召陵区", 
        "cityCode": "4111", 
        "provinceCode": "41"
    }, 
    {
        "code": "411121", 
        "name": "舞阳县", 
        "cityCode": "4111", 
        "provinceCode": "41"
    }, 
    {
        "code": "411122", 
        "name": "临颍县", 
        "cityCode": "4111", 
        "provinceCode": "41"
    }, 
    {
        "code": "411171", 
        "name": "漯河经济技术开发区", 
        "cityCode": "4111", 
        "provinceCode": "41"
    }, 
    {
        "code": "411202", 
        "name": "湖滨区", 
        "cityCode": "4112", 
        "provinceCode": "41"
    }, 
    {
        "code": "411203", 
        "name": "陕州区", 
        "cityCode": "4112", 
        "provinceCode": "41"
    }, 
    {
        "code": "411221", 
        "name": "渑池县", 
        "cityCode": "4112", 
        "provinceCode": "41"
    }, 
    {
        "code": "411224", 
        "name": "卢氏县", 
        "cityCode": "4112", 
        "provinceCode": "41"
    }, 
    {
        "code": "411271", 
        "name": "河南三门峡经济开发区", 
        "cityCode": "4112", 
        "provinceCode": "41"
    }, 
    {
        "code": "411281", 
        "name": "义马市", 
        "cityCode": "4112", 
        "provinceCode": "41"
    }, 
    {
        "code": "411282", 
        "name": "灵宝市", 
        "cityCode": "4112", 
        "provinceCode": "41"
    }, 
    {
        "code": "411302", 
        "name": "宛城区", 
        "cityCode": "4113", 
        "provinceCode": "41"
    }, 
    {
        "code": "411303", 
        "name": "卧龙区", 
        "cityCode": "4113", 
        "provinceCode": "41"
    }, 
    {
        "code": "411321", 
        "name": "南召县", 
        "cityCode": "4113", 
        "provinceCode": "41"
    }, 
    {
        "code": "411322", 
        "name": "方城县", 
        "cityCode": "4113", 
        "provinceCode": "41"
    }, 
    {
        "code": "411323", 
        "name": "西峡县", 
        "cityCode": "4113", 
        "provinceCode": "41"
    }, 
    {
        "code": "411324", 
        "name": "镇平县", 
        "cityCode": "4113", 
        "provinceCode": "41"
    }, 
    {
        "code": "411325", 
        "name": "内乡县", 
        "cityCode": "4113", 
        "provinceCode": "41"
    }, 
    {
        "code": "411326", 
        "name": "淅川县", 
        "cityCode": "4113", 
        "provinceCode": "41"
    }, 
    {
        "code": "411327", 
        "name": "社旗县", 
        "cityCode": "4113", 
        "provinceCode": "41"
    }, 
    {
        "code": "411328", 
        "name": "唐河县", 
        "cityCode": "4113", 
        "provinceCode": "41"
    }, 
    {
        "code": "411329", 
        "name": "新野县", 
        "cityCode": "4113", 
        "provinceCode": "41"
    }, 
    {
        "code": "411330", 
        "name": "桐柏县", 
        "cityCode": "4113", 
        "provinceCode": "41"
    }, 
    {
        "code": "411371", 
        "name": "南阳高新技术产业开发区", 
        "cityCode": "4113", 
        "provinceCode": "41"
    }, 
    {
        "code": "411372", 
        "name": "南阳市城乡一体化示范区", 
        "cityCode": "4113", 
        "provinceCode": "41"
    }, 
    {
        "code": "411381", 
        "name": "邓州市", 
        "cityCode": "4113", 
        "provinceCode": "41"
    }, 
    {
        "code": "411402", 
        "name": "梁园区", 
        "cityCode": "4114", 
        "provinceCode": "41"
    }, 
    {
        "code": "411403", 
        "name": "睢阳区", 
        "cityCode": "4114", 
        "provinceCode": "41"
    }, 
    {
        "code": "411421", 
        "name": "民权县", 
        "cityCode": "4114", 
        "provinceCode": "41"
    }, 
    {
        "code": "411422", 
        "name": "睢县", 
        "cityCode": "4114", 
        "provinceCode": "41"
    }, 
    {
        "code": "411423", 
        "name": "宁陵县", 
        "cityCode": "4114", 
        "provinceCode": "41"
    }, 
    {
        "code": "411424", 
        "name": "柘城县", 
        "cityCode": "4114", 
        "provinceCode": "41"
    }, 
    {
        "code": "411425", 
        "name": "虞城县", 
        "cityCode": "4114", 
        "provinceCode": "41"
    }, 
    {
        "code": "411426", 
        "name": "夏邑县", 
        "cityCode": "4114", 
        "provinceCode": "41"
    }, 
    {
        "code": "411471", 
        "name": "豫东综合物流产业聚集区", 
        "cityCode": "4114", 
        "provinceCode": "41"
    }, 
    {
        "code": "411472", 
        "name": "河南商丘经济开发区", 
        "cityCode": "4114", 
        "provinceCode": "41"
    }, 
    {
        "code": "411481", 
        "name": "永城市", 
        "cityCode": "4114", 
        "provinceCode": "41"
    }, 
    {
        "code": "411502", 
        "name": "浉河区", 
        "cityCode": "4115", 
        "provinceCode": "41"
    }, 
    {
        "code": "411503", 
        "name": "平桥区", 
        "cityCode": "4115", 
        "provinceCode": "41"
    }, 
    {
        "code": "411521", 
        "name": "罗山县", 
        "cityCode": "4115", 
        "provinceCode": "41"
    }, 
    {
        "code": "411522", 
        "name": "光山县", 
        "cityCode": "4115", 
        "provinceCode": "41"
    }, 
    {
        "code": "411523", 
        "name": "新县", 
        "cityCode": "4115", 
        "provinceCode": "41"
    }, 
    {
        "code": "411524", 
        "name": "商城县", 
        "cityCode": "4115", 
        "provinceCode": "41"
    }, 
    {
        "code": "411525", 
        "name": "固始县", 
        "cityCode": "4115", 
        "provinceCode": "41"
    }, 
    {
        "code": "411526", 
        "name": "潢川县", 
        "cityCode": "4115", 
        "provinceCode": "41"
    }, 
    {
        "code": "411527", 
        "name": "淮滨县", 
        "cityCode": "4115", 
        "provinceCode": "41"
    }, 
    {
        "code": "411528", 
        "name": "息县", 
        "cityCode": "4115", 
        "provinceCode": "41"
    }, 
    {
        "code": "411571", 
        "name": "信阳高新技术产业开发区", 
        "cityCode": "4115", 
        "provinceCode": "41"
    }, 
    {
        "code": "411602", 
        "name": "川汇区", 
        "cityCode": "4116", 
        "provinceCode": "41"
    }, 
    {
        "code": "411621", 
        "name": "扶沟县", 
        "cityCode": "4116", 
        "provinceCode": "41"
    }, 
    {
        "code": "411622", 
        "name": "西华县", 
        "cityCode": "4116", 
        "provinceCode": "41"
    }, 
    {
        "code": "411623", 
        "name": "商水县", 
        "cityCode": "4116", 
        "provinceCode": "41"
    }, 
    {
        "code": "411624", 
        "name": "沈丘县", 
        "cityCode": "4116", 
        "provinceCode": "41"
    }, 
    {
        "code": "411625", 
        "name": "郸城县", 
        "cityCode": "4116", 
        "provinceCode": "41"
    }, 
    {
        "code": "411626", 
        "name": "淮阳县", 
        "cityCode": "4116", 
        "provinceCode": "41"
    }, 
    {
        "code": "411627", 
        "name": "太康县", 
        "cityCode": "4116", 
        "provinceCode": "41"
    }, 
    {
        "code": "411628", 
        "name": "鹿邑县", 
        "cityCode": "4116", 
        "provinceCode": "41"
    }, 
    {
        "code": "411671", 
        "name": "河南周口经济开发区", 
        "cityCode": "4116", 
        "provinceCode": "41"
    }, 
    {
        "code": "411681", 
        "name": "项城市", 
        "cityCode": "4116", 
        "provinceCode": "41"
    }, 
    {
        "code": "411702", 
        "name": "驿城区", 
        "cityCode": "4117", 
        "provinceCode": "41"
    }, 
    {
        "code": "411721", 
        "name": "西平县", 
        "cityCode": "4117", 
        "provinceCode": "41"
    }, 
    {
        "code": "411722", 
        "name": "上蔡县", 
        "cityCode": "4117", 
        "provinceCode": "41"
    }, 
    {
        "code": "411723", 
        "name": "平舆县", 
        "cityCode": "4117", 
        "provinceCode": "41"
    }, 
    {
        "code": "411724", 
        "name": "正阳县", 
        "cityCode": "4117", 
        "provinceCode": "41"
    }, 
    {
        "code": "411725", 
        "name": "确山县", 
        "cityCode": "4117", 
        "provinceCode": "41"
    }, 
    {
        "code": "411726", 
        "name": "泌阳县", 
        "cityCode": "4117", 
        "provinceCode": "41"
    }, 
    {
        "code": "411727", 
        "name": "汝南县", 
        "cityCode": "4117", 
        "provinceCode": "41"
    }, 
    {
        "code": "411728", 
        "name": "遂平县", 
        "cityCode": "4117", 
        "provinceCode": "41"
    }, 
    {
        "code": "411729", 
        "name": "新蔡县", 
        "cityCode": "4117", 
        "provinceCode": "41"
    }, 
    {
        "code": "411771", 
        "name": "河南驻马店经济开发区", 
        "cityCode": "4117", 
        "provinceCode": "41"
    }, 
    {
        "code": "419001", 
        "name": "济源市", 
        "cityCode": "4190", 
        "provinceCode": "41"
    }, 
    {
        "code": "420102", 
        "name": "江岸区", 
        "cityCode": "4201", 
        "provinceCode": "42"
    }, 
    {
        "code": "420103", 
        "name": "江汉区", 
        "cityCode": "4201", 
        "provinceCode": "42"
    }, 
    {
        "code": "420104", 
        "name": "硚口区", 
        "cityCode": "4201", 
        "provinceCode": "42"
    }, 
    {
        "code": "420105", 
        "name": "汉阳区", 
        "cityCode": "4201", 
        "provinceCode": "42"
    }, 
    {
        "code": "420106", 
        "name": "武昌区", 
        "cityCode": "4201", 
        "provinceCode": "42"
    }, 
    {
        "code": "420107", 
        "name": "青山区", 
        "cityCode": "4201", 
        "provinceCode": "42"
    }, 
    {
        "code": "420111", 
        "name": "洪山区", 
        "cityCode": "4201", 
        "provinceCode": "42"
    }, 
    {
        "code": "420112", 
        "name": "东西湖区", 
        "cityCode": "4201", 
        "provinceCode": "42"
    }, 
    {
        "code": "420113", 
        "name": "汉南区", 
        "cityCode": "4201", 
        "provinceCode": "42"
    }, 
    {
        "code": "420114", 
        "name": "蔡甸区", 
        "cityCode": "4201", 
        "provinceCode": "42"
    }, 
    {
        "code": "420115", 
        "name": "江夏区", 
        "cityCode": "4201", 
        "provinceCode": "42"
    }, 
    {
        "code": "420116", 
        "name": "黄陂区", 
        "cityCode": "4201", 
        "provinceCode": "42"
    }, 
    {
        "code": "420117", 
        "name": "新洲区", 
        "cityCode": "4201", 
        "provinceCode": "42"
    }, 
    {
        "code": "420202", 
        "name": "黄石港区", 
        "cityCode": "4202", 
        "provinceCode": "42"
    }, 
    {
        "code": "420203", 
        "name": "西塞山区", 
        "cityCode": "4202", 
        "provinceCode": "42"
    }, 
    {
        "code": "420204", 
        "name": "下陆区", 
        "cityCode": "4202", 
        "provinceCode": "42"
    }, 
    {
        "code": "420205", 
        "name": "铁山区", 
        "cityCode": "4202", 
        "provinceCode": "42"
    }, 
    {
        "code": "420222", 
        "name": "阳新县", 
        "cityCode": "4202", 
        "provinceCode": "42"
    }, 
    {
        "code": "420281", 
        "name": "大冶市", 
        "cityCode": "4202", 
        "provinceCode": "42"
    }, 
    {
        "code": "420302", 
        "name": "茅箭区", 
        "cityCode": "4203", 
        "provinceCode": "42"
    }, 
    {
        "code": "420303", 
        "name": "张湾区", 
        "cityCode": "4203", 
        "provinceCode": "42"
    }, 
    {
        "code": "420304", 
        "name": "郧阳区", 
        "cityCode": "4203", 
        "provinceCode": "42"
    }, 
    {
        "code": "420322", 
        "name": "郧西县", 
        "cityCode": "4203", 
        "provinceCode": "42"
    }, 
    {
        "code": "420323", 
        "name": "竹山县", 
        "cityCode": "4203", 
        "provinceCode": "42"
    }, 
    {
        "code": "420324", 
        "name": "竹溪县", 
        "cityCode": "4203", 
        "provinceCode": "42"
    }, 
    {
        "code": "420325", 
        "name": "房县", 
        "cityCode": "4203", 
        "provinceCode": "42"
    }, 
    {
        "code": "420381", 
        "name": "丹江口市", 
        "cityCode": "4203", 
        "provinceCode": "42"
    }, 
    {
        "code": "420502", 
        "name": "西陵区", 
        "cityCode": "4205", 
        "provinceCode": "42"
    }, 
    {
        "code": "420503", 
        "name": "伍家岗区", 
        "cityCode": "4205", 
        "provinceCode": "42"
    }, 
    {
        "code": "420504", 
        "name": "点军区", 
        "cityCode": "4205", 
        "provinceCode": "42"
    }, 
    {
        "code": "420505", 
        "name": "猇亭区", 
        "cityCode": "4205", 
        "provinceCode": "42"
    }, 
    {
        "code": "420506", 
        "name": "夷陵区", 
        "cityCode": "4205", 
        "provinceCode": "42"
    }, 
    {
        "code": "420525", 
        "name": "远安县", 
        "cityCode": "4205", 
        "provinceCode": "42"
    }, 
    {
        "code": "420526", 
        "name": "兴山县", 
        "cityCode": "4205", 
        "provinceCode": "42"
    }, 
    {
        "code": "420527", 
        "name": "秭归县", 
        "cityCode": "4205", 
        "provinceCode": "42"
    }, 
    {
        "code": "420528", 
        "name": "长阳土家族自治县", 
        "cityCode": "4205", 
        "provinceCode": "42"
    }, 
    {
        "code": "420529", 
        "name": "五峰土家族自治县", 
        "cityCode": "4205", 
        "provinceCode": "42"
    }, 
    {
        "code": "420581", 
        "name": "宜都市", 
        "cityCode": "4205", 
        "provinceCode": "42"
    }, 
    {
        "code": "420582", 
        "name": "当阳市", 
        "cityCode": "4205", 
        "provinceCode": "42"
    }, 
    {
        "code": "420583", 
        "name": "枝江市", 
        "cityCode": "4205", 
        "provinceCode": "42"
    }, 
    {
        "code": "420602", 
        "name": "襄城区", 
        "cityCode": "4206", 
        "provinceCode": "42"
    }, 
    {
        "code": "420606", 
        "name": "樊城区", 
        "cityCode": "4206", 
        "provinceCode": "42"
    }, 
    {
        "code": "420607", 
        "name": "襄州区", 
        "cityCode": "4206", 
        "provinceCode": "42"
    }, 
    {
        "code": "420624", 
        "name": "南漳县", 
        "cityCode": "4206", 
        "provinceCode": "42"
    }, 
    {
        "code": "420625", 
        "name": "谷城县", 
        "cityCode": "4206", 
        "provinceCode": "42"
    }, 
    {
        "code": "420626", 
        "name": "保康县", 
        "cityCode": "4206", 
        "provinceCode": "42"
    }, 
    {
        "code": "420682", 
        "name": "老河口市", 
        "cityCode": "4206", 
        "provinceCode": "42"
    }, 
    {
        "code": "420683", 
        "name": "枣阳市", 
        "cityCode": "4206", 
        "provinceCode": "42"
    }, 
    {
        "code": "420684", 
        "name": "宜城市", 
        "cityCode": "4206", 
        "provinceCode": "42"
    }, 
    {
        "code": "420702", 
        "name": "梁子湖区", 
        "cityCode": "4207", 
        "provinceCode": "42"
    }, 
    {
        "code": "420703", 
        "name": "华容区", 
        "cityCode": "4207", 
        "provinceCode": "42"
    }, 
    {
        "code": "420704", 
        "name": "鄂城区", 
        "cityCode": "4207", 
        "provinceCode": "42"
    }, 
    {
        "code": "420802", 
        "name": "东宝区", 
        "cityCode": "4208", 
        "provinceCode": "42"
    }, 
    {
        "code": "420804", 
        "name": "掇刀区", 
        "cityCode": "4208", 
        "provinceCode": "42"
    }, 
    {
        "code": "420821", 
        "name": "京山县", 
        "cityCode": "4208", 
        "provinceCode": "42"
    }, 
    {
        "code": "420822", 
        "name": "沙洋县", 
        "cityCode": "4208", 
        "provinceCode": "42"
    }, 
    {
        "code": "420881", 
        "name": "钟祥市", 
        "cityCode": "4208", 
        "provinceCode": "42"
    }, 
    {
        "code": "420902", 
        "name": "孝南区", 
        "cityCode": "4209", 
        "provinceCode": "42"
    }, 
    {
        "code": "420921", 
        "name": "孝昌县", 
        "cityCode": "4209", 
        "provinceCode": "42"
    }, 
    {
        "code": "420922", 
        "name": "大悟县", 
        "cityCode": "4209", 
        "provinceCode": "42"
    }, 
    {
        "code": "420923", 
        "name": "云梦县", 
        "cityCode": "4209", 
        "provinceCode": "42"
    }, 
    {
        "code": "420981", 
        "name": "应城市", 
        "cityCode": "4209", 
        "provinceCode": "42"
    }, 
    {
        "code": "420982", 
        "name": "安陆市", 
        "cityCode": "4209", 
        "provinceCode": "42"
    }, 
    {
        "code": "420984", 
        "name": "汉川市", 
        "cityCode": "4209", 
        "provinceCode": "42"
    }, 
    {
        "code": "421002", 
        "name": "沙市区", 
        "cityCode": "4210", 
        "provinceCode": "42"
    }, 
    {
        "code": "421003", 
        "name": "荆州区", 
        "cityCode": "4210", 
        "provinceCode": "42"
    }, 
    {
        "code": "421022", 
        "name": "公安县", 
        "cityCode": "4210", 
        "provinceCode": "42"
    }, 
    {
        "code": "421023", 
        "name": "监利县", 
        "cityCode": "4210", 
        "provinceCode": "42"
    }, 
    {
        "code": "421024", 
        "name": "江陵县", 
        "cityCode": "4210", 
        "provinceCode": "42"
    }, 
    {
        "code": "421071", 
        "name": "荆州经济技术开发区", 
        "cityCode": "4210", 
        "provinceCode": "42"
    }, 
    {
        "code": "421081", 
        "name": "石首市", 
        "cityCode": "4210", 
        "provinceCode": "42"
    }, 
    {
        "code": "421083", 
        "name": "洪湖市", 
        "cityCode": "4210", 
        "provinceCode": "42"
    }, 
    {
        "code": "421087", 
        "name": "松滋市", 
        "cityCode": "4210", 
        "provinceCode": "42"
    }, 
    {
        "code": "421102", 
        "name": "黄州区", 
        "cityCode": "4211", 
        "provinceCode": "42"
    }, 
    {
        "code": "421121", 
        "name": "团风县", 
        "cityCode": "4211", 
        "provinceCode": "42"
    }, 
    {
        "code": "421122", 
        "name": "红安县", 
        "cityCode": "4211", 
        "provinceCode": "42"
    }, 
    {
        "code": "421123", 
        "name": "罗田县", 
        "cityCode": "4211", 
        "provinceCode": "42"
    }, 
    {
        "code": "421124", 
        "name": "英山县", 
        "cityCode": "4211", 
        "provinceCode": "42"
    }, 
    {
        "code": "421125", 
        "name": "浠水县", 
        "cityCode": "4211", 
        "provinceCode": "42"
    }, 
    {
        "code": "421126", 
        "name": "蕲春县", 
        "cityCode": "4211", 
        "provinceCode": "42"
    }, 
    {
        "code": "421127", 
        "name": "黄梅县", 
        "cityCode": "4211", 
        "provinceCode": "42"
    }, 
    {
        "code": "421171", 
        "name": "龙感湖管理区", 
        "cityCode": "4211", 
        "provinceCode": "42"
    }, 
    {
        "code": "421181", 
        "name": "麻城市", 
        "cityCode": "4211", 
        "provinceCode": "42"
    }, 
    {
        "code": "421182", 
        "name": "武穴市", 
        "cityCode": "4211", 
        "provinceCode": "42"
    }, 
    {
        "code": "421202", 
        "name": "咸安区", 
        "cityCode": "4212", 
        "provinceCode": "42"
    }, 
    {
        "code": "421221", 
        "name": "嘉鱼县", 
        "cityCode": "4212", 
        "provinceCode": "42"
    }, 
    {
        "code": "421222", 
        "name": "通城县", 
        "cityCode": "4212", 
        "provinceCode": "42"
    }, 
    {
        "code": "421223", 
        "name": "崇阳县", 
        "cityCode": "4212", 
        "provinceCode": "42"
    }, 
    {
        "code": "421224", 
        "name": "通山县", 
        "cityCode": "4212", 
        "provinceCode": "42"
    }, 
    {
        "code": "421281", 
        "name": "赤壁市", 
        "cityCode": "4212", 
        "provinceCode": "42"
    }, 
    {
        "code": "421303", 
        "name": "曾都区", 
        "cityCode": "4213", 
        "provinceCode": "42"
    }, 
    {
        "code": "421321", 
        "name": "随县", 
        "cityCode": "4213", 
        "provinceCode": "42"
    }, 
    {
        "code": "421381", 
        "name": "广水市", 
        "cityCode": "4213", 
        "provinceCode": "42"
    }, 
    {
        "code": "422801", 
        "name": "恩施市", 
        "cityCode": "4228", 
        "provinceCode": "42"
    }, 
    {
        "code": "422802", 
        "name": "利川市", 
        "cityCode": "4228", 
        "provinceCode": "42"
    }, 
    {
        "code": "422822", 
        "name": "建始县", 
        "cityCode": "4228", 
        "provinceCode": "42"
    }, 
    {
        "code": "422823", 
        "name": "巴东县", 
        "cityCode": "4228", 
        "provinceCode": "42"
    }, 
    {
        "code": "422825", 
        "name": "宣恩县", 
        "cityCode": "4228", 
        "provinceCode": "42"
    }, 
    {
        "code": "422826", 
        "name": "咸丰县", 
        "cityCode": "4228", 
        "provinceCode": "42"
    }, 
    {
        "code": "422827", 
        "name": "来凤县", 
        "cityCode": "4228", 
        "provinceCode": "42"
    }, 
    {
        "code": "422828", 
        "name": "鹤峰县", 
        "cityCode": "4228", 
        "provinceCode": "42"
    }, 
    {
        "code": "429004", 
        "name": "仙桃市", 
        "cityCode": "4290", 
        "provinceCode": "42"
    }, 
    {
        "code": "429005", 
        "name": "潜江市", 
        "cityCode": "4290", 
        "provinceCode": "42"
    }, 
    {
        "code": "429006", 
        "name": "天门市", 
        "cityCode": "4290", 
        "provinceCode": "42"
    }, 
    {
        "code": "429021", 
        "name": "神农架林区", 
        "cityCode": "4290", 
        "provinceCode": "42"
    }, 
    {
        "code": "430102", 
        "name": "芙蓉区", 
        "cityCode": "4301", 
        "provinceCode": "43"
    }, 
    {
        "code": "430103", 
        "name": "天心区", 
        "cityCode": "4301", 
        "provinceCode": "43"
    }, 
    {
        "code": "430104", 
        "name": "岳麓区", 
        "cityCode": "4301", 
        "provinceCode": "43"
    }, 
    {
        "code": "430105", 
        "name": "开福区", 
        "cityCode": "4301", 
        "provinceCode": "43"
    }, 
    {
        "code": "430111", 
        "name": "雨花区", 
        "cityCode": "4301", 
        "provinceCode": "43"
    }, 
    {
        "code": "430112", 
        "name": "望城区", 
        "cityCode": "4301", 
        "provinceCode": "43"
    }, 
    {
        "code": "430121", 
        "name": "长沙县", 
        "cityCode": "4301", 
        "provinceCode": "43"
    }, 
    {
        "code": "430181", 
        "name": "浏阳市", 
        "cityCode": "4301", 
        "provinceCode": "43"
    }, 
    {
        "code": "430182", 
        "name": "宁乡市", 
        "cityCode": "4301", 
        "provinceCode": "43"
    }, 
    {
        "code": "430202", 
        "name": "荷塘区", 
        "cityCode": "4302", 
        "provinceCode": "43"
    }, 
    {
        "code": "430203", 
        "name": "芦淞区", 
        "cityCode": "4302", 
        "provinceCode": "43"
    }, 
    {
        "code": "430204", 
        "name": "石峰区", 
        "cityCode": "4302", 
        "provinceCode": "43"
    }, 
    {
        "code": "430211", 
        "name": "天元区", 
        "cityCode": "4302", 
        "provinceCode": "43"
    }, 
    {
        "code": "430221", 
        "name": "株洲县", 
        "cityCode": "4302", 
        "provinceCode": "43"
    }, 
    {
        "code": "430223", 
        "name": "攸县", 
        "cityCode": "4302", 
        "provinceCode": "43"
    }, 
    {
        "code": "430224", 
        "name": "茶陵县", 
        "cityCode": "4302", 
        "provinceCode": "43"
    }, 
    {
        "code": "430225", 
        "name": "炎陵县", 
        "cityCode": "4302", 
        "provinceCode": "43"
    }, 
    {
        "code": "430271", 
        "name": "云龙示范区", 
        "cityCode": "4302", 
        "provinceCode": "43"
    }, 
    {
        "code": "430281", 
        "name": "醴陵市", 
        "cityCode": "4302", 
        "provinceCode": "43"
    }, 
    {
        "code": "430302", 
        "name": "雨湖区", 
        "cityCode": "4303", 
        "provinceCode": "43"
    }, 
    {
        "code": "430304", 
        "name": "岳塘区", 
        "cityCode": "4303", 
        "provinceCode": "43"
    }, 
    {
        "code": "430321", 
        "name": "湘潭县", 
        "cityCode": "4303", 
        "provinceCode": "43"
    }, 
    {
        "code": "430371", 
        "name": "湖南湘潭高新技术产业园区", 
        "cityCode": "4303", 
        "provinceCode": "43"
    }, 
    {
        "code": "430372", 
        "name": "湘潭昭山示范区", 
        "cityCode": "4303", 
        "provinceCode": "43"
    }, 
    {
        "code": "430373", 
        "name": "湘潭九华示范区", 
        "cityCode": "4303", 
        "provinceCode": "43"
    }, 
    {
        "code": "430381", 
        "name": "湘乡市", 
        "cityCode": "4303", 
        "provinceCode": "43"
    }, 
    {
        "code": "430382", 
        "name": "韶山市", 
        "cityCode": "4303", 
        "provinceCode": "43"
    }, 
    {
        "code": "430405", 
        "name": "珠晖区", 
        "cityCode": "4304", 
        "provinceCode": "43"
    }, 
    {
        "code": "430406", 
        "name": "雁峰区", 
        "cityCode": "4304", 
        "provinceCode": "43"
    }, 
    {
        "code": "430407", 
        "name": "石鼓区", 
        "cityCode": "4304", 
        "provinceCode": "43"
    }, 
    {
        "code": "430408", 
        "name": "蒸湘区", 
        "cityCode": "4304", 
        "provinceCode": "43"
    }, 
    {
        "code": "430412", 
        "name": "南岳区", 
        "cityCode": "4304", 
        "provinceCode": "43"
    }, 
    {
        "code": "430421", 
        "name": "衡阳县", 
        "cityCode": "4304", 
        "provinceCode": "43"
    }, 
    {
        "code": "430422", 
        "name": "衡南县", 
        "cityCode": "4304", 
        "provinceCode": "43"
    }, 
    {
        "code": "430423", 
        "name": "衡山县", 
        "cityCode": "4304", 
        "provinceCode": "43"
    }, 
    {
        "code": "430424", 
        "name": "衡东县", 
        "cityCode": "4304", 
        "provinceCode": "43"
    }, 
    {
        "code": "430426", 
        "name": "祁东县", 
        "cityCode": "4304", 
        "provinceCode": "43"
    }, 
    {
        "code": "430471", 
        "name": "衡阳综合保税区", 
        "cityCode": "4304", 
        "provinceCode": "43"
    }, 
    {
        "code": "430472", 
        "name": "湖南衡阳高新技术产业园区", 
        "cityCode": "4304", 
        "provinceCode": "43"
    }, 
    {
        "code": "430473", 
        "name": "湖南衡阳松木经济开发区", 
        "cityCode": "4304", 
        "provinceCode": "43"
    }, 
    {
        "code": "430481", 
        "name": "耒阳市", 
        "cityCode": "4304", 
        "provinceCode": "43"
    }, 
    {
        "code": "430482", 
        "name": "常宁市", 
        "cityCode": "4304", 
        "provinceCode": "43"
    }, 
    {
        "code": "430502", 
        "name": "双清区", 
        "cityCode": "4305", 
        "provinceCode": "43"
    }, 
    {
        "code": "430503", 
        "name": "大祥区", 
        "cityCode": "4305", 
        "provinceCode": "43"
    }, 
    {
        "code": "430511", 
        "name": "北塔区", 
        "cityCode": "4305", 
        "provinceCode": "43"
    }, 
    {
        "code": "430521", 
        "name": "邵东县", 
        "cityCode": "4305", 
        "provinceCode": "43"
    }, 
    {
        "code": "430522", 
        "name": "新邵县", 
        "cityCode": "4305", 
        "provinceCode": "43"
    }, 
    {
        "code": "430523", 
        "name": "邵阳县", 
        "cityCode": "4305", 
        "provinceCode": "43"
    }, 
    {
        "code": "430524", 
        "name": "隆回县", 
        "cityCode": "4305", 
        "provinceCode": "43"
    }, 
    {
        "code": "430525", 
        "name": "洞口县", 
        "cityCode": "4305", 
        "provinceCode": "43"
    }, 
    {
        "code": "430527", 
        "name": "绥宁县", 
        "cityCode": "4305", 
        "provinceCode": "43"
    }, 
    {
        "code": "430528", 
        "name": "新宁县", 
        "cityCode": "4305", 
        "provinceCode": "43"
    }, 
    {
        "code": "430529", 
        "name": "城步苗族自治县", 
        "cityCode": "4305", 
        "provinceCode": "43"
    }, 
    {
        "code": "430581", 
        "name": "武冈市", 
        "cityCode": "4305", 
        "provinceCode": "43"
    }, 
    {
        "code": "430602", 
        "name": "岳阳楼区", 
        "cityCode": "4306", 
        "provinceCode": "43"
    }, 
    {
        "code": "430603", 
        "name": "云溪区", 
        "cityCode": "4306", 
        "provinceCode": "43"
    }, 
    {
        "code": "430611", 
        "name": "君山区", 
        "cityCode": "4306", 
        "provinceCode": "43"
    }, 
    {
        "code": "430621", 
        "name": "岳阳县", 
        "cityCode": "4306", 
        "provinceCode": "43"
    }, 
    {
        "code": "430623", 
        "name": "华容县", 
        "cityCode": "4306", 
        "provinceCode": "43"
    }, 
    {
        "code": "430624", 
        "name": "湘阴县", 
        "cityCode": "4306", 
        "provinceCode": "43"
    }, 
    {
        "code": "430626", 
        "name": "平江县", 
        "cityCode": "4306", 
        "provinceCode": "43"
    }, 
    {
        "code": "430671", 
        "name": "岳阳市屈原管理区", 
        "cityCode": "4306", 
        "provinceCode": "43"
    }, 
    {
        "code": "430681", 
        "name": "汨罗市", 
        "cityCode": "4306", 
        "provinceCode": "43"
    }, 
    {
        "code": "430682", 
        "name": "临湘市", 
        "cityCode": "4306", 
        "provinceCode": "43"
    }, 
    {
        "code": "430702", 
        "name": "武陵区", 
        "cityCode": "4307", 
        "provinceCode": "43"
    }, 
    {
        "code": "430703", 
        "name": "鼎城区", 
        "cityCode": "4307", 
        "provinceCode": "43"
    }, 
    {
        "code": "430721", 
        "name": "安乡县", 
        "cityCode": "4307", 
        "provinceCode": "43"
    }, 
    {
        "code": "430722", 
        "name": "汉寿县", 
        "cityCode": "4307", 
        "provinceCode": "43"
    }, 
    {
        "code": "430723", 
        "name": "澧县", 
        "cityCode": "4307", 
        "provinceCode": "43"
    }, 
    {
        "code": "430724", 
        "name": "临澧县", 
        "cityCode": "4307", 
        "provinceCode": "43"
    }, 
    {
        "code": "430725", 
        "name": "桃源县", 
        "cityCode": "4307", 
        "provinceCode": "43"
    }, 
    {
        "code": "430726", 
        "name": "石门县", 
        "cityCode": "4307", 
        "provinceCode": "43"
    }, 
    {
        "code": "430771", 
        "name": "常德市西洞庭管理区", 
        "cityCode": "4307", 
        "provinceCode": "43"
    }, 
    {
        "code": "430781", 
        "name": "津市市", 
        "cityCode": "4307", 
        "provinceCode": "43"
    }, 
    {
        "code": "430802", 
        "name": "永定区", 
        "cityCode": "4308", 
        "provinceCode": "43"
    }, 
    {
        "code": "430811", 
        "name": "武陵源区", 
        "cityCode": "4308", 
        "provinceCode": "43"
    }, 
    {
        "code": "430821", 
        "name": "慈利县", 
        "cityCode": "4308", 
        "provinceCode": "43"
    }, 
    {
        "code": "430822", 
        "name": "桑植县", 
        "cityCode": "4308", 
        "provinceCode": "43"
    }, 
    {
        "code": "430902", 
        "name": "资阳区", 
        "cityCode": "4309", 
        "provinceCode": "43"
    }, 
    {
        "code": "430903", 
        "name": "赫山区", 
        "cityCode": "4309", 
        "provinceCode": "43"
    }, 
    {
        "code": "430921", 
        "name": "南县", 
        "cityCode": "4309", 
        "provinceCode": "43"
    }, 
    {
        "code": "430922", 
        "name": "桃江县", 
        "cityCode": "4309", 
        "provinceCode": "43"
    }, 
    {
        "code": "430923", 
        "name": "安化县", 
        "cityCode": "4309", 
        "provinceCode": "43"
    }, 
    {
        "code": "430971", 
        "name": "益阳市大通湖管理区", 
        "cityCode": "4309", 
        "provinceCode": "43"
    }, 
    {
        "code": "430972", 
        "name": "湖南益阳高新技术产业园区", 
        "cityCode": "4309", 
        "provinceCode": "43"
    }, 
    {
        "code": "430981", 
        "name": "沅江市", 
        "cityCode": "4309", 
        "provinceCode": "43"
    }, 
    {
        "code": "431002", 
        "name": "北湖区", 
        "cityCode": "4310", 
        "provinceCode": "43"
    }, 
    {
        "code": "431003", 
        "name": "苏仙区", 
        "cityCode": "4310", 
        "provinceCode": "43"
    }, 
    {
        "code": "431021", 
        "name": "桂阳县", 
        "cityCode": "4310", 
        "provinceCode": "43"
    }, 
    {
        "code": "431022", 
        "name": "宜章县", 
        "cityCode": "4310", 
        "provinceCode": "43"
    }, 
    {
        "code": "431023", 
        "name": "永兴县", 
        "cityCode": "4310", 
        "provinceCode": "43"
    }, 
    {
        "code": "431024", 
        "name": "嘉禾县", 
        "cityCode": "4310", 
        "provinceCode": "43"
    }, 
    {
        "code": "431025", 
        "name": "临武县", 
        "cityCode": "4310", 
        "provinceCode": "43"
    }, 
    {
        "code": "431026", 
        "name": "汝城县", 
        "cityCode": "4310", 
        "provinceCode": "43"
    }, 
    {
        "code": "431027", 
        "name": "桂东县", 
        "cityCode": "4310", 
        "provinceCode": "43"
    }, 
    {
        "code": "431028", 
        "name": "安仁县", 
        "cityCode": "4310", 
        "provinceCode": "43"
    }, 
    {
        "code": "431081", 
        "name": "资兴市", 
        "cityCode": "4310", 
        "provinceCode": "43"
    }, 
    {
        "code": "431102", 
        "name": "零陵区", 
        "cityCode": "4311", 
        "provinceCode": "43"
    }, 
    {
        "code": "431103", 
        "name": "冷水滩区", 
        "cityCode": "4311", 
        "provinceCode": "43"
    }, 
    {
        "code": "431121", 
        "name": "祁阳县", 
        "cityCode": "4311", 
        "provinceCode": "43"
    }, 
    {
        "code": "431122", 
        "name": "东安县", 
        "cityCode": "4311", 
        "provinceCode": "43"
    }, 
    {
        "code": "431123", 
        "name": "双牌县", 
        "cityCode": "4311", 
        "provinceCode": "43"
    }, 
    {
        "code": "431124", 
        "name": "道县", 
        "cityCode": "4311", 
        "provinceCode": "43"
    }, 
    {
        "code": "431125", 
        "name": "江永县", 
        "cityCode": "4311", 
        "provinceCode": "43"
    }, 
    {
        "code": "431126", 
        "name": "宁远县", 
        "cityCode": "4311", 
        "provinceCode": "43"
    }, 
    {
        "code": "431127", 
        "name": "蓝山县", 
        "cityCode": "4311", 
        "provinceCode": "43"
    }, 
    {
        "code": "431128", 
        "name": "新田县", 
        "cityCode": "4311", 
        "provinceCode": "43"
    }, 
    {
        "code": "431129", 
        "name": "江华瑶族自治县", 
        "cityCode": "4311", 
        "provinceCode": "43"
    }, 
    {
        "code": "431171", 
        "name": "永州经济技术开发区", 
        "cityCode": "4311", 
        "provinceCode": "43"
    }, 
    {
        "code": "431172", 
        "name": "永州市金洞管理区", 
        "cityCode": "4311", 
        "provinceCode": "43"
    }, 
    {
        "code": "431173", 
        "name": "永州市回龙圩管理区", 
        "cityCode": "4311", 
        "provinceCode": "43"
    }, 
    {
        "code": "431202", 
        "name": "鹤城区", 
        "cityCode": "4312", 
        "provinceCode": "43"
    }, 
    {
        "code": "431221", 
        "name": "中方县", 
        "cityCode": "4312", 
        "provinceCode": "43"
    }, 
    {
        "code": "431222", 
        "name": "沅陵县", 
        "cityCode": "4312", 
        "provinceCode": "43"
    }, 
    {
        "code": "431223", 
        "name": "辰溪县", 
        "cityCode": "4312", 
        "provinceCode": "43"
    }, 
    {
        "code": "431224", 
        "name": "溆浦县", 
        "cityCode": "4312", 
        "provinceCode": "43"
    }, 
    {
        "code": "431225", 
        "name": "会同县", 
        "cityCode": "4312", 
        "provinceCode": "43"
    }, 
    {
        "code": "431226", 
        "name": "麻阳苗族自治县", 
        "cityCode": "4312", 
        "provinceCode": "43"
    }, 
    {
        "code": "431227", 
        "name": "新晃侗族自治县", 
        "cityCode": "4312", 
        "provinceCode": "43"
    }, 
    {
        "code": "431228", 
        "name": "芷江侗族自治县", 
        "cityCode": "4312", 
        "provinceCode": "43"
    }, 
    {
        "code": "431229", 
        "name": "靖州苗族侗族自治县", 
        "cityCode": "4312", 
        "provinceCode": "43"
    }, 
    {
        "code": "431230", 
        "name": "通道侗族自治县", 
        "cityCode": "4312", 
        "provinceCode": "43"
    }, 
    {
        "code": "431271", 
        "name": "怀化市洪江管理区", 
        "cityCode": "4312", 
        "provinceCode": "43"
    }, 
    {
        "code": "431281", 
        "name": "洪江市", 
        "cityCode": "4312", 
        "provinceCode": "43"
    }, 
    {
        "code": "431302", 
        "name": "娄星区", 
        "cityCode": "4313", 
        "provinceCode": "43"
    }, 
    {
        "code": "431321", 
        "name": "双峰县", 
        "cityCode": "4313", 
        "provinceCode": "43"
    }, 
    {
        "code": "431322", 
        "name": "新化县", 
        "cityCode": "4313", 
        "provinceCode": "43"
    }, 
    {
        "code": "431381", 
        "name": "冷水江市", 
        "cityCode": "4313", 
        "provinceCode": "43"
    }, 
    {
        "code": "431382", 
        "name": "涟源市", 
        "cityCode": "4313", 
        "provinceCode": "43"
    }, 
    {
        "code": "433101", 
        "name": "吉首市", 
        "cityCode": "4331", 
        "provinceCode": "43"
    }, 
    {
        "code": "433122", 
        "name": "泸溪县", 
        "cityCode": "4331", 
        "provinceCode": "43"
    }, 
    {
        "code": "433123", 
        "name": "凤凰县", 
        "cityCode": "4331", 
        "provinceCode": "43"
    }, 
    {
        "code": "433124", 
        "name": "花垣县", 
        "cityCode": "4331", 
        "provinceCode": "43"
    }, 
    {
        "code": "433125", 
        "name": "保靖县", 
        "cityCode": "4331", 
        "provinceCode": "43"
    }, 
    {
        "code": "433126", 
        "name": "古丈县", 
        "cityCode": "4331", 
        "provinceCode": "43"
    }, 
    {
        "code": "433127", 
        "name": "永顺县", 
        "cityCode": "4331", 
        "provinceCode": "43"
    }, 
    {
        "code": "433130", 
        "name": "龙山县", 
        "cityCode": "4331", 
        "provinceCode": "43"
    }, 
    {
        "code": "433172", 
        "name": "湖南吉首经济开发区", 
        "cityCode": "4331", 
        "provinceCode": "43"
    }, 
    {
        "code": "433173", 
        "name": "湖南永顺经济开发区", 
        "cityCode": "4331", 
        "provinceCode": "43"
    }, 
    {
        "code": "440103", 
        "name": "荔湾区", 
        "cityCode": "4401", 
        "provinceCode": "44"
    }, 
    {
        "code": "440104", 
        "name": "越秀区", 
        "cityCode": "4401", 
        "provinceCode": "44"
    }, 
    {
        "code": "440105", 
        "name": "海珠区", 
        "cityCode": "4401", 
        "provinceCode": "44"
    }, 
    {
        "code": "440106", 
        "name": "天河区", 
        "cityCode": "4401", 
        "provinceCode": "44"
    }, 
    {
        "code": "440111", 
        "name": "白云区", 
        "cityCode": "4401", 
        "provinceCode": "44"
    }, 
    {
        "code": "440112", 
        "name": "黄埔区", 
        "cityCode": "4401", 
        "provinceCode": "44"
    }, 
    {
        "code": "440113", 
        "name": "番禺区", 
        "cityCode": "4401", 
        "provinceCode": "44"
    }, 
    {
        "code": "440114", 
        "name": "花都区", 
        "cityCode": "4401", 
        "provinceCode": "44"
    }, 
    {
        "code": "440115", 
        "name": "南沙区", 
        "cityCode": "4401", 
        "provinceCode": "44"
    }, 
    {
        "code": "440117", 
        "name": "从化区", 
        "cityCode": "4401", 
        "provinceCode": "44"
    }, 
    {
        "code": "440118", 
        "name": "增城区", 
        "cityCode": "4401", 
        "provinceCode": "44"
    }, 
    {
        "code": "440203", 
        "name": "武江区", 
        "cityCode": "4402", 
        "provinceCode": "44"
    }, 
    {
        "code": "440204", 
        "name": "浈江区", 
        "cityCode": "4402", 
        "provinceCode": "44"
    }, 
    {
        "code": "440205", 
        "name": "曲江区", 
        "cityCode": "4402", 
        "provinceCode": "44"
    }, 
    {
        "code": "440222", 
        "name": "始兴县", 
        "cityCode": "4402", 
        "provinceCode": "44"
    }, 
    {
        "code": "440224", 
        "name": "仁化县", 
        "cityCode": "4402", 
        "provinceCode": "44"
    }, 
    {
        "code": "440229", 
        "name": "翁源县", 
        "cityCode": "4402", 
        "provinceCode": "44"
    }, 
    {
        "code": "440232", 
        "name": "乳源瑶族自治县", 
        "cityCode": "4402", 
        "provinceCode": "44"
    }, 
    {
        "code": "440233", 
        "name": "新丰县", 
        "cityCode": "4402", 
        "provinceCode": "44"
    }, 
    {
        "code": "440281", 
        "name": "乐昌市", 
        "cityCode": "4402", 
        "provinceCode": "44"
    }, 
    {
        "code": "440282", 
        "name": "南雄市", 
        "cityCode": "4402", 
        "provinceCode": "44"
    }, 
    {
        "code": "440303", 
        "name": "罗湖区", 
        "cityCode": "4403", 
        "provinceCode": "44"
    }, 
    {
        "code": "440304", 
        "name": "福田区", 
        "cityCode": "4403", 
        "provinceCode": "44"
    }, 
    {
        "code": "440305", 
        "name": "南山区", 
        "cityCode": "4403", 
        "provinceCode": "44"
    }, 
    {
        "code": "440306", 
        "name": "宝安区", 
        "cityCode": "4403", 
        "provinceCode": "44"
    }, 
    {
        "code": "440307", 
        "name": "龙岗区", 
        "cityCode": "4403", 
        "provinceCode": "44"
    }, 
    {
        "code": "440308", 
        "name": "盐田区", 
        "cityCode": "4403", 
        "provinceCode": "44"
    }, 
    {
        "code": "440309", 
        "name": "龙华区", 
        "cityCode": "4403", 
        "provinceCode": "44"
    }, 
    {
        "code": "440310", 
        "name": "坪山区", 
        "cityCode": "4403", 
        "provinceCode": "44"
    }, 
    {
        "code": "440402", 
        "name": "香洲区", 
        "cityCode": "4404", 
        "provinceCode": "44"
    }, 
    {
        "code": "440403", 
        "name": "斗门区", 
        "cityCode": "4404", 
        "provinceCode": "44"
    }, 
    {
        "code": "440404", 
        "name": "金湾区", 
        "cityCode": "4404", 
        "provinceCode": "44"
    }, 
    {
        "code": "440507", 
        "name": "龙湖区", 
        "cityCode": "4405", 
        "provinceCode": "44"
    }, 
    {
        "code": "440511", 
        "name": "金平区", 
        "cityCode": "4405", 
        "provinceCode": "44"
    }, 
    {
        "code": "440512", 
        "name": "濠江区", 
        "cityCode": "4405", 
        "provinceCode": "44"
    }, 
    {
        "code": "440513", 
        "name": "潮阳区", 
        "cityCode": "4405", 
        "provinceCode": "44"
    }, 
    {
        "code": "440514", 
        "name": "潮南区", 
        "cityCode": "4405", 
        "provinceCode": "44"
    }, 
    {
        "code": "440515", 
        "name": "澄海区", 
        "cityCode": "4405", 
        "provinceCode": "44"
    }, 
    {
        "code": "440523", 
        "name": "南澳县", 
        "cityCode": "4405", 
        "provinceCode": "44"
    }, 
    {
        "code": "440604", 
        "name": "禅城区", 
        "cityCode": "4406", 
        "provinceCode": "44"
    }, 
    {
        "code": "440605", 
        "name": "南海区", 
        "cityCode": "4406", 
        "provinceCode": "44"
    }, 
    {
        "code": "440606", 
        "name": "顺德区", 
        "cityCode": "4406", 
        "provinceCode": "44"
    }, 
    {
        "code": "440607", 
        "name": "三水区", 
        "cityCode": "4406", 
        "provinceCode": "44"
    }, 
    {
        "code": "440608", 
        "name": "高明区", 
        "cityCode": "4406", 
        "provinceCode": "44"
    }, 
    {
        "code": "440703", 
        "name": "蓬江区", 
        "cityCode": "4407", 
        "provinceCode": "44"
    }, 
    {
        "code": "440704", 
        "name": "江海区", 
        "cityCode": "4407", 
        "provinceCode": "44"
    }, 
    {
        "code": "440705", 
        "name": "新会区", 
        "cityCode": "4407", 
        "provinceCode": "44"
    }, 
    {
        "code": "440781", 
        "name": "台山市", 
        "cityCode": "4407", 
        "provinceCode": "44"
    }, 
    {
        "code": "440783", 
        "name": "开平市", 
        "cityCode": "4407", 
        "provinceCode": "44"
    }, 
    {
        "code": "440784", 
        "name": "鹤山市", 
        "cityCode": "4407", 
        "provinceCode": "44"
    }, 
    {
        "code": "440785", 
        "name": "恩平市", 
        "cityCode": "4407", 
        "provinceCode": "44"
    }, 
    {
        "code": "440802", 
        "name": "赤坎区", 
        "cityCode": "4408", 
        "provinceCode": "44"
    }, 
    {
        "code": "440803", 
        "name": "霞山区", 
        "cityCode": "4408", 
        "provinceCode": "44"
    }, 
    {
        "code": "440804", 
        "name": "坡头区", 
        "cityCode": "4408", 
        "provinceCode": "44"
    }, 
    {
        "code": "440811", 
        "name": "麻章区", 
        "cityCode": "4408", 
        "provinceCode": "44"
    }, 
    {
        "code": "440823", 
        "name": "遂溪县", 
        "cityCode": "4408", 
        "provinceCode": "44"
    }, 
    {
        "code": "440825", 
        "name": "徐闻县", 
        "cityCode": "4408", 
        "provinceCode": "44"
    }, 
    {
        "code": "440881", 
        "name": "廉江市", 
        "cityCode": "4408", 
        "provinceCode": "44"
    }, 
    {
        "code": "440882", 
        "name": "雷州市", 
        "cityCode": "4408", 
        "provinceCode": "44"
    }, 
    {
        "code": "440883", 
        "name": "吴川市", 
        "cityCode": "4408", 
        "provinceCode": "44"
    }, 
    {
        "code": "440902", 
        "name": "茂南区", 
        "cityCode": "4409", 
        "provinceCode": "44"
    }, 
    {
        "code": "440904", 
        "name": "电白区", 
        "cityCode": "4409", 
        "provinceCode": "44"
    }, 
    {
        "code": "440981", 
        "name": "高州市", 
        "cityCode": "4409", 
        "provinceCode": "44"
    }, 
    {
        "code": "440982", 
        "name": "化州市", 
        "cityCode": "4409", 
        "provinceCode": "44"
    }, 
    {
        "code": "440983", 
        "name": "信宜市", 
        "cityCode": "4409", 
        "provinceCode": "44"
    }, 
    {
        "code": "441202", 
        "name": "端州区", 
        "cityCode": "4412", 
        "provinceCode": "44"
    }, 
    {
        "code": "441203", 
        "name": "鼎湖区", 
        "cityCode": "4412", 
        "provinceCode": "44"
    }, 
    {
        "code": "441204", 
        "name": "高要区", 
        "cityCode": "4412", 
        "provinceCode": "44"
    }, 
    {
        "code": "441223", 
        "name": "广宁县", 
        "cityCode": "4412", 
        "provinceCode": "44"
    }, 
    {
        "code": "441224", 
        "name": "怀集县", 
        "cityCode": "4412", 
        "provinceCode": "44"
    }, 
    {
        "code": "441225", 
        "name": "封开县", 
        "cityCode": "4412", 
        "provinceCode": "44"
    }, 
    {
        "code": "441226", 
        "name": "德庆县", 
        "cityCode": "4412", 
        "provinceCode": "44"
    }, 
    {
        "code": "441284", 
        "name": "四会市", 
        "cityCode": "4412", 
        "provinceCode": "44"
    }, 
    {
        "code": "441302", 
        "name": "惠城区", 
        "cityCode": "4413", 
        "provinceCode": "44"
    }, 
    {
        "code": "441303", 
        "name": "惠阳区", 
        "cityCode": "4413", 
        "provinceCode": "44"
    }, 
    {
        "code": "441322", 
        "name": "博罗县", 
        "cityCode": "4413", 
        "provinceCode": "44"
    }, 
    {
        "code": "441323", 
        "name": "惠东县", 
        "cityCode": "4413", 
        "provinceCode": "44"
    }, 
    {
        "code": "441324", 
        "name": "龙门县", 
        "cityCode": "4413", 
        "provinceCode": "44"
    }, 
    {
        "code": "441402", 
        "name": "梅江区", 
        "cityCode": "4414", 
        "provinceCode": "44"
    }, 
    {
        "code": "441403", 
        "name": "梅县区", 
        "cityCode": "4414", 
        "provinceCode": "44"
    }, 
    {
        "code": "441422", 
        "name": "大埔县", 
        "cityCode": "4414", 
        "provinceCode": "44"
    }, 
    {
        "code": "441423", 
        "name": "丰顺县", 
        "cityCode": "4414", 
        "provinceCode": "44"
    }, 
    {
        "code": "441424", 
        "name": "五华县", 
        "cityCode": "4414", 
        "provinceCode": "44"
    }, 
    {
        "code": "441426", 
        "name": "平远县", 
        "cityCode": "4414", 
        "provinceCode": "44"
    }, 
    {
        "code": "441427", 
        "name": "蕉岭县", 
        "cityCode": "4414", 
        "provinceCode": "44"
    }, 
    {
        "code": "441481", 
        "name": "兴宁市", 
        "cityCode": "4414", 
        "provinceCode": "44"
    }, 
    {
        "code": "441502", 
        "name": "城区", 
        "cityCode": "4415", 
        "provinceCode": "44"
    }, 
    {
        "code": "441521", 
        "name": "海丰县", 
        "cityCode": "4415", 
        "provinceCode": "44"
    }, 
    {
        "code": "441523", 
        "name": "陆河县", 
        "cityCode": "4415", 
        "provinceCode": "44"
    }, 
    {
        "code": "441581", 
        "name": "陆丰市", 
        "cityCode": "4415", 
        "provinceCode": "44"
    }, 
    {
        "code": "441602", 
        "name": "源城区", 
        "cityCode": "4416", 
        "provinceCode": "44"
    }, 
    {
        "code": "441621", 
        "name": "紫金县", 
        "cityCode": "4416", 
        "provinceCode": "44"
    }, 
    {
        "code": "441622", 
        "name": "龙川县", 
        "cityCode": "4416", 
        "provinceCode": "44"
    }, 
    {
        "code": "441623", 
        "name": "连平县", 
        "cityCode": "4416", 
        "provinceCode": "44"
    }, 
    {
        "code": "441624", 
        "name": "和平县", 
        "cityCode": "4416", 
        "provinceCode": "44"
    }, 
    {
        "code": "441625", 
        "name": "东源县", 
        "cityCode": "4416", 
        "provinceCode": "44"
    }, 
    {
        "code": "441702", 
        "name": "江城区", 
        "cityCode": "4417", 
        "provinceCode": "44"
    }, 
    {
        "code": "441704", 
        "name": "阳东区", 
        "cityCode": "4417", 
        "provinceCode": "44"
    }, 
    {
        "code": "441721", 
        "name": "阳西县", 
        "cityCode": "4417", 
        "provinceCode": "44"
    }, 
    {
        "code": "441781", 
        "name": "阳春市", 
        "cityCode": "4417", 
        "provinceCode": "44"
    }, 
    {
        "code": "441802", 
        "name": "清城区", 
        "cityCode": "4418", 
        "provinceCode": "44"
    }, 
    {
        "code": "441803", 
        "name": "清新区", 
        "cityCode": "4418", 
        "provinceCode": "44"
    }, 
    {
        "code": "441821", 
        "name": "佛冈县", 
        "cityCode": "4418", 
        "provinceCode": "44"
    }, 
    {
        "code": "441823", 
        "name": "阳山县", 
        "cityCode": "4418", 
        "provinceCode": "44"
    }, 
    {
        "code": "441825", 
        "name": "连山壮族瑶族自治县", 
        "cityCode": "4418", 
        "provinceCode": "44"
    }, 
    {
        "code": "441826", 
        "name": "连南瑶族自治县", 
        "cityCode": "4418", 
        "provinceCode": "44"
    }, 
    {
        "code": "441881", 
        "name": "英德市", 
        "cityCode": "4418", 
        "provinceCode": "44"
    }, 
    {
        "code": "441882", 
        "name": "连州市", 
        "cityCode": "4418", 
        "provinceCode": "44"
    }, 
    {
        "code": "441900", 
        "name": "东莞市", 
        "cityCode": "4419", 
        "provinceCode": "44"
    }, 
    {
        "code": "442000", 
        "name": "中山市", 
        "cityCode": "4420", 
        "provinceCode": "44"
    }, 
    {
        "code": "445102", 
        "name": "湘桥区", 
        "cityCode": "4451", 
        "provinceCode": "44"
    }, 
    {
        "code": "445103", 
        "name": "潮安区", 
        "cityCode": "4451", 
        "provinceCode": "44"
    }, 
    {
        "code": "445122", 
        "name": "饶平县", 
        "cityCode": "4451", 
        "provinceCode": "44"
    }, 
    {
        "code": "445202", 
        "name": "榕城区", 
        "cityCode": "4452", 
        "provinceCode": "44"
    }, 
    {
        "code": "445203", 
        "name": "揭东区", 
        "cityCode": "4452", 
        "provinceCode": "44"
    }, 
    {
        "code": "445222", 
        "name": "揭西县", 
        "cityCode": "4452", 
        "provinceCode": "44"
    }, 
    {
        "code": "445224", 
        "name": "惠来县", 
        "cityCode": "4452", 
        "provinceCode": "44"
    }, 
    {
        "code": "445281", 
        "name": "普宁市", 
        "cityCode": "4452", 
        "provinceCode": "44"
    }, 
    {
        "code": "445302", 
        "name": "云城区", 
        "cityCode": "4453", 
        "provinceCode": "44"
    }, 
    {
        "code": "445303", 
        "name": "云安区", 
        "cityCode": "4453", 
        "provinceCode": "44"
    }, 
    {
        "code": "445321", 
        "name": "新兴县", 
        "cityCode": "4453", 
        "provinceCode": "44"
    }, 
    {
        "code": "445322", 
        "name": "郁南县", 
        "cityCode": "4453", 
        "provinceCode": "44"
    }, 
    {
        "code": "445381", 
        "name": "罗定市", 
        "cityCode": "4453", 
        "provinceCode": "44"
    }, 
    {
        "code": "450102", 
        "name": "兴宁区", 
        "cityCode": "4501", 
        "provinceCode": "45"
    }, 
    {
        "code": "450103", 
        "name": "青秀区", 
        "cityCode": "4501", 
        "provinceCode": "45"
    }, 
    {
        "code": "450105", 
        "name": "江南区", 
        "cityCode": "4501", 
        "provinceCode": "45"
    }, 
    {
        "code": "450107", 
        "name": "西乡塘区", 
        "cityCode": "4501", 
        "provinceCode": "45"
    }, 
    {
        "code": "450108", 
        "name": "良庆区", 
        "cityCode": "4501", 
        "provinceCode": "45"
    }, 
    {
        "code": "450109", 
        "name": "邕宁区", 
        "cityCode": "4501", 
        "provinceCode": "45"
    }, 
    {
        "code": "450110", 
        "name": "武鸣区", 
        "cityCode": "4501", 
        "provinceCode": "45"
    }, 
    {
        "code": "450123", 
        "name": "隆安县", 
        "cityCode": "4501", 
        "provinceCode": "45"
    }, 
    {
        "code": "450124", 
        "name": "马山县", 
        "cityCode": "4501", 
        "provinceCode": "45"
    }, 
    {
        "code": "450125", 
        "name": "上林县", 
        "cityCode": "4501", 
        "provinceCode": "45"
    }, 
    {
        "code": "450126", 
        "name": "宾阳县", 
        "cityCode": "4501", 
        "provinceCode": "45"
    }, 
    {
        "code": "450127", 
        "name": "横县", 
        "cityCode": "4501", 
        "provinceCode": "45"
    }, 
    {
        "code": "450202", 
        "name": "城中区", 
        "cityCode": "4502", 
        "provinceCode": "45"
    }, 
    {
        "code": "450203", 
        "name": "鱼峰区", 
        "cityCode": "4502", 
        "provinceCode": "45"
    }, 
    {
        "code": "450204", 
        "name": "柳南区", 
        "cityCode": "4502", 
        "provinceCode": "45"
    }, 
    {
        "code": "450205", 
        "name": "柳北区", 
        "cityCode": "4502", 
        "provinceCode": "45"
    }, 
    {
        "code": "450206", 
        "name": "柳江区", 
        "cityCode": "4502", 
        "provinceCode": "45"
    }, 
    {
        "code": "450222", 
        "name": "柳城县", 
        "cityCode": "4502", 
        "provinceCode": "45"
    }, 
    {
        "code": "450223", 
        "name": "鹿寨县", 
        "cityCode": "4502", 
        "provinceCode": "45"
    }, 
    {
        "code": "450224", 
        "name": "融安县", 
        "cityCode": "4502", 
        "provinceCode": "45"
    }, 
    {
        "code": "450225", 
        "name": "融水苗族自治县", 
        "cityCode": "4502", 
        "provinceCode": "45"
    }, 
    {
        "code": "450226", 
        "name": "三江侗族自治县", 
        "cityCode": "4502", 
        "provinceCode": "45"
    }, 
    {
        "code": "450302", 
        "name": "秀峰区", 
        "cityCode": "4503", 
        "provinceCode": "45"
    }, 
    {
        "code": "450303", 
        "name": "叠彩区", 
        "cityCode": "4503", 
        "provinceCode": "45"
    }, 
    {
        "code": "450304", 
        "name": "象山区", 
        "cityCode": "4503", 
        "provinceCode": "45"
    }, 
    {
        "code": "450305", 
        "name": "七星区", 
        "cityCode": "4503", 
        "provinceCode": "45"
    }, 
    {
        "code": "450311", 
        "name": "雁山区", 
        "cityCode": "4503", 
        "provinceCode": "45"
    }, 
    {
        "code": "450312", 
        "name": "临桂区", 
        "cityCode": "4503", 
        "provinceCode": "45"
    }, 
    {
        "code": "450321", 
        "name": "阳朔县", 
        "cityCode": "4503", 
        "provinceCode": "45"
    }, 
    {
        "code": "450323", 
        "name": "灵川县", 
        "cityCode": "4503", 
        "provinceCode": "45"
    }, 
    {
        "code": "450324", 
        "name": "全州县", 
        "cityCode": "4503", 
        "provinceCode": "45"
    }, 
    {
        "code": "450325", 
        "name": "兴安县", 
        "cityCode": "4503", 
        "provinceCode": "45"
    }, 
    {
        "code": "450326", 
        "name": "永福县", 
        "cityCode": "4503", 
        "provinceCode": "45"
    }, 
    {
        "code": "450327", 
        "name": "灌阳县", 
        "cityCode": "4503", 
        "provinceCode": "45"
    }, 
    {
        "code": "450328", 
        "name": "龙胜各族自治县", 
        "cityCode": "4503", 
        "provinceCode": "45"
    }, 
    {
        "code": "450329", 
        "name": "资源县", 
        "cityCode": "4503", 
        "provinceCode": "45"
    }, 
    {
        "code": "450330", 
        "name": "平乐县", 
        "cityCode": "4503", 
        "provinceCode": "45"
    }, 
    {
        "code": "450331", 
        "name": "荔浦县", 
        "cityCode": "4503", 
        "provinceCode": "45"
    }, 
    {
        "code": "450332", 
        "name": "恭城瑶族自治县", 
        "cityCode": "4503", 
        "provinceCode": "45"
    }, 
    {
        "code": "450403", 
        "name": "万秀区", 
        "cityCode": "4504", 
        "provinceCode": "45"
    }, 
    {
        "code": "450405", 
        "name": "长洲区", 
        "cityCode": "4504", 
        "provinceCode": "45"
    }, 
    {
        "code": "450406", 
        "name": "龙圩区", 
        "cityCode": "4504", 
        "provinceCode": "45"
    }, 
    {
        "code": "450421", 
        "name": "苍梧县", 
        "cityCode": "4504", 
        "provinceCode": "45"
    }, 
    {
        "code": "450422", 
        "name": "藤县", 
        "cityCode": "4504", 
        "provinceCode": "45"
    }, 
    {
        "code": "450423", 
        "name": "蒙山县", 
        "cityCode": "4504", 
        "provinceCode": "45"
    }, 
    {
        "code": "450481", 
        "name": "岑溪市", 
        "cityCode": "4504", 
        "provinceCode": "45"
    }, 
    {
        "code": "450502", 
        "name": "海城区", 
        "cityCode": "4505", 
        "provinceCode": "45"
    }, 
    {
        "code": "450503", 
        "name": "银海区", 
        "cityCode": "4505", 
        "provinceCode": "45"
    }, 
    {
        "code": "450512", 
        "name": "铁山港区", 
        "cityCode": "4505", 
        "provinceCode": "45"
    }, 
    {
        "code": "450521", 
        "name": "合浦县", 
        "cityCode": "4505", 
        "provinceCode": "45"
    }, 
    {
        "code": "450602", 
        "name": "港口区", 
        "cityCode": "4506", 
        "provinceCode": "45"
    }, 
    {
        "code": "450603", 
        "name": "防城区", 
        "cityCode": "4506", 
        "provinceCode": "45"
    }, 
    {
        "code": "450621", 
        "name": "上思县", 
        "cityCode": "4506", 
        "provinceCode": "45"
    }, 
    {
        "code": "450681", 
        "name": "东兴市", 
        "cityCode": "4506", 
        "provinceCode": "45"
    }, 
    {
        "code": "450702", 
        "name": "钦南区", 
        "cityCode": "4507", 
        "provinceCode": "45"
    }, 
    {
        "code": "450703", 
        "name": "钦北区", 
        "cityCode": "4507", 
        "provinceCode": "45"
    }, 
    {
        "code": "450721", 
        "name": "灵山县", 
        "cityCode": "4507", 
        "provinceCode": "45"
    }, 
    {
        "code": "450722", 
        "name": "浦北县", 
        "cityCode": "4507", 
        "provinceCode": "45"
    }, 
    {
        "code": "450802", 
        "name": "港北区", 
        "cityCode": "4508", 
        "provinceCode": "45"
    }, 
    {
        "code": "450803", 
        "name": "港南区", 
        "cityCode": "4508", 
        "provinceCode": "45"
    }, 
    {
        "code": "450804", 
        "name": "覃塘区", 
        "cityCode": "4508", 
        "provinceCode": "45"
    }, 
    {
        "code": "450821", 
        "name": "平南县", 
        "cityCode": "4508", 
        "provinceCode": "45"
    }, 
    {
        "code": "450881", 
        "name": "桂平市", 
        "cityCode": "4508", 
        "provinceCode": "45"
    }, 
    {
        "code": "450902", 
        "name": "玉州区", 
        "cityCode": "4509", 
        "provinceCode": "45"
    }, 
    {
        "code": "450903", 
        "name": "福绵区", 
        "cityCode": "4509", 
        "provinceCode": "45"
    }, 
    {
        "code": "450921", 
        "name": "容县", 
        "cityCode": "4509", 
        "provinceCode": "45"
    }, 
    {
        "code": "450922", 
        "name": "陆川县", 
        "cityCode": "4509", 
        "provinceCode": "45"
    }, 
    {
        "code": "450923", 
        "name": "博白县", 
        "cityCode": "4509", 
        "provinceCode": "45"
    }, 
    {
        "code": "450924", 
        "name": "兴业县", 
        "cityCode": "4509", 
        "provinceCode": "45"
    }, 
    {
        "code": "450981", 
        "name": "北流市", 
        "cityCode": "4509", 
        "provinceCode": "45"
    }, 
    {
        "code": "451002", 
        "name": "右江区", 
        "cityCode": "4510", 
        "provinceCode": "45"
    }, 
    {
        "code": "451021", 
        "name": "田阳县", 
        "cityCode": "4510", 
        "provinceCode": "45"
    }, 
    {
        "code": "451022", 
        "name": "田东县", 
        "cityCode": "4510", 
        "provinceCode": "45"
    }, 
    {
        "code": "451023", 
        "name": "平果县", 
        "cityCode": "4510", 
        "provinceCode": "45"
    }, 
    {
        "code": "451024", 
        "name": "德保县", 
        "cityCode": "4510", 
        "provinceCode": "45"
    }, 
    {
        "code": "451026", 
        "name": "那坡县", 
        "cityCode": "4510", 
        "provinceCode": "45"
    }, 
    {
        "code": "451027", 
        "name": "凌云县", 
        "cityCode": "4510", 
        "provinceCode": "45"
    }, 
    {
        "code": "451028", 
        "name": "乐业县", 
        "cityCode": "4510", 
        "provinceCode": "45"
    }, 
    {
        "code": "451029", 
        "name": "田林县", 
        "cityCode": "4510", 
        "provinceCode": "45"
    }, 
    {
        "code": "451030", 
        "name": "西林县", 
        "cityCode": "4510", 
        "provinceCode": "45"
    }, 
    {
        "code": "451031", 
        "name": "隆林各族自治县", 
        "cityCode": "4510", 
        "provinceCode": "45"
    }, 
    {
        "code": "451081", 
        "name": "靖西市", 
        "cityCode": "4510", 
        "provinceCode": "45"
    }, 
    {
        "code": "451102", 
        "name": "八步区", 
        "cityCode": "4511", 
        "provinceCode": "45"
    }, 
    {
        "code": "451103", 
        "name": "平桂区", 
        "cityCode": "4511", 
        "provinceCode": "45"
    }, 
    {
        "code": "451121", 
        "name": "昭平县", 
        "cityCode": "4511", 
        "provinceCode": "45"
    }, 
    {
        "code": "451122", 
        "name": "钟山县", 
        "cityCode": "4511", 
        "provinceCode": "45"
    }, 
    {
        "code": "451123", 
        "name": "富川瑶族自治县", 
        "cityCode": "4511", 
        "provinceCode": "45"
    }, 
    {
        "code": "451202", 
        "name": "金城江区", 
        "cityCode": "4512", 
        "provinceCode": "45"
    }, 
    {
        "code": "451203", 
        "name": "宜州区", 
        "cityCode": "4512", 
        "provinceCode": "45"
    }, 
    {
        "code": "451221", 
        "name": "南丹县", 
        "cityCode": "4512", 
        "provinceCode": "45"
    }, 
    {
        "code": "451222", 
        "name": "天峨县", 
        "cityCode": "4512", 
        "provinceCode": "45"
    }, 
    {
        "code": "451223", 
        "name": "凤山县", 
        "cityCode": "4512", 
        "provinceCode": "45"
    }, 
    {
        "code": "451224", 
        "name": "东兰县", 
        "cityCode": "4512", 
        "provinceCode": "45"
    }, 
    {
        "code": "451225", 
        "name": "罗城仫佬族自治县", 
        "cityCode": "4512", 
        "provinceCode": "45"
    }, 
    {
        "code": "451226", 
        "name": "环江毛南族自治县", 
        "cityCode": "4512", 
        "provinceCode": "45"
    }, 
    {
        "code": "451227", 
        "name": "巴马瑶族自治县", 
        "cityCode": "4512", 
        "provinceCode": "45"
    }, 
    {
        "code": "451228", 
        "name": "都安瑶族自治县", 
        "cityCode": "4512", 
        "provinceCode": "45"
    }, 
    {
        "code": "451229", 
        "name": "大化瑶族自治县", 
        "cityCode": "4512", 
        "provinceCode": "45"
    }, 
    {
        "code": "451302", 
        "name": "兴宾区", 
        "cityCode": "4513", 
        "provinceCode": "45"
    }, 
    {
        "code": "451321", 
        "name": "忻城县", 
        "cityCode": "4513", 
        "provinceCode": "45"
    }, 
    {
        "code": "451322", 
        "name": "象州县", 
        "cityCode": "4513", 
        "provinceCode": "45"
    }, 
    {
        "code": "451323", 
        "name": "武宣县", 
        "cityCode": "4513", 
        "provinceCode": "45"
    }, 
    {
        "code": "451324", 
        "name": "金秀瑶族自治县", 
        "cityCode": "4513", 
        "provinceCode": "45"
    }, 
    {
        "code": "451381", 
        "name": "合山市", 
        "cityCode": "4513", 
        "provinceCode": "45"
    }, 
    {
        "code": "451402", 
        "name": "江州区", 
        "cityCode": "4514", 
        "provinceCode": "45"
    }, 
    {
        "code": "451421", 
        "name": "扶绥县", 
        "cityCode": "4514", 
        "provinceCode": "45"
    }, 
    {
        "code": "451422", 
        "name": "宁明县", 
        "cityCode": "4514", 
        "provinceCode": "45"
    }, 
    {
        "code": "451423", 
        "name": "龙州县", 
        "cityCode": "4514", 
        "provinceCode": "45"
    }, 
    {
        "code": "451424", 
        "name": "大新县", 
        "cityCode": "4514", 
        "provinceCode": "45"
    }, 
    {
        "code": "451425", 
        "name": "天等县", 
        "cityCode": "4514", 
        "provinceCode": "45"
    }, 
    {
        "code": "451481", 
        "name": "凭祥市", 
        "cityCode": "4514", 
        "provinceCode": "45"
    }, 
    {
        "code": "460105", 
        "name": "秀英区", 
        "cityCode": "4601", 
        "provinceCode": "46"
    }, 
    {
        "code": "460106", 
        "name": "龙华区", 
        "cityCode": "4601", 
        "provinceCode": "46"
    }, 
    {
        "code": "460107", 
        "name": "琼山区", 
        "cityCode": "4601", 
        "provinceCode": "46"
    }, 
    {
        "code": "460108", 
        "name": "美兰区", 
        "cityCode": "4601", 
        "provinceCode": "46"
    }, 
    {
        "code": "460202", 
        "name": "海棠区", 
        "cityCode": "4602", 
        "provinceCode": "46"
    }, 
    {
        "code": "460203", 
        "name": "吉阳区", 
        "cityCode": "4602", 
        "provinceCode": "46"
    }, 
    {
        "code": "460204", 
        "name": "天涯区", 
        "cityCode": "4602", 
        "provinceCode": "46"
    }, 
    {
        "code": "460205", 
        "name": "崖州区", 
        "cityCode": "4602", 
        "provinceCode": "46"
    }, 
    {
        "code": "460321", 
        "name": "西沙群岛", 
        "cityCode": "4603", 
        "provinceCode": "46"
    }, 
    {
        "code": "460322", 
        "name": "南沙群岛", 
        "cityCode": "4603", 
        "provinceCode": "46"
    }, 
    {
        "code": "460323", 
        "name": "中沙群岛的岛礁及其海域", 
        "cityCode": "4603", 
        "provinceCode": "46"
    }, 
    {
        "code": "460400", 
        "name": "儋州市", 
        "cityCode": "4604", 
        "provinceCode": "46"
    }, 
    {
        "code": "469001", 
        "name": "五指山市", 
        "cityCode": "4690", 
        "provinceCode": "46"
    }, 
    {
        "code": "469002", 
        "name": "琼海市", 
        "cityCode": "4690", 
        "provinceCode": "46"
    }, 
    {
        "code": "469005", 
        "name": "文昌市", 
        "cityCode": "4690", 
        "provinceCode": "46"
    }, 
    {
        "code": "469006", 
        "name": "万宁市", 
        "cityCode": "4690", 
        "provinceCode": "46"
    }, 
    {
        "code": "469007", 
        "name": "东方市", 
        "cityCode": "4690", 
        "provinceCode": "46"
    }, 
    {
        "code": "469021", 
        "name": "定安县", 
        "cityCode": "4690", 
        "provinceCode": "46"
    }, 
    {
        "code": "469022", 
        "name": "屯昌县", 
        "cityCode": "4690", 
        "provinceCode": "46"
    }, 
    {
        "code": "469023", 
        "name": "澄迈县", 
        "cityCode": "4690", 
        "provinceCode": "46"
    }, 
    {
        "code": "469024", 
        "name": "临高县", 
        "cityCode": "4690", 
        "provinceCode": "46"
    }, 
    {
        "code": "469025", 
        "name": "白沙黎族自治县", 
        "cityCode": "4690", 
        "provinceCode": "46"
    }, 
    {
        "code": "469026", 
        "name": "昌江黎族自治县", 
        "cityCode": "4690", 
        "provinceCode": "46"
    }, 
    {
        "code": "469027", 
        "name": "乐东黎族自治县", 
        "cityCode": "4690", 
        "provinceCode": "46"
    }, 
    {
        "code": "469028", 
        "name": "陵水黎族自治县", 
        "cityCode": "4690", 
        "provinceCode": "46"
    }, 
    {
        "code": "469029", 
        "name": "保亭黎族苗族自治县", 
        "cityCode": "4690", 
        "provinceCode": "46"
    }, 
    {
        "code": "469030", 
        "name": "琼中黎族苗族自治县", 
        "cityCode": "4690", 
        "provinceCode": "46"
    }, 
    {
        "code": "500101", 
        "name": "万州区", 
        "cityCode": "5001", 
        "provinceCode": "50"
    }, 
    {
        "code": "500102", 
        "name": "涪陵区", 
        "cityCode": "5001", 
        "provinceCode": "50"
    }, 
    {
        "code": "500103", 
        "name": "渝中区", 
        "cityCode": "5001", 
        "provinceCode": "50"
    }, 
    {
        "code": "500104", 
        "name": "大渡口区", 
        "cityCode": "5001", 
        "provinceCode": "50"
    }, 
    {
        "code": "500105", 
        "name": "江北区", 
        "cityCode": "5001", 
        "provinceCode": "50"
    }, 
    {
        "code": "500106", 
        "name": "沙坪坝区", 
        "cityCode": "5001", 
        "provinceCode": "50"
    }, 
    {
        "code": "500107", 
        "name": "九龙坡区", 
        "cityCode": "5001", 
        "provinceCode": "50"
    }, 
    {
        "code": "500108", 
        "name": "南岸区", 
        "cityCode": "5001", 
        "provinceCode": "50"
    }, 
    {
        "code": "500109", 
        "name": "北碚区", 
        "cityCode": "5001", 
        "provinceCode": "50"
    }, 
    {
        "code": "500110", 
        "name": "綦江区", 
        "cityCode": "5001", 
        "provinceCode": "50"
    }, 
    {
        "code": "500111", 
        "name": "大足区", 
        "cityCode": "5001", 
        "provinceCode": "50"
    }, 
    {
        "code": "500112", 
        "name": "渝北区", 
        "cityCode": "5001", 
        "provinceCode": "50"
    }, 
    {
        "code": "500113", 
        "name": "巴南区", 
        "cityCode": "5001", 
        "provinceCode": "50"
    }, 
    {
        "code": "500114", 
        "name": "黔江区", 
        "cityCode": "5001", 
        "provinceCode": "50"
    }, 
    {
        "code": "500115", 
        "name": "长寿区", 
        "cityCode": "5001", 
        "provinceCode": "50"
    }, 
    {
        "code": "500116", 
        "name": "江津区", 
        "cityCode": "5001", 
        "provinceCode": "50"
    }, 
    {
        "code": "500117", 
        "name": "合川区", 
        "cityCode": "5001", 
        "provinceCode": "50"
    }, 
    {
        "code": "500118", 
        "name": "永川区", 
        "cityCode": "5001", 
        "provinceCode": "50"
    }, 
    {
        "code": "500119", 
        "name": "南川区", 
        "cityCode": "5001", 
        "provinceCode": "50"
    }, 
    {
        "code": "500120", 
        "name": "璧山区", 
        "cityCode": "5001", 
        "provinceCode": "50"
    }, 
    {
        "code": "500151", 
        "name": "铜梁区", 
        "cityCode": "5001", 
        "provinceCode": "50"
    }, 
    {
        "code": "500152", 
        "name": "潼南区", 
        "cityCode": "5001", 
        "provinceCode": "50"
    }, 
    {
        "code": "500153", 
        "name": "荣昌区", 
        "cityCode": "5001", 
        "provinceCode": "50"
    }, 
    {
        "code": "500154", 
        "name": "开州区", 
        "cityCode": "5001", 
        "provinceCode": "50"
    }, 
    {
        "code": "500155", 
        "name": "梁平区", 
        "cityCode": "5001", 
        "provinceCode": "50"
    }, 
    {
        "code": "500156", 
        "name": "武隆区", 
        "cityCode": "5001", 
        "provinceCode": "50"
    }, 
    {
        "code": "500229", 
        "name": "城口县", 
        "cityCode": "5002", 
        "provinceCode": "50"
    }, 
    {
        "code": "500230", 
        "name": "丰都县", 
        "cityCode": "5002", 
        "provinceCode": "50"
    }, 
    {
        "code": "500231", 
        "name": "垫江县", 
        "cityCode": "5002", 
        "provinceCode": "50"
    }, 
    {
        "code": "500233", 
        "name": "忠县", 
        "cityCode": "5002", 
        "provinceCode": "50"
    }, 
    {
        "code": "500235", 
        "name": "云阳县", 
        "cityCode": "5002", 
        "provinceCode": "50"
    }, 
    {
        "code": "500236", 
        "name": "奉节县", 
        "cityCode": "5002", 
        "provinceCode": "50"
    }, 
    {
        "code": "500237", 
        "name": "巫山县", 
        "cityCode": "5002", 
        "provinceCode": "50"
    }, 
    {
        "code": "500238", 
        "name": "巫溪县", 
        "cityCode": "5002", 
        "provinceCode": "50"
    }, 
    {
        "code": "500240", 
        "name": "石柱土家族自治县", 
        "cityCode": "5002", 
        "provinceCode": "50"
    }, 
    {
        "code": "500241", 
        "name": "秀山土家族苗族自治县", 
        "cityCode": "5002", 
        "provinceCode": "50"
    }, 
    {
        "code": "500242", 
        "name": "酉阳土家族苗族自治县", 
        "cityCode": "5002", 
        "provinceCode": "50"
    }, 
    {
        "code": "500243", 
        "name": "彭水苗族土家族自治县", 
        "cityCode": "5002", 
        "provinceCode": "50"
    }, 
    {
        "code": "510104", 
        "name": "锦江区", 
        "cityCode": "5101", 
        "provinceCode": "51"
    }, 
    {
        "code": "510105", 
        "name": "青羊区", 
        "cityCode": "5101", 
        "provinceCode": "51"
    }, 
    {
        "code": "510106", 
        "name": "金牛区", 
        "cityCode": "5101", 
        "provinceCode": "51"
    }, 
    {
        "code": "510107", 
        "name": "武侯区", 
        "cityCode": "5101", 
        "provinceCode": "51"
    }, 
    {
        "code": "510108", 
        "name": "成华区", 
        "cityCode": "5101", 
        "provinceCode": "51"
    }, 
    {
        "code": "510112", 
        "name": "龙泉驿区", 
        "cityCode": "5101", 
        "provinceCode": "51"
    }, 
    {
        "code": "510113", 
        "name": "青白江区", 
        "cityCode": "5101", 
        "provinceCode": "51"
    }, 
    {
        "code": "510114", 
        "name": "新都区", 
        "cityCode": "5101", 
        "provinceCode": "51"
    }, 
    {
        "code": "510115", 
        "name": "温江区", 
        "cityCode": "5101", 
        "provinceCode": "51"
    }, 
    {
        "code": "510116", 
        "name": "双流区", 
        "cityCode": "5101", 
        "provinceCode": "51"
    }, 
    {
        "code": "510117", 
        "name": "郫都区", 
        "cityCode": "5101", 
        "provinceCode": "51"
    }, 
    {
        "code": "510121", 
        "name": "金堂县", 
        "cityCode": "5101", 
        "provinceCode": "51"
    }, 
    {
        "code": "510129", 
        "name": "大邑县", 
        "cityCode": "5101", 
        "provinceCode": "51"
    }, 
    {
        "code": "510131", 
        "name": "蒲江县", 
        "cityCode": "5101", 
        "provinceCode": "51"
    }, 
    {
        "code": "510132", 
        "name": "新津县", 
        "cityCode": "5101", 
        "provinceCode": "51"
    }, 
    {
        "code": "510181", 
        "name": "都江堰市", 
        "cityCode": "5101", 
        "provinceCode": "51"
    }, 
    {
        "code": "510182", 
        "name": "彭州市", 
        "cityCode": "5101", 
        "provinceCode": "51"
    }, 
    {
        "code": "510183", 
        "name": "邛崃市", 
        "cityCode": "5101", 
        "provinceCode": "51"
    }, 
    {
        "code": "510184", 
        "name": "崇州市", 
        "cityCode": "5101", 
        "provinceCode": "51"
    }, 
    {
        "code": "510185", 
        "name": "简阳市", 
        "cityCode": "5101", 
        "provinceCode": "51"
    }, 
    {
        "code": "510302", 
        "name": "自流井区", 
        "cityCode": "5103", 
        "provinceCode": "51"
    }, 
    {
        "code": "510303", 
        "name": "贡井区", 
        "cityCode": "5103", 
        "provinceCode": "51"
    }, 
    {
        "code": "510304", 
        "name": "大安区", 
        "cityCode": "5103", 
        "provinceCode": "51"
    }, 
    {
        "code": "510311", 
        "name": "沿滩区", 
        "cityCode": "5103", 
        "provinceCode": "51"
    }, 
    {
        "code": "510321", 
        "name": "荣县", 
        "cityCode": "5103", 
        "provinceCode": "51"
    }, 
    {
        "code": "510322", 
        "name": "富顺县", 
        "cityCode": "5103", 
        "provinceCode": "51"
    }, 
    {
        "code": "510402", 
        "name": "东区", 
        "cityCode": "5104", 
        "provinceCode": "51"
    }, 
    {
        "code": "510403", 
        "name": "西区", 
        "cityCode": "5104", 
        "provinceCode": "51"
    }, 
    {
        "code": "510411", 
        "name": "仁和区", 
        "cityCode": "5104", 
        "provinceCode": "51"
    }, 
    {
        "code": "510421", 
        "name": "米易县", 
        "cityCode": "5104", 
        "provinceCode": "51"
    }, 
    {
        "code": "510422", 
        "name": "盐边县", 
        "cityCode": "5104", 
        "provinceCode": "51"
    }, 
    {
        "code": "510502", 
        "name": "江阳区", 
        "cityCode": "5105", 
        "provinceCode": "51"
    }, 
    {
        "code": "510503", 
        "name": "纳溪区", 
        "cityCode": "5105", 
        "provinceCode": "51"
    }, 
    {
        "code": "510504", 
        "name": "龙马潭区", 
        "cityCode": "5105", 
        "provinceCode": "51"
    }, 
    {
        "code": "510521", 
        "name": "泸县", 
        "cityCode": "5105", 
        "provinceCode": "51"
    }, 
    {
        "code": "510522", 
        "name": "合江县", 
        "cityCode": "5105", 
        "provinceCode": "51"
    }, 
    {
        "code": "510524", 
        "name": "叙永县", 
        "cityCode": "5105", 
        "provinceCode": "51"
    }, 
    {
        "code": "510525", 
        "name": "古蔺县", 
        "cityCode": "5105", 
        "provinceCode": "51"
    }, 
    {
        "code": "510603", 
        "name": "旌阳区", 
        "cityCode": "5106", 
        "provinceCode": "51"
    }, 
    {
        "code": "510604", 
        "name": "罗江区", 
        "cityCode": "5106", 
        "provinceCode": "51"
    }, 
    {
        "code": "510623", 
        "name": "中江县", 
        "cityCode": "5106", 
        "provinceCode": "51"
    }, 
    {
        "code": "510681", 
        "name": "广汉市", 
        "cityCode": "5106", 
        "provinceCode": "51"
    }, 
    {
        "code": "510682", 
        "name": "什邡市", 
        "cityCode": "5106", 
        "provinceCode": "51"
    }, 
    {
        "code": "510683", 
        "name": "绵竹市", 
        "cityCode": "5106", 
        "provinceCode": "51"
    }, 
    {
        "code": "510703", 
        "name": "涪城区", 
        "cityCode": "5107", 
        "provinceCode": "51"
    }, 
    {
        "code": "510704", 
        "name": "游仙区", 
        "cityCode": "5107", 
        "provinceCode": "51"
    }, 
    {
        "code": "510705", 
        "name": "安州区", 
        "cityCode": "5107", 
        "provinceCode": "51"
    }, 
    {
        "code": "510722", 
        "name": "三台县", 
        "cityCode": "5107", 
        "provinceCode": "51"
    }, 
    {
        "code": "510723", 
        "name": "盐亭县", 
        "cityCode": "5107", 
        "provinceCode": "51"
    }, 
    {
        "code": "510725", 
        "name": "梓潼县", 
        "cityCode": "5107", 
        "provinceCode": "51"
    }, 
    {
        "code": "510726", 
        "name": "北川羌族自治县", 
        "cityCode": "5107", 
        "provinceCode": "51"
    }, 
    {
        "code": "510727", 
        "name": "平武县", 
        "cityCode": "5107", 
        "provinceCode": "51"
    }, 
    {
        "code": "510781", 
        "name": "江油市", 
        "cityCode": "5107", 
        "provinceCode": "51"
    }, 
    {
        "code": "510802", 
        "name": "利州区", 
        "cityCode": "5108", 
        "provinceCode": "51"
    }, 
    {
        "code": "510811", 
        "name": "昭化区", 
        "cityCode": "5108", 
        "provinceCode": "51"
    }, 
    {
        "code": "510812", 
        "name": "朝天区", 
        "cityCode": "5108", 
        "provinceCode": "51"
    }, 
    {
        "code": "510821", 
        "name": "旺苍县", 
        "cityCode": "5108", 
        "provinceCode": "51"
    }, 
    {
        "code": "510822", 
        "name": "青川县", 
        "cityCode": "5108", 
        "provinceCode": "51"
    }, 
    {
        "code": "510823", 
        "name": "剑阁县", 
        "cityCode": "5108", 
        "provinceCode": "51"
    }, 
    {
        "code": "510824", 
        "name": "苍溪县", 
        "cityCode": "5108", 
        "provinceCode": "51"
    }, 
    {
        "code": "510903", 
        "name": "船山区", 
        "cityCode": "5109", 
        "provinceCode": "51"
    }, 
    {
        "code": "510904", 
        "name": "安居区", 
        "cityCode": "5109", 
        "provinceCode": "51"
    }, 
    {
        "code": "510921", 
        "name": "蓬溪县", 
        "cityCode": "5109", 
        "provinceCode": "51"
    }, 
    {
        "code": "510922", 
        "name": "射洪县", 
        "cityCode": "5109", 
        "provinceCode": "51"
    }, 
    {
        "code": "510923", 
        "name": "大英县", 
        "cityCode": "5109", 
        "provinceCode": "51"
    }, 
    {
        "code": "511002", 
        "name": "市中区", 
        "cityCode": "5110", 
        "provinceCode": "51"
    }, 
    {
        "code": "511011", 
        "name": "东兴区", 
        "cityCode": "5110", 
        "provinceCode": "51"
    }, 
    {
        "code": "511024", 
        "name": "威远县", 
        "cityCode": "5110", 
        "provinceCode": "51"
    }, 
    {
        "code": "511025", 
        "name": "资中县", 
        "cityCode": "5110", 
        "provinceCode": "51"
    }, 
    {
        "code": "511071", 
        "name": "内江经济开发区", 
        "cityCode": "5110", 
        "provinceCode": "51"
    }, 
    {
        "code": "511083", 
        "name": "隆昌市", 
        "cityCode": "5110", 
        "provinceCode": "51"
    }, 
    {
        "code": "511102", 
        "name": "市中区", 
        "cityCode": "5111", 
        "provinceCode": "51"
    }, 
    {
        "code": "511111", 
        "name": "沙湾区", 
        "cityCode": "5111", 
        "provinceCode": "51"
    }, 
    {
        "code": "511112", 
        "name": "五通桥区", 
        "cityCode": "5111", 
        "provinceCode": "51"
    }, 
    {
        "code": "511113", 
        "name": "金口河区", 
        "cityCode": "5111", 
        "provinceCode": "51"
    }, 
    {
        "code": "511123", 
        "name": "犍为县", 
        "cityCode": "5111", 
        "provinceCode": "51"
    }, 
    {
        "code": "511124", 
        "name": "井研县", 
        "cityCode": "5111", 
        "provinceCode": "51"
    }, 
    {
        "code": "511126", 
        "name": "夹江县", 
        "cityCode": "5111", 
        "provinceCode": "51"
    }, 
    {
        "code": "511129", 
        "name": "沐川县", 
        "cityCode": "5111", 
        "provinceCode": "51"
    }, 
    {
        "code": "511132", 
        "name": "峨边彝族自治县", 
        "cityCode": "5111", 
        "provinceCode": "51"
    }, 
    {
        "code": "511133", 
        "name": "马边彝族自治县", 
        "cityCode": "5111", 
        "provinceCode": "51"
    }, 
    {
        "code": "511181", 
        "name": "峨眉山市", 
        "cityCode": "5111", 
        "provinceCode": "51"
    }, 
    {
        "code": "511302", 
        "name": "顺庆区", 
        "cityCode": "5113", 
        "provinceCode": "51"
    }, 
    {
        "code": "511303", 
        "name": "高坪区", 
        "cityCode": "5113", 
        "provinceCode": "51"
    }, 
    {
        "code": "511304", 
        "name": "嘉陵区", 
        "cityCode": "5113", 
        "provinceCode": "51"
    }, 
    {
        "code": "511321", 
        "name": "南部县", 
        "cityCode": "5113", 
        "provinceCode": "51"
    }, 
    {
        "code": "511322", 
        "name": "营山县", 
        "cityCode": "5113", 
        "provinceCode": "51"
    }, 
    {
        "code": "511323", 
        "name": "蓬安县", 
        "cityCode": "5113", 
        "provinceCode": "51"
    }, 
    {
        "code": "511324", 
        "name": "仪陇县", 
        "cityCode": "5113", 
        "provinceCode": "51"
    }, 
    {
        "code": "511325", 
        "name": "西充县", 
        "cityCode": "5113", 
        "provinceCode": "51"
    }, 
    {
        "code": "511381", 
        "name": "阆中市", 
        "cityCode": "5113", 
        "provinceCode": "51"
    }, 
    {
        "code": "511402", 
        "name": "东坡区", 
        "cityCode": "5114", 
        "provinceCode": "51"
    }, 
    {
        "code": "511403", 
        "name": "彭山区", 
        "cityCode": "5114", 
        "provinceCode": "51"
    }, 
    {
        "code": "511421", 
        "name": "仁寿县", 
        "cityCode": "5114", 
        "provinceCode": "51"
    }, 
    {
        "code": "511423", 
        "name": "洪雅县", 
        "cityCode": "5114", 
        "provinceCode": "51"
    }, 
    {
        "code": "511424", 
        "name": "丹棱县", 
        "cityCode": "5114", 
        "provinceCode": "51"
    }, 
    {
        "code": "511425", 
        "name": "青神县", 
        "cityCode": "5114", 
        "provinceCode": "51"
    }, 
    {
        "code": "511502", 
        "name": "翠屏区", 
        "cityCode": "5115", 
        "provinceCode": "51"
    }, 
    {
        "code": "511503", 
        "name": "南溪区", 
        "cityCode": "5115", 
        "provinceCode": "51"
    }, 
    {
        "code": "511521", 
        "name": "宜宾县", 
        "cityCode": "5115", 
        "provinceCode": "51"
    }, 
    {
        "code": "511523", 
        "name": "江安县", 
        "cityCode": "5115", 
        "provinceCode": "51"
    }, 
    {
        "code": "511524", 
        "name": "长宁县", 
        "cityCode": "5115", 
        "provinceCode": "51"
    }, 
    {
        "code": "511525", 
        "name": "高县", 
        "cityCode": "5115", 
        "provinceCode": "51"
    }, 
    {
        "code": "511526", 
        "name": "珙县", 
        "cityCode": "5115", 
        "provinceCode": "51"
    }, 
    {
        "code": "511527", 
        "name": "筠连县", 
        "cityCode": "5115", 
        "provinceCode": "51"
    }, 
    {
        "code": "511528", 
        "name": "兴文县", 
        "cityCode": "5115", 
        "provinceCode": "51"
    }, 
    {
        "code": "511529", 
        "name": "屏山县", 
        "cityCode": "5115", 
        "provinceCode": "51"
    }, 
    {
        "code": "511602", 
        "name": "广安区", 
        "cityCode": "5116", 
        "provinceCode": "51"
    }, 
    {
        "code": "511603", 
        "name": "前锋区", 
        "cityCode": "5116", 
        "provinceCode": "51"
    }, 
    {
        "code": "511621", 
        "name": "岳池县", 
        "cityCode": "5116", 
        "provinceCode": "51"
    }, 
    {
        "code": "511622", 
        "name": "武胜县", 
        "cityCode": "5116", 
        "provinceCode": "51"
    }, 
    {
        "code": "511623", 
        "name": "邻水县", 
        "cityCode": "5116", 
        "provinceCode": "51"
    }, 
    {
        "code": "511681", 
        "name": "华蓥市", 
        "cityCode": "5116", 
        "provinceCode": "51"
    }, 
    {
        "code": "511702", 
        "name": "通川区", 
        "cityCode": "5117", 
        "provinceCode": "51"
    }, 
    {
        "code": "511703", 
        "name": "达川区", 
        "cityCode": "5117", 
        "provinceCode": "51"
    }, 
    {
        "code": "511722", 
        "name": "宣汉县", 
        "cityCode": "5117", 
        "provinceCode": "51"
    }, 
    {
        "code": "511723", 
        "name": "开江县", 
        "cityCode": "5117", 
        "provinceCode": "51"
    }, 
    {
        "code": "511724", 
        "name": "大竹县", 
        "cityCode": "5117", 
        "provinceCode": "51"
    }, 
    {
        "code": "511725", 
        "name": "渠县", 
        "cityCode": "5117", 
        "provinceCode": "51"
    }, 
    {
        "code": "511771", 
        "name": "达州经济开发区", 
        "cityCode": "5117", 
        "provinceCode": "51"
    }, 
    {
        "code": "511781", 
        "name": "万源市", 
        "cityCode": "5117", 
        "provinceCode": "51"
    }, 
    {
        "code": "511802", 
        "name": "雨城区", 
        "cityCode": "5118", 
        "provinceCode": "51"
    }, 
    {
        "code": "511803", 
        "name": "名山区", 
        "cityCode": "5118", 
        "provinceCode": "51"
    }, 
    {
        "code": "511822", 
        "name": "荥经县", 
        "cityCode": "5118", 
        "provinceCode": "51"
    }, 
    {
        "code": "511823", 
        "name": "汉源县", 
        "cityCode": "5118", 
        "provinceCode": "51"
    }, 
    {
        "code": "511824", 
        "name": "石棉县", 
        "cityCode": "5118", 
        "provinceCode": "51"
    }, 
    {
        "code": "511825", 
        "name": "天全县", 
        "cityCode": "5118", 
        "provinceCode": "51"
    }, 
    {
        "code": "511826", 
        "name": "芦山县", 
        "cityCode": "5118", 
        "provinceCode": "51"
    }, 
    {
        "code": "511827", 
        "name": "宝兴县", 
        "cityCode": "5118", 
        "provinceCode": "51"
    }, 
    {
        "code": "511902", 
        "name": "巴州区", 
        "cityCode": "5119", 
        "provinceCode": "51"
    }, 
    {
        "code": "511903", 
        "name": "恩阳区", 
        "cityCode": "5119", 
        "provinceCode": "51"
    }, 
    {
        "code": "511921", 
        "name": "通江县", 
        "cityCode": "5119", 
        "provinceCode": "51"
    }, 
    {
        "code": "511922", 
        "name": "南江县", 
        "cityCode": "5119", 
        "provinceCode": "51"
    }, 
    {
        "code": "511923", 
        "name": "平昌县", 
        "cityCode": "5119", 
        "provinceCode": "51"
    }, 
    {
        "code": "511971", 
        "name": "巴中经济开发区", 
        "cityCode": "5119", 
        "provinceCode": "51"
    }, 
    {
        "code": "512002", 
        "name": "雁江区", 
        "cityCode": "5120", 
        "provinceCode": "51"
    }, 
    {
        "code": "512021", 
        "name": "安岳县", 
        "cityCode": "5120", 
        "provinceCode": "51"
    }, 
    {
        "code": "512022", 
        "name": "乐至县", 
        "cityCode": "5120", 
        "provinceCode": "51"
    }, 
    {
        "code": "513201", 
        "name": "马尔康市", 
        "cityCode": "5132", 
        "provinceCode": "51"
    }, 
    {
        "code": "513221", 
        "name": "汶川县", 
        "cityCode": "5132", 
        "provinceCode": "51"
    }, 
    {
        "code": "513222", 
        "name": "理县", 
        "cityCode": "5132", 
        "provinceCode": "51"
    }, 
    {
        "code": "513223", 
        "name": "茂县", 
        "cityCode": "5132", 
        "provinceCode": "51"
    }, 
    {
        "code": "513224", 
        "name": "松潘县", 
        "cityCode": "5132", 
        "provinceCode": "51"
    }, 
    {
        "code": "513225", 
        "name": "九寨沟县", 
        "cityCode": "5132", 
        "provinceCode": "51"
    }, 
    {
        "code": "513226", 
        "name": "金川县", 
        "cityCode": "5132", 
        "provinceCode": "51"
    }, 
    {
        "code": "513227", 
        "name": "小金县", 
        "cityCode": "5132", 
        "provinceCode": "51"
    }, 
    {
        "code": "513228", 
        "name": "黑水县", 
        "cityCode": "5132", 
        "provinceCode": "51"
    }, 
    {
        "code": "513230", 
        "name": "壤塘县", 
        "cityCode": "5132", 
        "provinceCode": "51"
    }, 
    {
        "code": "513231", 
        "name": "阿坝县", 
        "cityCode": "5132", 
        "provinceCode": "51"
    }, 
    {
        "code": "513232", 
        "name": "若尔盖县", 
        "cityCode": "5132", 
        "provinceCode": "51"
    }, 
    {
        "code": "513233", 
        "name": "红原县", 
        "cityCode": "5132", 
        "provinceCode": "51"
    }, 
    {
        "code": "513301", 
        "name": "康定市", 
        "cityCode": "5133", 
        "provinceCode": "51"
    }, 
    {
        "code": "513322", 
        "name": "泸定县", 
        "cityCode": "5133", 
        "provinceCode": "51"
    }, 
    {
        "code": "513323", 
        "name": "丹巴县", 
        "cityCode": "5133", 
        "provinceCode": "51"
    }, 
    {
        "code": "513324", 
        "name": "九龙县", 
        "cityCode": "5133", 
        "provinceCode": "51"
    }, 
    {
        "code": "513325", 
        "name": "雅江县", 
        "cityCode": "5133", 
        "provinceCode": "51"
    }, 
    {
        "code": "513326", 
        "name": "道孚县", 
        "cityCode": "5133", 
        "provinceCode": "51"
    }, 
    {
        "code": "513327", 
        "name": "炉霍县", 
        "cityCode": "5133", 
        "provinceCode": "51"
    }, 
    {
        "code": "513328", 
        "name": "甘孜县", 
        "cityCode": "5133", 
        "provinceCode": "51"
    }, 
    {
        "code": "513329", 
        "name": "新龙县", 
        "cityCode": "5133", 
        "provinceCode": "51"
    }, 
    {
        "code": "513330", 
        "name": "德格县", 
        "cityCode": "5133", 
        "provinceCode": "51"
    }, 
    {
        "code": "513331", 
        "name": "白玉县", 
        "cityCode": "5133", 
        "provinceCode": "51"
    }, 
    {
        "code": "513332", 
        "name": "石渠县", 
        "cityCode": "5133", 
        "provinceCode": "51"
    }, 
    {
        "code": "513333", 
        "name": "色达县", 
        "cityCode": "5133", 
        "provinceCode": "51"
    }, 
    {
        "code": "513334", 
        "name": "理塘县", 
        "cityCode": "5133", 
        "provinceCode": "51"
    }, 
    {
        "code": "513335", 
        "name": "巴塘县", 
        "cityCode": "5133", 
        "provinceCode": "51"
    }, 
    {
        "code": "513336", 
        "name": "乡城县", 
        "cityCode": "5133", 
        "provinceCode": "51"
    }, 
    {
        "code": "513337", 
        "name": "稻城县", 
        "cityCode": "5133", 
        "provinceCode": "51"
    }, 
    {
        "code": "513338", 
        "name": "得荣县", 
        "cityCode": "5133", 
        "provinceCode": "51"
    }, 
    {
        "code": "513401", 
        "name": "西昌市", 
        "cityCode": "5134", 
        "provinceCode": "51"
    }, 
    {
        "code": "513422", 
        "name": "木里藏族自治县", 
        "cityCode": "5134", 
        "provinceCode": "51"
    }, 
    {
        "code": "513423", 
        "name": "盐源县", 
        "cityCode": "5134", 
        "provinceCode": "51"
    }, 
    {
        "code": "513424", 
        "name": "德昌县", 
        "cityCode": "5134", 
        "provinceCode": "51"
    }, 
    {
        "code": "513425", 
        "name": "会理县", 
        "cityCode": "5134", 
        "provinceCode": "51"
    }, 
    {
        "code": "513426", 
        "name": "会东县", 
        "cityCode": "5134", 
        "provinceCode": "51"
    }, 
    {
        "code": "513427", 
        "name": "宁南县", 
        "cityCode": "5134", 
        "provinceCode": "51"
    }, 
    {
        "code": "513428", 
        "name": "普格县", 
        "cityCode": "5134", 
        "provinceCode": "51"
    }, 
    {
        "code": "513429", 
        "name": "布拖县", 
        "cityCode": "5134", 
        "provinceCode": "51"
    }, 
    {
        "code": "513430", 
        "name": "金阳县", 
        "cityCode": "5134", 
        "provinceCode": "51"
    }, 
    {
        "code": "513431", 
        "name": "昭觉县", 
        "cityCode": "5134", 
        "provinceCode": "51"
    }, 
    {
        "code": "513432", 
        "name": "喜德县", 
        "cityCode": "5134", 
        "provinceCode": "51"
    }, 
    {
        "code": "513433", 
        "name": "冕宁县", 
        "cityCode": "5134", 
        "provinceCode": "51"
    }, 
    {
        "code": "513434", 
        "name": "越西县", 
        "cityCode": "5134", 
        "provinceCode": "51"
    }, 
    {
        "code": "513435", 
        "name": "甘洛县", 
        "cityCode": "5134", 
        "provinceCode": "51"
    }, 
    {
        "code": "513436", 
        "name": "美姑县", 
        "cityCode": "5134", 
        "provinceCode": "51"
    }, 
    {
        "code": "513437", 
        "name": "雷波县", 
        "cityCode": "5134", 
        "provinceCode": "51"
    }, 
    {
        "code": "520102", 
        "name": "南明区", 
        "cityCode": "5201", 
        "provinceCode": "52"
    }, 
    {
        "code": "520103", 
        "name": "云岩区", 
        "cityCode": "5201", 
        "provinceCode": "52"
    }, 
    {
        "code": "520111", 
        "name": "花溪区", 
        "cityCode": "5201", 
        "provinceCode": "52"
    }, 
    {
        "code": "520112", 
        "name": "乌当区", 
        "cityCode": "5201", 
        "provinceCode": "52"
    }, 
    {
        "code": "520113", 
        "name": "白云区", 
        "cityCode": "5201", 
        "provinceCode": "52"
    }, 
    {
        "code": "520115", 
        "name": "观山湖区", 
        "cityCode": "5201", 
        "provinceCode": "52"
    }, 
    {
        "code": "520121", 
        "name": "开阳县", 
        "cityCode": "5201", 
        "provinceCode": "52"
    }, 
    {
        "code": "520122", 
        "name": "息烽县", 
        "cityCode": "5201", 
        "provinceCode": "52"
    }, 
    {
        "code": "520123", 
        "name": "修文县", 
        "cityCode": "5201", 
        "provinceCode": "52"
    }, 
    {
        "code": "520181", 
        "name": "清镇市", 
        "cityCode": "5201", 
        "provinceCode": "52"
    }, 
    {
        "code": "520201", 
        "name": "钟山区", 
        "cityCode": "5202", 
        "provinceCode": "52"
    }, 
    {
        "code": "520203", 
        "name": "六枝特区", 
        "cityCode": "5202", 
        "provinceCode": "52"
    }, 
    {
        "code": "520221", 
        "name": "水城县", 
        "cityCode": "5202", 
        "provinceCode": "52"
    }, 
    {
        "code": "520281", 
        "name": "盘州市", 
        "cityCode": "5202", 
        "provinceCode": "52"
    }, 
    {
        "code": "520302", 
        "name": "红花岗区", 
        "cityCode": "5203", 
        "provinceCode": "52"
    }, 
    {
        "code": "520303", 
        "name": "汇川区", 
        "cityCode": "5203", 
        "provinceCode": "52"
    }, 
    {
        "code": "520304", 
        "name": "播州区", 
        "cityCode": "5203", 
        "provinceCode": "52"
    }, 
    {
        "code": "520322", 
        "name": "桐梓县", 
        "cityCode": "5203", 
        "provinceCode": "52"
    }, 
    {
        "code": "520323", 
        "name": "绥阳县", 
        "cityCode": "5203", 
        "provinceCode": "52"
    }, 
    {
        "code": "520324", 
        "name": "正安县", 
        "cityCode": "5203", 
        "provinceCode": "52"
    }, 
    {
        "code": "520325", 
        "name": "道真仡佬族苗族自治县", 
        "cityCode": "5203", 
        "provinceCode": "52"
    }, 
    {
        "code": "520326", 
        "name": "务川仡佬族苗族自治县", 
        "cityCode": "5203", 
        "provinceCode": "52"
    }, 
    {
        "code": "520327", 
        "name": "凤冈县", 
        "cityCode": "5203", 
        "provinceCode": "52"
    }, 
    {
        "code": "520328", 
        "name": "湄潭县", 
        "cityCode": "5203", 
        "provinceCode": "52"
    }, 
    {
        "code": "520329", 
        "name": "余庆县", 
        "cityCode": "5203", 
        "provinceCode": "52"
    }, 
    {
        "code": "520330", 
        "name": "习水县", 
        "cityCode": "5203", 
        "provinceCode": "52"
    }, 
    {
        "code": "520381", 
        "name": "赤水市", 
        "cityCode": "5203", 
        "provinceCode": "52"
    }, 
    {
        "code": "520382", 
        "name": "仁怀市", 
        "cityCode": "5203", 
        "provinceCode": "52"
    }, 
    {
        "code": "520402", 
        "name": "西秀区", 
        "cityCode": "5204", 
        "provinceCode": "52"
    }, 
    {
        "code": "520403", 
        "name": "平坝区", 
        "cityCode": "5204", 
        "provinceCode": "52"
    }, 
    {
        "code": "520422", 
        "name": "普定县", 
        "cityCode": "5204", 
        "provinceCode": "52"
    }, 
    {
        "code": "520423", 
        "name": "镇宁布依族苗族自治县", 
        "cityCode": "5204", 
        "provinceCode": "52"
    }, 
    {
        "code": "520424", 
        "name": "关岭布依族苗族自治县", 
        "cityCode": "5204", 
        "provinceCode": "52"
    }, 
    {
        "code": "520425", 
        "name": "紫云苗族布依族自治县", 
        "cityCode": "5204", 
        "provinceCode": "52"
    }, 
    {
        "code": "520502", 
        "name": "七星关区", 
        "cityCode": "5205", 
        "provinceCode": "52"
    }, 
    {
        "code": "520521", 
        "name": "大方县", 
        "cityCode": "5205", 
        "provinceCode": "52"
    }, 
    {
        "code": "520522", 
        "name": "黔西县", 
        "cityCode": "5205", 
        "provinceCode": "52"
    }, 
    {
        "code": "520523", 
        "name": "金沙县", 
        "cityCode": "5205", 
        "provinceCode": "52"
    }, 
    {
        "code": "520524", 
        "name": "织金县", 
        "cityCode": "5205", 
        "provinceCode": "52"
    }, 
    {
        "code": "520525", 
        "name": "纳雍县", 
        "cityCode": "5205", 
        "provinceCode": "52"
    }, 
    {
        "code": "520526", 
        "name": "威宁彝族回族苗族自治县", 
        "cityCode": "5205", 
        "provinceCode": "52"
    }, 
    {
        "code": "520527", 
        "name": "赫章县", 
        "cityCode": "5205", 
        "provinceCode": "52"
    }, 
    {
        "code": "520602", 
        "name": "碧江区", 
        "cityCode": "5206", 
        "provinceCode": "52"
    }, 
    {
        "code": "520603", 
        "name": "万山区", 
        "cityCode": "5206", 
        "provinceCode": "52"
    }, 
    {
        "code": "520621", 
        "name": "江口县", 
        "cityCode": "5206", 
        "provinceCode": "52"
    }, 
    {
        "code": "520622", 
        "name": "玉屏侗族自治县", 
        "cityCode": "5206", 
        "provinceCode": "52"
    }, 
    {
        "code": "520623", 
        "name": "石阡县", 
        "cityCode": "5206", 
        "provinceCode": "52"
    }, 
    {
        "code": "520624", 
        "name": "思南县", 
        "cityCode": "5206", 
        "provinceCode": "52"
    }, 
    {
        "code": "520625", 
        "name": "印江土家族苗族自治县", 
        "cityCode": "5206", 
        "provinceCode": "52"
    }, 
    {
        "code": "520626", 
        "name": "德江县", 
        "cityCode": "5206", 
        "provinceCode": "52"
    }, 
    {
        "code": "520627", 
        "name": "沿河土家族自治县", 
        "cityCode": "5206", 
        "provinceCode": "52"
    }, 
    {
        "code": "520628", 
        "name": "松桃苗族自治县", 
        "cityCode": "5206", 
        "provinceCode": "52"
    }, 
    {
        "code": "522301", 
        "name": "兴义市", 
        "cityCode": "5223", 
        "provinceCode": "52"
    }, 
    {
        "code": "522322", 
        "name": "兴仁县", 
        "cityCode": "5223", 
        "provinceCode": "52"
    }, 
    {
        "code": "522323", 
        "name": "普安县", 
        "cityCode": "5223", 
        "provinceCode": "52"
    }, 
    {
        "code": "522324", 
        "name": "晴隆县", 
        "cityCode": "5223", 
        "provinceCode": "52"
    }, 
    {
        "code": "522325", 
        "name": "贞丰县", 
        "cityCode": "5223", 
        "provinceCode": "52"
    }, 
    {
        "code": "522326", 
        "name": "望谟县", 
        "cityCode": "5223", 
        "provinceCode": "52"
    }, 
    {
        "code": "522327", 
        "name": "册亨县", 
        "cityCode": "5223", 
        "provinceCode": "52"
    }, 
    {
        "code": "522328", 
        "name": "安龙县", 
        "cityCode": "5223", 
        "provinceCode": "52"
    }, 
    {
        "code": "522601", 
        "name": "凯里市", 
        "cityCode": "5226", 
        "provinceCode": "52"
    }, 
    {
        "code": "522622", 
        "name": "黄平县", 
        "cityCode": "5226", 
        "provinceCode": "52"
    }, 
    {
        "code": "522623", 
        "name": "施秉县", 
        "cityCode": "5226", 
        "provinceCode": "52"
    }, 
    {
        "code": "522624", 
        "name": "三穗县", 
        "cityCode": "5226", 
        "provinceCode": "52"
    }, 
    {
        "code": "522625", 
        "name": "镇远县", 
        "cityCode": "5226", 
        "provinceCode": "52"
    }, 
    {
        "code": "522626", 
        "name": "岑巩县", 
        "cityCode": "5226", 
        "provinceCode": "52"
    }, 
    {
        "code": "522627", 
        "name": "天柱县", 
        "cityCode": "5226", 
        "provinceCode": "52"
    }, 
    {
        "code": "522628", 
        "name": "锦屏县", 
        "cityCode": "5226", 
        "provinceCode": "52"
    }, 
    {
        "code": "522629", 
        "name": "剑河县", 
        "cityCode": "5226", 
        "provinceCode": "52"
    }, 
    {
        "code": "522630", 
        "name": "台江县", 
        "cityCode": "5226", 
        "provinceCode": "52"
    }, 
    {
        "code": "522631", 
        "name": "黎平县", 
        "cityCode": "5226", 
        "provinceCode": "52"
    }, 
    {
        "code": "522632", 
        "name": "榕江县", 
        "cityCode": "5226", 
        "provinceCode": "52"
    }, 
    {
        "code": "522633", 
        "name": "从江县", 
        "cityCode": "5226", 
        "provinceCode": "52"
    }, 
    {
        "code": "522634", 
        "name": "雷山县", 
        "cityCode": "5226", 
        "provinceCode": "52"
    }, 
    {
        "code": "522635", 
        "name": "麻江县", 
        "cityCode": "5226", 
        "provinceCode": "52"
    }, 
    {
        "code": "522636", 
        "name": "丹寨县", 
        "cityCode": "5226", 
        "provinceCode": "52"
    }, 
    {
        "code": "522701", 
        "name": "都匀市", 
        "cityCode": "5227", 
        "provinceCode": "52"
    }, 
    {
        "code": "522702", 
        "name": "福泉市", 
        "cityCode": "5227", 
        "provinceCode": "52"
    }, 
    {
        "code": "522722", 
        "name": "荔波县", 
        "cityCode": "5227", 
        "provinceCode": "52"
    }, 
    {
        "code": "522723", 
        "name": "贵定县", 
        "cityCode": "5227", 
        "provinceCode": "52"
    }, 
    {
        "code": "522725", 
        "name": "瓮安县", 
        "cityCode": "5227", 
        "provinceCode": "52"
    }, 
    {
        "code": "522726", 
        "name": "独山县", 
        "cityCode": "5227", 
        "provinceCode": "52"
    }, 
    {
        "code": "522727", 
        "name": "平塘县", 
        "cityCode": "5227", 
        "provinceCode": "52"
    }, 
    {
        "code": "522728", 
        "name": "罗甸县", 
        "cityCode": "5227", 
        "provinceCode": "52"
    }, 
    {
        "code": "522729", 
        "name": "长顺县", 
        "cityCode": "5227", 
        "provinceCode": "52"
    }, 
    {
        "code": "522730", 
        "name": "龙里县", 
        "cityCode": "5227", 
        "provinceCode": "52"
    }, 
    {
        "code": "522731", 
        "name": "惠水县", 
        "cityCode": "5227", 
        "provinceCode": "52"
    }, 
    {
        "code": "522732", 
        "name": "三都水族自治县", 
        "cityCode": "5227", 
        "provinceCode": "52"
    }, 
    {
        "code": "530102", 
        "name": "五华区", 
        "cityCode": "5301", 
        "provinceCode": "53"
    }, 
    {
        "code": "530103", 
        "name": "盘龙区", 
        "cityCode": "5301", 
        "provinceCode": "53"
    }, 
    {
        "code": "530111", 
        "name": "官渡区", 
        "cityCode": "5301", 
        "provinceCode": "53"
    }, 
    {
        "code": "530112", 
        "name": "西山区", 
        "cityCode": "5301", 
        "provinceCode": "53"
    }, 
    {
        "code": "530113", 
        "name": "东川区", 
        "cityCode": "5301", 
        "provinceCode": "53"
    }, 
    {
        "code": "530114", 
        "name": "呈贡区", 
        "cityCode": "5301", 
        "provinceCode": "53"
    }, 
    {
        "code": "530115", 
        "name": "晋宁区", 
        "cityCode": "5301", 
        "provinceCode": "53"
    }, 
    {
        "code": "530124", 
        "name": "富民县", 
        "cityCode": "5301", 
        "provinceCode": "53"
    }, 
    {
        "code": "530125", 
        "name": "宜良县", 
        "cityCode": "5301", 
        "provinceCode": "53"
    }, 
    {
        "code": "530126", 
        "name": "石林彝族自治县", 
        "cityCode": "5301", 
        "provinceCode": "53"
    }, 
    {
        "code": "530127", 
        "name": "嵩明县", 
        "cityCode": "5301", 
        "provinceCode": "53"
    }, 
    {
        "code": "530128", 
        "name": "禄劝彝族苗族自治县", 
        "cityCode": "5301", 
        "provinceCode": "53"
    }, 
    {
        "code": "530129", 
        "name": "寻甸回族彝族自治县", 
        "cityCode": "5301", 
        "provinceCode": "53"
    }, 
    {
        "code": "530181", 
        "name": "安宁市", 
        "cityCode": "5301", 
        "provinceCode": "53"
    }, 
    {
        "code": "530302", 
        "name": "麒麟区", 
        "cityCode": "5303", 
        "provinceCode": "53"
    }, 
    {
        "code": "530303", 
        "name": "沾益区", 
        "cityCode": "5303", 
        "provinceCode": "53"
    }, 
    {
        "code": "530321", 
        "name": "马龙县", 
        "cityCode": "5303", 
        "provinceCode": "53"
    }, 
    {
        "code": "530322", 
        "name": "陆良县", 
        "cityCode": "5303", 
        "provinceCode": "53"
    }, 
    {
        "code": "530323", 
        "name": "师宗县", 
        "cityCode": "5303", 
        "provinceCode": "53"
    }, 
    {
        "code": "530324", 
        "name": "罗平县", 
        "cityCode": "5303", 
        "provinceCode": "53"
    }, 
    {
        "code": "530325", 
        "name": "富源县", 
        "cityCode": "5303", 
        "provinceCode": "53"
    }, 
    {
        "code": "530326", 
        "name": "会泽县", 
        "cityCode": "5303", 
        "provinceCode": "53"
    }, 
    {
        "code": "530381", 
        "name": "宣威市", 
        "cityCode": "5303", 
        "provinceCode": "53"
    }, 
    {
        "code": "530402", 
        "name": "红塔区", 
        "cityCode": "5304", 
        "provinceCode": "53"
    }, 
    {
        "code": "530403", 
        "name": "江川区", 
        "cityCode": "5304", 
        "provinceCode": "53"
    }, 
    {
        "code": "530422", 
        "name": "澄江县", 
        "cityCode": "5304", 
        "provinceCode": "53"
    }, 
    {
        "code": "530423", 
        "name": "通海县", 
        "cityCode": "5304", 
        "provinceCode": "53"
    }, 
    {
        "code": "530424", 
        "name": "华宁县", 
        "cityCode": "5304", 
        "provinceCode": "53"
    }, 
    {
        "code": "530425", 
        "name": "易门县", 
        "cityCode": "5304", 
        "provinceCode": "53"
    }, 
    {
        "code": "530426", 
        "name": "峨山彝族自治县", 
        "cityCode": "5304", 
        "provinceCode": "53"
    }, 
    {
        "code": "530427", 
        "name": "新平彝族傣族自治县", 
        "cityCode": "5304", 
        "provinceCode": "53"
    }, 
    {
        "code": "530428", 
        "name": "元江哈尼族彝族傣族自治县", 
        "cityCode": "5304", 
        "provinceCode": "53"
    }, 
    {
        "code": "530502", 
        "name": "隆阳区", 
        "cityCode": "5305", 
        "provinceCode": "53"
    }, 
    {
        "code": "530521", 
        "name": "施甸县", 
        "cityCode": "5305", 
        "provinceCode": "53"
    }, 
    {
        "code": "530523", 
        "name": "龙陵县", 
        "cityCode": "5305", 
        "provinceCode": "53"
    }, 
    {
        "code": "530524", 
        "name": "昌宁县", 
        "cityCode": "5305", 
        "provinceCode": "53"
    }, 
    {
        "code": "530581", 
        "name": "腾冲市", 
        "cityCode": "5305", 
        "provinceCode": "53"
    }, 
    {
        "code": "530602", 
        "name": "昭阳区", 
        "cityCode": "5306", 
        "provinceCode": "53"
    }, 
    {
        "code": "530621", 
        "name": "鲁甸县", 
        "cityCode": "5306", 
        "provinceCode": "53"
    }, 
    {
        "code": "530622", 
        "name": "巧家县", 
        "cityCode": "5306", 
        "provinceCode": "53"
    }, 
    {
        "code": "530623", 
        "name": "盐津县", 
        "cityCode": "5306", 
        "provinceCode": "53"
    }, 
    {
        "code": "530624", 
        "name": "大关县", 
        "cityCode": "5306", 
        "provinceCode": "53"
    }, 
    {
        "code": "530625", 
        "name": "永善县", 
        "cityCode": "5306", 
        "provinceCode": "53"
    }, 
    {
        "code": "530626", 
        "name": "绥江县", 
        "cityCode": "5306", 
        "provinceCode": "53"
    }, 
    {
        "code": "530627", 
        "name": "镇雄县", 
        "cityCode": "5306", 
        "provinceCode": "53"
    }, 
    {
        "code": "530628", 
        "name": "彝良县", 
        "cityCode": "5306", 
        "provinceCode": "53"
    }, 
    {
        "code": "530629", 
        "name": "威信县", 
        "cityCode": "5306", 
        "provinceCode": "53"
    }, 
    {
        "code": "530630", 
        "name": "水富县", 
        "cityCode": "5306", 
        "provinceCode": "53"
    }, 
    {
        "code": "530702", 
        "name": "古城区", 
        "cityCode": "5307", 
        "provinceCode": "53"
    }, 
    {
        "code": "530721", 
        "name": "玉龙纳西族自治县", 
        "cityCode": "5307", 
        "provinceCode": "53"
    }, 
    {
        "code": "530722", 
        "name": "永胜县", 
        "cityCode": "5307", 
        "provinceCode": "53"
    }, 
    {
        "code": "530723", 
        "name": "华坪县", 
        "cityCode": "5307", 
        "provinceCode": "53"
    }, 
    {
        "code": "530724", 
        "name": "宁蒗彝族自治县", 
        "cityCode": "5307", 
        "provinceCode": "53"
    }, 
    {
        "code": "530802", 
        "name": "思茅区", 
        "cityCode": "5308", 
        "provinceCode": "53"
    }, 
    {
        "code": "530821", 
        "name": "宁洱哈尼族彝族自治县", 
        "cityCode": "5308", 
        "provinceCode": "53"
    }, 
    {
        "code": "530822", 
        "name": "墨江哈尼族自治县", 
        "cityCode": "5308", 
        "provinceCode": "53"
    }, 
    {
        "code": "530823", 
        "name": "景东彝族自治县", 
        "cityCode": "5308", 
        "provinceCode": "53"
    }, 
    {
        "code": "530824", 
        "name": "景谷傣族彝族自治县", 
        "cityCode": "5308", 
        "provinceCode": "53"
    }, 
    {
        "code": "530825", 
        "name": "镇沅彝族哈尼族拉祜族自治县", 
        "cityCode": "5308", 
        "provinceCode": "53"
    }, 
    {
        "code": "530826", 
        "name": "江城哈尼族彝族自治县", 
        "cityCode": "5308", 
        "provinceCode": "53"
    }, 
    {
        "code": "530827", 
        "name": "孟连傣族拉祜族佤族自治县", 
        "cityCode": "5308", 
        "provinceCode": "53"
    }, 
    {
        "code": "530828", 
        "name": "澜沧拉祜族自治县", 
        "cityCode": "5308", 
        "provinceCode": "53"
    }, 
    {
        "code": "530829", 
        "name": "西盟佤族自治县", 
        "cityCode": "5308", 
        "provinceCode": "53"
    }, 
    {
        "code": "530902", 
        "name": "临翔区", 
        "cityCode": "5309", 
        "provinceCode": "53"
    }, 
    {
        "code": "530921", 
        "name": "凤庆县", 
        "cityCode": "5309", 
        "provinceCode": "53"
    }, 
    {
        "code": "530922", 
        "name": "云县", 
        "cityCode": "5309", 
        "provinceCode": "53"
    }, 
    {
        "code": "530923", 
        "name": "永德县", 
        "cityCode": "5309", 
        "provinceCode": "53"
    }, 
    {
        "code": "530924", 
        "name": "镇康县", 
        "cityCode": "5309", 
        "provinceCode": "53"
    }, 
    {
        "code": "530925", 
        "name": "双江拉祜族佤族布朗族傣族自治县", 
        "cityCode": "5309", 
        "provinceCode": "53"
    }, 
    {
        "code": "530926", 
        "name": "耿马傣族佤族自治县", 
        "cityCode": "5309", 
        "provinceCode": "53"
    }, 
    {
        "code": "530927", 
        "name": "沧源佤族自治县", 
        "cityCode": "5309", 
        "provinceCode": "53"
    }, 
    {
        "code": "532301", 
        "name": "楚雄市", 
        "cityCode": "5323", 
        "provinceCode": "53"
    }, 
    {
        "code": "532322", 
        "name": "双柏县", 
        "cityCode": "5323", 
        "provinceCode": "53"
    }, 
    {
        "code": "532323", 
        "name": "牟定县", 
        "cityCode": "5323", 
        "provinceCode": "53"
    }, 
    {
        "code": "532324", 
        "name": "南华县", 
        "cityCode": "5323", 
        "provinceCode": "53"
    }, 
    {
        "code": "532325", 
        "name": "姚安县", 
        "cityCode": "5323", 
        "provinceCode": "53"
    }, 
    {
        "code": "532326", 
        "name": "大姚县", 
        "cityCode": "5323", 
        "provinceCode": "53"
    }, 
    {
        "code": "532327", 
        "name": "永仁县", 
        "cityCode": "5323", 
        "provinceCode": "53"
    }, 
    {
        "code": "532328", 
        "name": "元谋县", 
        "cityCode": "5323", 
        "provinceCode": "53"
    }, 
    {
        "code": "532329", 
        "name": "武定县", 
        "cityCode": "5323", 
        "provinceCode": "53"
    }, 
    {
        "code": "532331", 
        "name": "禄丰县", 
        "cityCode": "5323", 
        "provinceCode": "53"
    }, 
    {
        "code": "532501", 
        "name": "个旧市", 
        "cityCode": "5325", 
        "provinceCode": "53"
    }, 
    {
        "code": "532502", 
        "name": "开远市", 
        "cityCode": "5325", 
        "provinceCode": "53"
    }, 
    {
        "code": "532503", 
        "name": "蒙自市", 
        "cityCode": "5325", 
        "provinceCode": "53"
    }, 
    {
        "code": "532504", 
        "name": "弥勒市", 
        "cityCode": "5325", 
        "provinceCode": "53"
    }, 
    {
        "code": "532523", 
        "name": "屏边苗族自治县", 
        "cityCode": "5325", 
        "provinceCode": "53"
    }, 
    {
        "code": "532524", 
        "name": "建水县", 
        "cityCode": "5325", 
        "provinceCode": "53"
    }, 
    {
        "code": "532525", 
        "name": "石屏县", 
        "cityCode": "5325", 
        "provinceCode": "53"
    }, 
    {
        "code": "532527", 
        "name": "泸西县", 
        "cityCode": "5325", 
        "provinceCode": "53"
    }, 
    {
        "code": "532528", 
        "name": "元阳县", 
        "cityCode": "5325", 
        "provinceCode": "53"
    }, 
    {
        "code": "532529", 
        "name": "红河县", 
        "cityCode": "5325", 
        "provinceCode": "53"
    }, 
    {
        "code": "532530", 
        "name": "金平苗族瑶族傣族自治县", 
        "cityCode": "5325", 
        "provinceCode": "53"
    }, 
    {
        "code": "532531", 
        "name": "绿春县", 
        "cityCode": "5325", 
        "provinceCode": "53"
    }, 
    {
        "code": "532532", 
        "name": "河口瑶族自治县", 
        "cityCode": "5325", 
        "provinceCode": "53"
    }, 
    {
        "code": "532601", 
        "name": "文山市", 
        "cityCode": "5326", 
        "provinceCode": "53"
    }, 
    {
        "code": "532622", 
        "name": "砚山县", 
        "cityCode": "5326", 
        "provinceCode": "53"
    }, 
    {
        "code": "532623", 
        "name": "西畴县", 
        "cityCode": "5326", 
        "provinceCode": "53"
    }, 
    {
        "code": "532624", 
        "name": "麻栗坡县", 
        "cityCode": "5326", 
        "provinceCode": "53"
    }, 
    {
        "code": "532625", 
        "name": "马关县", 
        "cityCode": "5326", 
        "provinceCode": "53"
    }, 
    {
        "code": "532626", 
        "name": "丘北县", 
        "cityCode": "5326", 
        "provinceCode": "53"
    }, 
    {
        "code": "532627", 
        "name": "广南县", 
        "cityCode": "5326", 
        "provinceCode": "53"
    }, 
    {
        "code": "532628", 
        "name": "富宁县", 
        "cityCode": "5326", 
        "provinceCode": "53"
    }, 
    {
        "code": "532801", 
        "name": "景洪市", 
        "cityCode": "5328", 
        "provinceCode": "53"
    }, 
    {
        "code": "532822", 
        "name": "勐海县", 
        "cityCode": "5328", 
        "provinceCode": "53"
    }, 
    {
        "code": "532823", 
        "name": "勐腊县", 
        "cityCode": "5328", 
        "provinceCode": "53"
    }, 
    {
        "code": "532901", 
        "name": "大理市", 
        "cityCode": "5329", 
        "provinceCode": "53"
    }, 
    {
        "code": "532922", 
        "name": "漾濞彝族自治县", 
        "cityCode": "5329", 
        "provinceCode": "53"
    }, 
    {
        "code": "532923", 
        "name": "祥云县", 
        "cityCode": "5329", 
        "provinceCode": "53"
    }, 
    {
        "code": "532924", 
        "name": "宾川县", 
        "cityCode": "5329", 
        "provinceCode": "53"
    }, 
    {
        "code": "532925", 
        "name": "弥渡县", 
        "cityCode": "5329", 
        "provinceCode": "53"
    }, 
    {
        "code": "532926", 
        "name": "南涧彝族自治县", 
        "cityCode": "5329", 
        "provinceCode": "53"
    }, 
    {
        "code": "532927", 
        "name": "巍山彝族回族自治县", 
        "cityCode": "5329", 
        "provinceCode": "53"
    }, 
    {
        "code": "532928", 
        "name": "永平县", 
        "cityCode": "5329", 
        "provinceCode": "53"
    }, 
    {
        "code": "532929", 
        "name": "云龙县", 
        "cityCode": "5329", 
        "provinceCode": "53"
    }, 
    {
        "code": "532930", 
        "name": "洱源县", 
        "cityCode": "5329", 
        "provinceCode": "53"
    }, 
    {
        "code": "532931", 
        "name": "剑川县", 
        "cityCode": "5329", 
        "provinceCode": "53"
    }, 
    {
        "code": "532932", 
        "name": "鹤庆县", 
        "cityCode": "5329", 
        "provinceCode": "53"
    }, 
    {
        "code": "533102", 
        "name": "瑞丽市", 
        "cityCode": "5331", 
        "provinceCode": "53"
    }, 
    {
        "code": "533103", 
        "name": "芒市", 
        "cityCode": "5331", 
        "provinceCode": "53"
    }, 
    {
        "code": "533122", 
        "name": "梁河县", 
        "cityCode": "5331", 
        "provinceCode": "53"
    }, 
    {
        "code": "533123", 
        "name": "盈江县", 
        "cityCode": "5331", 
        "provinceCode": "53"
    }, 
    {
        "code": "533124", 
        "name": "陇川县", 
        "cityCode": "5331", 
        "provinceCode": "53"
    }, 
    {
        "code": "533301", 
        "name": "泸水市", 
        "cityCode": "5333", 
        "provinceCode": "53"
    }, 
    {
        "code": "533323", 
        "name": "福贡县", 
        "cityCode": "5333", 
        "provinceCode": "53"
    }, 
    {
        "code": "533324", 
        "name": "贡山独龙族怒族自治县", 
        "cityCode": "5333", 
        "provinceCode": "53"
    }, 
    {
        "code": "533325", 
        "name": "兰坪白族普米族自治县", 
        "cityCode": "5333", 
        "provinceCode": "53"
    }, 
    {
        "code": "533401", 
        "name": "香格里拉市", 
        "cityCode": "5334", 
        "provinceCode": "53"
    }, 
    {
        "code": "533422", 
        "name": "德钦县", 
        "cityCode": "5334", 
        "provinceCode": "53"
    }, 
    {
        "code": "533423", 
        "name": "维西傈僳族自治县", 
        "cityCode": "5334", 
        "provinceCode": "53"
    }, 
    {
        "code": "540102", 
        "name": "城关区", 
        "cityCode": "5401", 
        "provinceCode": "54"
    }, 
    {
        "code": "540103", 
        "name": "堆龙德庆区", 
        "cityCode": "5401", 
        "provinceCode": "54"
    }, 
    {
        "code": "540121", 
        "name": "林周县", 
        "cityCode": "5401", 
        "provinceCode": "54"
    }, 
    {
        "code": "540122", 
        "name": "当雄县", 
        "cityCode": "5401", 
        "provinceCode": "54"
    }, 
    {
        "code": "540123", 
        "name": "尼木县", 
        "cityCode": "5401", 
        "provinceCode": "54"
    }, 
    {
        "code": "540124", 
        "name": "曲水县", 
        "cityCode": "5401", 
        "provinceCode": "54"
    }, 
    {
        "code": "540126", 
        "name": "达孜县", 
        "cityCode": "5401", 
        "provinceCode": "54"
    }, 
    {
        "code": "540127", 
        "name": "墨竹工卡县", 
        "cityCode": "5401", 
        "provinceCode": "54"
    }, 
    {
        "code": "540171", 
        "name": "格尔木藏青工业园区", 
        "cityCode": "5401", 
        "provinceCode": "54"
    }, 
    {
        "code": "540172", 
        "name": "拉萨经济技术开发区", 
        "cityCode": "5401", 
        "provinceCode": "54"
    }, 
    {
        "code": "540173", 
        "name": "西藏文化旅游创意园区", 
        "cityCode": "5401", 
        "provinceCode": "54"
    }, 
    {
        "code": "540174", 
        "name": "达孜工业园区", 
        "cityCode": "5401", 
        "provinceCode": "54"
    }, 
    {
        "code": "540202", 
        "name": "桑珠孜区", 
        "cityCode": "5402", 
        "provinceCode": "54"
    }, 
    {
        "code": "540221", 
        "name": "南木林县", 
        "cityCode": "5402", 
        "provinceCode": "54"
    }, 
    {
        "code": "540222", 
        "name": "江孜县", 
        "cityCode": "5402", 
        "provinceCode": "54"
    }, 
    {
        "code": "540223", 
        "name": "定日县", 
        "cityCode": "5402", 
        "provinceCode": "54"
    }, 
    {
        "code": "540224", 
        "name": "萨迦县", 
        "cityCode": "5402", 
        "provinceCode": "54"
    }, 
    {
        "code": "540225", 
        "name": "拉孜县", 
        "cityCode": "5402", 
        "provinceCode": "54"
    }, 
    {
        "code": "540226", 
        "name": "昂仁县", 
        "cityCode": "5402", 
        "provinceCode": "54"
    }, 
    {
        "code": "540227", 
        "name": "谢通门县", 
        "cityCode": "5402", 
        "provinceCode": "54"
    }, 
    {
        "code": "540228", 
        "name": "白朗县", 
        "cityCode": "5402", 
        "provinceCode": "54"
    }, 
    {
        "code": "540229", 
        "name": "仁布县", 
        "cityCode": "5402", 
        "provinceCode": "54"
    }, 
    {
        "code": "540230", 
        "name": "康马县", 
        "cityCode": "5402", 
        "provinceCode": "54"
    }, 
    {
        "code": "540231", 
        "name": "定结县", 
        "cityCode": "5402", 
        "provinceCode": "54"
    }, 
    {
        "code": "540232", 
        "name": "仲巴县", 
        "cityCode": "5402", 
        "provinceCode": "54"
    }, 
    {
        "code": "540233", 
        "name": "亚东县", 
        "cityCode": "5402", 
        "provinceCode": "54"
    }, 
    {
        "code": "540234", 
        "name": "吉隆县", 
        "cityCode": "5402", 
        "provinceCode": "54"
    }, 
    {
        "code": "540235", 
        "name": "聂拉木县", 
        "cityCode": "5402", 
        "provinceCode": "54"
    }, 
    {
        "code": "540236", 
        "name": "萨嘎县", 
        "cityCode": "5402", 
        "provinceCode": "54"
    }, 
    {
        "code": "540237", 
        "name": "岗巴县", 
        "cityCode": "5402", 
        "provinceCode": "54"
    }, 
    {
        "code": "540302", 
        "name": "卡若区", 
        "cityCode": "5403", 
        "provinceCode": "54"
    }, 
    {
        "code": "540321", 
        "name": "江达县", 
        "cityCode": "5403", 
        "provinceCode": "54"
    }, 
    {
        "code": "540322", 
        "name": "贡觉县", 
        "cityCode": "5403", 
        "provinceCode": "54"
    }, 
    {
        "code": "540323", 
        "name": "类乌齐县", 
        "cityCode": "5403", 
        "provinceCode": "54"
    }, 
    {
        "code": "540324", 
        "name": "丁青县", 
        "cityCode": "5403", 
        "provinceCode": "54"
    }, 
    {
        "code": "540325", 
        "name": "察雅县", 
        "cityCode": "5403", 
        "provinceCode": "54"
    }, 
    {
        "code": "540326", 
        "name": "八宿县", 
        "cityCode": "5403", 
        "provinceCode": "54"
    }, 
    {
        "code": "540327", 
        "name": "左贡县", 
        "cityCode": "5403", 
        "provinceCode": "54"
    }, 
    {
        "code": "540328", 
        "name": "芒康县", 
        "cityCode": "5403", 
        "provinceCode": "54"
    }, 
    {
        "code": "540329", 
        "name": "洛隆县", 
        "cityCode": "5403", 
        "provinceCode": "54"
    }, 
    {
        "code": "540330", 
        "name": "边坝县", 
        "cityCode": "5403", 
        "provinceCode": "54"
    }, 
    {
        "code": "540402", 
        "name": "巴宜区", 
        "cityCode": "5404", 
        "provinceCode": "54"
    }, 
    {
        "code": "540421", 
        "name": "工布江达县", 
        "cityCode": "5404", 
        "provinceCode": "54"
    }, 
    {
        "code": "540422", 
        "name": "米林县", 
        "cityCode": "5404", 
        "provinceCode": "54"
    }, 
    {
        "code": "540423", 
        "name": "墨脱县", 
        "cityCode": "5404", 
        "provinceCode": "54"
    }, 
    {
        "code": "540424", 
        "name": "波密县", 
        "cityCode": "5404", 
        "provinceCode": "54"
    }, 
    {
        "code": "540425", 
        "name": "察隅县", 
        "cityCode": "5404", 
        "provinceCode": "54"
    }, 
    {
        "code": "540426", 
        "name": "朗县", 
        "cityCode": "5404", 
        "provinceCode": "54"
    }, 
    {
        "code": "540502", 
        "name": "乃东区", 
        "cityCode": "5405", 
        "provinceCode": "54"
    }, 
    {
        "code": "540521", 
        "name": "扎囊县", 
        "cityCode": "5405", 
        "provinceCode": "54"
    }, 
    {
        "code": "540522", 
        "name": "贡嘎县", 
        "cityCode": "5405", 
        "provinceCode": "54"
    }, 
    {
        "code": "540523", 
        "name": "桑日县", 
        "cityCode": "5405", 
        "provinceCode": "54"
    }, 
    {
        "code": "540524", 
        "name": "琼结县", 
        "cityCode": "5405", 
        "provinceCode": "54"
    }, 
    {
        "code": "540525", 
        "name": "曲松县", 
        "cityCode": "5405", 
        "provinceCode": "54"
    }, 
    {
        "code": "540526", 
        "name": "措美县", 
        "cityCode": "5405", 
        "provinceCode": "54"
    }, 
    {
        "code": "540527", 
        "name": "洛扎县", 
        "cityCode": "5405", 
        "provinceCode": "54"
    }, 
    {
        "code": "540528", 
        "name": "加查县", 
        "cityCode": "5405", 
        "provinceCode": "54"
    }, 
    {
        "code": "540529", 
        "name": "隆子县", 
        "cityCode": "5405", 
        "provinceCode": "54"
    }, 
    {
        "code": "540530", 
        "name": "错那县", 
        "cityCode": "5405", 
        "provinceCode": "54"
    }, 
    {
        "code": "540531", 
        "name": "浪卡子县", 
        "cityCode": "5405", 
        "provinceCode": "54"
    }, 
    {
        "code": "542421", 
        "name": "那曲县", 
        "cityCode": "5424", 
        "provinceCode": "54"
    }, 
    {
        "code": "542422", 
        "name": "嘉黎县", 
        "cityCode": "5424", 
        "provinceCode": "54"
    }, 
    {
        "code": "542423", 
        "name": "比如县", 
        "cityCode": "5424", 
        "provinceCode": "54"
    }, 
    {
        "code": "542424", 
        "name": "聂荣县", 
        "cityCode": "5424", 
        "provinceCode": "54"
    }, 
    {
        "code": "542425", 
        "name": "安多县", 
        "cityCode": "5424", 
        "provinceCode": "54"
    }, 
    {
        "code": "542426", 
        "name": "申扎县", 
        "cityCode": "5424", 
        "provinceCode": "54"
    }, 
    {
        "code": "542427", 
        "name": "索县", 
        "cityCode": "5424", 
        "provinceCode": "54"
    }, 
    {
        "code": "542428", 
        "name": "班戈县", 
        "cityCode": "5424", 
        "provinceCode": "54"
    }, 
    {
        "code": "542429", 
        "name": "巴青县", 
        "cityCode": "5424", 
        "provinceCode": "54"
    }, 
    {
        "code": "542430", 
        "name": "尼玛县", 
        "cityCode": "5424", 
        "provinceCode": "54"
    }, 
    {
        "code": "542431", 
        "name": "双湖县", 
        "cityCode": "5424", 
        "provinceCode": "54"
    }, 
    {
        "code": "542521", 
        "name": "普兰县", 
        "cityCode": "5425", 
        "provinceCode": "54"
    }, 
    {
        "code": "542522", 
        "name": "札达县", 
        "cityCode": "5425", 
        "provinceCode": "54"
    }, 
    {
        "code": "542523", 
        "name": "噶尔县", 
        "cityCode": "5425", 
        "provinceCode": "54"
    }, 
    {
        "code": "542524", 
        "name": "日土县", 
        "cityCode": "5425", 
        "provinceCode": "54"
    }, 
    {
        "code": "542525", 
        "name": "革吉县", 
        "cityCode": "5425", 
        "provinceCode": "54"
    }, 
    {
        "code": "542526", 
        "name": "改则县", 
        "cityCode": "5425", 
        "provinceCode": "54"
    }, 
    {
        "code": "542527", 
        "name": "措勤县", 
        "cityCode": "5425", 
        "provinceCode": "54"
    }, 
    {
        "code": "610102", 
        "name": "新城区", 
        "cityCode": "6101", 
        "provinceCode": "61"
    }, 
    {
        "code": "610103", 
        "name": "碑林区", 
        "cityCode": "6101", 
        "provinceCode": "61"
    }, 
    {
        "code": "610104", 
        "name": "莲湖区", 
        "cityCode": "6101", 
        "provinceCode": "61"
    }, 
    {
        "code": "610111", 
        "name": "灞桥区", 
        "cityCode": "6101", 
        "provinceCode": "61"
    }, 
    {
        "code": "610112", 
        "name": "未央区", 
        "cityCode": "6101", 
        "provinceCode": "61"
    }, 
    {
        "code": "610113", 
        "name": "雁塔区", 
        "cityCode": "6101", 
        "provinceCode": "61"
    }, 
    {
        "code": "610114", 
        "name": "阎良区", 
        "cityCode": "6101", 
        "provinceCode": "61"
    }, 
    {
        "code": "610115", 
        "name": "临潼区", 
        "cityCode": "6101", 
        "provinceCode": "61"
    }, 
    {
        "code": "610116", 
        "name": "长安区", 
        "cityCode": "6101", 
        "provinceCode": "61"
    }, 
    {
        "code": "610117", 
        "name": "高陵区", 
        "cityCode": "6101", 
        "provinceCode": "61"
    }, 
    {
        "code": "610118", 
        "name": "鄠邑区", 
        "cityCode": "6101", 
        "provinceCode": "61"
    }, 
    {
        "code": "610122", 
        "name": "蓝田县", 
        "cityCode": "6101", 
        "provinceCode": "61"
    }, 
    {
        "code": "610124", 
        "name": "周至县", 
        "cityCode": "6101", 
        "provinceCode": "61"
    }, 
    {
        "code": "610202", 
        "name": "王益区", 
        "cityCode": "6102", 
        "provinceCode": "61"
    }, 
    {
        "code": "610203", 
        "name": "印台区", 
        "cityCode": "6102", 
        "provinceCode": "61"
    }, 
    {
        "code": "610204", 
        "name": "耀州区", 
        "cityCode": "6102", 
        "provinceCode": "61"
    }, 
    {
        "code": "610222", 
        "name": "宜君县", 
        "cityCode": "6102", 
        "provinceCode": "61"
    }, 
    {
        "code": "610302", 
        "name": "渭滨区", 
        "cityCode": "6103", 
        "provinceCode": "61"
    }, 
    {
        "code": "610303", 
        "name": "金台区", 
        "cityCode": "6103", 
        "provinceCode": "61"
    }, 
    {
        "code": "610304", 
        "name": "陈仓区", 
        "cityCode": "6103", 
        "provinceCode": "61"
    }, 
    {
        "code": "610322", 
        "name": "凤翔县", 
        "cityCode": "6103", 
        "provinceCode": "61"
    }, 
    {
        "code": "610323", 
        "name": "岐山县", 
        "cityCode": "6103", 
        "provinceCode": "61"
    }, 
    {
        "code": "610324", 
        "name": "扶风县", 
        "cityCode": "6103", 
        "provinceCode": "61"
    }, 
    {
        "code": "610326", 
        "name": "眉县", 
        "cityCode": "6103", 
        "provinceCode": "61"
    }, 
    {
        "code": "610327", 
        "name": "陇县", 
        "cityCode": "6103", 
        "provinceCode": "61"
    }, 
    {
        "code": "610328", 
        "name": "千阳县", 
        "cityCode": "6103", 
        "provinceCode": "61"
    }, 
    {
        "code": "610329", 
        "name": "麟游县", 
        "cityCode": "6103", 
        "provinceCode": "61"
    }, 
    {
        "code": "610330", 
        "name": "凤县", 
        "cityCode": "6103", 
        "provinceCode": "61"
    }, 
    {
        "code": "610331", 
        "name": "太白县", 
        "cityCode": "6103", 
        "provinceCode": "61"
    }, 
    {
        "code": "610402", 
        "name": "秦都区", 
        "cityCode": "6104", 
        "provinceCode": "61"
    }, 
    {
        "code": "610403", 
        "name": "杨陵区", 
        "cityCode": "6104", 
        "provinceCode": "61"
    }, 
    {
        "code": "610404", 
        "name": "渭城区", 
        "cityCode": "6104", 
        "provinceCode": "61"
    }, 
    {
        "code": "610422", 
        "name": "三原县", 
        "cityCode": "6104", 
        "provinceCode": "61"
    }, 
    {
        "code": "610423", 
        "name": "泾阳县", 
        "cityCode": "6104", 
        "provinceCode": "61"
    }, 
    {
        "code": "610424", 
        "name": "乾县", 
        "cityCode": "6104", 
        "provinceCode": "61"
    }, 
    {
        "code": "610425", 
        "name": "礼泉县", 
        "cityCode": "6104", 
        "provinceCode": "61"
    }, 
    {
        "code": "610426", 
        "name": "永寿县", 
        "cityCode": "6104", 
        "provinceCode": "61"
    }, 
    {
        "code": "610427", 
        "name": "彬县", 
        "cityCode": "6104", 
        "provinceCode": "61"
    }, 
    {
        "code": "610428", 
        "name": "长武县", 
        "cityCode": "6104", 
        "provinceCode": "61"
    }, 
    {
        "code": "610429", 
        "name": "旬邑县", 
        "cityCode": "6104", 
        "provinceCode": "61"
    }, 
    {
        "code": "610430", 
        "name": "淳化县", 
        "cityCode": "6104", 
        "provinceCode": "61"
    }, 
    {
        "code": "610431", 
        "name": "武功县", 
        "cityCode": "6104", 
        "provinceCode": "61"
    }, 
    {
        "code": "610481", 
        "name": "兴平市", 
        "cityCode": "6104", 
        "provinceCode": "61"
    }, 
    {
        "code": "610502", 
        "name": "临渭区", 
        "cityCode": "6105", 
        "provinceCode": "61"
    }, 
    {
        "code": "610503", 
        "name": "华州区", 
        "cityCode": "6105", 
        "provinceCode": "61"
    }, 
    {
        "code": "610522", 
        "name": "潼关县", 
        "cityCode": "6105", 
        "provinceCode": "61"
    }, 
    {
        "code": "610523", 
        "name": "大荔县", 
        "cityCode": "6105", 
        "provinceCode": "61"
    }, 
    {
        "code": "610524", 
        "name": "合阳县", 
        "cityCode": "6105", 
        "provinceCode": "61"
    }, 
    {
        "code": "610525", 
        "name": "澄城县", 
        "cityCode": "6105", 
        "provinceCode": "61"
    }, 
    {
        "code": "610526", 
        "name": "蒲城县", 
        "cityCode": "6105", 
        "provinceCode": "61"
    }, 
    {
        "code": "610527", 
        "name": "白水县", 
        "cityCode": "6105", 
        "provinceCode": "61"
    }, 
    {
        "code": "610528", 
        "name": "富平县", 
        "cityCode": "6105", 
        "provinceCode": "61"
    }, 
    {
        "code": "610581", 
        "name": "韩城市", 
        "cityCode": "6105", 
        "provinceCode": "61"
    }, 
    {
        "code": "610582", 
        "name": "华阴市", 
        "cityCode": "6105", 
        "provinceCode": "61"
    }, 
    {
        "code": "610602", 
        "name": "宝塔区", 
        "cityCode": "6106", 
        "provinceCode": "61"
    }, 
    {
        "code": "610603", 
        "name": "安塞区", 
        "cityCode": "6106", 
        "provinceCode": "61"
    }, 
    {
        "code": "610621", 
        "name": "延长县", 
        "cityCode": "6106", 
        "provinceCode": "61"
    }, 
    {
        "code": "610622", 
        "name": "延川县", 
        "cityCode": "6106", 
        "provinceCode": "61"
    }, 
    {
        "code": "610623", 
        "name": "子长县", 
        "cityCode": "6106", 
        "provinceCode": "61"
    }, 
    {
        "code": "610625", 
        "name": "志丹县", 
        "cityCode": "6106", 
        "provinceCode": "61"
    }, 
    {
        "code": "610626", 
        "name": "吴起县", 
        "cityCode": "6106", 
        "provinceCode": "61"
    }, 
    {
        "code": "610627", 
        "name": "甘泉县", 
        "cityCode": "6106", 
        "provinceCode": "61"
    }, 
    {
        "code": "610628", 
        "name": "富县", 
        "cityCode": "6106", 
        "provinceCode": "61"
    }, 
    {
        "code": "610629", 
        "name": "洛川县", 
        "cityCode": "6106", 
        "provinceCode": "61"
    }, 
    {
        "code": "610630", 
        "name": "宜川县", 
        "cityCode": "6106", 
        "provinceCode": "61"
    }, 
    {
        "code": "610631", 
        "name": "黄龙县", 
        "cityCode": "6106", 
        "provinceCode": "61"
    }, 
    {
        "code": "610632", 
        "name": "黄陵县", 
        "cityCode": "6106", 
        "provinceCode": "61"
    }, 
    {
        "code": "610702", 
        "name": "汉台区", 
        "cityCode": "6107", 
        "provinceCode": "61"
    }, 
    {
        "code": "610703", 
        "name": "南郑区", 
        "cityCode": "6107", 
        "provinceCode": "61"
    }, 
    {
        "code": "610722", 
        "name": "城固县", 
        "cityCode": "6107", 
        "provinceCode": "61"
    }, 
    {
        "code": "610723", 
        "name": "洋县", 
        "cityCode": "6107", 
        "provinceCode": "61"
    }, 
    {
        "code": "610724", 
        "name": "西乡县", 
        "cityCode": "6107", 
        "provinceCode": "61"
    }, 
    {
        "code": "610725", 
        "name": "勉县", 
        "cityCode": "6107", 
        "provinceCode": "61"
    }, 
    {
        "code": "610726", 
        "name": "宁强县", 
        "cityCode": "6107", 
        "provinceCode": "61"
    }, 
    {
        "code": "610727", 
        "name": "略阳县", 
        "cityCode": "6107", 
        "provinceCode": "61"
    }, 
    {
        "code": "610728", 
        "name": "镇巴县", 
        "cityCode": "6107", 
        "provinceCode": "61"
    }, 
    {
        "code": "610729", 
        "name": "留坝县", 
        "cityCode": "6107", 
        "provinceCode": "61"
    }, 
    {
        "code": "610730", 
        "name": "佛坪县", 
        "cityCode": "6107", 
        "provinceCode": "61"
    }, 
    {
        "code": "610802", 
        "name": "榆阳区", 
        "cityCode": "6108", 
        "provinceCode": "61"
    }, 
    {
        "code": "610803", 
        "name": "横山区", 
        "cityCode": "6108", 
        "provinceCode": "61"
    }, 
    {
        "code": "610822", 
        "name": "府谷县", 
        "cityCode": "6108", 
        "provinceCode": "61"
    }, 
    {
        "code": "610824", 
        "name": "靖边县", 
        "cityCode": "6108", 
        "provinceCode": "61"
    }, 
    {
        "code": "610825", 
        "name": "定边县", 
        "cityCode": "6108", 
        "provinceCode": "61"
    }, 
    {
        "code": "610826", 
        "name": "绥德县", 
        "cityCode": "6108", 
        "provinceCode": "61"
    }, 
    {
        "code": "610827", 
        "name": "米脂县", 
        "cityCode": "6108", 
        "provinceCode": "61"
    }, 
    {
        "code": "610828", 
        "name": "佳县", 
        "cityCode": "6108", 
        "provinceCode": "61"
    }, 
    {
        "code": "610829", 
        "name": "吴堡县", 
        "cityCode": "6108", 
        "provinceCode": "61"
    }, 
    {
        "code": "610830", 
        "name": "清涧县", 
        "cityCode": "6108", 
        "provinceCode": "61"
    }, 
    {
        "code": "610831", 
        "name": "子洲县", 
        "cityCode": "6108", 
        "provinceCode": "61"
    }, 
    {
        "code": "610881", 
        "name": "神木市", 
        "cityCode": "6108", 
        "provinceCode": "61"
    }, 
    {
        "code": "610902", 
        "name": "汉滨区", 
        "cityCode": "6109", 
        "provinceCode": "61"
    }, 
    {
        "code": "610921", 
        "name": "汉阴县", 
        "cityCode": "6109", 
        "provinceCode": "61"
    }, 
    {
        "code": "610922", 
        "name": "石泉县", 
        "cityCode": "6109", 
        "provinceCode": "61"
    }, 
    {
        "code": "610923", 
        "name": "宁陕县", 
        "cityCode": "6109", 
        "provinceCode": "61"
    }, 
    {
        "code": "610924", 
        "name": "紫阳县", 
        "cityCode": "6109", 
        "provinceCode": "61"
    }, 
    {
        "code": "610925", 
        "name": "岚皋县", 
        "cityCode": "6109", 
        "provinceCode": "61"
    }, 
    {
        "code": "610926", 
        "name": "平利县", 
        "cityCode": "6109", 
        "provinceCode": "61"
    }, 
    {
        "code": "610927", 
        "name": "镇坪县", 
        "cityCode": "6109", 
        "provinceCode": "61"
    }, 
    {
        "code": "610928", 
        "name": "旬阳县", 
        "cityCode": "6109", 
        "provinceCode": "61"
    }, 
    {
        "code": "610929", 
        "name": "白河县", 
        "cityCode": "6109", 
        "provinceCode": "61"
    }, 
    {
        "code": "611002", 
        "name": "商州区", 
        "cityCode": "6110", 
        "provinceCode": "61"
    }, 
    {
        "code": "611021", 
        "name": "洛南县", 
        "cityCode": "6110", 
        "provinceCode": "61"
    }, 
    {
        "code": "611022", 
        "name": "丹凤县", 
        "cityCode": "6110", 
        "provinceCode": "61"
    }, 
    {
        "code": "611023", 
        "name": "商南县", 
        "cityCode": "6110", 
        "provinceCode": "61"
    }, 
    {
        "code": "611024", 
        "name": "山阳县", 
        "cityCode": "6110", 
        "provinceCode": "61"
    }, 
    {
        "code": "611025", 
        "name": "镇安县", 
        "cityCode": "6110", 
        "provinceCode": "61"
    }, 
    {
        "code": "611026", 
        "name": "柞水县", 
        "cityCode": "6110", 
        "provinceCode": "61"
    }, 
    {
        "code": "620102", 
        "name": "城关区", 
        "cityCode": "6201", 
        "provinceCode": "62"
    }, 
    {
        "code": "620103", 
        "name": "七里河区", 
        "cityCode": "6201", 
        "provinceCode": "62"
    }, 
    {
        "code": "620104", 
        "name": "西固区", 
        "cityCode": "6201", 
        "provinceCode": "62"
    }, 
    {
        "code": "620105", 
        "name": "安宁区", 
        "cityCode": "6201", 
        "provinceCode": "62"
    }, 
    {
        "code": "620111", 
        "name": "红古区", 
        "cityCode": "6201", 
        "provinceCode": "62"
    }, 
    {
        "code": "620121", 
        "name": "永登县", 
        "cityCode": "6201", 
        "provinceCode": "62"
    }, 
    {
        "code": "620122", 
        "name": "皋兰县", 
        "cityCode": "6201", 
        "provinceCode": "62"
    }, 
    {
        "code": "620123", 
        "name": "榆中县", 
        "cityCode": "6201", 
        "provinceCode": "62"
    }, 
    {
        "code": "620171", 
        "name": "兰州新区", 
        "cityCode": "6201", 
        "provinceCode": "62"
    }, 
    {
        "code": "620201", 
        "name": "嘉峪关市", 
        "cityCode": "6202", 
        "provinceCode": "62"
    }, 
    {
        "code": "620302", 
        "name": "金川区", 
        "cityCode": "6203", 
        "provinceCode": "62"
    }, 
    {
        "code": "620321", 
        "name": "永昌县", 
        "cityCode": "6203", 
        "provinceCode": "62"
    }, 
    {
        "code": "620402", 
        "name": "白银区", 
        "cityCode": "6204", 
        "provinceCode": "62"
    }, 
    {
        "code": "620403", 
        "name": "平川区", 
        "cityCode": "6204", 
        "provinceCode": "62"
    }, 
    {
        "code": "620421", 
        "name": "靖远县", 
        "cityCode": "6204", 
        "provinceCode": "62"
    }, 
    {
        "code": "620422", 
        "name": "会宁县", 
        "cityCode": "6204", 
        "provinceCode": "62"
    }, 
    {
        "code": "620423", 
        "name": "景泰县", 
        "cityCode": "6204", 
        "provinceCode": "62"
    }, 
    {
        "code": "620502", 
        "name": "秦州区", 
        "cityCode": "6205", 
        "provinceCode": "62"
    }, 
    {
        "code": "620503", 
        "name": "麦积区", 
        "cityCode": "6205", 
        "provinceCode": "62"
    }, 
    {
        "code": "620521", 
        "name": "清水县", 
        "cityCode": "6205", 
        "provinceCode": "62"
    }, 
    {
        "code": "620522", 
        "name": "秦安县", 
        "cityCode": "6205", 
        "provinceCode": "62"
    }, 
    {
        "code": "620523", 
        "name": "甘谷县", 
        "cityCode": "6205", 
        "provinceCode": "62"
    }, 
    {
        "code": "620524", 
        "name": "武山县", 
        "cityCode": "6205", 
        "provinceCode": "62"
    }, 
    {
        "code": "620525", 
        "name": "张家川回族自治县", 
        "cityCode": "6205", 
        "provinceCode": "62"
    }, 
    {
        "code": "620602", 
        "name": "凉州区", 
        "cityCode": "6206", 
        "provinceCode": "62"
    }, 
    {
        "code": "620621", 
        "name": "民勤县", 
        "cityCode": "6206", 
        "provinceCode": "62"
    }, 
    {
        "code": "620622", 
        "name": "古浪县", 
        "cityCode": "6206", 
        "provinceCode": "62"
    }, 
    {
        "code": "620623", 
        "name": "天祝藏族自治县", 
        "cityCode": "6206", 
        "provinceCode": "62"
    }, 
    {
        "code": "620702", 
        "name": "甘州区", 
        "cityCode": "6207", 
        "provinceCode": "62"
    }, 
    {
        "code": "620721", 
        "name": "肃南裕固族自治县", 
        "cityCode": "6207", 
        "provinceCode": "62"
    }, 
    {
        "code": "620722", 
        "name": "民乐县", 
        "cityCode": "6207", 
        "provinceCode": "62"
    }, 
    {
        "code": "620723", 
        "name": "临泽县", 
        "cityCode": "6207", 
        "provinceCode": "62"
    }, 
    {
        "code": "620724", 
        "name": "高台县", 
        "cityCode": "6207", 
        "provinceCode": "62"
    }, 
    {
        "code": "620725", 
        "name": "山丹县", 
        "cityCode": "6207", 
        "provinceCode": "62"
    }, 
    {
        "code": "620802", 
        "name": "崆峒区", 
        "cityCode": "6208", 
        "provinceCode": "62"
    }, 
    {
        "code": "620821", 
        "name": "泾川县", 
        "cityCode": "6208", 
        "provinceCode": "62"
    }, 
    {
        "code": "620822", 
        "name": "灵台县", 
        "cityCode": "6208", 
        "provinceCode": "62"
    }, 
    {
        "code": "620823", 
        "name": "崇信县", 
        "cityCode": "6208", 
        "provinceCode": "62"
    }, 
    {
        "code": "620824", 
        "name": "华亭县", 
        "cityCode": "6208", 
        "provinceCode": "62"
    }, 
    {
        "code": "620825", 
        "name": "庄浪县", 
        "cityCode": "6208", 
        "provinceCode": "62"
    }, 
    {
        "code": "620826", 
        "name": "静宁县", 
        "cityCode": "6208", 
        "provinceCode": "62"
    }, 
    {
        "code": "620871", 
        "name": "平凉工业园区", 
        "cityCode": "6208", 
        "provinceCode": "62"
    }, 
    {
        "code": "620902", 
        "name": "肃州区", 
        "cityCode": "6209", 
        "provinceCode": "62"
    }, 
    {
        "code": "620921", 
        "name": "金塔县", 
        "cityCode": "6209", 
        "provinceCode": "62"
    }, 
    {
        "code": "620922", 
        "name": "瓜州县", 
        "cityCode": "6209", 
        "provinceCode": "62"
    }, 
    {
        "code": "620923", 
        "name": "肃北蒙古族自治县", 
        "cityCode": "6209", 
        "provinceCode": "62"
    }, 
    {
        "code": "620924", 
        "name": "阿克塞哈萨克族自治县", 
        "cityCode": "6209", 
        "provinceCode": "62"
    }, 
    {
        "code": "620981", 
        "name": "玉门市", 
        "cityCode": "6209", 
        "provinceCode": "62"
    }, 
    {
        "code": "620982", 
        "name": "敦煌市", 
        "cityCode": "6209", 
        "provinceCode": "62"
    }, 
    {
        "code": "621002", 
        "name": "西峰区", 
        "cityCode": "6210", 
        "provinceCode": "62"
    }, 
    {
        "code": "621021", 
        "name": "庆城县", 
        "cityCode": "6210", 
        "provinceCode": "62"
    }, 
    {
        "code": "621022", 
        "name": "环县", 
        "cityCode": "6210", 
        "provinceCode": "62"
    }, 
    {
        "code": "621023", 
        "name": "华池县", 
        "cityCode": "6210", 
        "provinceCode": "62"
    }, 
    {
        "code": "621024", 
        "name": "合水县", 
        "cityCode": "6210", 
        "provinceCode": "62"
    }, 
    {
        "code": "621025", 
        "name": "正宁县", 
        "cityCode": "6210", 
        "provinceCode": "62"
    }, 
    {
        "code": "621026", 
        "name": "宁县", 
        "cityCode": "6210", 
        "provinceCode": "62"
    }, 
    {
        "code": "621027", 
        "name": "镇原县", 
        "cityCode": "6210", 
        "provinceCode": "62"
    }, 
    {
        "code": "621102", 
        "name": "安定区", 
        "cityCode": "6211", 
        "provinceCode": "62"
    }, 
    {
        "code": "621121", 
        "name": "通渭县", 
        "cityCode": "6211", 
        "provinceCode": "62"
    }, 
    {
        "code": "621122", 
        "name": "陇西县", 
        "cityCode": "6211", 
        "provinceCode": "62"
    }, 
    {
        "code": "621123", 
        "name": "渭源县", 
        "cityCode": "6211", 
        "provinceCode": "62"
    }, 
    {
        "code": "621124", 
        "name": "临洮县", 
        "cityCode": "6211", 
        "provinceCode": "62"
    }, 
    {
        "code": "621125", 
        "name": "漳县", 
        "cityCode": "6211", 
        "provinceCode": "62"
    }, 
    {
        "code": "621126", 
        "name": "岷县", 
        "cityCode": "6211", 
        "provinceCode": "62"
    }, 
    {
        "code": "621202", 
        "name": "武都区", 
        "cityCode": "6212", 
        "provinceCode": "62"
    }, 
    {
        "code": "621221", 
        "name": "成县", 
        "cityCode": "6212", 
        "provinceCode": "62"
    }, 
    {
        "code": "621222", 
        "name": "文县", 
        "cityCode": "6212", 
        "provinceCode": "62"
    }, 
    {
        "code": "621223", 
        "name": "宕昌县", 
        "cityCode": "6212", 
        "provinceCode": "62"
    }, 
    {
        "code": "621224", 
        "name": "康县", 
        "cityCode": "6212", 
        "provinceCode": "62"
    }, 
    {
        "code": "621225", 
        "name": "西和县", 
        "cityCode": "6212", 
        "provinceCode": "62"
    }, 
    {
        "code": "621226", 
        "name": "礼县", 
        "cityCode": "6212", 
        "provinceCode": "62"
    }, 
    {
        "code": "621227", 
        "name": "徽县", 
        "cityCode": "6212", 
        "provinceCode": "62"
    }, 
    {
        "code": "621228", 
        "name": "两当县", 
        "cityCode": "6212", 
        "provinceCode": "62"
    }, 
    {
        "code": "622901", 
        "name": "临夏市", 
        "cityCode": "6229", 
        "provinceCode": "62"
    }, 
    {
        "code": "622921", 
        "name": "临夏县", 
        "cityCode": "6229", 
        "provinceCode": "62"
    }, 
    {
        "code": "622922", 
        "name": "康乐县", 
        "cityCode": "6229", 
        "provinceCode": "62"
    }, 
    {
        "code": "622923", 
        "name": "永靖县", 
        "cityCode": "6229", 
        "provinceCode": "62"
    }, 
    {
        "code": "622924", 
        "name": "广河县", 
        "cityCode": "6229", 
        "provinceCode": "62"
    }, 
    {
        "code": "622925", 
        "name": "和政县", 
        "cityCode": "6229", 
        "provinceCode": "62"
    }, 
    {
        "code": "622926", 
        "name": "东乡族自治县", 
        "cityCode": "6229", 
        "provinceCode": "62"
    }, 
    {
        "code": "622927", 
        "name": "积石山保安族东乡族撒拉族自治县", 
        "cityCode": "6229", 
        "provinceCode": "62"
    }, 
    {
        "code": "623001", 
        "name": "合作市", 
        "cityCode": "6230", 
        "provinceCode": "62"
    }, 
    {
        "code": "623021", 
        "name": "临潭县", 
        "cityCode": "6230", 
        "provinceCode": "62"
    }, 
    {
        "code": "623022", 
        "name": "卓尼县", 
        "cityCode": "6230", 
        "provinceCode": "62"
    }, 
    {
        "code": "623023", 
        "name": "舟曲县", 
        "cityCode": "6230", 
        "provinceCode": "62"
    }, 
    {
        "code": "623024", 
        "name": "迭部县", 
        "cityCode": "6230", 
        "provinceCode": "62"
    }, 
    {
        "code": "623025", 
        "name": "玛曲县", 
        "cityCode": "6230", 
        "provinceCode": "62"
    }, 
    {
        "code": "623026", 
        "name": "碌曲县", 
        "cityCode": "6230", 
        "provinceCode": "62"
    }, 
    {
        "code": "623027", 
        "name": "夏河县", 
        "cityCode": "6230", 
        "provinceCode": "62"
    }, 
    {
        "code": "630102", 
        "name": "城东区", 
        "cityCode": "6301", 
        "provinceCode": "63"
    }, 
    {
        "code": "630103", 
        "name": "城中区", 
        "cityCode": "6301", 
        "provinceCode": "63"
    }, 
    {
        "code": "630104", 
        "name": "城西区", 
        "cityCode": "6301", 
        "provinceCode": "63"
    }, 
    {
        "code": "630105", 
        "name": "城北区", 
        "cityCode": "6301", 
        "provinceCode": "63"
    }, 
    {
        "code": "630121", 
        "name": "大通回族土族自治县", 
        "cityCode": "6301", 
        "provinceCode": "63"
    }, 
    {
        "code": "630122", 
        "name": "湟中县", 
        "cityCode": "6301", 
        "provinceCode": "63"
    }, 
    {
        "code": "630123", 
        "name": "湟源县", 
        "cityCode": "6301", 
        "provinceCode": "63"
    }, 
    {
        "code": "630202", 
        "name": "乐都区", 
        "cityCode": "6302", 
        "provinceCode": "63"
    }, 
    {
        "code": "630203", 
        "name": "平安区", 
        "cityCode": "6302", 
        "provinceCode": "63"
    }, 
    {
        "code": "630222", 
        "name": "民和回族土族自治县", 
        "cityCode": "6302", 
        "provinceCode": "63"
    }, 
    {
        "code": "630223", 
        "name": "互助土族自治县", 
        "cityCode": "6302", 
        "provinceCode": "63"
    }, 
    {
        "code": "630224", 
        "name": "化隆回族自治县", 
        "cityCode": "6302", 
        "provinceCode": "63"
    }, 
    {
        "code": "630225", 
        "name": "循化撒拉族自治县", 
        "cityCode": "6302", 
        "provinceCode": "63"
    }, 
    {
        "code": "632221", 
        "name": "门源回族自治县", 
        "cityCode": "6322", 
        "provinceCode": "63"
    }, 
    {
        "code": "632222", 
        "name": "祁连县", 
        "cityCode": "6322", 
        "provinceCode": "63"
    }, 
    {
        "code": "632223", 
        "name": "海晏县", 
        "cityCode": "6322", 
        "provinceCode": "63"
    }, 
    {
        "code": "632224", 
        "name": "刚察县", 
        "cityCode": "6322", 
        "provinceCode": "63"
    }, 
    {
        "code": "632321", 
        "name": "同仁县", 
        "cityCode": "6323", 
        "provinceCode": "63"
    }, 
    {
        "code": "632322", 
        "name": "尖扎县", 
        "cityCode": "6323", 
        "provinceCode": "63"
    }, 
    {
        "code": "632323", 
        "name": "泽库县", 
        "cityCode": "6323", 
        "provinceCode": "63"
    }, 
    {
        "code": "632324", 
        "name": "河南蒙古族自治县", 
        "cityCode": "6323", 
        "provinceCode": "63"
    }, 
    {
        "code": "632521", 
        "name": "共和县", 
        "cityCode": "6325", 
        "provinceCode": "63"
    }, 
    {
        "code": "632522", 
        "name": "同德县", 
        "cityCode": "6325", 
        "provinceCode": "63"
    }, 
    {
        "code": "632523", 
        "name": "贵德县", 
        "cityCode": "6325", 
        "provinceCode": "63"
    }, 
    {
        "code": "632524", 
        "name": "兴海县", 
        "cityCode": "6325", 
        "provinceCode": "63"
    }, 
    {
        "code": "632525", 
        "name": "贵南县", 
        "cityCode": "6325", 
        "provinceCode": "63"
    }, 
    {
        "code": "632621", 
        "name": "玛沁县", 
        "cityCode": "6326", 
        "provinceCode": "63"
    }, 
    {
        "code": "632622", 
        "name": "班玛县", 
        "cityCode": "6326", 
        "provinceCode": "63"
    }, 
    {
        "code": "632623", 
        "name": "甘德县", 
        "cityCode": "6326", 
        "provinceCode": "63"
    }, 
    {
        "code": "632624", 
        "name": "达日县", 
        "cityCode": "6326", 
        "provinceCode": "63"
    }, 
    {
        "code": "632625", 
        "name": "久治县", 
        "cityCode": "6326", 
        "provinceCode": "63"
    }, 
    {
        "code": "632626", 
        "name": "玛多县", 
        "cityCode": "6326", 
        "provinceCode": "63"
    }, 
    {
        "code": "632701", 
        "name": "玉树市", 
        "cityCode": "6327", 
        "provinceCode": "63"
    }, 
    {
        "code": "632722", 
        "name": "杂多县", 
        "cityCode": "6327", 
        "provinceCode": "63"
    }, 
    {
        "code": "632723", 
        "name": "称多县", 
        "cityCode": "6327", 
        "provinceCode": "63"
    }, 
    {
        "code": "632724", 
        "name": "治多县", 
        "cityCode": "6327", 
        "provinceCode": "63"
    }, 
    {
        "code": "632725", 
        "name": "囊谦县", 
        "cityCode": "6327", 
        "provinceCode": "63"
    }, 
    {
        "code": "632726", 
        "name": "曲麻莱县", 
        "cityCode": "6327", 
        "provinceCode": "63"
    }, 
    {
        "code": "632801", 
        "name": "格尔木市", 
        "cityCode": "6328", 
        "provinceCode": "63"
    }, 
    {
        "code": "632802", 
        "name": "德令哈市", 
        "cityCode": "6328", 
        "provinceCode": "63"
    }, 
    {
        "code": "632821", 
        "name": "乌兰县", 
        "cityCode": "6328", 
        "provinceCode": "63"
    }, 
    {
        "code": "632822", 
        "name": "都兰县", 
        "cityCode": "6328", 
        "provinceCode": "63"
    }, 
    {
        "code": "632823", 
        "name": "天峻县", 
        "cityCode": "6328", 
        "provinceCode": "63"
    }, 
    {
        "code": "632857", 
        "name": "大柴旦行政委员会", 
        "cityCode": "6328", 
        "provinceCode": "63"
    }, 
    {
        "code": "632858", 
        "name": "冷湖行政委员会", 
        "cityCode": "6328", 
        "provinceCode": "63"
    }, 
    {
        "code": "632859", 
        "name": "茫崖行政委员会", 
        "cityCode": "6328", 
        "provinceCode": "63"
    }, 
    {
        "code": "640104", 
        "name": "兴庆区", 
        "cityCode": "6401", 
        "provinceCode": "64"
    }, 
    {
        "code": "640105", 
        "name": "西夏区", 
        "cityCode": "6401", 
        "provinceCode": "64"
    }, 
    {
        "code": "640106", 
        "name": "金凤区", 
        "cityCode": "6401", 
        "provinceCode": "64"
    }, 
    {
        "code": "640121", 
        "name": "永宁县", 
        "cityCode": "6401", 
        "provinceCode": "64"
    }, 
    {
        "code": "640122", 
        "name": "贺兰县", 
        "cityCode": "6401", 
        "provinceCode": "64"
    }, 
    {
        "code": "640181", 
        "name": "灵武市", 
        "cityCode": "6401", 
        "provinceCode": "64"
    }, 
    {
        "code": "640202", 
        "name": "大武口区", 
        "cityCode": "6402", 
        "provinceCode": "64"
    }, 
    {
        "code": "640205", 
        "name": "惠农区", 
        "cityCode": "6402", 
        "provinceCode": "64"
    }, 
    {
        "code": "640221", 
        "name": "平罗县", 
        "cityCode": "6402", 
        "provinceCode": "64"
    }, 
    {
        "code": "640302", 
        "name": "利通区", 
        "cityCode": "6403", 
        "provinceCode": "64"
    }, 
    {
        "code": "640303", 
        "name": "红寺堡区", 
        "cityCode": "6403", 
        "provinceCode": "64"
    }, 
    {
        "code": "640323", 
        "name": "盐池县", 
        "cityCode": "6403", 
        "provinceCode": "64"
    }, 
    {
        "code": "640324", 
        "name": "同心县", 
        "cityCode": "6403", 
        "provinceCode": "64"
    }, 
    {
        "code": "640381", 
        "name": "青铜峡市", 
        "cityCode": "6403", 
        "provinceCode": "64"
    }, 
    {
        "code": "640402", 
        "name": "原州区", 
        "cityCode": "6404", 
        "provinceCode": "64"
    }, 
    {
        "code": "640422", 
        "name": "西吉县", 
        "cityCode": "6404", 
        "provinceCode": "64"
    }, 
    {
        "code": "640423", 
        "name": "隆德县", 
        "cityCode": "6404", 
        "provinceCode": "64"
    }, 
    {
        "code": "640424", 
        "name": "泾源县", 
        "cityCode": "6404", 
        "provinceCode": "64"
    }, 
    {
        "code": "640425", 
        "name": "彭阳县", 
        "cityCode": "6404", 
        "provinceCode": "64"
    }, 
    {
        "code": "640502", 
        "name": "沙坡头区", 
        "cityCode": "6405", 
        "provinceCode": "64"
    }, 
    {
        "code": "640521", 
        "name": "中宁县", 
        "cityCode": "6405", 
        "provinceCode": "64"
    }, 
    {
        "code": "640522", 
        "name": "海原县", 
        "cityCode": "6405", 
        "provinceCode": "64"
    }, 
    {
        "code": "650102", 
        "name": "天山区", 
        "cityCode": "6501", 
        "provinceCode": "65"
    }, 
    {
        "code": "650103", 
        "name": "沙依巴克区", 
        "cityCode": "6501", 
        "provinceCode": "65"
    }, 
    {
        "code": "650104", 
        "name": "新市区", 
        "cityCode": "6501", 
        "provinceCode": "65"
    }, 
    {
        "code": "650105", 
        "name": "水磨沟区", 
        "cityCode": "6501", 
        "provinceCode": "65"
    }, 
    {
        "code": "650106", 
        "name": "头屯河区", 
        "cityCode": "6501", 
        "provinceCode": "65"
    }, 
    {
        "code": "650107", 
        "name": "达坂城区", 
        "cityCode": "6501", 
        "provinceCode": "65"
    }, 
    {
        "code": "650109", 
        "name": "米东区", 
        "cityCode": "6501", 
        "provinceCode": "65"
    }, 
    {
        "code": "650121", 
        "name": "乌鲁木齐县", 
        "cityCode": "6501", 
        "provinceCode": "65"
    }, 
    {
        "code": "650171", 
        "name": "乌鲁木齐经济技术开发区", 
        "cityCode": "6501", 
        "provinceCode": "65"
    }, 
    {
        "code": "650172", 
        "name": "乌鲁木齐高新技术产业开发区", 
        "cityCode": "6501", 
        "provinceCode": "65"
    }, 
    {
        "code": "650202", 
        "name": "独山子区", 
        "cityCode": "6502", 
        "provinceCode": "65"
    }, 
    {
        "code": "650203", 
        "name": "克拉玛依区", 
        "cityCode": "6502", 
        "provinceCode": "65"
    }, 
    {
        "code": "650204", 
        "name": "白碱滩区", 
        "cityCode": "6502", 
        "provinceCode": "65"
    }, 
    {
        "code": "650205", 
        "name": "乌尔禾区", 
        "cityCode": "6502", 
        "provinceCode": "65"
    }, 
    {
        "code": "650402", 
        "name": "高昌区", 
        "cityCode": "6504", 
        "provinceCode": "65"
    }, 
    {
        "code": "650421", 
        "name": "鄯善县", 
        "cityCode": "6504", 
        "provinceCode": "65"
    }, 
    {
        "code": "650422", 
        "name": "托克逊县", 
        "cityCode": "6504", 
        "provinceCode": "65"
    }, 
    {
        "code": "650502", 
        "name": "伊州区", 
        "cityCode": "6505", 
        "provinceCode": "65"
    }, 
    {
        "code": "650521", 
        "name": "巴里坤哈萨克自治县", 
        "cityCode": "6505", 
        "provinceCode": "65"
    }, 
    {
        "code": "650522", 
        "name": "伊吾县", 
        "cityCode": "6505", 
        "provinceCode": "65"
    }, 
    {
        "code": "652301", 
        "name": "昌吉市", 
        "cityCode": "6523", 
        "provinceCode": "65"
    }, 
    {
        "code": "652302", 
        "name": "阜康市", 
        "cityCode": "6523", 
        "provinceCode": "65"
    }, 
    {
        "code": "652323", 
        "name": "呼图壁县", 
        "cityCode": "6523", 
        "provinceCode": "65"
    }, 
    {
        "code": "652324", 
        "name": "玛纳斯县", 
        "cityCode": "6523", 
        "provinceCode": "65"
    }, 
    {
        "code": "652325", 
        "name": "奇台县", 
        "cityCode": "6523", 
        "provinceCode": "65"
    }, 
    {
        "code": "652327", 
        "name": "吉木萨尔县", 
        "cityCode": "6523", 
        "provinceCode": "65"
    }, 
    {
        "code": "652328", 
        "name": "木垒哈萨克自治县", 
        "cityCode": "6523", 
        "provinceCode": "65"
    }, 
    {
        "code": "652701", 
        "name": "博乐市", 
        "cityCode": "6527", 
        "provinceCode": "65"
    }, 
    {
        "code": "652702", 
        "name": "阿拉山口市", 
        "cityCode": "6527", 
        "provinceCode": "65"
    }, 
    {
        "code": "652722", 
        "name": "精河县", 
        "cityCode": "6527", 
        "provinceCode": "65"
    }, 
    {
        "code": "652723", 
        "name": "温泉县", 
        "cityCode": "6527", 
        "provinceCode": "65"
    }, 
    {
        "code": "652801", 
        "name": "库尔勒市", 
        "cityCode": "6528", 
        "provinceCode": "65"
    }, 
    {
        "code": "652822", 
        "name": "轮台县", 
        "cityCode": "6528", 
        "provinceCode": "65"
    }, 
    {
        "code": "652823", 
        "name": "尉犁县", 
        "cityCode": "6528", 
        "provinceCode": "65"
    }, 
    {
        "code": "652824", 
        "name": "若羌县", 
        "cityCode": "6528", 
        "provinceCode": "65"
    }, 
    {
        "code": "652825", 
        "name": "且末县", 
        "cityCode": "6528", 
        "provinceCode": "65"
    }, 
    {
        "code": "652826", 
        "name": "焉耆回族自治县", 
        "cityCode": "6528", 
        "provinceCode": "65"
    }, 
    {
        "code": "652827", 
        "name": "和静县", 
        "cityCode": "6528", 
        "provinceCode": "65"
    }, 
    {
        "code": "652828", 
        "name": "和硕县", 
        "cityCode": "6528", 
        "provinceCode": "65"
    }, 
    {
        "code": "652829", 
        "name": "博湖县", 
        "cityCode": "6528", 
        "provinceCode": "65"
    }, 
    {
        "code": "652871", 
        "name": "库尔勒经济技术开发区", 
        "cityCode": "6528", 
        "provinceCode": "65"
    }, 
    {
        "code": "652901", 
        "name": "阿克苏市", 
        "cityCode": "6529", 
        "provinceCode": "65"
    }, 
    {
        "code": "652922", 
        "name": "温宿县", 
        "cityCode": "6529", 
        "provinceCode": "65"
    }, 
    {
        "code": "652923", 
        "name": "库车县", 
        "cityCode": "6529", 
        "provinceCode": "65"
    }, 
    {
        "code": "652924", 
        "name": "沙雅县", 
        "cityCode": "6529", 
        "provinceCode": "65"
    }, 
    {
        "code": "652925", 
        "name": "新和县", 
        "cityCode": "6529", 
        "provinceCode": "65"
    }, 
    {
        "code": "652926", 
        "name": "拜城县", 
        "cityCode": "6529", 
        "provinceCode": "65"
    }, 
    {
        "code": "652927", 
        "name": "乌什县", 
        "cityCode": "6529", 
        "provinceCode": "65"
    }, 
    {
        "code": "652928", 
        "name": "阿瓦提县", 
        "cityCode": "6529", 
        "provinceCode": "65"
    }, 
    {
        "code": "652929", 
        "name": "柯坪县", 
        "cityCode": "6529", 
        "provinceCode": "65"
    }, 
    {
        "code": "653001", 
        "name": "阿图什市", 
        "cityCode": "6530", 
        "provinceCode": "65"
    }, 
    {
        "code": "653022", 
        "name": "阿克陶县", 
        "cityCode": "6530", 
        "provinceCode": "65"
    }, 
    {
        "code": "653023", 
        "name": "阿合奇县", 
        "cityCode": "6530", 
        "provinceCode": "65"
    }, 
    {
        "code": "653024", 
        "name": "乌恰县", 
        "cityCode": "6530", 
        "provinceCode": "65"
    }, 
    {
        "code": "653101", 
        "name": "喀什市", 
        "cityCode": "6531", 
        "provinceCode": "65"
    }, 
    {
        "code": "653121", 
        "name": "疏附县", 
        "cityCode": "6531", 
        "provinceCode": "65"
    }, 
    {
        "code": "653122", 
        "name": "疏勒县", 
        "cityCode": "6531", 
        "provinceCode": "65"
    }, 
    {
        "code": "653123", 
        "name": "英吉沙县", 
        "cityCode": "6531", 
        "provinceCode": "65"
    }, 
    {
        "code": "653124", 
        "name": "泽普县", 
        "cityCode": "6531", 
        "provinceCode": "65"
    }, 
    {
        "code": "653125", 
        "name": "莎车县", 
        "cityCode": "6531", 
        "provinceCode": "65"
    }, 
    {
        "code": "653126", 
        "name": "叶城县", 
        "cityCode": "6531", 
        "provinceCode": "65"
    }, 
    {
        "code": "653127", 
        "name": "麦盖提县", 
        "cityCode": "6531", 
        "provinceCode": "65"
    }, 
    {
        "code": "653128", 
        "name": "岳普湖县", 
        "cityCode": "6531", 
        "provinceCode": "65"
    }, 
    {
        "code": "653129", 
        "name": "伽师县", 
        "cityCode": "6531", 
        "provinceCode": "65"
    }, 
    {
        "code": "653130", 
        "name": "巴楚县", 
        "cityCode": "6531", 
        "provinceCode": "65"
    }, 
    {
        "code": "653131", 
        "name": "塔什库尔干塔吉克自治县", 
        "cityCode": "6531", 
        "provinceCode": "65"
    }, 
    {
        "code": "653201", 
        "name": "和田市", 
        "cityCode": "6532", 
        "provinceCode": "65"
    }, 
    {
        "code": "653221", 
        "name": "和田县", 
        "cityCode": "6532", 
        "provinceCode": "65"
    }, 
    {
        "code": "653222", 
        "name": "墨玉县", 
        "cityCode": "6532", 
        "provinceCode": "65"
    }, 
    {
        "code": "653223", 
        "name": "皮山县", 
        "cityCode": "6532", 
        "provinceCode": "65"
    }, 
    {
        "code": "653224", 
        "name": "洛浦县", 
        "cityCode": "6532", 
        "provinceCode": "65"
    }, 
    {
        "code": "653225", 
        "name": "策勒县", 
        "cityCode": "6532", 
        "provinceCode": "65"
    }, 
    {
        "code": "653226", 
        "name": "于田县", 
        "cityCode": "6532", 
        "provinceCode": "65"
    }, 
    {
        "code": "653227", 
        "name": "民丰县", 
        "cityCode": "6532", 
        "provinceCode": "65"
    }, 
    {
        "code": "654002", 
        "name": "伊宁市", 
        "cityCode": "6540", 
        "provinceCode": "65"
    }, 
    {
        "code": "654003", 
        "name": "奎屯市", 
        "cityCode": "6540", 
        "provinceCode": "65"
    }, 
    {
        "code": "654004", 
        "name": "霍尔果斯市", 
        "cityCode": "6540", 
        "provinceCode": "65"
    }, 
    {
        "code": "654021", 
        "name": "伊宁县", 
        "cityCode": "6540", 
        "provinceCode": "65"
    }, 
    {
        "code": "654022", 
        "name": "察布查尔锡伯自治县", 
        "cityCode": "6540", 
        "provinceCode": "65"
    }, 
    {
        "code": "654023", 
        "name": "霍城县", 
        "cityCode": "6540", 
        "provinceCode": "65"
    }, 
    {
        "code": "654024", 
        "name": "巩留县", 
        "cityCode": "6540", 
        "provinceCode": "65"
    }, 
    {
        "code": "654025", 
        "name": "新源县", 
        "cityCode": "6540", 
        "provinceCode": "65"
    }, 
    {
        "code": "654026", 
        "name": "昭苏县", 
        "cityCode": "6540", 
        "provinceCode": "65"
    }, 
    {
        "code": "654027", 
        "name": "特克斯县", 
        "cityCode": "6540", 
        "provinceCode": "65"
    }, 
    {
        "code": "654028", 
        "name": "尼勒克县", 
        "cityCode": "6540", 
        "provinceCode": "65"
    }, 
    {
        "code": "654201", 
        "name": "塔城市", 
        "cityCode": "6542", 
        "provinceCode": "65"
    }, 
    {
        "code": "654202", 
        "name": "乌苏市", 
        "cityCode": "6542", 
        "provinceCode": "65"
    }, 
    {
        "code": "654221", 
        "name": "额敏县", 
        "cityCode": "6542", 
        "provinceCode": "65"
    }, 
    {
        "code": "654223", 
        "name": "沙湾县", 
        "cityCode": "6542", 
        "provinceCode": "65"
    }, 
    {
        "code": "654224", 
        "name": "托里县", 
        "cityCode": "6542", 
        "provinceCode": "65"
    }, 
    {
        "code": "654225", 
        "name": "裕民县", 
        "cityCode": "6542", 
        "provinceCode": "65"
    }, 
    {
        "code": "654226", 
        "name": "和布克赛尔蒙古自治县", 
        "cityCode": "6542", 
        "provinceCode": "65"
    }, 
    {
        "code": "654301", 
        "name": "阿勒泰市", 
        "cityCode": "6543", 
        "provinceCode": "65"
    }, 
    {
        "code": "654321", 
        "name": "布尔津县", 
        "cityCode": "6543", 
        "provinceCode": "65"
    }, 
    {
        "code": "654322", 
        "name": "富蕴县", 
        "cityCode": "6543", 
        "provinceCode": "65"
    }, 
    {
        "code": "654323", 
        "name": "福海县", 
        "cityCode": "6543", 
        "provinceCode": "65"
    }, 
    {
        "code": "654324", 
        "name": "哈巴河县", 
        "cityCode": "6543", 
        "provinceCode": "65"
    }, 
    {
        "code": "654325", 
        "name": "青河县", 
        "cityCode": "6543", 
        "provinceCode": "65"
    }, 
    {
        "code": "654326", 
        "name": "吉木乃县", 
        "cityCode": "6543", 
        "provinceCode": "65"
    }, 
    {
        "code": "659001", 
        "name": "石河子市", 
        "cityCode": "6590", 
        "provinceCode": "65"
    }, 
    {
        "code": "659002", 
        "name": "阿拉尔市", 
        "cityCode": "6590", 
        "provinceCode": "65"
    }, 
    {
        "code": "659003", 
        "name": "图木舒克市", 
        "cityCode": "6590", 
        "provinceCode": "65"
    }, 
    {
        "code": "659004", 
        "name": "五家渠市", 
        "cityCode": "6590", 
        "provinceCode": "65"
    }, 
    {
        "code": "659006", 
        "name": "铁门关市", 
        "cityCode": "6590", 
        "provinceCode": "65"
    }
]
export default  areas;