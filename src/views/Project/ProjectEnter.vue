<script setup>
import { ConfigProvider } from 'ant-design-vue';
import zhCN from 'ant-design-vue/locale/zh_CN';
import { useRouter } from 'vue-router';
// 设置全局中文语言包
ConfigProvider.config({ locale: zhCN });
const route = useRouter();

import { ref, toRaw } from 'vue';
const formRef = ref();
const labelCol = {
  span: 5,
};
const wrapperCol = {
  span: 17,
};
const formState = ref({
  name: '',
  expert_number: '',
  begin_date: undefined,
  status_desc:'进行中',
  domain:'',
  industry:'',
  period: '',
  
});
console.log(formState.value);

const rules = {
  name: [
    {
      required: true,
      message: '请输入项目名称',
      trigger: 'change',
    },
  ],
  expert_number: [
    {
      type:'number',
      required: true,
      min: 1,
      max:9999,
      message: '必须是1到9999之间的数字',
      trigger: 'change',
    },
  ],
  begin_date: [
    {
      required: true,
      message: '请选择时间年月份',
      trigger: 'change',
      type: 'string',
    },
  ],
  industry: [
    {
      required: true,
      message: '请输入所在行业',
      trigger: 'change',
    },
  ],
  domain: [
    {
      required: true,
      message: '请输入产品领域',
      trigger: 'change',
    },
  ],
  period:[
  {
      type:'number',
      required: true,
      min: 1,
      max:9999,
      message: '必须是1到9999之间的数字',
      trigger: 'change',
    },
  ]
};
const onSubmit = () => {
  formRef.value
    .validate()
    .then(() => {
      console.log('values', formState, toRaw(formState));
      route.push({name:'Project'})
    })
    .catch(error => {
      console.log('error', error);
    });
};
const resetForm = () => {
  formRef.value.resetFields();
};
</script>

<template>
    <a-layout style="height: 100vh; width: 100vw;">
      <a-layout style="height: 100%;">
        <a-layout style="padding: 100px">
          <a-layout-content
            :style="{ background: '#fff', margin: 0, minHeight: '280px',overflowY: 'auto' }"
          >
          <div class="form-header">
              <a-button type="text" @click="route.push({name:'Project'})">
                < 返回
              </a-button>
              <span style="font-size: 13px;line-height: 32px; margin-left: 8px;color:rgba(0, 0, 0, 0.45)">项目统计</span>
          </div>
          <div class="form-content">
            <a-form
              ref="formRef"
              :model="formState"
              :rules="rules"
              :label-col="labelCol"
              :wrapper-col="wrapperCol"
            >
              <a-form-item ref="name" label="项目名称" name="name" style="margin: 20px 0;">
                <a-input v-model:value="formState['name']" />
              </a-form-item>
              <a-form-item  label="参与人数" name="expert_number"  style="margin: 20px 0;">
                <a-input-number v-model:value="formState['expert_number']" />
              </a-form-item>
              <a-form-item  label="启动时间" name="begin_date" style="margin: 20px 0;">
                <a-date-picker
                  v-model:value="formState['begin_date']"
                  value-format="YYYY-MM"
                  placeholder="请选择月份"
                  picker="month"
                />
              </a-form-item>
              <a-form-item  label="项目状态" name="status_desc" style="margin: 20px 0;">
                <span style="font-weight: 700;">{{ formState['status_desc'] }}</span>
              </a-form-item>
              <a-form-item  label="行业" name="industry" style="margin: 20px 0;">
                <a-input v-model:value="formState['industry']" />
              </a-form-item>
              <a-form-item  label="产品领域" name="domain" style="margin: 20px 0;">
                <a-input v-model:value="formState['domain']" />
              </a-form-item>
              <a-form-item  label="项目周期" name="period" style="margin: 20px 0;">
                <a-input-number v-model:value="formState['period']"></a-input-number>
              </a-form-item>
              <a-form-item :wrapper-col="{ span: 14, offset: 5 }">
                <a-button type="primary" @click="onSubmit" style="width: 60px;">提交</a-button>
                <a-button style="margin-left: 10px;width: 60px;" @click="resetForm" >重置</a-button>
              </a-form-item>
            </a-form>
          </div>
          </a-layout-content>
        </a-layout>           
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
.form-header{
  display: flex;
  justify-content: end;
  padding:21px 60px;
  border-bottom: 1px solid #e8e8e8;
}

// .header .logo {
//     display: flex;
//     align-items: center;
//     padding-right: 30px;
// }
</style>