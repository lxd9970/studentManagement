import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import addStudent from '../views/addStudent.vue'
import updateStudent from '../views/updateStudent.vue'
import byStudentName from '../views/byStudentName.vue'
import byStudentId from '../views/byStudentId.vue'
import eChars from '../views/eChars.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: "/student/studentList"

    },
    {
        path: '/student/studentList',
        component: Home
    },
    {
        path: '/student/addStudent/:type',
        name: 'addStudent',
        component: addStudent
    },
    {
        path: '/student/byStudentId',
        name: 'byStudentId',
        component: byStudentId
    },
    {
        path: '/student/updateStudent/:id',
        name: 'updateStudent',
        component: updateStudent
    },
    {
        path: '/student/byStudentName/:name',
        name: 'byStudentName',
        component: byStudentName
    },
    {
        path: '/eChars',
        name: 'eChars',
        component: eChars
    },
    // {
    //     path: '/img/upload/:id',
    //     name: 'uploadimg',
    //     component: uploadimg
    // },
    // {
    //     path: '/file/upload/:id',
    //     name: 'uploadfile',
    //     component: uploadfile
    // },
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router