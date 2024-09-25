<script setup>
import { onMounted, onUpdated, ref } from 'vue';
import { InfoOutlined } from '@ant-design/icons-vue';
import { init } from 'echarts';
import previewData from '@/datas/skill_perview_count';
import levelData from '@/datas/skill_level_count';
import evaData from '@/datas/skill_eva_count';
import dateData from '@/datas/skill_date_count';
import stackData from '@/datas/skill_overview';
import departmentData from '@/datas/department_overview';
import departmentListData from '@/datas/department_list';
import levelListData from '@/datas/skill_detail';
import getBarOption from '@/global/echartsData/getBarOption';
import getRoseOption from '@/global/echartsData/getRoseOption';
import getSpreadOption from '@/global/echartsData/getSpreadOption';
import getLineOption from '@/global/echartsData/getLineOption';
import getStackOption from '@/global/echartsData/getStackOption';
import getDepartmentOption from '@/global/echartsData/getDepartmentOption';
// import getScatterOption from '@/global/echartsData/getScatterOption';
// import processedData from '@/utils/trendsData';


const level = ref()
const self = ref()
const spread = ref()
const trends = ref();
const stack = ref();
const department = ref();
const departmentList = ref();
// 分页跳转页码
let levelChart;
let selfChart;
let spreadChart;
let trendsChart;
let stackChart;
let departmentChart;



onUpdated(
    (window.onresize = () => {
        levelChart.resize();
        selfChart.resize();
        spreadChart.resize();
        trendsChart.resize();
        stackChart.resize();
        departmentChart.resize();
    })
);

onMounted(() => {
    levelInit();
    selfInit();
    spreadInit();
    trendsInit();
    stackInit();
    departmentInit();

})


// 自评测评水平柱状图
const levelInit = () => {
    levelChart = init(level.value);
    const option = getBarOption(levelData);
    levelChart.setOption(option);
}
// 自评水平玫瑰图
const selfInit = () => {
    selfChart = init(self.value);
    const option = getRoseOption(levelData);
    selfChart.setOption(option);
}

// 技能分布散点图
const spreadInit = () => {
    spreadChart = init(spread.value);
    const option = getSpreadOption(evaData);
    spreadChart.setOption(option);
}


// 测评动态折线图
const trendsInit = () => {
    trendsChart = init(trends.value);
    const option = getLineOption(dateData);
    trendsChart.setOption(option);
}

const stackInit = () => {
    stackChart = init(stack.value);
    const option = getStackOption(stackData);
    stackChart.setOption(option);
}

const departmentInit = () => {
    departmentChart = init(department.value);
    const option = getDepartmentOption(departmentData);
    departmentChart.setOption(option);
}




const departmentColumns = [
  {
    title: '部门名称',
    dataIndex: 'departments_name',
  },
  {
    title: '测评次数',
    dataIndex: 'total',
    sorter: {
      compare: (a, b) => a.total - b.total,
    },
  },
  {
    title: '了解',
    dataIndex: 'level_1',
  },
  {
    title: '熟悉',
    dataIndex: 'level_2',
  },
  {
    title: '掌握',
    dataIndex: 'level_3',
  },
  {
    title: '精通',
    dataIndex: 'level_4',
  },
  {
    title: '专家',
    dataIndex: 'level_5',
  },
  {
    title: '总能力值',
    dataIndex: 'total_score',
    sorter: {
      compare: (a, b) => a.total_score - b.total_score,
    },
  },
];

const departmentPagination = ref({
  current: 1,
  pageSize: 5, // 默认每页显示条数
});
function onDepartmentChange(paginationParam, filters, sorter, extra) {
  // 更新分页配置
  departmentPagination.value = {
    ...departmentPagination.value,
    ...paginationParam,
  };
  console.log('params', departmentPagination.value, filters, sorter, extra);
}


// 技能分布表格
const levelColumns= [
    {
      title: '技能名称',
      dataIndex: 'name',
      slots: { customRender: 'name' }, // 指定使用名为 "name" 的插槽
    },
    {
    title: '测评人数',
    dataIndex: 'total',
    sorter: {
      compare: (a, b) => a.total - b.total,
    },
  },
  {
    title: '了解',
    dataIndex: 'level_1',
  },
  {
    title: '熟悉',
    dataIndex: 'level_2',
  },
  {
    title: '掌握',
    dataIndex: 'level_3',
  },
  {
    title: '精通',
    dataIndex: 'level_4',
  },
  {
    title: '专家',
    dataIndex: 'level_5',
  },
  {
    title: '总能力值',
    dataIndex: 'total_score',
    sorter: {
      compare: (a, b) => a.total_score - b.total_score,
    },
  },
];

const levelPagination = ref({
  current: 1,
  pageSize: 10, // 默认每页显示条数
});
function onLevelChange(paginationParam, filters, sorter, extra) {
  // 更新分页配置
  levelPagination.value = {
    ...levelPagination.value,
    ...paginationParam,
  };
  console.log('params', levelPagination.value, filters, sorter, extra);
}



















</script>

<template>
    <div class="preview-data">
        <h1 class="data-title">数据预览</h1>
        <a-flex wrap="wrap" style="gap:16px">
            <div v-for="item in previewData" :key="item" class="preview-box">
                <div class="data-content">
                    <span class="data-text">{{ item.count }}</span>
                    <a-tooltip placement='bottomLeft' class="data-tip">
                        <template #title>{{ item.title }}</template>
                        <span style="display: flex; align-items: center;">
                            {{ item.text }}
                            <InfoOutlined />
                        </span>
                    </a-tooltip>
                </div>
            </div>
        </a-flex>
        <h1 class="data-title">技能水平</h1>
        <a-flex wrap="wrap" gap="small" width="100%" style="gap:16px" >
            <div ref="level" class="level-box"></div>
            <div ref="self" class="self-box"></div>
        </a-flex>
        <h1 class="data-title">技能分布</h1>
        <a-flex wrap="wrap">
            <div ref="spread" class="scatter-box"></div>
        </a-flex>
        <h1 class="data-title">测评动态</h1>
        <a-flex wrap="wrap">
            <div ref="trends" class="scatter-box"></div>
        </a-flex>
        <h1 class="data-title">技能级别分布</h1>
        <a-flex wrap="wrap" gap="small" width="100%" style="gap:16px">
            <div ref="stack" class="stack-box" style="height: 882px;"></div>
            <div class="stack-box" style="height: 882px; display: block; padding: 10px">
                <h2 style="font-size: 18px;margin: 20px 0; font-weight: 700;">级别分布详情</h2>
                <a-table
                :columns="levelColumns"
                :data-source="levelListData"
                :pagination="levelPagination"
                :show-total="levelListData => `共  ${levelListData.length} 条`"
                @change="onLevelChange"
                >
                <template #name="{ text }">
                  <span :style="{ color: '#1890ff' }">{{ text }}</span>
                </template> 
                </a-table>
            </div>
        </a-flex>
        <h1 class="data-title">部门技能分析</h1>
        <a-flex wrap="wrap" gap="small" width="100%" style="gap:16px">
            <div ref="department" class="department-box"></div>
            <div ref="departmentList" class="department-box" style="display: block; padding: 10px" >
                <h2 style="font-size: 18px;margin: 20px 0; font-weight: 700;">部门技能详情</h2>
                <a-table :columns="departmentColumns" :data-source="departmentListData" :pagination="departmentPagination" @change="onDepartmentChange" />
            </div>
        </a-flex>
    </div>
</template>

<style lang="less" scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* 调整提示文字的大小 */
.ant-tooltip-inner {
    font-size: 14px;
    /* 根据需要调整字体大小 */
}

.data-title {
    font-size: 18px;
    line-height: 32px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    padding: 20px 0;
}

.preview-box {
    flex-basis: calc(25% - 16px);
    /* 每个元素的基础宽度 */
    box-sizing: border-box;
    /* 包含边距和内边距 */
    max-width: calc(25% - 16px);
    /* 最大宽度 */
    flex-grow: 1;
    /* 允许扩展 */
    flex-shrink: 0;
    /* 不允许收缩 */
    height: 180px;
    background: #fff;

}

.data-text {
    font-size: 31px;
    line-height: 56px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
}

.data-content {
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: left;
    margin-left: 50px;
    margin-top: 20px;

}

.data-tip {
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    color: rgba(144, 147, 153, 1);

}

@media (max-width: 768px) {

    /* 在小屏幕设备上，每行只显示两个元素 */
    .preview-box {
        flex-basis: calc(50% - 16px);
        max-width: calc(50% - 16px);
    }
}

// 技能水平模块
.level-box,
.self-box,
.trends-box,
.stack-box,
.department-box {
    flex-basis: calc(50% - 16px);
    /* 每个元素的基础宽度 */
    box-sizing: border-box;
    /* 包含边距和内边距 */
    max-width: calc(50% - 16px);
    /* 最大宽度 */
    flex-grow: 1;
    /* 允许扩展 */
    flex-shrink: 0;
    /* 不允许收缩 */
    height: 500px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
}

.scatter-box {
    width: 100%;
    height: 572px;
    background: #fff;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
}

.pagination-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
</style>