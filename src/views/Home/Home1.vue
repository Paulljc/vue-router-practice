<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
    >
      <a-button type='primary' @click="goBack()" class="logo" size="small">返回</a-button>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1">
          <router-link :to="{path: `/home/${this.userName}`}">
            <a-icon type="ordered-list" />
            <span>TodoList</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link :to="{path: `/myInfo/${this.userName}`}">
            <a-icon type="user" />
            <span>MyProfile</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
        <span class="username">
          <a-icon type="user" />
          Hi,  {{userName}}</span>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data(){
    return {
      collapsed: false,
      userName: this.$route.params.id
    }
  },
  methods: {
    goBack() {
      var res = confirm("是否返回上一页？？");
      if (res == true) {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/welcome");
      }
    }
  }
}
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
.username{
  float: right;
  padding-right: 40px;
}
</style>