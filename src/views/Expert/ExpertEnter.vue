<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/no-parsing-error -->
<script setup>
import {  ref, toRaw } from 'vue';
import { useRouter } from 'vue-router';
const route = useRouter();
const formRef = ref();
const labelCol = {
  span: 10,
};
const wrapperCol = {
  span: 13,
};
const formState = ref({
  name: '',
  skill:'0.00',
  phone: '',
  email: '',
  college: '',
  workYear: '',
  industry: '',
  company:'',
  station:'',
  major:''
});
const rules = {
  name: [
    {
      required: true,
      message: '请输入姓名',
      trigger: 'change',
    },
    {
      min: 2,
      max: 5,
      message: '姓名长度为2~5位字符',
      trigger: 'blur',
    },
  ],
  phone: [
    {
      required: true,
      message: '请输入手机号',
      trigger: 'change',
    },
    {
      min: 11,
      max: 11,
      message: '手机号码长度必须是11位数字',
      trigger: 'blur',
    },
  ],
  email: [
    {
      type:'email',
      required: true,
      message: '请输入正确的邮箱地址',
      trigger: 'change',
    },
  ],
  college: [
    {
      required: true,
      message: '请输入院校名称',
      trigger: 'change',
    },
  ],
  workYear: [
    {
      required: true,
      message: '请输入正确的工作年限',
      trigger: 'blur',
    },
  ],
  industry: [
    {
      required: true,
      message: '请输入所在行业',
      trigger: 'change',
    },
  ],
  company: [
    {
      required: true,
      message: '请输入所在公司',
      trigger: 'change',
    },
  ],
  station:[
    {
      required: true,
      message: '请输入岗位',
      trigger: 'change',
    },
  ],
  major:[
    {
      required: true,
      message: '请输入产品领域',
      trigger: 'change',
    },
  ]
};
const onSubmit = () => {
  formRef.value
    .validate()
    .then(() => {
      console.log('values', formState, toRaw(formState));
      route.push({name:'ExpertList'})
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
    <div class="expert-enter">
        <div class="form-header">
            <h2 class="form-title">专家录入</h2>
            <a-row type="flex" justify="space-between">
                <a-col :span="6">
                    <a-button type="text" @click="route.push({name:'ExpertList'})">
                          < 返回
                        </a-button>
                </a-col>
                <span style="font-size: 13px;line-height: 32px; margin-left: 5px;color:rgba(0, 0, 0, 0.45)">专家人才库</span>
            </a-row>
        </div>  
        <div class="form-content" >
            <a-form
              ref="formRef"
              :model="formState"
              :rules="rules"
              :label-col="labelCol"
              :wrapper-col="wrapperCol"
            >
                <a-row justify="center" :gutter="30">
                  <a-col :span="15">
                    <div class="form-title">基本信息</div>
                  </a-col>
                </a-row>
                <a-row justify="center" :gutter="30" style="margin-bottom: 20px">
                  <a-col :span="8" >
                    <a-form-item  ref="name" label="专家姓名" name="name">
                      <a-input v-model:value="formState.name" />
                    </a-form-item>
                  </a-col>
                  <a-col :span="8" >
                    <a-form-item  label="总技能值" name="skill" >
                      <span>{{ formState.skill }}</span>
                    </a-form-item>
                  </a-col>
                </a-row>
                <a-row justify="center" :gutter="30" style="margin-bottom: 20px">
                  <a-col :span="8" >
                    <a-form-item   label="手机号码" name="phone">
                      <a-input v-model:value="formState.phone" />
                    </a-form-item>
                  </a-col>
                  <a-col :span="8" >
                    <a-form-item   label="邮箱" name="email">
                      <a-input v-model:value="formState.email" />
                    </a-form-item>
                  </a-col>
                </a-row>
                <a-row justify="center" :gutter="30" >
                  <a-col :span="15" style="border-top: 1px solid rgba(0, 0, 0, 0.06);">
                    <div class="form-title">教育信息</div>
                  </a-col>
                </a-row>
                <a-row justify="center" :gutter="30" style="margin-bottom: 20px">
                  <a-col :span="8" >
                    <a-form-item  label="毕业院校" name="college">
                      <a-input v-model:value="formState.college" />
                    </a-form-item>
                  </a-col>
                  <a-col :span="8" >
                    <a-form-item  label="工作年限" name="workYear">
                      <a-input v-model:value="formState.workYear" />
                    </a-form-item>
                  </a-col>
                </a-row>
                <a-row justify="center" :gutter="30" >
                  <a-col :span="15" style="border-top: 1px solid rgba(0, 0, 0, 0.06);">
                    <div class="form-title">职业信息</div>
                  </a-col>
                </a-row>
                <a-row justify="center" :gutter="30" style="margin-bottom: 20px">
                  <a-col :span="8" >
                    <a-form-item   label="所在行业" name="industry">
                      <a-input v-model:value="formState.industry" />
                    </a-form-item>
                  </a-col>
                  <a-col :span="8" >
                    <a-form-item   label="所在公司" name="company">
                      <a-input v-model:value="formState.company" />
                    </a-form-item>
                  </a-col>
                </a-row>
                <a-row justify="center" :gutter="30" style="margin-bottom: 20px">
                  <a-col :span="8" >
                    <a-form-item   label="所在岗位" name="station">
                      <a-input v-model:value="formState.station" />
                    </a-form-item>
                  </a-col>
                  <a-col :span="8" >
                    <a-form-item   label="产品领域" name="major">
                      <a-input v-model:value="formState.major" />
                    </a-form-item>
                  </a-col>
                </a-row>
                <a-row justify="center" :gutter="30" >
                  <a-col :span="15" style="border-top: 1px solid rgba(0, 0, 0, 0.06);">
                  </a-col>
                </a-row>
                <a-col :span="24" style="padding-top:20px">
                  <a-form-item :wrapper-col="{ span: 14, offset: 18 }">
                  <a-button type="primary" @click="onSubmit" style="width: 60px;">提交</a-button>
                  <a-button  style="margin-left: 10px; width: 60px;" @click="resetForm">重置</a-button>
                </a-form-item> 
                </a-col>
                
            </a-form>
        </div>
    </div>
</template>


<style lang="less" scoped>
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
   }
    .expert-enter{
        width: 100%;
        background-color: #fff;
    }
    .form-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 24px;
        border-bottom: 1px solid #e8e8e8;
    }
    .form-title{
        font-size: 14px;
        font-weight: 700;
        line-height: 25px;
    }
    .form-content{
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        padding: 15px 0;
    }
    .form-title{
      font-size: 14px;
      font-weight: 400;
      line-height: 20px; 
      margin: 20px 0;
    }
</style>