const template = `<div> hi</div>`
const data = function data(){ return{
        title:"Vue3 Tutorial "
    }
}
const App={data , template}
Vue.createApp(App).mount('#vue-app')
// const app=Vue.createApp({
//    ,
//     // template:`<div> 
//     //     hi</div>`


// })
// app.mount("#vue-app");

// // console.log(Vue)
// console.log( Vue.createApp())
