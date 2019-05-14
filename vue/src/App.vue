<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1"><router-link tag="div" to="/eventBus">eventBus</router-link></el-menu-item>
      <el-menu-item index="2"><router-link tag="div" to="/provideInject">provideInject</router-link></el-menu-item>
      <el-menu-item index="3"><router-link tag="div" to="/dispatchBroadcase">dispatchBroadcase</router-link></el-menu-item>
      <el-menu-item index="4"><router-link tag="div" to="/vuexCon">vuexCon</router-link></el-menu-item>
    </el-menu>
      <router-link to="/eventBus"></router-link>
    <router-view />
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'app',
    data () {
      return {
        activeIndex: "1"
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>
<style lang="stylus">
*
  margin 0
  padding 0
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
