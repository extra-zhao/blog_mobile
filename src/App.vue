<template>
  <div id="app">
      <!--左侧为内容栏-->
      <div class='left-content-wrapper'>
          <div class="top-bar">
              <v-nav />
              <img src="@/assets/img/avatar.jpeg" alt="" class="avatar" @click="toggleMenuBar">
          </div>
          <div class="content">
              <router-view/>
          </div>
      </div>
      <!--右侧为菜单栏-->
      <div :class='[menuBarFlag?"right-menu-wrapper active":"right-menu-wrapper not-active"]'>
          <v-menu v-if="showMenuBar" />
      </div>
  </div>
</template>

<script>
export default {
  name: 'App',
    data(){
      return {
          showMenuBar:false,
          menuBarFlag:false
      }
    },
    created(){

    },
    mounted(){
        setTimeout(() => {
            this.showMenuBar = true;
        },1000)
    },
    methods:{
        toggleMenuBar(){
            this.menuBarFlag = !this.menuBarFlag;
        }
    },
    watch:{
        $route:function(to,from){
            this.menuBarFlag = false;
        }
    }
}
</script>

<style lang="less">
@import "assets/css/common.less";
</style>
