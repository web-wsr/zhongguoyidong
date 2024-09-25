<script setup>
import * as XLSX from "xlsx"; 
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import expertsList from '@/datas/experts'
import transData  from '@/utils/transData'
const route = useRouter();
const expertsColumns = [
    {
        title: "工号",
        dataIndex: "id",
        width: "5%",
    },
    {
        title: "姓名",
        dataIndex: "name",
        width: "8%",
    },
    {
        title: "公司",
        dataIndex: "company",
        width: "10%",
    },
    {
        title: "行业",
        dataIndex: "industry",
        ellipsis: true,
    },
    {
        title: "岗位",
        dataIndex: "station",
        width: "10%",
    },
    {
        title: "产品领域",
        dataIndex: "major",
        ellipsis: true,
    },
    {
        title: "岗位技能等级",
        dataIndex: "stack_level",
        width: "10%",
    },
    {
        title: "总技能力",
        dataIndex: "stack_value",
        width: "8%",
    },
    {
        title: "测评技能数",
        dataIndex: "stacks_count",
        width: "8%",
    },
    {
        title: '操作',
        dataIndex:'opeate',
        slots: { customRender: 'operation' }, // 指定使用名为 "operation" 的插槽
        width: "5%",
    },
]
// 输入框状态
const searchParams =ref ({
    id : '',
    name : '',
    company : '',
    industry : '',
    station : '',
    major : '',
})
// 当前页数
const currentPage = ref(1);
// 每页显示的数据数量
const itemsPerPage = ref(10);
// 总数据条数
// const totalItems = expertsList.length;
// 筛选后的总数据条数
const filteredTotalItems = computed(() => filteredData.value.length);
// 筛选后的数据
const filteredData = ref(expertsList); // 初始时显示全部数据
const performSearch = () => {
  filteredData.value = expertsList.filter(item => {
    return (
      (!searchParams.value.id || item.id.toString().includes(searchParams.value.id)) &&
      (!searchParams.value.name || item.name.includes(searchParams.value.name)) &&
      (!searchParams.value.company || item.company.includes(searchParams.value.company)) &&
      (!searchParams.value.industry || item.industry.includes(searchParams.value.industry)) &&
      (!searchParams.value.station || item.station.includes(searchParams.value.station)) &&
      (!searchParams.value.major || item.major.includes(searchParams.value.major))
    );
  });
}
// 计算当前页的数据
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  //  return expertsList.slice(start, end);
    return filteredData.value.slice(start, end);
});
// 查询按钮点击事件处理
const handleSearch = () => {
  performSearch()
  currentPage.value = 1;
};
// 重置按钮点击事件处理
const handleReset = () => {
  Object.keys(searchParams.value).forEach(key => {
    searchParams.value[key] = '';
  });
  // 重置为原始数据
  filteredData.value = expertsList;
  currentPage.value = 1;
};
// 分页改变事件处理
const handlePageChange = (page) => {
  currentPage.value = page;
};
// 每页显示数量改变事件处理
const handlePageSizeChange = (current, size) => {
  itemsPerPage.value = size;
  currentPage.value = 1; // 重置当前页为第一页
};

// 导出数据
const handleExport = () => {
  Promise.resolve(filteredData.value).then((res) => {
    const experts = res;
    const columnsList = expertsColumns.filter((data) => data.dataIndex !== "operate" && data.title !== "操作");

    // 辅助函数：将数据转换成适合 XLSX 的格式
    const tableData = transData(columnsList, experts);

    // 将一组 JS 数据数组转换为工作表
    const ws = XLSX.utils.aoa_to_sheet(tableData);

    // 创建 workbook
    const wb = XLSX.utils.book_new();

    // 将工作表添加到 workbook
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // 将 workbook 写入文件
    XLSX.writeFile(wb, "experts.xlsx");
  });
};


</script>

<template>
    <div class="expert-list">
        <div class="list-header">
            <h2 class="list-title">专家人才库</h2>
            <a-row>
                <a-button type="primary" style="width: 92px;" @click="route.push({name:'ExpertEnter'})"> + 录入专家 </a-button>
            </a-row>
        </div>
        <div class="list-content">
            <div class="list-left">
                <a-row type="flex" justify="end" style="gap: 16px;">
                    <a-input v-model:value="searchParams.id" placeholder="工号" style="width: 122px;padding-left: 8px;"></a-input>
                    <a-input v-model:value="searchParams.name" placeholder="姓名" style="width: 122px;padding-left: 8px;"></a-input>
                    <a-input v-model:value="searchParams.company" placeholder="请输入公司" style="width: 160px;padding-left: 8px;"></a-input>
                    <a-input v-model:value="searchParams.industry" placeholder="请输入行业" style="width: 160px;padding-left: 8px;"></a-input>
                    <a-input v-model:value="searchParams.station" placeholder="请输入岗位" style="width: 160px;padding-left: 8px;"></a-input>
                    <a-input v-model:value="searchParams.major" placeholder="请输入产品领域" style="width: 160px;padding-left: 8px;"></a-input>
                    <a-button type="primary" style="width: 46px;" @click="handleSearch">查询</a-button>
                    <a-button style="width: 46px;" @click="handleReset">重置</a-button>
                </a-row>
            </div>
            <div class="list-right">
                <a-button style="width: 46px;" @click="handleExport">导出</a-button>
            </div>  
        </div>
        <div class="experts-list">
            <a-table
            :columns="expertsColumns"
            :data-source="paginatedData"
            :pagination="false"
            >
            <template #operation="{  }">
                <a @click="handleDetails()">详情</a>
            </template>
            </a-table>
            <a-pagination
            v-model:current="currentPage"
            :total="filteredTotalItems"
            show-size-changer
            show-quick-jumper
            @change="handlePageChange"
             @showSizeChange="handlePageSizeChange"
            :show-total="total => `共  ${total} 条`"
            class="pagination"
            >
            <template #quick-jumper>
                <span>跳至第</span>
                <input type="text" v-model="currentPage" style="width: 50px;" @keyup.enter="handlePageChange(currentPage)">
                <span>页</span>
            </template>
            </a-pagination>
        </div>
    </div>
</template>

<style lang="less" scoped>
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
   }
    .expert-list{
        width: 100%;
        background-color: #fff;
    }
    .list-header{
        display: flex;
        justify-content: space-between;
        padding: 15px 24px;
        border-bottom: 1px solid #e8e8e8;
    }
    .list-title{
        font-size: 14px;
        font-weight: 600;
        line-height: 25px;
    }
    .list-content{
        display: flex;
        justify-content: space-between;
        padding: 15px;
    }
    .experts-list{
        display: flex;
        flex-direction: column;
        padding: 0 15px
    }
    .pagination {
        align-self: flex-end; /* 对齐到右端 */
        margin-top: auto; /* 推到底部 */
        padding: 15px 0; /* 上下 padding 为 10px */
    }
</style>