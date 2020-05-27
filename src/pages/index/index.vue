<template>
    <div class="blog-list">
        <card-item />
        <card-item />
        <card-item />
        <card-item />
    </div>
</template>

<script>
    export default {
        name: 'index',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        computed: {
            author () {
                return this.$store.state.author
            }
        },
        methods:{
            setAuthor(){
                this.$store.commit("newAuthor",'new');
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "index.less";
</style>
