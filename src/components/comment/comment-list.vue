<template>
    <div class="comment-list">
        <div class="comment-item">
            <img src="@static/img/logo.png" alt="" class="avatar">
            <div class="name">赵益达</div>
            <div class="comment-content">第一条留言给自己，虽然没人看，给自己鼓励。第一条留言给自己，虽然没人看，给自己鼓励。第一条留言给自己，虽然没人看，给自己鼓励。</div>
            <div class="date"><i class="el-icon-extra-calendar" /> 2019-01-06</div>
        </div>
        <div class="comment-item">
            <img src="@static/img/logo.png" alt="" class="avatar">
            <div class="name">赵益达</div>
            <div class="comment-content">第一条留言给自己，虽然没人看，给自己鼓励。第一条留言给自己，虽然没人看，给自己鼓励。第一条留言给自己，虽然没人看，给自己鼓励。</div>
            <div class="date"><i class="el-icon-extra-calendar" /> 2019-01-06</div>
        </div>
        <div class="comment-item">
            <img src="@static/img/logo.png" alt="" class="avatar">
            <div class="name">赵益达</div>
            <div class="comment-content">第一条留言给自己，虽然没人看，给自己鼓励。第一条留言给自己，虽然没人看，给自己鼓励。第一条留言给自己，虽然没人看，给自己鼓励。</div>
            <div class="date"><i class="el-icon-extra-calendar" /> 2019-01-06</div>
        </div>
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
.comment-list{
    .comment-item{
        padding:40px 0 24px 0;
        border-bottom:1px solid #e8e9e7;
        &:last-child{
             border-bottom: 0;
         }
        .avatar{
            float: left;
            width: 120px;
            height:120px;
            border-radius: 50%;
            border: 6px solid rgba(210, 210, 210, 0.2);
        }
        .name{
            font-size: 32px;
            color: #333;
            padding-left: 160px;
        }
        .comment-content{
            color: #666;
            font-size: 28px;
            padding-left: 160px;
            margin: 16px 0 6px 0;
        }
        .date{
            color: #999;
            font-size: 24px;
            padding-left: 160px;
            i{
                font-size: 24px;
            }
        }
    }
}
</style>
