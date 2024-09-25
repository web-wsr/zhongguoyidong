<script setup>
import { useRouter,useRoute } from 'vue-router';
import { ref,watch } from 'vue';
import routesAll from '@/router/routes';
const currentRoute = useRoute();
console.log(currentRoute);


const route = useRouter();
const navRoutes = ref(routesAll)
const selectedKeys = ref([]);
console.log(selectedKeys.value);


// 初始化 selectedKeys
watch(currentRoute, (newRoute) => {
  const currentName = newRoute.name;
  if (currentName) {
    selectedKeys.value = [currentName];
  }
  switch (newRoute.path) {
    case '/expert/data':
    case '/expert/list':
    case '/expert/enter':
      selectedKeys.value = ['Expert'];
      break;
    default:
      break;
  }
}, { immediate: true });


</script>

<template >
      <!-- 顶部 -->
      <a-layout-header class="header" style="display: flex; position: sticky; top: 0; z-index: 1; background: #fff; padding: 0 20px;">
        <div class="logo" @click="route.push('/')">
            <img src="@/assets/images/aboutlogo.svg" alt="">
        </div>
          <a-menu
            
            v-model:selectedKeys="selectedKeys"
            theme="light"
            mode="horizontal"
            :style="{ lineHeight: '64px',borderBottom: 'none' }"
            >
            <template  v-for="item in navRoutes">
              <a-menu-item v-if="item.title" :key="item.name" @click="route.push({ name: item.name })">
                <span>{{ item.title }}</span>
              </a-menu-item>
            </template>
          </a-menu>
      </a-layout-header>
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
    cursor: pointer;
}
</style>