export default (data) => {
    return {
        title: {
            text: '自评测评对比'
        },
        tooltip: {
            trigger: 'axis'
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
        legend: {
            data: ['自评', '测评'],
            top: '1%',
            icon: 'circle'

        },
        xAxis: {
            type: 'category',
            data: data.map(item => item.level)
        },
        yAxis: {
            type: 'value',
            name: '水平值',
            nameTextStyle: {
                align: 'middle',
                verticalAlign: 'middle',
                padding: [0, 0, 0, 5]
            }
        },
        series: [
            {
                name: '自评',
                type: 'bar',
                barGap: '0%',
                data: data.map(item => item.self_count),
                color: '#5470C6'
            },
            {
                name: '测评',
                type: 'bar',
                barGap: '0%',
                data: data.map(item => item.eva_count),
                color: '#91CC75'
            }
        ]
    }
}