<template>
  <div class="home-container">
    <div class="container-header">Username : {{$route.params.id}}</div>
    <div class="left-nav">
      <ul>
        <li><router-link to="/todoList">todoList</router-link></li>
        <li><router-link to="/myInfo">myInfo</router-link></li>
      </ul>
    </div>
    <div class="right-nav">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style>
.home-container {
  border: 1px solid black;
  width: 100%;
  height: 800px;
}
.home-container .left-nav {
  position: relative;
  width: 15%;
  height: 85%;
  padding-top: 100px;
  border: 1px solid black;
  display: inline-block;
}
.home-container .right-nav {
  height: 780px;
  width: 84%;
  border: 1px solid black;
  display: inline-block;
  position: relative;
  float: right;
}
ul {
  list-style: none
}
</style>