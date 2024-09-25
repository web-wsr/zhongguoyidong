export default (data) => {
    const selfData = data.map(item => ({
        level: item.level,
        self_count: item.self_count
    }));
    const legendData = selfData.map(item => item.level);
    return {
        title: {
            text: '自评水平分布'
        },
        legend: {
            data: legendData.value,
            top: '5%',
            icon: 'circle' // 设置 legend 图标为圆形
        },
        tooltip: {
            trigger: 'item'
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        series: [
            {
                name: '自测水平分布',
                type: 'pie',
                radius: ['40%', '70%'],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 8
                },
                data: selfData.map(item => ({
                    name: item.level,
                    value: item.self_count
                }))
            }
        ]
    };
}