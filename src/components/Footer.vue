<script setup></script>

<template>
    <div id="Footer">
        <div class="Avis">
            <img class="ImgAvis1"  src="../assets/Avis1.svg" alt="">
            <p  style="text-align: center;margin: 0px 100px; font-size: 18px;">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui eum ratione repudiandae culpa maxime, voluptatibus eius earum voluptatem molestiae unde non quam voluptas cum explicabo! Vero quae quam eius delectus!</p>
            <img class="Ena" src="../assets/Avis2.svg" alt="">
            <p class="Ena" style="text-align: center;margin: 0px 100px; font-size: 18px;">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui eum ratione repudiandae culpa maxime, voluptatibus eius earum voluptatem molestiae unde non quam voluptas cum explicabo! Vero quae quam eius delectus!</p>

        </div>
        <div>
            <h3 style="text-align: center;">Rejoignez le combat</h3>
            <p style="text-align: center;margin: 0px 200px; font-size: 18px;">Chaque jour, une peluche achetée représente un
                pas supplémentaire pour lutter pour la cause animal. Luttons ensemble pour préserver les espèces rares,
                protéger l’environnement et sensibiliser les nouvelles générations</p>
        </div>
        <div class="Separation">
            <img class="Line" src="../assets/LineDash.svg" alt="">
        </div>
        <p>2023 © Amis Précieux | Privacy Policy</p>
        <a href="https://www.instagram.com/amisprecieux_/" target="_blank"> <font-awesome-icon icon="fa-brands fa-instagram"
                size="2xl" style="color: #2D3344;
        ;" /></a>
    </div>
</template>

<style scoped>
#Footer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* padding: 0px 100px; */
    padding-bottom: 100px;
}
#Footer .Avis {
    display: flex;
    width: 100%;
    background-color:  #D2EDD3;
    padding: 40px;
    align-items: center;
    margin-top: 100px;
    /* margin: 100px 0px;
    width: 100%; */

}
#Footer .Line {
    display: flex;
    justify-content: center;
    margin: 100px 0px;
    width: 100%;

}
#Footer .ImgAvis1 {
    margin-left: 150px;
}

@media screen and (max-width: 810px) {
#Footer .Ena{
    display: none;
}
#Footer .Avis {
    display: flex;
    width: 100%;
    background-color:  #D2EDD3;
    /* padding: 40px; */
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    /* margin: 100px 0px;
    width: 100%; */

}
#Footer .ImgAvis1 {
    margin: 5px;
}
}

</style>