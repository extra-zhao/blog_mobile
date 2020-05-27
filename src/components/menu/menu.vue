<template>
    <div class="user-info">
        <img src="@static/img/logo.png" alt="" class="logo">
        <van-divider :style="{ color: '#999',fontSize:'16px'}">赵益达</van-divider>
        <ul class="menu-list">
            <li :class='[($route.path == "/" || $route.path == "/index")?"active":""]' @click='$router.push({name:"index",params:{name:"123"}})'><i class="el-icon-extra-home" /><span>首页</span</li>
            <li :class='[$route.path == "/archive"?"active":""]' @click='$router.push({path:"/archive"})'><i class="el-icon-extra-office" /><span>归档</span></li>
            <li :class='[$route.path == "/dynamic"?"active":""]' @click='$router.push({path:"/dynamic"})'><i class="el-icon-extra-templatedefault" /><span>动态</span></li>
            <li :class='[$route.path == "/share"?"active":""]' @click='$router.push({path:"/share"})'><i class="el-icon-extra-smile" /><span>分享</span></li>
            <li :class='[$route.path == "/about"?"active":""]' @click='$router.push({path:"/about"})'><i class="el-icon-extra-bussinesscard" /><span>关于</span></li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">

    export default {
        name: '',
        data(){
            return {}
        },
        created() {

        },
        mounted() {

        },
        methods: {},
        components: {}
    }
</script>

<style scoped lang="less">
@import "./menu.less";
</style>
