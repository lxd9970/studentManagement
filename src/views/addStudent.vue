<template>
  <!-- 添加学生页面 -->

  <el-form ref="studentForm" :model="studentForm" :rules="rules" label-width="100px" style="width:300px;margin-left:40%">
     <el-form-item label="ID" prop="id">
      <el-input v-model="studentForm.id" style="width:240px;" ></el-input>
    </el-form-item>

    <el-form-item label="姓名" prop="name">
      <el-input v-model="studentForm.name" style="width:240px;" ></el-input>
    </el-form-item>

    <el-form-item label="性别" prop="sex">
      <el-select v-model="studentForm.sex" placeholder="请选性别" style="width:240px;">
        <el-option label="男" value="男"></el-option>
        <el-option label="女" value="女"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="年级" prop="grade">
      <el-select v-model="studentForm.grade" placeholder="请选择年级" style="width:240px;">
        <el-option label="2016" value="2016"></el-option>
        <el-option label="2017" value="2017"></el-option>
        <el-option label="2018" value="2018"></el-option>
        <el-option label="2019" value="2019"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="学院" prop="school">
      <el-select v-model="studentForm.school" placeholder="请选择学院" style="width:240px;">
        <el-option label="机械学院" value="机械学院"></el-option>
        <el-option label="计电学院" value="计电学院"></el-option>
        <el-option label="经管学院" value="经管学院"></el-option>
        <el-option label="马克思学院" value="马克思学院"></el-option>
        <el-option label="文史学院" value="文史学院"></el-option>
        <el-option label="数计学院" value="数计学院"></el-option>
        <el-option label="生科学院" value="生科学院"></el-option>
      </el-select>
    </el-form-item>

     <el-form-item label="专业" prop="major">
      <el-input v-model="studentForm.major" style="width:240px;" ></el-input>
    </el-form-item>

  <el-form-item label="爱好" prop="hobby">
    <el-input v-model="studentForm.hobby" style="width:240px;" ></el-input>
  </el-form-item>

  

<div style="margin-left:20%">
    <el-radio-group v-model="studentForm.hobby" style="width:400px;">
      <el-radio label="足球" border=""></el-radio>
      <el-radio label="篮球" border=""></el-radio>
      <el-radio label="游泳" border=""></el-radio>
    </el-radio-group>
</div>


    <el-form-item label="入学时间">
    <el-date-picker
      v-model="studentForm.date"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </el-form-item>
  
    <el-form-item>
      <br>
      <el-button type="primary" @click="submit">提交</el-button>
      <el-button @click="jumpToList">返回</el-button>
    </el-form-item>

   
   
  
  </el-form>
</template>
<script>
    export default {
        data() {
            return {
                type: '',
                studentForm: {},
                imageUrl: '',
                rules: {
                    id: [{
                        required: true,
                        message: '请输入ID',
                        trigger: 'blur'
                    }, {
                        min: 3,
                        max: 3,
                        message: '长度为 3 个字符',
                        trigger: 'blur'
                    }],
                    name: [{
                        required: true,
                        message: '请输入姓名',
                        trigger: 'blur'
                    }, {
                        min: 2,
                        max: 5,
                        message: '长度在 2 到 5 个字符',
                        trigger: 'blur'
                    }],
                    sex: [{
                        required: true,
                        message: '请选择性别',
                        trigger: 'blur'
                    }],
                    grade: [{
                        required: true,
                        message: '请输入年级',
                        trigger: 'change'
                    }],
                    school: [{
                        type: 'date',
                        required: true,
                        message: '请选择学院',
                        trigger: 'change'
                    }],
                    major: [{
                        required: true,
                        message: '请输入专业',
                        trigger: 'blur'
                    }],
                    hobby: [{
                        required: true,
                        message: '请输入爱好',
                        trigger: 'blur'
                    }],

                }
            };
        },
        methods: {
            submit() {
                this.addStudent()
            },
            //添加学生网络请求
            addStudent() {
                this.$axios
                    .post("/api/student/addStudent", this.studentForm)
                    .then(res => {
                        this.studentForm = {}
                        this.jumpToList()
                            //添加成功跳转到默认界面
                        alert("添加成功")
                    })
                    .catch(err => {
                        alert("添加失败");
                        console.log(err);
                    });
            },
            jumpToList() {
                this.$router.push('/student/studentList')
            },

        },
    }
</script>
<style scoped>
    .add-box {
        padding-left: 20px;
        padding-top: 20px;
        display: inline;
    }
</style>