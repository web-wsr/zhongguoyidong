const Home = () =>
    import(/* webpackChunkName: "home" */ "@/views/HomeIndex.vue");

const About = () =>
    import(/* webpackChunkName: "about" */ "@/views/AboutIndex.vue");
const ExpertLayout = () =>
    import(/* webpackChunkName: "expert" */ "@/components/Layout/ExpertLayout.vue");
const ExpertData = () =>
    import(/* webpackChunkName: "expert" */ "@/views/Expert/ExpertData.vue");
const ExpertList = () =>
    import(/* webpackChunkName: "expert" */ "@/views/Expert/ExpertList.vue");
const ExpertEnter = () =>
    import(/* webpackChunkName: "expert" */ "@/views/Expert/ExpertEnter.vue");
const DetailNav = () =>
    import(/* webpackChunkName: "expert" */ "@/views/Expert/ExpertNav.vue");
const DetailIndex = () =>
    import(/* webpackChunkName: "expert" */ "@/views/Expert/ExpertIndex.vue");
const DetailSkill = () =>
    import(/* webpackChunkName: "expert" */ "@/views/Expert/ExpertSkill.vue");
const DetailJoin = () =>
    import(/* webpackChunkName: "expert" */ "@/views/Expert/ExpertJoin.vue");

const ProjectIndex = () =>
    import(/* webpackChunkName: "project" */ "@/views/Project/ProjectIndex.vue");
const ProjectEnter = () =>
    import(/* webpackChunkName: "project" */ "@/views/Project/ProjectEnter.vue");
const ProjectDetail = () =>
    import(/* webpackChunkName: "project" */ "@/views/Project/ProjectDetail.vue");
const NotFound = () =>
    import(/* webpackChunkName: "notFound" */ "@/views/Common/NotFound.vue");

const AccessDenied = () =>
    import(/* webpackChunkName: "accessDenied" */ "@/views/Common/AccessDenied.vue");


export default [
    {
        path: '/',
        name: 'Root',
        component: Home,
        title: '首页'
        // meta: {
        //     title: '首页',
        // }
    },

    {
        path: "/expert",
        name: "Expert",
        component: ExpertLayout,
        redirect: { name: "ExpertData" },
        title: "专家团队",
        meta: {
            nav: {
                title: "专家团队",
            },
            breadcrumb: {
                name: '专家团队'
            }
        },
        children: [
            {
                path: "data",
                name: "ExpertData",
                component: ExpertData,
                title: "专家数据",
                meta: {
                    nav: {
                        svg: {
                            class: "nav-svg",
                            icon: "icon-info",
                        },
                        title: "专家数据",
                    },
                    breadcrumb: {
                        name: '专家数据'
                    }
                },
            },
            {
                path: "list",
                name: "ExpertList",
                component: ExpertList,
                title: "专家人才库",
                meta: {
                    nav: {
                        svg: {
                            class: "nav-svg",
                            icon: "icon-list",
                        },
                        title: "专家人才库",
                    },
                    breadcrumb: {
                        name: '专家人才库'
                    }

                },
            },
            {
                path: "enter",
                name: "ExpertEnter",
                component: ExpertEnter,
                meta: {
                    nav: {
                        svg: {
                            class: "nav-svg",
                            name: "iconMap",
                        },
                        title: "专家录入",
                    },
                    breadcrumb: {
                        name: '专家录入'
                    }

                },
            },
            {
                path: "detail",
                component: DetailNav,
                children: [
                    {
                        path: "index/:id",
                        component: DetailIndex,
                        meta: {
                            name: "首页",
                        },
                    },
                    {
                        path: "skill/:id",
                        component: DetailSkill,
                        meta: {
                            name: "标签信息",
                        },
                    },
                    {
                        path: "join/:id",
                        component: DetailJoin,
                        meta: {
                            name: "参与项目",
                        },
                    },
                ],
            },
        ],
    },
    {
        path: "/project",
        name: "Project",
        component: ProjectIndex,
        title: "项目统计",
        // meta: {
        //     nav: {
        //         title: "项目列表",
        //     },
        // },
    },

    {
        path: '/about',
        name: 'About',
        component: About,
        title: '关于我们',
        // meta: {
        //     nav: {
        //         title: '关于我们'
        //     }
        // }
    },
    {
        path: "/project/enter",
        name: "ProjectEnter",
        component: ProjectEnter,
        // meta: {
        //     nav: {
        //         title: "项目录入  ",
        //     }
        // },
    },
    {
        path: "/project/detail/:id",
        name: "ProjectDetail",
        component: ProjectDetail,
    },
    {
        path: '/404',
        name: 'NotFound',
        component: NotFound
    },
    // 403无权限
    {
        path: '/403',
        name: 'AccessDenied',
        component: AccessDenied
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/404'
    },
]