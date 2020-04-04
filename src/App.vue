<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <deepexi-card title="这是标题">内容区域</deepexi-card>
    <loading-button>hello world</loading-button>
    <list-container v-model="value" :tabs="routes" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value: "/dashboard/edit/info",
      routes: [
        {
          label: "基本信息",
          value: "/dashboard/edit/info"
        },
        {
          label: "数据配置",
          value: "/dashboard/edit/data"
        },
        {
          label: "权限管理",
          value: "/dashboard/edit/permission"
        }
      ]
    };
  },
  components: {}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: #2c3e50;
}
</style>
