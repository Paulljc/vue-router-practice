<template>
  <div class="welcome-container">
    <input type="text" id="inputname" ref="userInput" placeholder="请输入姓名">
    <button @click="welcomeUser">开始使用</button>
  </div>
</template>

<script>
  export default {
    methods: {
      toHome() {
        this.$router.push('/home/Bill')
      },
      welcomeUser() {
        let name = this.$refs.userInput.value;
        this.$router.push('/home/'+name);
      }
    },
  }
</script>

<style>
.welcome-container {
  border: 1px solid black;
  width: 200px;
  height: 100px;
}
</style>
