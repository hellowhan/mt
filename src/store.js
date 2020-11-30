// vuex状态的封装 先引入vue 在引入vuex
// 调用use方法
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    position: {},
    userName: ''
};


const mutations = {
    setPosition(state, val) {
        state.position = val;
    },
    setUserName(state, val) {
        state.userName = val
    }
}

//不理解
const actions = {
    setPosition({ commit }, val) {
        // 异步请求后端获取当前位置数据
        commit('setPosition', val)
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})