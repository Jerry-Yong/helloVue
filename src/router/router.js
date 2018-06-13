import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import store from "../store/store";
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const routers = [
    // {
    //     path: '/',
    //     name: 'HelloWorld',
    //     component: HelloWorld
    // },
    {
        path:'/',
        component: resovle => require(['../pages/login/login.vue'], resovle ),
        meta:{ title: '登录' },
        name: "登陆"
    },
    {
        path:'/home',
        component: resovle => require(['../pages/home/home.vue'], resovle ),
        meta:{ title: '首页', requireAuth: true },
        name: "首页"
    },
]
let router = new Router({
    routes: routers
})
export default router;

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if(store.state.token) {  // 通过vuex state获取当前的token是否存在
            next();
        } else {
            next({
                path: '/',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
})

// axios.interceptors.request.use(function (config) {
//     if(config.url){
//         let spli = config.url.split("/")
//         console.log(spli[spli.length-1])
//         // console.log(spli[spli.length-1])
//         if (spli[spli.length-1] == 'login') {
//             return config
//         }else if (spli[spli.length-1] == 'submitpaperafter') {
//             // sessionStorage.getItem('employeeId')
//             // alert('你看的不是你的结果')
//             var param = config.data.split("&")
//             var split = param[1].split("=")
//             if(split[1] != localStorage.getItem('employeeId')){
//                 router.replace({
//                     path: 'main',
//                     query: {redirect: router.currentRoute.fullPath}
//                 })
//             }
//             if (localStorage.name != null) {
//                 // console.log(1)
//                 return config
//             }else{
//                 router.replace({
//                    path: 'login',
//                    query: {redirect: router.currentRoute.fullPath}
//                 })
//             }
//         }else{
//             if (localStorage.name != null) {
//                return config
//             }else{
//                 router.replace({
//                     path: 'login',
//                     query: {redirect: router.currentRoute.fullPath}
//                 })
//             }
//         }
//         // 在发送请求之前做些什么
//         return config
//     }
// }, function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error)
// });
