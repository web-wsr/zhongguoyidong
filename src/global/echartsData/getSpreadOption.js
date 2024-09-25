export default (data) => {
    return {
        title: {
            text: '技能分布散点图'
        },
        tooltip: {
            trigger: 'item',
            // formatter: function (params) {
            //     return `${params.name}<br/>评估人数: ${params.value[0]}<br/>评估次数: ${params.value[1]}<br/>评分: ${params.value[2]}`;
            // }
            axisPointer: {
                type: 'cross',
                lineStyle: {
                    color: '#777777',
                    width: 1
                }
            },
            formatter: function (params) {
                return `
                    <div>
                        <span>评估人数: ${params.value[0]}</span><br/>
                        <span>评估次数: ${params.value[1]}</span><br/>
                        <span>评分: ${params.value[2]}</span>
                    </div>
                `;
            }
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
        xAxis: {
            type: 'value',
            name: '评估人数 (eva_people)',
            min: 0
        },
        yAxis: {
            type: 'value',
            name: '评估次数 (eva_count)',
            min: 0
        },
        series: [{
            name: '技能栈',
            type: 'scatter',
            data: data.map(item => ({
                name: item.stack_name,
                value: [item.eva_people, item.eva_count, item.score]
            })),
            label: {
                show: true,
                position: 'top',
                formatter: '{b}'
            },
            symbolSize: function (val) {
                return Math.sqrt(val[2] / Math.PI) * 5;
            },
            itemStyle: {
                color: '#6E85C9'
            }
        }]
    }
}