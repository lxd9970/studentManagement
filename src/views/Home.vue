<template>
     <!-- 主页面框架 -->

    <div>
        <div class="add-box">
          <el-button @click="jumpToAddPage()" type="primary" size="small" icon="el-icon-circle-plus-outline">新增</el-button>        
          <el-input v-model="checkname" placeholder="请输入姓名" style="width:200px" maxlength="4" show-word-limit @keydown.enter.native="passname(checkname)"></el-input>
        </div>
         
          <el-table :data="currrentstudent"  stripe   height="550px" class="el-bar">

            <el-table-column fixed="" prop="id" label="ID" width="100"/>
            <el-table-column prop="name" label="姓名" width="100"/>
            <el-table-column prop="sex" label="性别" width="100"/>       
            <el-table-column prop="grade" label="年级" width="100"/>   
            <el-table-column prop="school" label="学院" width="180"/>
            <el-table-column prop="major" label="专业" width="180"/>
            <el-table-column prop="hobby" label="爱好" width="180"/>

            <el-table-column  label="操作" width="200"> 
              <template slot-scope="scope">                
                <el-button type="primary" plain="" @click="passid(scope.row.id)" size="small" icon="el-icon-edit">编辑</el-button>
                <el-button type="danger" plain="" @click="deleteStudent(scope.row.id)" size="small" icon="el-icon-delete">删除</el-button>
              </template>

</el-table-column>

</el-table>

<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentpage" :page-sizes="[4,8,16]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="students.length">
</el-pagination>
</div>
</template>
<script>
    import {
        formatDate
    } from '../components/common/date.js'
    //引入日期格式化模块
    import {
        getHomeMultidata
    } from '../network/home.js'
    //引入网络封装模块
    export default {
        name: "home",
        components: {

        },
        data() {
            return {
                checkname: "",
                currentpage: 1,
                pagesize: 20,
                students: [],
                currrentstudent: [],

            }
        },
        // created() {
        //     // 1.请求多个数据
        //     getHomeMultidata().then(res => {
        //         // this.result = res;
        //         this.students = res.data;
        //         // this.getcurrentstudent();
        //         console.log(res);

        //     })
        // },
        methods: {
            handleSizeChange(val) {
                this.pagesize = val;
                this.getcurrentstudent();
            },
            handleCurrentChange(val) {

                this.currentpage = val;
                this.getcurrentstudent();
            },
            getcurrentstudent() {
                var begin = this.currentpage * this.pagesize - this.pagesize;
                var end = this.currentpage * this.pagesize - 1;
                var temp = [];
                if (end >= this.students.length) {
                    for (var i = begin; i < this.students.length; i++) {
                        temp.push(this.students[i])
                    }

                } else {
                    for (var i = begin; i <= end; i++) {
                        temp.push(this.students[i])
                    }

                }
                this.currrentstudent = temp;

            },

            getAllStudent() {
                this.$axios.get("/api/student/findAllStudents")
                    .then(res => {
                        this.students = res.data;
                        this.getcurrentstudent();
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },

            deleteStudent(id) {
                // this.$axios
                //     .get('/api/student/deletebyid?id=' + id)
                //     .then(res => {
                //         this.getAllStudent()
                //         alert("删除成功")
                //     })
                //     .catch(err => {
                //         alert("删除失败")
                //         console.log(err);
                //     });
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$axios
                        .get('/api/student/deletebyid?id=' + id)
                        .then(res => {
                            this.getAllStudent()
                        })
                        .catch(err => {
                            alert("删除失败")
                        });
                    this.$message({
                        type: 'success',
                        message: '删除成功!',
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            jumpToAddPage() {
                this.$router.push({
                    name: 'addStudent',
                    params: {
                        type: 'add'
                    }
                })
            },
            jumpTocheckPage() {
                this.$router.push({
                    name: 'byStudentId'
                })
            },
            passid(id) {
                this.$router.push({
                    name: 'updateStudent',
                    params: {
                        id: id
                    }
                })
            },
            passname(name) {
                if (typeof(this.checkname) === Number) {
                    console.log(this.checkname);

                    this.$router.push({
                        name: 'byStudentId',
                        params: {
                            id: id
                        }
                    })
                } else {
                    console.log(this.checkname);

                    this.$router.push({
                        name: 'byStudentName',
                        params: {
                            name: name
                        }
                    })
                }
                // this.$router.push({
                //     name: 'byStudentName',
                //     params: {
                //         name: name
                //     }
                // })
            },
            download(url) {
                window.location.href = url;

            }



        },
        mounted() {
            this.getAllStudent()

        },

    }
</script>
<style scoped>
    .add-box {
        float: left;
        margin-right: 20px;
    }
    
    .table-center {
        padding-left: 15%;
    }
    
    .el-bar {
        border: 1px solid skyblue;
    }
</style>