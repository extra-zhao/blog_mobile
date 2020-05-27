/**
 * Created by extra_zhao on 2019/12/30.
 */
/**
 * Created by Admin on 2018/8/31.
 */
import Vue from 'vue'
import vheader from './header'
import vmenu from './menu'
import vnav from './nav'
import vcard from './card'
import infosBar from './infos-bar'
import vcomment from './comment'

const publicComponents = {
    'v-header':vheader,
    'v-menu':vmenu,
    'v-nav':vnav,
    'card-item':vcard,
    'infos-bar':infosBar,
    'v-comment':vcomment
}



Vue.use({
    install: Vue => {
        Object.keys(publicComponents).forEach(key => {
            Vue.component(`${key}`, publicComponents[key])
        })
    }
})



