<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

</script>

<template>
<div class="Header">
    <div class="logo">
        <img class="logoPanda" src="../assets/LogoMyDigitalStartUp3.svg" alt="">

    </div>


    <div class="nav--icon">

        <font-awesome-icon class="Icon" icon="fa-solid fa-cart-shopping" size="2xl" style="color: #000000;" />
      <router-view />


    <font-awesome-icon class="Icon" icon="fa-solid fa-user" size="2xl" style="color: #000000;"/> 
    </div>  

</div>
</template>

<style scoped >
.Header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #D2EDD3;
    padding: 20px;
    height: 100%;
}
.Header .logoPanda{
    height: 10vh;
    padding-left: 75px;
}
.Header .Icon{
/* height: 5vh; */
padding-right: 100px;


}
/* .Header .burger .trait{
    height: 3px;
    width: 23px;
    background: #000;
    margin-bottom: 3px;
} */
.Header .nav--icon{
    display: flex;
    align-items: flex-end;
    justify-content: end;
}
@media screen and (max-width: 810px) {

    .Header .Icon{
/* height: 5vh; */
padding-right: 50px;
}
.Header .logoPanda{
    height: 10vh;
    padding-left: 25px;
}
}



</style>