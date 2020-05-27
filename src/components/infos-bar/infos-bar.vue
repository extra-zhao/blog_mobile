<template>
    <div class="infos-bar">
        <div><i class="el-icon-extra-attachment" /> js</div>
        <div><i class="el-icon-extra-calendar" /> 2019-01-06</div>
        <div><i class="el-icon-extra-good" /> 10</div>
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
    .infos-bar {
        display: flex;
        font-size: 24px;
        color: #999;
        div {
            margin-right: 60px;
            i {
                font-size: 24px;
            }
        }
    }
</style>
