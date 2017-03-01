// make sure to call Vue.use(Vuex) if using a module system

// 创建一个 Counter 组件
const Counter = {
    template: `<div>{{ count }}</div>`,
    computed: {
        count () {
            return this.$store.state.count
        }
    }
}

const app = new Vue({
    el: '#app',
    // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
    store,
    components: {
        'counter':Counter },
    template: `
    <div class="app">
      <counter></counter>
    </div>
  `
})

