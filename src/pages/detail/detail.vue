<template>
    <div class="detail-content">
        <div class="article-title">vue常见问题的解决小技巧 <infos-bar /></div>
            <p class="detail-content">
                本博客是用vue搭建，虽然简单，但是也涉及vue基本功能和用法，包括路由，组件通信，公共组件的封装等.在这简单博客搭建遇到一些小问题，下面分享下这些问题及解决的小技巧:
            </p>
            <p class="detail-title">
                1.页面滚动位置的问题.
            </p>
            <p class="detail-content">
                当页面路由周六切换的时候，发现页面滚动的位置不变。例如a页面滚动到100px的位置，此时通过路由跳转到b页面，b页面的滚动位置不是在最顶部而是在100px的位置处，我们希望路由跳转到新的组件之后，页面滚动到顶部，
                而不是保持之前的滚动位置，我们需要修改router配置项,以我自己项目为例,
                打开router的配置文件，加上scrollBehavior这一段话:
                <img src="./img/1.jpg" alt="" @click="previewImage">
                <pre v-highlight>
                    <code class="lang-javascript">
                       scrollBehavior (to, from, savedPosition) {
                            if (savedPosition) {
                                // 前进后退
                                return savedPosition
                            } else {
                                // 如果不是通过上述行为切换组件，就会让页面回到顶部
                                return {x: 0, y: 0}
                            }
                        }
                    </code>
                </pre>
            </p>
        <v-comment />

        <van-image-preview v-model="show" :images="images" />
    </div>
</template>

<script type="text/ecmascript-6">

    export default {
        name: '',
        data(){
            return {
                show:false,
                images:[require("@pages/detail/img/1.jpg")]
            }
        },
        created() {
//            hljs.highlightBlock(ele)
        },
        mounted() {

        },
        methods: {
            previewImage(){
                this.show = true;
            }
        },
        components: {}
    }
</script>

<style scoped lang="less">

</style>
