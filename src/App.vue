<template>
<div class="todo-container">

    <div class="routerlink">
      <router-link to="/welcome">Into Welcome Page</router-link>
    </div>

    <div class="routercontent">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style scoped>
body {
  font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.4em;
  background: #f5f5f5;
  color: #4d4d4d;
  min-width: 230px;
  max-width: 1050px;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 300;
}
.todo-container h1 {
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
}
.routercontent{
  padding-top: 16px;
}
</style>
