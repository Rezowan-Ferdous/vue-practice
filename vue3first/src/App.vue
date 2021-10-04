<template>
<h3> hello </h3>
<h1> {{ title.toUpperCase()  }} {{number+20}}</h1>
  <p> Something else </p>
  <div v-if="isShowing" v-html="renderhtml"></div> 
  <h3 v-else> this is v-else </h3>

  <p v-text="count"></p>
  <h5 v-once> {{ count}}</h5>
  <ul>
    <li v-for="dcHero  in dcHeros " :key="dcHero"  >
      {{dcHero.name}}
    </li>
  </ul>
  <input  v-bind:value="newHero" >
  <input  v-model.trim="newHero" />
</template>
<script>
// import from '@vue/composition-api'
export default {
  data(){
     return{
       isActive:true,
       newHero: "Aquaman",
       dcHeros:[{name:"SuperGirl"},
        {name: "Flash"},
        {name:"Batman"},
        {name: "Superman"},
        {name:"Arrow"}],
       title: 'this is the title ',
       number: 12,
       renderhtml: '<h4> this is rendered from scripts </h4>',  
      isShowing:false,
      count: 0
     };
  },
  mounted(){
    setInterval(()=>{
      this.count++;
    },1000);
  }

}
</script>
