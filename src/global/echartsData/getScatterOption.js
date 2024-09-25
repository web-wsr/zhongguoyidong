export default (params, config) => {
  let series = [];
  const typeField = config.series.groupField;
  if (!typeField) {
    series[0] = {
      type: "scatter",
      symbolSize: (item) => (item[2] * config.symbolSize.zoom) / 100,
      itemStyle: {
        shadowBlur: 10,
        shadowColor: "rgba(0, 0, 0, 0.2)",
        shadowOffsetY: 5,
      },
      label: {
        show: config.showLabel,
        position: "top",
        formatter: (item) => item.data[3],
      },
      emphasis: {
        focus: "series",
        label: {
          show: true,
        },
      },
      markLine: {
        lineStyle: {
          color: "#999999",
          type: "dashed",
        },
        data: [
          {
            type: "average",
            name: config.yAxis.name + "平均值",
            label: { formatter: "{b}: {c}" },
          },
          {
            type: "average",
            valueDim: "x",
            name: config.xAxis.name + "平均值",
            label: { formatter: "{b}: {c}" },
          },
        ],
      },
      data: params.map((item) => [
        item[config.xAxis.field_name],
        item[config.yAxis.field_name],
        config.symbolSize.field
          ? item[config.symbolSize.field]
          : 20,
        config.item_name_field
          ? item[config.item_name_field]
          : "",
      ]),
    };
  } else if (typeField) {
    const typeArr = [];
    const dataArr = [];
    params.forEach((val) => {
      const index = typeArr.indexOf(val[typeField]);
      if (index === -1) {
        typeArr.push(val[typeField]);
        dataArr.push({
          type: val[typeField],
          children: [val],
        });
      } else {
        dataArr[index].children.push(val);
      }
    });
    series = dataArr.map((type) => {
      return {
        type: "scatter",
        name: type.type,
        symbolSize: (item) => item[2] * config.symbolSize.zoom,
        itemStyle: {
          shadowBlur: 10,
          shadowColor: "rgba(0, 0, 0, 0.2)",
          shadowOffsetY: 5,
        },
        label: {
          show: config.showLabel,
          position: "top",
          formatter: (item) => item.data[3],
        },
        emphasis: {
          focus: "series",
          label: {
            show: true,
          },
        },
        markLine: {
          show: false,
          lineStyle: {
            color: "#999999",
            type: "dashed",
          },
          // data: [
          //   {
          //     type: "average",
          //     name: "平均",
          //     label: { formatter: "{b}: {c}" },
          //   },
          //   {
          //     type: "average",
          //     valueDim: "x",
          //     name: "平均",
          //     label: { formatter: "{b}: {c}" },
          //   },
          // ],
        },
        data: type.children.map((item) => [
          item[config.xAxis.field_name],
          item[config.yAxis.field_name],
          config.symbolSize.field
            ? item[config.symbolSize.field]
            : 20,
          config.item_name_field
            ? item[config.item_name_field]
            : "",
          item[typeField],
        ]),
      };
    });
  }
  return {
    grid: {
      top: 60,
      bottom: 60,
      left: "10%",
      right: "12%",
      width: "auto",
      height: "auto",
      borderWidth: 1,
      borderColor: "rgba(204, 204, 204, 1)",
      backgroundColor: "rgba(0, 0, 0, 0)",
      containLabel: true,
    },
    legend: {
      show: config.showLegend,
      type: "scroll",
      top: "auto",
      bottom: "auto",
      left: "center",
      right: "auto",
      width: "auto",
      height: "auto",
      orient: "horizontal",
      align: "auto",
      padding: [5, 5, 5, 5],
      itemGap: 25,
      itemWidth: 15,
      itemHeight: 15,
      icon: "circle",
    },
    xAxis: {
      type: "value",
      name: config.xAxis ? config.xAxis.name : "",
      nameLocation: "end",
      nameGap: 15,
      nameRotate: 0,
      inverse: false,
      scale: false,
      axisLabel: {
        rotate: 0,
      },
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      name: config.yAxis ? config.yAxis.name : "",
      nameLocation: "end",
      nameGap: 15,
      nameRotate: 0,
      inverse: false,
      scale: false,
      axisLabel: {
        rotate: 0,
      },
      splitLine: {
        show: false,
      },
    },
    tooltip: {
      show: config.showTooltip ?? true,
      trigger: "item",
      axisPointer: {
        type: "cross",
      },
      triggerOn: "mousemove|click",
      formatter: (item) => {
        if (!item.seriesType) return "";
        if (config.symbolSize.name && config.symbolSize.field) {
          return `<div>
        <div>${item.value[3]}</div>
        <div style="display: flex; justify-content: space-between">
          <div>${item.marker}${config.xAxis.name}</div>
          <div style="margin-left: 40px">${item.value[0]}</div>
        </div>
        <div style="display: flex; justify-content: space-between">
          <div>${item.marker}${config.yAxis.name}</div>
          <div style="margin-left: 40px">${item.value[1]}</div>
        </div>
        <div style="display: flex; justify-content: space-between">
          <div>${item.marker}${config.symbolSize.name}</div>
          <div style="margin-left: 40px">${item.value[2]}</div>
        </div>
      </div>`;
        } else {
          return `<div>
        <div>${item.value[3]}</div>
        <div style="display: flex; justify-content: space-between">
          <div>${item.marker}${config.xAxis.name}</div>
          <div style="margin-left: 40px">${item.value[0]}</div>
        </div>
        <div style="display: flex; justify-content: space-between">
          <div>${item.marker}${config.yAxis.name}</div>
          <div style="margin-left: 40px">${item.value[1]}</div>
        </div>
      </div>`;
        }
      },
      backgroundColor: "rgba(50, 50, 50, 0.7)",
      borderColor: "rgba(51, 51, 51, 1)",
      borderWidth: 0,
      padding: [5, 5, 5, 5],
      textStyle: {
        color: "rgba(255, 255, 255, 1)",
      },
    },
    series,
    toolbox: {
      top: 20,
      right: 10,
      feature: {
        dataZoom: {
          show: config.toolbox.dataZoom,
        },
        restore: {
          show: config.toolbox.restore,
        },
        dataView: { show: config.toolbox.dataView },
        saveAsImage: { show: config.toolbox.saveAsImage },
      },
    },
  };
};