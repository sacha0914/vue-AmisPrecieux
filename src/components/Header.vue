<script setup>
import { ref } from 'vue';

const state = ref(false);



</script>

<template>
<div id="Header">
    <div class="logo">
        <img class="logoPanda" src="../assets/LogoMyDigitalStartUp 3.svg" alt="">
    </div>
    <!-- menu mobile -->
    <div class="burger" @click="state = !state" :class="{'burger-open' : state}" >
        <div class="trait"></div>
        <div class="trait"></div>
        <div class="trait"></div>
    </div>
    <div class="menu--burger" :class="{'open' : state}"  >
    
    </div>
    <!-- menu mobile -->

    <!-- menu dekstop -->
    <div class="nav--icon">
    <font-awesome-icon class="Icon" icon="fa-solid fa-cart-shopping" size="2xl" style="color: #000000;" />

    <font-awesome-icon class="Icon" icon="fa-solid fa-user" size="2xl" style="color: #000000;"/> 
    </div>  
    <!-- <ul class="links">
        <li v-for="(link, index) in links" :key="index">{{ link.name }}</li>
    </ul> -->
    <!-- menu dekstop -->



</div>
</template>

<style scoped>
#Header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #D2EDD3;
    padding: 20px;
}
#Header .logoPanda{
    height: 15vh;
    padding-left: 150px;
}
#Header .Icon{
height: 5vh;
padding-right: 400px;


}
#Header .burger .trait{
    height: 3px;
    width: 23px;
    background: #000;
    margin-bottom: 3px;
}
#Header .nav--icon{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 100px;
}
#Header .menu--burger{
    height: 100vh;
    width: 100%;
    left: 100%;
    background: #D2EDD3;
    position:fixed ;
    transition: 0.3s;
}
#Header .open{
    left: 0%;
}
#Header .burger-open{
    z-index: 2;
    background: #D2EDD3;
 }
#Header .links{
    display: none;
}



@media screen and (min-width: 700px){
   #Header .burger 
    ,#Header .menu--burger {
        display: none;
    }
   
}
@media screen and (max-width: 700px){
   #Header .Icon{
    display: none;
   }
    #Header .logoPanda{
        display: none;
    }
    #Header  .nav--icon{
        display: none;
    }
}
</style>