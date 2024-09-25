<script setup>
import { RouterView } from 'vue-router';
import { useRouter,useRoute } from 'vue-router';
import { ref,watch,computed } from 'vue';
import routesAll from '@/router/routes';
import HeaderLayout from '@/components/Layout/HeaderLayout.vue';

const currentRoute = useRoute();
const route = useRouter();
const navRoutes = ref(routesAll)
const selectedKeys2 = ref([]);
// 获取所有子路由
const navRoutesChild = ref([]);
// 获取面包屑
const breadcrumb = computed(() => currentRoute.matched.filter((data) => data.meta.breadcrumb))

// 初始化 navRoutesChild
navRoutes.value.forEach(element => {
  if (element.children) {
    navRoutesChild.value = navRoutesChild.value.concat(element.children);
  }
});
// 初始化 selectedKeys
watch(currentRoute, (newRoute) => {
    console.log(newRoute);
    
  const currentName = newRoute.name;
  if (currentName) {
    selectedKeys2.value = [currentName];
  }
  if(newRoute.path === '/expert/enter') {
    selectedKeys2.value = ['ExpertList'];
  }
}, { immediate: true });

</script>

<template>
    <a-layout style="height: 100vh; width: 100vw;">
      <!-- 顶部 -->
     <HeaderLayout />
      <a-layout style="height: 100%;">
        <!-- 左侧菜单 -->
          <a-layout-sider  width="208" style="background: #fff; height: calc(100vh - 64px);padding-top: 32px" >
              <a-menu
               v-model:selectedKeys="selectedKeys2"
               mode="inline"
               :style="{ height: '100%', borderRight: 0 }"
              >
              <template v-for="data in navRoutesChild" >
                <a-menu-item v-if="data?.title" :key="data.name"  @click="route.push({ name: data.name })">
                  <svg-icon
                  v-if="data.meta.nav.svg?.icon"
                  :name="data.meta.nav.svg.icon"
                  width="24px"
                  height="18px"
                  style="margin-right: 5px"
                ></svg-icon>
                  <span>{{ data.title }}</span>
                </a-menu-item>
              </template>
             </a-menu>
         </a-layout-sider>
        <!-- 面包屑 -->
        <a-layout style="padding: 0 24px 24px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item v-for="step in breadcrumb" :key="step.path">
              {{ step.meta.breadcrumb.name }}
            </a-breadcrumb-item>
          </a-breadcrumb>
          <a-layout-content
            :style="{  margin: 0, overflowY: 'auto' }"
          >
            <router-view></router-view>
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

.header .logo {
    display: flex;
    align-items: center;
    padding-right: 30px;
}

</style>