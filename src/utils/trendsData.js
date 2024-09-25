// // 数据处理函数
// import dateData from '@/datas/skill_date_count';
// function prepareData(data) {
//     const dates = [];
//     const evaCounts = [];
//     const userCounts = [];

//     data.forEach(item => {
//         dates.push(new Date(item.created_date));
//         evaCounts.push(item.eva_count);
//         userCounts.push(item.user_count);
//     });

//     return {
//         dates,
//         evaCounts,
//         userCounts
//     };
// }

// // 准备参数
// const processedData = prepareData(dateData);
// const params = {
//     x: processedData.dates,
//     y1: processedData.evaCounts,
//     y2: processedData.userCounts
// };

// // 配置项
// const config = {
//     title: 'Evaluations and Users Over Time',
//     xAxisLabel: 'Date',
//     yAxisLabel1: 'Evaluation Count',
//     yAxisLabel2: 'User Count'
// };
// // 导出 params 和 config
// export { params, config };
// 处理数据
import trendsData from '@/datas/skill_date_count';

const processData = (data) => {
    // 构建params
    const params = data.map(item => [
        new Date(item.created_date || new Date()), // 如果created_date不存在，则使用当前日期
        item.eva_count || 0, // 如果eva_count不存在，则使用0
        item.user_count || 0, // 如果user_count不存在，则使用0
        `${item.eva_count || 0} (${item.user_count || 0})` // 如果eva_count或user_count不存在，则使用0
    ]);

    // 构建config
    const config = {
        xAxis: {
            field_name: 0,
            name: '日期'
        },
        yAxis: {
            field_name: 1,
            name: '评估数量'
        },
        symbolSize: {
            zoom: 1,
            field: 2,
            name: '用户数量'
        },
        item_name_field: 3,
        showLabel: true,
        showLegend: true,
        showTooltip: true,
        toolbox: {
            dataZoom: true,
            restore: true,
            dataView: true,
            saveAsImage: true
        },
        series: {} // 添加默认的series对象
    };

    // 添加默认值
    config.xAxis.field_name = config.xAxis.field_name || 0;
    config.yAxis.field_name = config.yAxis.field_name || 1;
    config.symbolSize.field = config.symbolSize.field || 2;
    config.item_name_field = config.item_name_field || 3;

    // 确保series对象中有groupField属性
    config.series.groupField = config.series.groupField || null;

    return { params, config };
};

// 使用示例
const processedData = processData(trendsData);

export default processedData;