<template>
    <div class="card-item">
        <div class="title">js数组操作</div>
        <div class="cover"><img src="@assets/img/sucai/banner.png" alt=""></div>
        <div class="detail-txt van-multi-ellipsis--l2">今天我们来谈谈js数组操作，数组的操作包括遍历、排序、去重、过滤等。</div>
        <infos-bar />
    </div>
</template>

<script type="text/ecmascript-6">
    import infosBar from './../infos-bar/infos-bar.vue'
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
        components: {
            'infos-bar':infosBar
        }
    }
</script>

<style scoped lang="less">
@import "./card.less";
</style>
