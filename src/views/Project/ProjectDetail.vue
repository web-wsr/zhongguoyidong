<script setup>
import { ref, onBeforeMount} from 'vue';
import { useRouter,useRoute } from 'vue-router';
import projectsData from '@/datas/projects'
console.log(projectsData);


const router = useRouter();
const route = useRoute();

const projectRow = ref()


    
onBeforeMount(() => {
  route.params.id && (projectRow.value = projectsData.find(item => item.id === +route.params.id));
})


</script>

<template>
    <a-layout style="height: 100vh; width: 100vw;">
      <a-layout style="height: 100%;">
        <a-layout style="padding: 100px">
          <a-layout-content
            :style="{ background: '#fff', margin: 0, minHeight: '280px',overflowY: 'auto' }"
          >
          <div class="form-header">
              <h2 class="form-title">项目详情</h2>
                <div>
                  <a-button type="text" @click="router.push({name:'Project'})">
                  < 返回
                  </a-button>
                  <span style="font-size: 13px;line-height: 32px; margin-left: 5px;color:rgba(0, 0, 0, 0.45)">项目统计</span>
                </div>
          </div>
          <div v-if="projectRow" style="margin-left: calc(50% - 400px)">
            <div style="padding-top: 30px">
              <span style="font-size: 14px;line-height: 32px; font-weight: 700;">项目名称：{{ projectRow['name'] }}</span>
            </div>
            <div style="padding-top: 30px">
              <span style="font-size: 14px;line-height: 32px; font-weight: 700;">参与人数：{{ projectRow['expert_number'] }}</span>
            </div>
            <div style="padding-top: 30px">
              <span style="font-size: 14px;line-height: 32px; font-weight: 700;">启动日期：{{ projectRow['begin_date'] }}</span>
            </div>
            <div style="padding-top: 30px">
              <span style="font-size: 14px;line-height: 32px; font-weight: 700;">项目状态：{{ projectRow['status_desc']}}</span>
            </div>
            <div style="padding-top: 30px">
              <span style="font-size: 14px;line-height: 32px; font-weight: 700;">行业：{{ projectRow['industry'] }}</span>
            </div>
            <div style="padding-top: 30px">
              <span style="font-size: 14px;line-height: 32px; font-weight: 700;">产品领域：{{ projectRow['domain'] }}</span>
            </div>
            <div style="padding-top: 30px">
              <span style="font-size: 14px;line-height: 32px; font-weight: 700;">项目周期：{{ projectRow['period']+'周' }}</span>
            </div>
          </div>
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
</template>

<style lang="less" scoped>
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
.form-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:21px 60px;
  border-bottom: 1px solid #e8e8e8;
}
.form-title{
      font-size: 14px;
      font-weight: 700;
      line-height: 20px; 
      margin: 20px 0;
}
// .header .logo {
//     display: flex;
//     align-items: center;
//     padding-right: 30px;
// }
</style>