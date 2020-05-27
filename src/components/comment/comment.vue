<template>
    <div>
        <van-cell-group>
            <van-field
                    v-model="username"
                    clearable
                    label="称呼"
                    placeholder="兄台，尊姓大名"
            />
            <van-field
                    v-model="username"
                    clearable
                    label="联系方式"
                    placeholder="第一次跟陌生人要联系方式呢"
            />
            <van-field
                    v-model="message"
                    clearable
                    autosize
                    type="textarea"
                    maxlength="100"
                    placeholder="兄台，请指教,出招吧~"
                    show-word-limit
            >
                <van-button slot="button" size="small" type="primary">留言</van-button>
            </van-field>
        </van-cell-group>

        <comment-list />
    </div>
</template>

<script type="text/ecmascript-6">
    import commentList from './comment-list.vue'
    export default {
        name: '',
        data(){
            return {
                username:"",
                message:""
            }
        },
        created() {

        },
        mounted() {

        },
        methods: {},
        components: {
            'comment-list':commentList
        }
    }
</script>

<style scoped lang="less">

</style>
