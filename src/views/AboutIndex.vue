<script setup>
import HeaderLayout from '@/components/Layout/HeaderLayout.vue';
</script>

<template>
    <div class="about-page">
        <HeaderLayout />
       <div class="page-body">
            <div class="zhongyi-container" style="background-color: #FBFDFF; border-top: 1px solid #EBEBEB;">
                <div class="zhongyi-content">
                    <h1>中移咨询</h1>
                    <p>中移数智科技有限公司（以下简称中移咨询）由中国移动通信集团授权中国移动通信集团设计院有限公司成立，为落实“数字中国”战略，充分发挥国有经济战略支撑作用，</p>
                    <p>加快推动数字经济和实体经济融合，助力中国移动创世界一流科技企业。</p>
                    <p style="padding:25px 0;">中移咨询作为中国移动集团数智化转型咨询的责任主体，承担全集团数智化转型咨询能力建设与市场拓展责任，致力于打造国际一流的数智科技咨询及服务公司。</p>
                    <p>公司立足中国移动数智化转型经验与能力，对标行业一流，组建高水平咨询团队，打造高质量生态，以转型咨询业务为抓手，携手合作伙伴，为用户提供包括全领域数智化</p>
                    <p>转型咨询、场景化数智化解决方案、数智化产品与服务在内的 “ 咨询＋产品＋服务 ”转型服务，赋能千行百业数智化转型。</p>
                </div>
            </div>
            <div class="talent-container">
                <div class="talent-content">
                    <div class="talent-introduce">
                        <h1>人才高地</h1>
                        <p>中移咨询作为中国移动集团首批“人才高地建设示范区”，结合数智化转型咨询业务特点，坚持“党管人才”原
                            
                        </p>
                        <p>
                            则，遵从新时代知识人才的特点，按照“不求我有，但为我用”的灵活用工思路，围绕“激活内部人力资
                        </p>
                        <p>
                            源、灵活调用外部人才资源”两大主线，打造“高水平、高质量、高活力”的能力倍增型人才高地。
                        </p>
                    </div>
                    <div class="talent-img">
                        <img src="@/assets/images/talent.png" alt=""/>
                    </div>
                </div>
            </div>
       </div>
       <div class="page-footer">
         <p>Copyright © 2023 中移咨询 All Rights Reserved.</p>
       </div>
    </div>
</template>

<style lang="less" scoped>
*{
    margin:0;
    padding:0;
} 
.about-page{
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
}
.page-body{
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1;
}
p{
    line-height: 36px;
}
h1{
    font-size: 14px;
    font-weight: 600;
    line-height: 36px;
}
.zhongyi-container,
.talent-container
{
    display: flex;
    align-items: center;
    height: 50%;
}
.zhongyi-content{
    padding-left: 18%;
    
}
.talent-content{
    display: flex;
    padding-left: 18%;
}
.talent-img{
    padding-left: 50px;
}
.header-nav{
        display: flex;
        width: 100%;
        margin: 0 auto;
        box-shadow: rgba(0, 0, 0, 0.08);
        padding: 0 20px;  /* 增加左右内边距 */
        border-bottom: 1px solid #EBEBEB;
        .nav-logo{
            display: flex;
            justify-content: center;
            align-items: center;
            padding-right: 30px;
        }
        .ant-menu{
            height: 72px;
            padding-top: 17px;
            font-size:14px;
            border-bottom: none;
        }
    }
    .page-footer{
        width: 100%;
        height: 101px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid #EBEBEB;
    }

</style>