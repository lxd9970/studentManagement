<template>
  <div id="app">
      <div class="hone">
    <h2 class="student">学生管理系统</h2>
    <!-- <router-link to="eChars" class="eChars">eChars</router-link> -->
  <!-- <home></home> -->
  <div class="router">
  <router-view />
</div>
</div>
  </div>
</template>



<script>
    import Home from './views/Home'

    export default {
        name: 'app',
        components: {
            Home
        }
    }
</script>


<style>
    .app {
        display: inline;
    }
    
    .student {
        margin-left: 200px;
        margin-bottom: 50px;
    }
    
    .eChars {
        padding-right: 20px;
    }
</style>