
import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        currentRoomAllMembers: 1,
    },
    actions: {
        updateAllMember:(context, payload) => {
            context.commit("add",);
        }
    },
    mutations: {  // 同步更新数据
        add(state, num){
            state.currentRoomAllMembers++;
        },
    },
    // plugins: [createPersistedState()]
})

export default store;
