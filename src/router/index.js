import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import addStudent from '../views/addStudent.vue'
import updateStudent from '../views/updateStudent.vue'
import byStudentName from '../views/byStudentName.vue'
import byStudentId from '../views/byStudentId.vue'
import eChars from '../views/eChars.vue'


//路由模块
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
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router