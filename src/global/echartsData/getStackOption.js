export default (data) => {
    const levels = ['level_1', 'level_2', 'level_3', 'level_4', 'level_5'];
    const sortedData = data.sort((a, b) => a.total - b.total); // 从小到大排序
    const names = sortedData.map(item => item.name);
    return {
        title: {
            text: '级别分布概览'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: levels.map(level => level.replace('_', ' ').replace('level', 'Level')),
            top: '1%',
            icon: 'circle'
        },
        grid: {
            left: '3%',
            right: '3%',
            bottom: '3%',
            top: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            nameLocation: 'middle',
            nameGap: 30,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#D3D3D3' // 轴线颜色
                }
            }
        },
        yAxis: {
            type: 'category',
            data: names,
            nameLocation: 'middle',
            nameGap: 30,
            axisLabel: {
                interval: 2, // 显示所有标签
                // rotate: 45, // 旋转标签以避免重叠
                // margin: 10,// 增加标签与轴的距离
            }
        },
        series: levels.map(level => ({
            name: level.replace('_', ' ').replace('level', 'Level'),
            type: 'bar',
            stack: 'total',
            label: {
                show: false,
                position: 'insideRight'
            },
            emphasis: {
                focus: 'series'
            },
            data: names.map(name => {
                const value = sortedData.find(item => item.name === name)[level];
                return value > 0 ? value : null; // 数值为 0 时不显示
            })
        }))

    }
};
// import { init } from 'echarts';
// export default (data) => {

//     // 提取数据
//     const levels = ['level_1', 'level_2', 'level_3', 'level_4', 'level_5'];
//     const sortedData = data.sort((a, b) => a.total - b.total); // 从小到大排序
//     const names = sortedData.map(item => item.name);
//     const totals = sortedData.map(item => item.total);
//     return {
//         tooltip: {
//             trigger: 'axis',
//             axisPointer: {
//                 type: 'shadow'
//             }
//         },
//         legend: {
//             top: 'top',
//             data: levels.map(level => level.replace('_', ' ').replace('level', 'Level')).concat(['Total'])
//         },
//         grid: [
//             {
//                 left: '3%',
//                 right: '3%',
//                 bottom: '3%',
//                 top: '10%',
//                 containLabel: true
//             },
//             {
//                 left: '3%',
//                 right: '3%',
//                 bottom: '3%',
//                 top: '10%',
//                 containLabel: true
//             }
//         ],
//         xAxis: [
//             {
//                 type: 'value',
//                 name: 'Level Value',
//                 nameLocation: 'middle',
//                 nameGap: 30, // 设置 x 轴名称与轴线之间的距离
//                 show: true, // 确保 x 轴显示
//                 axisLine: { // 控制 x 轴线的显示
//                     show: true,
//                     lineStyle: {
//                         color: '#000' // 轴线颜色
//                     }
//                 }
//             },
//             {
//                 type: 'value',
//                 name: 'Total Value',
//                 nameLocation: 'middle',
//                 nameGap: 30, // 设置 x 轴名称与轴线之间的距离
//                 show: true, // 确保 x 轴显示
//                 axisLine: { // 控制 x 轴线的显示
//                     show: true,
//                     lineStyle: {
//                         color: '#000' // 轴线颜色
//                     }
//                 }
//             }
//         ],
//         yAxis: [
//             {
//                 type: 'category',
//                 data: names,
//                 name: 'Name',
//                 nameLocation: 'middle',
//                 nameGap: 30, // 设置 y 轴名称与轴线之间的距离
//                 axisLine: { // 控制 y 轴线的显示
//                     show: true,
//                     lineStyle: {
//                         color: '#000' // 轴线颜色
//                     }
//                 }
//             },
//             {
//                 type: 'category',
//                 data: names,
//                 name: 'Name',
//                 nameLocation: 'middle',
//                 nameGap: 30, // 设置 y 轴名称与轴线之间的距离
//                 axisLine: { // 控制 y 轴线的显示
//                     show: true,
//                     lineStyle: {
//                         color: '#000' // 轴线颜色
//                     }
//                 }
//             }
//         ],
//         series: [
//             ...levels.map(level => ({
//                 name: level.replace('_', ' ').replace('level', 'Level'),
//                 type: 'bar',
//                 stack: 'total',
//                 label: {
//                     show: false // 不显示数值标签
//                 },
//                 emphasis: {
//                     focus: 'series'
//                 },
//                 data: names.map(name => {
//                     const value = sortedData.find(item => item.name === name)[level];
//                     return value > 0 ? value : null; // 数值为 0 时不显示
//                 }),
//                 yAxisIndex: 0,
//                 xAxisIndex: 0
//             })),
//             {
//                 name: 'Total',
//                 type: 'line',
//                 yAxisIndex: 1,
//                 xAxisIndex: 1,
//                 symbol: 'circle',
//                 symbolSize: 8,
//                 smooth: true,
//                 data: totals,
//                 // areaStyle: {
//                 //     color: new init.graphic.LinearGradient(0, 0, 0, 1, [
//                 //         { offset: 0, color: 'rgba(255, 165, 0, 0.3)' },
//                 //         { offset: 1, color: 'rgba(255, 165, 0, 0)' }
//                 //     ])
//                 // }
//             }
//         ]
//     }
// };