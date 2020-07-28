import { createStore } from 'vuex'

const subModel = createStore({
    namespaced: true,
    state: {
        target: 'xxx'
    },
    
    mutations: {
        updateTarget(state, newTarget){
            state.target = newTarget
        }
    }
})

export default createStore({
    
    state: {
        
        id: 'xxxx',
        prefix: 'mini',
        name: 'wolf'
    },

    getters: {
        fullName(state){ return `${state.prefix}-${state.name}` }
    },

    mutations: {
         updateName(state, newName){
            state.name = newName
        }
    },
    moduels:{ subModel }
})
