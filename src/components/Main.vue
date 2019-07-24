<template>
  <div class="welcome-container">
    <input type="text" id="inputname" ref="userInput" placeholder="请输入姓名" />
    <button @click="welcomeUser">开始使用</button>
  </div>
</template>

<script>
export default {
  methods: {
    welcomeUser() {
      this.$router.push(`/home/${this.$refs.userInput.value}`);
    }
  }
};
</script>

<style scoped>
.welcome-container {
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
