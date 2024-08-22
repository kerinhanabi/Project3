const app = Vue.createApp({
    data() {
      return {
        text: ''
      }
    },
    methods: {
      writeText(event) {
        this.text = event.target.value
      }
    }
  })
 app.mount('#app')