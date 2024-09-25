export default (data) => {
    return {
        title: {
            text: '测评记录'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['测评次数', '测评人数'],
            top: '1%',
            icon: 'circle' // 设置 legend 图标为圆形
        },
        toolbox: {
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: data.map(item => item.created_date),
            axisLabel: {
                interval: 1, // 显示所有标签
                rotate: 45, // 旋转标签以避免重叠
                margin: 10,// 增加标签与轴的距离
                textStyle: {
                    fontSize: 9 // 设置
                }
            }
        },
        yAxis: {
            type: 'value',
            name: 'Count',
            min: 0,
            max: 60,
            interval: 10,
            axisLabel: {
                formatter: '{value}'
            }
        },
        series: [
            {
                name: '测评次数',
                type: 'line',
                data: data.map(item => item.eva_count),
                smooth: true,
                lineStyle: {
                    width: 2
                },
                itemStyle: {
                    color: '#7E94D4'
                }
            },
            {
                name: '测评人数',
                type: 'line',
                data: data.map(item => item.user_count),
                smooth: true,
                lineStyle: {
                    width: 2
                },
                itemStyle: {
                    color: '#A6D68F'
                }
            }
        ]
    };
};