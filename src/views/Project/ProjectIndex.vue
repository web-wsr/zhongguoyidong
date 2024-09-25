<script setup>
import { ref,computed } from 'vue';
import { useRouter } from 'vue-router';
import HeaderLayout from '@/components/Layout/HeaderLayout.vue';
import projectsData from '@/datas/projects'

const route = useRouter()
const projects = ref(projectsData)

const totalPeriod = computed(() => {
  return projects.value.reduce((acc, cur) => acc + cur.period, 0);
});
const totalExpert = computed(() => {
  return projects.value.reduce((acc, cur) => acc + cur.expert_number, 0);
});

const projectsColumns =[
{
        title: "项目id",
        dataIndex: "id",
        width: "8%",
    },
    {
        title: "项目名称",
        dataIndex: "name",
        width: "20%",
    },
    {
        title: "参与人数",
        dataIndex: "expert_number",
        width: "8%",
    },
    {
        title: "启动时间",
        dataIndex: "begin_date",
        width: "8%",
    },
    {
        title: "项目状态",
        dataIndex: "status_desc",
        width: "8%",
    },
    {
        title: "行业",
        dataIndex: "industry",
        width: "8%",
    },
    {
        title: "产品领域",
        dataIndex: "domain",
        width: "8%",
    },
    {
        title: "周期/时长",
        dataIndex: "period",
        width: "8%",
    },
    {
        title: '操作',
        dataIndex:'opeate',
        slots: { customRender: 'operation' }, // 指定使用名为 "operation" 的插槽
        width: "5%",
    },
]

// 当前页数
const currentPage = ref(1);
// 每页显示的数据数量
const itemsPerPage = ref(10);
// 总数据条数
const totalItems = projects.value.length;
// 计算当前页的数据
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
   return projects.value.slice(start, end);
});
// 分页改变事件处理
const handlePageChange = (page) => {
  currentPage.value = page;
};
// 每页显示数量改变事件处理
const handlePageSizeChange = (current, size) => {
  itemsPerPage.value = size;
  currentPage.value = 1; // 重置当前页为第一页
};

// 详情
const handleDetail = (record) => {
  console.log(record);
  route.push({name:'ProjectDetail',params:{id:record.id}}) //传递项目ID作为查询参数
}

</script>

<template>
    <a-layout style="height: 100vh; width: 100vw;">
      <!-- 顶部 -->
     <HeaderLayout />
      <a-layout style="height: 100%;">
          <a-layout-content
            :style="{ padding: '24px', margin: 0, minHeight: '280px',overflowY: 'auto' }"
          >
            <div class="project-content">
              <h1 class="project-title">项目统计</h1>
              <a-flex wrap="wrap" style="gap:16px; padding-top:14px" >
                <div class='project-box'>
                    <div class='project-box-title'>累计项目</div>
                    <div class="project-box-num">
                      {{projects.length}}
                      <span style="font-size: 14px;">个</span>
                    </div>
                </div>
                <div class='project-box'>
                  <div class='project-box-title'>累计工时</div>
                    <div class="project-box-num">
                      {{totalPeriod}}
                      <span style="font-size: 14px;">周</span>
                    </div>
                </div>
                <div class='project-box'>
                  <div class='project-box-title'>参与专家</div>
                    <div class="project-box-num">
                      {{ totalExpert }}
                      <span style="font-size: 14px;">人</span>
                    </div> 
                </div>
              </a-flex>
            </div>
            <div class="project-list">
              <div class="list-header">
              <h2 class="list-title">项目列表</h2>
              <a-row>
                <a-button type="primary" style="width: 92px;" @click="route.push({name:'ProjectEnter'})"> + 录入项目 </a-button>
              </a-row>
              </div>
              <div class="list-content">
                <a-table
                  :columns="projectsColumns"
                  :data-source="paginatedData"
                  :pagination="false"
                >
                  <template #operation="{ record }">
                    <a @click="handleDetail(record)">详情</a>
                  </template>
                </a-table>
                <a-pagination
                  v-model:current="currentPage"
                  :total="totalItems"
                  show-size-changer
                  show-quick-jumper
                  @change="handlePageChange"
                  @showSizeChange="handlePageSizeChange"
                  @keyup.enter="handlePageChange(currentPage)"
                  :show-total="total => `共  ${total} 条`"
                  class="pagination"
                  >
                </a-pagination>
              </div>
            </div>
          </a-layout-content>
      </a-layout>
    </a-layout>
</template>

<style lang="less" scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
} 
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
.project-content{
  width: 100%;
  padding: 24px;
  background-color: #fff;
}
.project-title{
  font-size: 14px;
  line-height: 25px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
}
.project-box{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: calc(33% - 16px);
    /* 每个元素的基础宽度 */
    box-sizing: border-box;
    /* 包含边距和内边距 */
    max-width: calc(35% - 16px);
    /* 最大宽度 */
    flex-grow: 1;
    /* 允许扩展 */
    flex-shrink: 0;
    /* 不允许收缩 */
    height: 180px;
    background: rgba(250, 250, 250, 1);
}
.project-box-title{
  font-size: 14px;
  line-height: 25px;
  color: rgba(0, 0, 0, 0.85);
  font-weight:400;
}
.project-box-num{
  font-size: 33px;
  line-height: 48px;
  font-weight: 700;
}
.project-list{
  width: 100%;
  margin-top:14px;
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
    font-weight: 500;
    line-height: 25px;
    color: rgba(0, 0, 0, 0.85);
}
.list-content{
    display: flex;
    flex-direction: column;
    padding: 0 15px
}
.pagination{
  align-self: flex-end; /* 对齐到右端 */
  margin-top: auto; /* 推到底部 */
  padding: 15px 0; /* 上下 padding 为 10px */
}
</style>