
const express = require('express');//模块访问：缓存

const Router = express.Router();

const {
    formatdata
} = require('../utils/formatdata');

const { mysql: query } = require('../db');//解构并重命名

// let datass = [{
//     'img': './img/New/menu100000001.jpg',
//     'title': '御景花园',
//     'id': '67',
//     'name': "['东北片区', '红星东街']",
//     'tag': "['宜居生态', '邻校房', '公园地产']",
//     'pf': '7600'
// }, {
//     'img': './img/New/menu100000002.jpg',
//     'title': '皇城新区',
//     'id': '76',
//     'name': "['东南片区', '白水东街']",
//     'tag': "['宜居生态', '现房', '公园地产']",
//     'pf': '7600'
// }, {
//     'img': './img/New/menu100000003.png',
//     'title': '德兴御景江山',
//     'id': '577',
//     'name': "['阳城', '']",
//     'tag': "['宜居生态', '水景地产', '公园地产', '邻校房']",
//     'pf': '5300'
// }, {
//     'img': './img/New/menu100000004.jpg',
//     'title': '御景龙湾',
//     'id': '37',
//     'name': "['东南片区', '白水东街']",
//     'tag': "['宜居生态']",
//     'pf': '6600'
// }, {
//     'img': './img/New/menu100000005.jpg',
//     'title': '梧桐苑',
//     'id': '534',
//     'name': "['西南片区', '金鼎路']",
//     'tag': "['宜居生态', '科技住宅', '公园地产']",
//     'pf': '6450'
// }, {
//     'img': './img/New/menu100000006.jpg',
//     'title': '南洋花城',
//     'id': '1',
//     'name': "['东北片区', '太岳街']",
//     'tag': "['宜居生态', '水景地产', '公园地产']",
//     'pf': '7300'
// }, {
//     'img': './img/New/menu100000007.jpg',
//     'title': '德源绿洲',
//     'id': '108',
//     'name': "['西南片区', '泽州南路']",
//     'tag': "['宜居生态', '公园地产']",
//     'pf': '7500'
// }, {
//     'img': './img/New/menu100000008.jpg',
//     'title': '水韵幸福里',
//     'id': '120',
//     'name': "['东北片区', '兰花北路']",
//     'tag': "['宜居生态']",
//     'pf': '7000'
// }, {
//     'img': './img/New/menu100000009.jpg',
//     'title': '瑞基观澜墅',
//     'id': '112',
//     'name': "['西南片区', '金鼎路']",
//     'tag': "['宜居生态', '养老地产', '低密居所']",
//     'pf': '6500'
// }, {
//     'img': './img/New/menu100000010.jpg',
//     'title': '紫东国际',
//     'id': '10',
//     'name': "['西北片区', '泽州北路西']",
//     'tag': "['邻校房', '宜居生态']",
//     'pf': '7500'
// }, {
//     'img': './img/New/menu100000011.png',
//     'title': '锦天玉龙府',
//     'id': '616',
//     'name': "['西南片区', '景西南路']",
//     'tag': "['经济住宅', '宜居生态']",
//     'pf': 0
// }, {
//     'img': './img/New/menu100000012.jpg',
//     'title': '三文阳光城',
//     'id': '611',
//     'name': "['东北片区', '红星东街']",
//     'tag': "['品牌地产', '经济住宅']",
//     'pf': 0
// }, {
//     'img': './img/New/menu100000013.jpg',
//     'title': '和平里',
//     'id': '628',
//     'name': "['东北片区', '新市东街']",
//     'tag': "['经济住宅']",
//     'pf': 0
// }, {
//     'img': './img/New/menu100000014.jpg',
//     'title': '书香门第',
//     'id': '565',
//     'name': "['西北片区', '景西北路']",
//     'tag': "['小户型', '配套商品房', '投资地产']",
//     'pf': 0
// }, {
//     'img': './img/New/menu100000015.jpg',
//     'title': '铭基和谐家园',
//     'id': '403',
//     'name': "['阳城', '']",
//     'tag': "['宜居生态', '低总价', '现房']",
//     'pf': '4847'
// }, {
//     'img': './img/New/menu100000016.jpg',
//     'title': '汇邦现代城',
//     'id': '25',
//     'name': "['西北片区', '红星西街']",
//     'tag': "['宜居生态', '邻校房', '现房', '品牌地产']",
//     'pf': '6800'
// }, {
//     'img': './img/New/menu100000017.jpg',
//     'title': '汇邦逸品文山',
//     'id': '309',
//     'name': "['北石店片', '畅安路']",
//     'tag': "['宜居生态', '低总价', '旅游地产', '经济住宅']",
//     'pf': '3980'
// }, {
//     'img': './img/New/menu100000018.jpg',
//     'title': '聚福花园',
//     'id': '664',
//     'name': "['高平', '']",
//     'tag': [],
//     'pf': 0
// }, {
//     'img': './img/New/menu100000019.png',
//     'title': '丹河蓝湾',
//     'id': '662',
//     'name': "['金村片', '丹川路']",
//     'tag': "['宜居生态', '景观居所', '品牌地产']",
//     'pf': 0
// }, {
//     'img': './img/New/menu100000020.jpg',
//     'title': '文汇佳苑',
//     'id': '661',
//     'name': "['金村片', '学苑街']",
//     'tag': "['宜居生态', '景观居所', '品牌地产']",
//     'pf': 0
// }, {
//     'img': './img/New/menu100000021.png',
//     'title': '正东和谐家园',
//     'id': '656',
//     'name': "['高平', '']",
//     'tag': "['邻校房']",
//     'pf': '6380'
// }, {
//     'img': './img/New/menu100000022.jpg',
//     'title': '康达苑',
//     'id': '654',
//     'name': "['高平', '']",
//     'tag': "['经济住宅']",
//     'pf': 0
// }, {
//     'img': './img/New/menu100000023.jpg',
//     'title': '诚建丹枫苑',
//     'id': '653',
//     'name': "['高平', '']",
//     'tag': "['经济住宅']",
//     'pf': 0
// }, {
//     'img': './img/New/menu100000024.jpg',
//     'title': '浩翔君悦宸',
//     'id': '651',
//     'name': "['高平', '']",
//     'tag': "['宜居生态', '品牌地产']",
//     'pf': 0
// }, {
//     'img': './img/New/menu100000025.jpg',
//     'title': '中原御府',
//     'id': '650',
//     'name': "['南村片', '']",
//     'tag': "['低总价', '经济住宅']",
//     'pf': 0
// }, {
//     'img': './img/New/menu100000026.jpg',
//     'title': '龙泽花城',
//     'id': '648',
//     'name': "['高平', '']",
//     'tag': "['邻校房']",
//     'pf': 0
// }, {
//     'img': './img/New/menu100000027.jpg',
//     'title': '开元四季',
//     'id': '645',
//     'name': "['阳城', '']",
//     'tag': [],
//     'pf': 0
// }, {
//     'img': './img/New/menu100000028.jpg',
//     'title': '铭基天誉公馆',
//     'id': '641',
//     'name': "['北石店片', '畅安路']",
//     'tag': "['科技住宅']",
//     'pf': 0
// }, {
//     'img': './img/New/menu100000029.jpg',
//     'title': '诚建怡景',
//     'id': '639',
//     'name': "['高平', '']",
//     'tag': "['经济住宅']",
//     'pf': 0
// }, {
//     'img': './img/New/menu100000030.jpg',
//     'title': '书院尚品',
//     'id': '635',
//     'name': "['西北片区', '书院街']",
//     'tag': "['品牌地产']",
//     'pf': 0
// }, {
//     'img': './img/New/menu100000031.jpg',
//     'title': '丽枫苑',
//     'id': '634',
//     'name': "['陵川', '']",
//     'tag': "['宜居生态']",
//     'pf': 0
// }, {
//     'img': './img/New/menu100000032.jpg',
//     'title': '金裕苑',
//     'id': '633',
//     'name': "['南村片', '']",
//     'tag': [],
//     'pf': 0
// }, {
//     'img': './img/New/menu100000033.png',
//     'title': '山水文苑',
//     'id': '631',
//     'name': "['沁水', '']",
//     'tag': "['宜居生态', '邻校房']",
//     'pf': 0
// }, {
//     'img': './img/New/menu100000034.jpg',
//     'title': '南书房',
//     'id': '630',
//     'name': "['西南片区', '白水西街']",
//     'tag': "['邻校房']",
//     'pf': 0
// }, {
//     'img': './img/New/menu100000035.png',
//     'title': '华悦郡府',
//     'id': '629',
//     'name': "['西南片区', '文昌西街']",
//     'tag': "['品牌地产', '科技住宅']",
//     'pf': 0
// }, {
//     'img': './img/New/menu100000036.jpg',
//     'title': '锦远学府城',
//     'id': '626',
//     'name': "['高平', '']",
//     'tag': "['宜居生态', '低总价']",
//     'pf': '4100'
// }, {
//     'img': './img/New/menu100000037.png',
//     'title': '兰亭雅院',
//     'id': '617',
//     'name': "['西北片区', '书院街']",
//     'tag': "['南北通透']",
//     'pf': 0
// }, {
//     'img': './img/New/menu100000038.jpg',
//     'title': '金华苑',
//     'id': '615',
//     'name': "['高平', '']",
//     'tag': "['经济住宅']",
//     'pf': 0
// }, {
//     'img': './img/New/menu100000039.jpg',
//     'title': '丹河华府',
//     'id': '602',
//     'name': "['高平', '']",
//     'tag': "['公园地产']",
//     'pf': '6300'
// }, {
//     'img': './img/New/menu100000040.jpg',
//     'title': '岚郡银河',
//     'id': '601',
//     'name': "['北石店片', '畅安路']",
//     'tag': "['经济住宅']",
//     'pf': '5800'
// }, {
//     'img': './img/New/menu100000041.jpg',
//     'title': '紫薇华庭',
//     'id': '598',
//     'name': "['东北片区', '新市东街']",
//     'tag': "['现房', '低密居所']",
//     'pf': '9000'
// }, {
//     'img': './img/New/menu100000042.png',
//     'title': '晋凤壹号',
//     'id': '595',
//     'name': "['金村片', '北环街']",
//     'tag': "['经济住宅']",
//     'pf': '4000'
// }, {
//     'img': './img/New/menu100000043.jpg',
//     'title': '泽州院子',
//     'id': '589',
//     'name': "['金村片', '北环街']",
//     'tag': "['宜居生态', '特色别墅', '低密居所']",
//     'pf': 0
// }, {
//     'img': './img/New/menu100000044.jpg',
//     'title': '凯悦城',
//     'id': '581',
//     'name': "['北石店片', '畅安路']",
//     'tag': [],
//     'pf': 0
// }, {
//     'img': './img/New/menu100000045.jpg',
//     'title': '幸福花园',
//     'id': '578',
//     'name': "['高平', '']",
//     'tag': [],
//     'pf': '6600'
// }, {
//     'img': './img/New/menu100000046.png',
//     'title': '凤冠国际城',
//     'id': '575',
//     'name': "['阳城', '']",
//     'tag': [],
//     'pf': '4500'
// }, {
//     'img': './img/New/menu100000047.png',
//     'title': '国昱玉珑湾',
//     'id': '574',
//     'name': "['阳城', '']",
//     'tag': "['景观居所', '邻校房']",
//     'pf': '4815'
// }, {
//     'img': './img/New/menu100000048.jpg',
//     'title': '学府平墅',
//     'id': '561',
//     'name': "['西南片区', '凤城路']",
//     'tag': "['宜居生态', '现房']",
//     'pf': '7150'
// }, {
//     'img': './img/New/menu100000049.jpg',
//     'title': '晋美华府',
//     'id': '556',
//     'name': "['北石店片', '畅安路']",
//     'tag': [],
//     'pf': 0
// }, {
//     'img': './img/New/menu100000050.jpg',
//     'title': '尚东美地',
//     'id': '555',
//     'name': "['高平', '']",
//     'tag': "['宜居生态']",
//     'pf': '6400'
// }, {
//     'img': './img/New/menu100000051.jpg',
//     'title': '华铭阳光府',
//     'id': '554',
//     'name': "['高平', '']",
//     'tag': "['宜居生态', '品牌地产']",
//     'pf': 0
// }, {
//     'img': './img/New/menu100000052.jpg',
//     'title': '金塘中心城',
//     'id': '553',
//     'name': "['北石店片', '畅安路']",
//     'tag': [],
//     'pf': '5100'
// }, {
//     'img': './img/New/menu100000053.jpg',
//     'title': '锦龙名苑',
//     'id': '552',
//     'name': "['西南片区', '文昌西街']",
//     'tag': "['邻校房']",
//     'pf': '5600'
// }, {
//     'img': './img/New/menu100000054.jpg',
//     'title': '君悦华府',
//     'id': '551',
//     'name': "['西北片区', '泽州北路西']",
//     'tag': "['宜居生态', '公园地产']",
//     'pf': '7400'
// }, {
//     'img': './img/New/menu100000055.jpg',
//     'title': '华府阳光城',
//     'id': '538',
//     'name': "['高平', '']",
//     'tag': "['宜居生态', '经济住宅']",
//     'pf': '5800'
// }, {
//     'img': './img/New/menu100000056.jpg',
//     'title': '星湖世家',
//     'id': '535',
//     'name': "['西北片区', '书院街']",
//     'tag': [],
//     'pf': '7500'
// }, {
//     'img': './img/New/menu100000057.jpg',
//     'title': '金太祥旺居',
//     'id': '533',
//     'name': "['东南片区', '中原东街']",
//     'tag': [],
//     'pf': 0
// }, {
//     'img': './img/New/menu100000058.jpg',
//     'title': '兰泽花园',
//     'id': '532',
//     'name': "['西北片区', '前进路']",
//     'tag': "['邻校房']",
//     'pf': 0
// }, {
//     'img': './img/New/menu100000059.jpg',
//     'title': '兰馨家园',
//     'id': '531',
//     'name': "['西北片区', '书院街']",
//     'tag': [],
//     'pf': 0
// }, {
//     'img': './img/New/menu100000060.jpg',
//     'title': '君悦新城',
//     'id': '510',
//     'name': "['西南片区', '白水西街']",
//     'tag': "['现房', '投资地产']",
//     'pf': '6000'
// }, {
//     'img': './img/New/menu100000061.jpg',
//     'title': '东山郡',
//     'id': '476',
//     'name': "['北石店片', '畅安路']",
//     'tag': "['宜居生态', '水景地产']",
//     'pf': '5600'
// }, {
//     'img': './img/New/menu100000062.jpg',
//     'title': '印象怡园',
//     'id': '462',
//     'name': "['南村片', '']",
//     'tag': "['邻校房', '低总价']",
//     'pf': '4480'
// }, {
//     'img': './img/New/menu100000063.jpg',
//     'title': '白水印象',
//     'id': '441',
//     'name': "['西南片区', '文昌西街']",
//     'tag': "['宜居生态', '邻校房']",
//     'pf': '6200'
// }, {
//     'img': './img/New/menu100000064.jpg',
//     'title': '丹溪华庭',
//     'id': '405',
//     'name': "['东北片区', '太岳街']",
//     'tag': "['宜居生态', '科技住宅', '低密居所']",
//     'pf': '8800'
// }, {
//     'img': './img/New/menu100000065.jpg',
//     'title': '华悦湾',
//     'id': '404',
//     'name': "['东北片区', '开发区']",
//     'tag': "['宜居生态', '现房']",
//     'pf': '6050'
// }, {
//     'img': './img/New/menu100000066.jpg',
//     'title': '沁馨苑',
//     'id': '388',
//     'name': "['东南片区', '白水东街']",
//     'tag': "['宜居生态', '低总价']",
//     'pf': '5180'
// }, {
//     'img': './img/New/menu100000067.jpg',
//     'title': '中国青年城',
//     'id': '257',
//     'name': "['金村片', '龙化路']",
//     'tag': "['低总价', '创意地产', '投资地产']",
//     'pf': '6500'
// }, {
//     'img': './img/New/menu100000068.jpg',
//     'title': '金城和园',
//     'id': '234',
//     'name': "['东北片区', '凤台东街']",
//     'tag': "['宜居生态', '邻校房']",
//     'pf': '6880'
// }, {
//     'img': './img/New/menu100000069.jpg',
//     'title': '南域熙苑',
//     'id': '208',
//     'name': "['南村片', '']",
//     'tag': "['低总价', '经济住宅']",
//     'pf': '4300'
// }, {
//     'img': './img/New/menu100000070.jpg',
//     'title': '君悦天地',
//     'id': '146',
//     'name': "['东北片区', '泽洲北路']",
//     'tag': [],
//     'pf': '5950'
// }, {
//     'img': './img/New/menu100000071.jpg',
//     'title': '君逸花园',
//     'id': '142',
//     'name': "['东北片区', '泽洲北路']",
//     'tag': "['邻校房']",
//     'pf': '6200'
// }, {
//     'img': './img/New/menu100000072.jpg',
//     'title': '福泽小区',
//     'id': '139',
//     'name': "['西南片区', '黄华街南段']",
//     'tag': [],
//     'pf': '5800'
// }, {
//     'img': './img/New/menu100000073.jpg',
//     'title': '铭基凤凰城',
//     'id': '127',
//     'name': "['西南片区', '泽州南路']",
//     'tag': "['宜居生态', '科技住宅', '品牌地产', '公园地产']",
//     'pf': '6300'
// }, {
//     'img': './img/New/menu100000074.jpg',
//     'title': '锦天玉龙台',
//     'id': '122',
//     'name': "['东南片区', '文昌东街']",
//     'tag': "['现房']",
//     'pf': '5800'
// }, {
//     'img': './img/New/menu100000075.jpg',
//     'title': '星河湾9号',
//     'id': '121',
//     'name': "['东南片区', '白水东街']",
//     'tag': "['现房', '宜居生态']",
//     'pf': '6500'
// }, {
//     'img': './img/New/menu100000076.jpg',
//     'title': '星湖书院',
//     'id': '119',
//     'name': "['西北片区', '北环街']",
//     'tag': "['经济住宅']",
//     'pf': '5500'
// }, {
//     'img': './img/New/menu100000077.jpg',
//     'title': '星湖湾',
//     'id': '116',
//     'name': "['西北片区', '北环街']",
//     'tag': [],
//     'pf': '6400'
// }, {
//     'img': './img/New/menu100000078.jpg',
//     'title': '方程华街左岸',
//     'id': '115',
//     'name': "['西南片区', '黄华街南段']",
//     'tag': "['宜居生态', '邻校房']",
//     'pf': '7500'
// }, {
//     'img': './img/New/menu100000079.jpg',
//     'title': '澜凤华府',
//     'id': '114',
//     'name': "['西南片区', '金鼎路']",
//     'tag': "['宜居生态', '现房', '经济住宅']",
//     'pf': '5580'
// }, {
//     'img': './img/New/menu100000080.jpg',
//     'title': '星河湾8号',
//     'id': '110',
//     'name': "['东南片区', '白水东街']",
//     'tag': "['宜居生态', '特色别墅', '景观居所', '水景地产', '现房']",
//     'pf': '6420'
// }, {
//     'img': './img/New/menu100000081.jpg',
//     'title': '景福苑',
//     'id': '86',
//     'name': "['东南片区', '太行南路']",
//     'tag': [],
//     'pf': '5000'
// }, {
//     'img': './img/New/menu100000082.jpg',
//     'title': '世纪佳苑',
//     'id': '85',
//     'name': "['东南片区', '白水东街']",
//     'tag': "['低总价']",
//     'pf': '5100'
// }, {
//     'img': './img/New/menu100000083.jpg',
//     'title': '阳光地带',
//     'id': '84',
//     'name': "['北石店片', '畅安路']",
//     'tag': "['低总价', '经济住宅']",
//     'pf': '5080'
// }, {
//     'img': './img/New/menu100000084.jpg',
//     'title': '丰欣湾',
//     'id': '79',
//     'name': "['金村片', '西南属']",
//     'tag': "['宜居生态', '低总价', '经济住宅', '养老地产']",
//     'pf': '4500'
// }, {
//     'img': './img/New/menu100000085.jpg',
//     'title': '德源新城',
//     'id': '68',
//     'name': "['西北片区', '泽州北路西']",
//     'tag': "['现房']",
//     'pf': '6500'
// }, {
//     'img': './img/New/menu100000086.jpg',
//     'title': '峰景香滨城',
//     'id': '64',
//     'name': "['西北片区', '晋春街']",
//     'tag': "['宜居生态', '小户型']",
//     'pf': '6800'
// }, {
//     'img': './img/New/menu100000087.jpg',
//     'title': '金丽嘉苑',
//     'id': '60',
//     'name': "['西南片区', '文昌西街']",
//     'tag': "['水景地产']",
//     'pf': '8100'
// }, {
//     'img': './img/New/menu100000088.jpg',
//     'title': '祥瑞新城',
//     'id': '45',
//     'name': "['东北片区', '红星东街']",
//     'tag': [],
//     'pf': '6200'
// }, {
//     'img': './img/New/menu100000089.jpg',
//     'title': '颉冠颐博园',
//     'id': '43',
//     'name': "['东北片区', '太岳街']",
//     'tag': "['宜居生态', '景观居所']",
//     'pf': '7600'
// }, {
//     'img': './img/New/menu100000090.jpg',
//     'title': '宏厦泽苑',
//     'id': '38',
//     'name': "['西南片区', '文昌西街']",
//     'tag': "['低总价']",
//     'pf': '5680'
// }, {
//     'img': './img/New/menu100000091.jpg',
//     'title': '金辇龙亭',
//     'id': '30',
//     'name': "['东北片区', '凤台东街']",
//     'tag': "['水景地产', '现房']",
//     'pf': '7300'
// }, {
//     'img': './img/New/menu100000092.jpg',
//     'title': '文景苑',
//     'id': '18',
//     'name': "['西南片区', '文昌西街']",
//     'tag': [],
//     'pf': '5700'
// }, {
//     'img': './img/New/menu100000093.jpg',
//     'title': '公园里',
//     'id': '17',
//     'name': "['东南片区', '白水东街']",
//     'tag': "['宜居生态', '经济住宅']",
//     'pf': '5300'
// }, {
//     'img': './img/New/menu100000094.jpg',
//     'title': '金城山水',
//     'id': '14',
//     'name': "['东北片区', '文博北路']",
//     'tag': "['宜居生态', '景观居所', '邻校房', '水景地产']",
//     'pf': '8880'
// }, {
//     'img': './img/New/menu100000095.jpg',
//     'title': '鼎秀华城',
//     'id': '9',
//     'name': "['东南片区', '白水东街']",
//     'tag': "['宜居生态', '现房']",
//     'pf': '6800'
// }, {
//     'img': './img/New/menu100000096.jpg',
//     'title': '德源书香园',
//     'id': '4',
//     'name': "['西北片区', '书院街']",
//     'tag': "['小户型', '邻校房']",
//     'pf': '8600'
// }]
//仅仅是插入数据！
Router.get('/add', async (req, res) => {
    datass.forEach(async item => {
        let sql2 = `insert into goods(img,title,sid,name,tag,pf) values('${item.img}','${item.title}',${item.id},"${item.name}","${item.tag}",${item.pf})`;
        let data = await query(sql2);
    })
    res.send('dffff');
})
Router.get('/get', async (req, res) => {
    let sql = 'SELECT * from goods';
    let datas = await query(sql);
    res.send(datas);
})
//分页
Router.get("/getList", async (req, res) => {
    var { page, num, sort } = req.query;
    // if(page&&num&&sort)
    var index = (page - 1) * num;
    if (!sort) {
        var sql = `SELECT * FROM goods LIMIT ${index},${num}`;
    } else {
        var sql = `SELECT * FROM goods ORDER BY pf ${sort} LIMIT ${index},${num}`;
    }
    // var sql = `SELECT * FROM goods ORDER BY price ${sort} LIMIT ${index},${num}`;
    //执行语句
    var result = await query(sql);
    // 查询整个表
    var sql2 = `SELECT * FROM goods`;
    var res2 = await query(sql2);
    var totalPage = Math.ceil(res2.length / num);
    //
    var obj = {
        'total': res2.length,
        'list': result,
        'page': page,
        'num': num,
        totalPage
    }
    console.log(page, num, sort);
    res.send(obj);
    // res.send(page);
})
//获取单个商品
Router.get('/single', async (req, res) => {
    let { id } = req.query;
    console.log(id);
    let sql = `SELECT * from goods WHERE sid=${id}`;
    let result = await query(sql);
    console.log(result);
    res.send(result)
})
//购物车的操作！！！！！！！！！！！！！！！！！
//删除商品
Router.get('/del', async (req, res) => {
    let { sid, user } = req.query;
    let sql = `DELETE FROM shop WHERE sid=${sid} AND user=${user}`;
    let data = await query(sql);
    res.send(data);
})
//获取购物车商品
Router.get('/getShop', async (req, res) => {
    let { user } = req.query;
    let sql = `SELECT * from shop WHERE user=${user}`;
    let data = await query(sql);
    console.log(data);
    res.send(data);
})
//添加购物车商品
Router.get('/addShop', async (req, res) => {
    let data = req.query.payload;
    data = JSON.parse(data);
    // 先查询
    let sql = `SELECT * from shop WHERE user=${data.user} AND sid =${data.sid}`;
    let data3 = await query(sql);
    if (data3.length) {
        res.send(formatdata({ code: 0 }));
    } else {
        let sql2 = `insert into shop(img,title,sid,pf,user) values('${data.img}','${data.title}',${data.sid},${data.pf},"${data.user}")`;
        let data2 = await query(sql2);
        res.send(formatdata({ code: 1 }));
    }
    // console.log(data.img,data.title,data.sid,data.pf,data.user);

    // res.send('data');
    // res.send(data3);
})
//清空购物车
Router.get('/clearShop',async (req,res)=>{
    let { user } = req.query;
    let sql = `DELETE FROM shop WHERE user=${user}`;
    let data = await query(sql);
    res.send('删除成功！')
})
module.exports = Router;