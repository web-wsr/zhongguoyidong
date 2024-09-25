// 辅助函数：将数据转换成适合 XLSX 的格式
const transData = (columnsList, experts) => {
    // 获取表头
    const header = columnsList.map(column => column.title);

    // 获取数据行
    const rows = experts.map(expert => {
        return columnsList.map(column => expert[column.dataIndex]);
    });

    // 合并表头和数据行
    return [header, ...rows];
};

export default transData;