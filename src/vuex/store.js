/**
 * Created by extra_zhao on 2019/12/30.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    // 定义状态
    state: {
        author: 'extra_zhao'
    },
    mutations:{
        newAuthor(state,msg){
            state.author = msg
        }
    }
})

export default store