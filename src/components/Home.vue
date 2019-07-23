<template>
  <div class="home-container">
    <input type="button" @click="goBack()" value="<< 返回" />
    <div class="container-header">Username : {{$route.params.id}}</div>
    <div class="left-nav">
      <ul>
        <li>
          <router-link to="/todoList">todoList</router-link>
        </li>
        <li>
          <router-link to="/myInfo">myInfo</router-link>
        </li>
      </ul>
    </div>
    <div class="right-nav">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goBack() {
      var res = confirm("是否返回上一页？？");
      if (res == true) {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/welcome");
      }
    }
  }
};
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
  list-style: none;
}
</style>