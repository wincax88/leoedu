/**
 * Created by michael on 4/26/16.
 */
var dataBJ = [
    [2,50,11,21,0.65,34,9,"基础知识和基本技能"],
    [4,12,7,29,0.33,16,6,"逻辑推理能力"],
    [6,13,58,90,1.77,68,33,"运算能力"],
    [8,10,55,80,1.29,59,29,"空间观念"],
    [10,15,127,216,2.52,61,27,"解决简单问题能力"],
    [12,40,11,40,0.43,21,7,"图形与几何"],
    [14,5,79,120,1.7,75,41,"数与运算"],
    [16,28,6,29,0.34,13,5,"方程与代数"],
    [18,19,142,192,3.88,93,79,"函数与分析"],
    [20,8,8,17,0.48,23,10,"数据整理与概率统计"],
    [22,16,69,114,2.08,73,39,"选择题"],
    [24,32,12,30,0.5,32,16,"填空题"],
    [26,52,117,157,3.05,92,58,"解答题"],
];

var dataGZ = [
    [2,10,62,71,1.195,60,8,"默写"],
    [4,2.7,21,36,0.634,40,9,"诗词理解"],
    [6,14,52,69,1.067,92,16,"文言文阅读"],
    [8,26.7,48,74,1.236,75,26,"现代文阅读"],
    [10,6.7,81,104,1.041,56,40,"综合运用"],
    [12,40,51,101,0.862,58,23,"写作"],
    [22,20,94,140,2.238,68,18,"选择题"],
    [24,10,130,227,3.97,55,15,"填空题"],
    [26,30,108,137,1.481,48,15,"解答题"],
    [28,40,48,68,1.336,37,9,"写作题"],
];

var dataSH = [
    [2,20,27,78,0.86,45,29,"听力"],
    [4,33,81,121,1.28,68,51,"语言知识"],
    [6,47,81,121,1.28,68,51,"读写"],
    [12,20,71,142,1.1,62,42,"能力结构"],
    [14,33,87,131,1.47,84,40,"语言知识"],
    [16,47,83,167,1.16,57,43,"语言能力"],
    [22,53.3,77,119,1.09,73,48,"选择题"],
    [24,34.7,60,172,1.49,97,56,"填空题"],
    [26,8,24,38,0.61,47,17,"问答题"],
    [28,13.33,68,96,1.05,79,29,"作文题"],

];

var dataWL = [
    [2,80,11,21,0.65,34,9,"基础知识与基本技能"],
    [4,20,7,29,0.33,16,6,"综合能力"],
    [12,48,11,40,0.43,21,7,"力学"],
    [14,17,79,120,1.7,75,41,"光学与热学"],
    [16,35,6,29,0.34,13,5,"电磁学"],
    [18,18,142,192,3.88,93,79,"实验"],
    [20,8,8,17,0.48,23,10,"数据整理与概率统计"],
    [22,16.7,69,114,2.08,73,39,"选择题"],
    [24,26.7,12,30,0.5,32,16,"填空题"],
    [26,10,117,157,3.05,92,58,"作图题"],
    [28,26.6,68,96,1.05,79,29,"计算题"],
    [30,20,68,96,1.05,79,29,"实验题"],

];

var dataHX = [
    [2,55,11,21,0.65,34,9,"基础知识"],
    [4,25,7,29,0.33,16,6,"基本技能"],
    [6,20,58,90,1.77,68,33,"综合能力"],
    [8,10,55,80,1.29,59,29,"空间观念"],
    [10,15,127,216,2.52,61,27,"解决简单问题能力"],
    [12,65,11,40,0.43,21,7,"基本概念与基本理论"],
    [14,25,79,120,1.7,75,41,"化学实验"],
    [16,10,6,29,0.34,13,5,"化学计算"],
    [22,33.3,69,114,2.08,73,39,"选择题"],
    [24,33.3,12,30,0.5,32,16,"填空题"],
    [26,33.3,117,157,3.05,92,58,"简答题"],
];
var schema = [
    {name: 'date', index: 0, text: ''},
    {name: 'AQIindex', index: 1, text: '中考分数占比（％）'},
    {name: 'PM25', index: 2, text: 'PM2.5'},
    {name: 'PM10', index: 3, text: 'PM10'},
    {name: 'CO', index: 4, text: '一氧化碳（CO）'},
    {name: 'NO2', index: 5, text: '二氧化氮（NO2）'},
    {name: 'SO2', index: 6, text: '二氧化硫（SO2）'}
];

option = {
    backgroundColor: '#333',
    color: [
        '#dd4444', '#fec42c', '#80F1BE'
    ],

    grid: {
        x: '5%',
        x2: '10%',
        y: '20%',
        y2: '10%'
    },
    tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function (obj) {
            var value = obj.value;
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + obj.seriesName + ' ：'
                + value[7]
                + '</div>'
                + schema[1].text + '：' + value[1] + '<br>'
        }
    },
    xAxis: {
        type: 'value',
        name: '类型',
        nameGap: 16,
        show:false,
        nameTextStyle: {
            color: '#fff',
            fontSize: 14
        },
        max: 30,
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#777'
            }
        },
        axisTick: {
            lineStyle: {
                color: '#777'
            }
        },
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: '#fff'
            }
        }
    },
    yAxis: {
        type: 'value',
        name: '中考分数占比（％）',
        nameLocation: 'end',
        nameGap: 20,
        max:100,
        show:false,
        nameTextStyle: {
            color: '#fff',
            fontSize: 16
        },
        axisLine: {
            lineStyle: {
                color: '#777'
            }
        },
        axisTick: {
            lineStyle: {
                color: '#777'
            }
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#fff'
            }
        }
    },
    visualMap: [
        {
            left: 'right',
            show:false,
            top: '10%',
            dimension: 2,
            min: 0,
            max: 250,
            itemWidth: 30,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['圆形大小：PM2.5'],
            textGap: 30,
            textStyle: {
                color: '#fff'
            },
            inRange: {
                symbolSize: [10, 70]
            },


        },
        {
            left: 'right',
            show:false,
            bottom: '5%',
            dimension: 6,
            min: 0,
            max: 50,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['明暗：二氧化硫'],
            textGap: 30,
            textStyle: {
                color: '#fff'
            },
            inRange: {
                colorLightness: [1, 0.5]
            },

        }
    ],
    series: [
        {
            name: '数学',
            type: 'scatter',
            data: dataBJ,
            itemStyle: {
                normal: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    color: 'rgb(182, 154, 229)'
                }
            }
        },
        {
            name: '语文',
            type: 'scatter',
            data: dataGZ,
            itemStyle: {
                normal: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    color: 'rgb(244, 127, 56)'
                }
            }
        },
        {
            name: '英语',
            type: 'scatter',
            data: dataSH,
            itemStyle: {
                normal: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    color: 'rgb(72, 209, 225)'
                }
            }
        },
        {
            name: '物理',
            type: 'scatter',
            data: dataWL,
            itemStyle: {
                normal: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    color: 'rgb(241, 199, 70)'
                }
            }
        },
        {
            name: '化学',
            type: 'scatter',
            data: dataHX,
            itemStyle: {
                normal: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    color: 'rgb(130, 209, 91)'
                }
            }
        }
    ]
};

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main_map'));
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
