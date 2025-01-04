<script >


import MainButton from "@/components/MainButton.vue";
import SlideInAnimation from "@/components/SlideInAnimation.vue";
import MainQuote from "@/components/MainQuote.vue";


export default {
  name: "EndRedirector",
  components: {MainQuote, SlideInAnimation,  MainButton},
  props:{
      textContent:String,
      link:String,


  },
  methods: {

  }

}
</script>

<template>
<div class="end-redirector-container">
  <span class="end-redirector-panel">
<slide-in-animation :is-right-direction="false" :delay="0" key-event="endRedirectorReveal">

  <div class="end-redirector-panel-content">
<main-quote>{{this.textContent}}</main-quote>
<router-link    class="text-content" :to="'/'+this.link">
  <main-button   key-event="endRedirectorReveal" :delay="1000">
  Show it !</main-button></router-link>
  </div>
</slide-in-animation>
  </span>
</div>

</template>
<style>
.text-content{

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  text-decoration: none;
  padding-left: 50px;
}
</style>

<style scoped lang="scss">
.end-redirector-container{
  position: relative;
  width: 100%;
  height: 30%;
  display: flex;

  justify-content: space-evenly;
  align-items: flex-end;
  padding-top:100px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
}
.end-redirector-panel{

  position: relative;
  padding-left: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 1rem ;
  background: $secondary-white-color;
  border-radius: 10px;


}
.text-content{

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  text-decoration: none;
  font-size: 11px;

}

.end-redirector-panel-content{
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  align-items: center;
  justify-content: space-around;
}



</style>
