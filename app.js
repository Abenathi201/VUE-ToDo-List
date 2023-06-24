const app = Vue.createApp({
    // Any thing I write inside will be displayed within the div with the ID #app
    // It can be functions, data or anything
    // template: '<h2>Andre the Dummy</h2>'

    // Writing objects on the DOM and displaying the values using the keys or attributes
    data() {
        return {
            title: 'Vue-JS',
            desc: 'Currently learning the basics',
            age: 22,
        }
    },
    methods: {
        changeDesc() {
            this.desc = 'GETTING A HANG OF THIS'
        }
    },
})

// Below I'm taking the #app and mounting it on any element that has the id map in it and this will control everthing within that element
app.mount('#app')