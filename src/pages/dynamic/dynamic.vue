<template>
    <div class="dynamic-wrapper">
        <div class="dynamic-item" @click="alert(1)">
            <div class="date-wrapper">
               <div class="date">06</div>
                <div class="year">2019/01</div>
            </div>
            <div class="dynamic-text">
                今天好多人晒支付宝年度账单，悄悄告诉大家，我的支付宝年度账单花费是两千多。
            </div>
        </div>
        <div class="dynamic-item" @click="alert(1)">
            <div class="date-wrapper">
                <div class="date">06</div>
                <div class="year">2019/01</div>
            </div>
            <div class="dynamic-text">
                今天好多人晒支付宝年度账单，悄悄告诉大家，我的支付宝年度账单花费是两千多。
            </div>
        </div>
        <div class="dynamic-item" @click="alert(1)">
            <div class="date-wrapper">
                <div class="date">06</div>
                <div class="year">2019/01</div>
            </div>
            <div class="dynamic-text">
                今天好多人晒支付宝年度账单，悄悄告诉大家，我的支付宝年度账单花费是两千多。
            </div>
        </div>
        <div class="dynamic-item" @click="alert(1)">
            <div class="date-wrapper">
                <div class="date">06</div>
                <div class="year">2019/01</div>
            </div>
            <div class="dynamic-text">
                今天好多人晒支付宝年度账单，悄悄告诉大家，我的支付宝年度账单花费是两千多。
            </div>
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
        methods: {
            alert(){
                alert(1)
            }
        },
        components: {}
    }
</script>

<style scoped lang="less">
.dynamic-wrapper{
    .dynamic-item{
        background-color: #fff;
        padding: 28px;
        display:flex;
        margin-bottom:10PX;
        border-radius:6px;
        .date-wrapper{
            font-size: 30px;
            text-align: center;
            flex-shrink: 0;
            margin-right:20px;
            .date{
                color: #666;
                font-size: 40px;
            }
            .year{
                color: #999;
            }
        }
        .dynamic-text{
            text-indent: 1em;
            color: #333;
        }
    }
}
</style>
