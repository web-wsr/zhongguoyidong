export default (data) => {
    const headers = [
        { name: '部门名称', value: 'departments_name' },
        { name: '测评次数', value: 'total' },
        { name: '了解', value: 'level_1' },
        { name: '熟悉', value: 'level_2' },
        { name: '掌握', value: 'level_3' },
        { name: '精通', value: 'level_4' },
        { name: '专家', value: 'level_5' },
        { name: '总能力值', value: 'total_score' }
    ];

    const seriesData = data.map(item => {
        return headers.map(header => item[header.value]);
    });

    return {
        title: {
            text: '部门技能详情',
            left: 'center'
        },
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            top: 50,
            left: 50,
            right: 50,
            bottom: 50,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: headers.map(header => header.name),
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: { interval: 0 }
        },
        yAxis: {
            type: 'value',
            axisLine: { show: false },
            axisTick: { show: false },
            splitLine: { show: false }
        },
        series: [
            {
                type: 'scatter',
                symbolSize: 0,
                data: seriesData,
                label: {
                    show: true,
                    position: 'top',
                    formatter: function (params) {
                        return params.data.join('\n');
                    }
                }
            }
        ]
    };
}