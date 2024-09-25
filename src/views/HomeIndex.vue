<script setup>
import { h, ref } from 'vue';
import { PieChartOutlined, TeamOutlined } from '@ant-design/icons-vue';
const current = ref(['mail']);
const items = [
  {
    key: 'mail',
    label: h('a', { href: '/' }, '首页'),
    title: '首页',
  },
  {
    key: 'expert',
    label: h('a', { href: '/expert' }, '专家团队'),
    title:'专家团队',
    children: [
      {
        key: 'data',
        label: h('a', { href: '/expert/data' }, '专家数据'),
        title:'专家数据',
        icon: ()=> h(PieChartOutlined),
      },
      {
        key: 'list',
        label: h('a', { href: '/expert/list' }, '专家人才库'),
        title:'专家人才库',
        icon: ()=> h(TeamOutlined),
      },
    ]
  },
  {
    key: 'project',
    label: h('a', { href: '/project' }, '项目统计'),
    title:'项目统计',
  },
  {
    key: 'about',
    label: h('a', { href: '/about' }, '关于我们'),
    title:'关于我们',
  }
];
</script>

<template>
    <div class="home-page">
        <div class="page-content">

            <div class="page-header">
                <div class="header-nav">
                    <div class="nav-logo">
                        <img src="@/assets/images/indexLogo.svg" alt="">
                    </div>
                    <div class="nav-bar">
                        <a-menu  v-model:selectedKeys="current" mode="horizontal" :items="items" />
                    </div>
                </div>
                <img  src="@/assets/images/header-bg.png" alt="" style="width: 100%;"/>
            </div>
            <div class="page-body">
                <div class="introduction-content">
                    <h1 class="introduction-title">平台简介</h1>
                    <div class="introduction-text">   
                        <p>功以才成，业由才广。</p>
                        <p>为成为数智化转型咨询服务的引领者，打造国内一流的数智化转型咨询机构及协作平台，</p>
                        <p>中移咨询建立了涵盖中国移动及行业合作伙伴的数字化转型专家库，实现需求与人才的高效匹配及调用。</p>
                    </div>
                </div>
                <div class="project-content">
                    <h1 class="project-title">业务总览</h1>
                    <div class="project-list">
                        <div class="project-item">
                            <span>213</span>
                            <p>专家团队</p>
                        </div>
                        <div class="project-item">
                            <span>74</span>
                            <p>项目统计</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page-footer">
                <p>Copyright © 2023 中移咨询 All Rights Reserved.</p>
            </div>
        </div>
    </div>
</template>


<style lang="less" scoped>
    *{
        margin:0;
        padding:0;
    } 
    
    .page-content{
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: #F0F3F5;
        overflow: hidden;
        
        .page-body{
            flex: 1;
            margin:0 auto;
            max-width: 1184px;  /* 设置最大宽度 */
            padding: 0 20px;  /* 增加左右内边距 */
            .introduction-title {
                font-size: 24px;
                padding: 40px 0 20px 0;
            }
            .introduction-text{
                width: 1184px;
                height: 192px;
                padding: 56px 48px;
                background-color: #fff;
                p{
                    font-size: 16px;
                    line-height: 32px;
                    font-weight: 400;
                }
            }
            .project-title{
                font-size: 24px;
                padding: 40px 0 20px 0;
            }
            .project-list{
                display: flex;
                justify-content: space-between;
                width: 1184px;
                .project-item{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 580px;
                    height: 174px;
                    background-color: #fff;
                    span{
                        font-size: 42px;
                        color: rgba(0, 0, 0, 0.85);
                        font-weight: 500;
                    }
                }
            }
        }
        .page-footer{
            width: 100%;
            text-align: center;
            margin: 50px 0 60px 0;
            p{
                font-size: 12px;
                color: rgba(0, 0, 0, 0.45);
                font-weight: 400;
                line-height: 20px;
            }
        }
    }
    .header-nav{
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        margin: 0 auto;
        background-color: rgba(0, 0, 0, 0.45);
        box-shadow: rgba(0, 0, 0, 0.08);
        padding: 0 20px;  /* 增加左右内边距 */
        
        .nav-logo{
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                padding: 0 40px 0 250px;  /* 调整内边距 */
            }
        }
        .ant-menu{
            height: 72px;
            padding-top: 17px;
            font-size:14px;
            background-color: transparent;
            color: #fff;
        }
    }
</style>