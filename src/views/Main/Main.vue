<template>
  <div>
    <div class="welcome-container">
      <a-avatar :size="64" icon="user" />
    </div>
    <div class="welcome-container">
      <a-input placeholder="请输入姓名" v-model="userName">
        <a-icon type="user" />
      </a-input>
     <a-button type="primary" @click="welcomeUser">开始使用</a-button>
    </div>
</div>
  
</template>

<script>
export default {
  data(){
    return{
     userName: ''
    }
  },
  methods: {
    welcomeUser() {
      this.$router.push(`/home/${this.userName}`);
    }
  }
};
</script>

<style scoped>
.welcome-container {
  /* width: 500px; */
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
