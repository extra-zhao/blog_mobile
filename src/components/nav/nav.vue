<template>
    <div>
        <van-nav-bar
                :title="navBarinfo.title"
                :left-arrow="navBarinfo.back_arrow"
                @click-left="onClickLeft"
        />
    </div>
</template>

<script type="text/ecmascript-6">

    export default {
        name: '',
        data(){
            return {

            }
        },
        created() {

        },
        mounted() {

        },
        computed:{
            navBarinfo:function(){
                return this.$route.meta.navBar || {title:"赵益达",back_arrow:true}
            }
        },
        methods: {
            onClickLeft(){
                alert("返回")
            }
        },
        components: {}
    }
</script>

<style scoped lang="less">

</style>
