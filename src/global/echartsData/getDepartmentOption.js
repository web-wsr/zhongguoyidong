export default (data) => {
    const levels = ['level_1', 'level_2', 'level_3', 'level_4', 'level_5'];
    return {
        title: {
            text: '各部门等级分布'
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
        xAxis: {
            type: 'category',
            data: data.map(item => item.departments_name),
            name: '部门',
            nameTextStyle: {
                align: 'middle',
                verticalAlign: 'middle',
                padding: [0, 0, 0, 5]
            },
        },
        yAxis: {
            type: 'value',
            name: '测评次数',
            nameTextStyle: {
                align: 'middle',
                verticalAlign: 'middle',
                padding: [0, 0, 0, 5]
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#D3D3D3' // 轴线颜色
                }
            }
        },
        series: levels.map((level) => ({
            name: level.replace('_', ' ').replace('level', 'Level'),
            type: 'bar',
            stack: '总量',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: data.map(item => item[level])
        }))
    }
}