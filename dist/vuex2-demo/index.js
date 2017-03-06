'use strict';

// make sure to call Vue.use(Vuex) if using a module system

var store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment: function increment(state) {
            return state.count++;
        },
        decrement: function decrement(state) {
            return state.count--;
        }
    }
});

var app = new Vue({
    el: '#app',
    computed: {
        count: function count() {
            return store.state.count;
        }
    },
    methods: {
        increment: function increment() {
            store.commit('increment');
        },
        decrement: function decrement() {
            store.commit('decrement');
        }
    }
});
//# sourceMappingURL=index.js.map