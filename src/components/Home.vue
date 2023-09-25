<script setup>
import { ref } from 'vue';

</script>

<template>
    <div id="Home">
        <div class="AmisPrecieux">
            <div class="Discover">
                <p class="Welcome" style="margin: 0px; font-size: 16px;">Bienvenue chez</p>
                <h1 style="margin: 0px;" class="AmisTitle">Amis Précieux </h1>
                <h2>Une gamme de peluches respectueuses de l’environnement et pour la protection animale !</h2>
                <button class="Decouvrir" role="button">Découvrir </button>
            </div>
            <div class="Logo">
                <img class="PointCercle" src="../assets/HeroImageSpot.svg" alt="">
                <img class="Panda" src="../assets/panda.svg" alt="">
            </div>
        </div>
        <div class="Separation">
            <img class="Line" src="../assets/LineDash.svg" alt="">
        </div>
        <div class="Why">
            <h2>Pourquoi choisir Amis Précieux ?</h2>
            <Div class="OnBlock">
                <div class="Block">
                    <img class="LogoInRond"  src="../assets/hand-pointer.svg" alt="">
                    <img class="WhyImg" src="../assets/HeroImageSpot.svg" alt="">
                    <div class="TextInBlock">
                        <H3>Jeux Intéractifs</H3>
                        <p class="TextInBlockP">Chaque peluche est fournie avec un QR Code donnant accès à une large
                            bibliothèque de jeux dès 6 ans !</p>
                    </div>
                </div>
                <div class="Block">
                    <img class="LogoInRond" style="margin-top: 60px; margin-left: 25px;"  src="../assets/teddy.svg" alt="">

                    <img class="WhyImg" src="../assets/HeroImageSpot.svg" alt="">
                    <div class="TextInBlock">
                        <H3>Protection Animal</H3>
                        <p class="TextInBlockP">Une partie de vos dépenses sera reversés à des associations de lutte pour la protection animale</p>
                    </div>

                </div>
            </Div>
            <Div class="OnBlock">
                <div class="Block">
                    <img class="LogoInRond"  src="../assets/ballofthread.svg" alt="">

                    <img class="WhyImg" src="../assets/HeroImageSpot.svg" alt="">
                    <div class="TextInBlock">
                        <H3>Made in France</H3>
                        <p class="TextInBlockP">Nous nous engageons à offrir des produits de qualité respectueux de
                            l’environnement et les animaux !</p>
                    </div>
                </div>
                <div class="Block">
                    <img class="LogoInRond" style="margin-top: 30px; margin-left: 10px;"  src="../assets/palette.svg" alt="">

                    <img class="WhyImg" src="../assets/HeroImageSpot.svg" alt="">
                    <div class="TextInBlock">
                        <H3>Unisexe</H3>
                        <p class="TextInBlockP">Toutes nos peluches sont unisexes !</p>
                    </div>

                </div>
            </Div>
        </div>
        <div class="Collection">
            <img class="FondCarrousel" src="../assets/FondAcheter.svg" alt="">
            <img class="Carrousel" src="../assets/Collection1.svg" alt="">
        </div>
        <H3 style="display: flex; flex-wrap: wrap; text-align: center;">Des peluches saines pour votre enfant</H3>
        <div class="Separation">
            <img class="LineBot" src="../assets/LineDash.svg" alt="">
        </div>
        <div class="BlockUnDeux">
            <div class="UnDeux">
                <p class="Number" style="font-size: 60px; position: absolute;">1</p>
                <img style="margin-top: 40px;" class="RondEco" src="../assets/RondEco.svg" alt="">
                <img class="TraitVert" src="../assets/traitVert.svg" alt="">
                <h4>Écologique</h4>
                <p style="text-align:  center;">Notre combat ? Fabriquer des peluches Made In France respectueuse de
                    l’environnement</p>
            </div>
            <div class="UnDeux">
                <p class="Number" style="font-size: 60px; position: absolute;">2</p>
                <img style="margin-top: 40px;" class="RondEco" src="../assets/RondEco.svg" alt="">
                <img class="TraitVert" src="../assets/traitVert.svg" alt="">
                <h4>Protection</h4>
                <p style="text-align: center;">Nos peluches sont fabriquées à base de matières premières saines et sans danger</p>
            </div>
            <div class="UnDeux">
                <p class="Number" style="font-size: 60px; position: absolute;">3</p>
                <img style="margin-top: 40px;" class="RondEco" src="../assets/RondEco.svg" alt="">
                <img class="TraitVert" src="../assets/traitVert.svg" alt="">
                <h4>Contrôle</h4>
                <p style="text-align:  center;">Nos jeux sont créés avec un accès à un contrôle parental afin de limiter le temps d’écran sur smartphone ou tablette</p>
            </div>
            <div class="UnDeux">
                <p class="Number" style="font-size: 60px; position: absolute;">4</p>
                <img style="margin-top: 40px;" class="RondEco" src="../assets/RondEco.svg" alt="">
                <img class="TraitVert" src="../assets/traitVert.svg" alt="">
                <h4>Sécurité</h4>
                <p style="text-align:  center;">Chaque jour, une peluche achetée représente un pas supplémentaire pour lutter pour la cause animale. Luttons ensemble pour préserver les espèces rares, protéger l’environnement et sensibiliser les nouvelles générations</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

#Home {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 3%;
    /* margin: 0px 100px; */
 
}

#Home .LogoInRond {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    margin-top: 45px;
    margin-left: 20px;
    }

#Home .Why {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 50px;
    /* padding: 5p; */
}

#Home .Welcome {
    font-family: 'Poppins', sans-serif;
}

#Home .TraitVert {

    margin: 20px;
    /* padding: 5p; */
}

#Home .BlockUnDeux {
    margin: 0px 5%;
    display: flex;
    align-items: center;
}

#Home .UnDeux {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 3px;
    padding: 0px 50px;
    width: 20%;
    height: 600px;
    

}

#Home .Carrousel {
    position: absolute;
    z-index: 2;
    width: 750px;
}

#Home .FondCarrousel {
    /* position: absolute; */
    z-index: 1;
    width: 750px;
}

#Home .Collection {
    display: flex;
    align-items: center;
}

#Home .WhyImg {
    width: 150px;

}

#Home .TextInBlockP {
    display: flex;
    text-align: center;
    font-size: 18px;

}

#Home .TextInBlock {
    width: 350px;

}

#Home .Block {
    display: flex;
}

#Home .OnBlock {
    display: flex;
}

#Home .Logo {
    display: flex;

}

#Home .PointCercle {
    width: 45vh;
    z-index: 1;

}

#Home .Panda {
    padding-left: 3%;
    width: 50vh;
    z-index: 2;
    position: absolute;

}





#Home .AmisPrecieux {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    padding: 0px 7%;
}

#Home .Separation {
    padding-bottom: 4%;
}

#Home .Line {
    width: 70%;
    padding-top: 5%;
    position: absolute;
    left: 0%;
}

#Home .LineBot {
    width: 70%;
    padding-top: 5%;
    position: absolute;
    right: 0%;
}

#Home .Decouvrir {
    width: 200px;
    height: 50px;
    font-size: 18px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    background: #60547C;
    color: #fff;
    font-weight: bold;
    letter-spacing: 1px;
    border-radius: 50px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    border: 5px solid #121212;
    color: #fff;
    font-weight: bold;
    letter-spacing: 1px;
    box-shadow: 5px 5px 0px #000000;
    transition: box-shadow 0.3s, border 0.2s;


}

#Home .Decouvrir:hover {
    box-shadow: none;
    border: none;
    background: pink;
}

#Home .Number:hover {
    color: #8FD192;
}


@media screen and (max-width: 1000px) {
    #Home .TextInBlock {
    width: 250px;
}
#Home .BlockUnDeux {
    margin: 0px 5%;
    display: flex;
    align-items: center;
  justify-content: center;
    /* flex-direction: column; */
    flex-wrap: wrap;
}
#Home .AmisPrecieux {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    /* padding: 0px 7%; */
    flex-wrap: wrap;
}
#Home .Logo {
    display: none;
}
#Home .Collection {
    width: 100%;
}
#Home .Carrousel {
    position: absolute;
    z-index: 2;
    width: 100%;

}
#Home .FondCarrousel {
    /* position: absolute; */
    z-index: 1;
    width: 100%;
}
}

@media screen and (max-width: 810px) {
    #Home .OnBlock {
    display: flex;
    align-items: center;
    /* margin: 50px; */
  justify-content: center;
    flex-wrap: wrap;
}
#Home .AmisTitle{
    font-size: 40px;
}
h2{
    font-size: 20px;
}
h3{
    font-size: 20px;
}
#Home .TextInBlockP {
    display: flex;
    text-align: start;

    font-size: 12px;
    flex-wrap: wrap;
}
#Home .WhyImg {
    width: 120px;
    margin-top: 35px;
    margin-left: 10px;
}

}

</style>