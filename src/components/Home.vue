<script setup>
import { ref } from 'vue';

</script>

<template>
    <div id="Home">
        <div class="AmisPrecieux">
            <div class="Discover">
                <h1 class="AmisTitle">Amis Précieux </h1>
                <p>Une gamme de peluches respectueuses de l’environnement et luttant contre la protection animal !</p>
                <button class="Decouvrir" role="button">Découvrir </button>
            </div>
            <div class="Logo">
                <img class="PointCercle" src="../assets/HeroImageSpot.svg" alt="">
                <img class="Panda" src="../assets/panda.svg" alt="">
            </div>
        </div>
        <div class="Separation">
            <img class="Line" src="../assets/Line-Dash.svg" alt="">
        </div>
        <div class="Why">
            <h2>Pourquoi choisir Amis Précieux ?</h2>
            <Div class="OnBlock">
                <div class="Block">
                    <img src="../assets/HeroImageSpot.svg" alt="">
                    <div class="TextInBlock">
                        <H3>Jeux Intéractifs</H3>
                        <p class="TextInBlockP">Chaque peluche est fourni avec un QR Code donnant accès à une large
                            bibliothèque de jeux dès 6 ans !</p>
                    </div>
                </div>
                <div class="Block">
                    <img src="../assets/HeroImageSpot.svg" alt="">
                    <div class="TextInBlock">
                        <H3>Protection Animal</H3>
                        <p class="TextInBlockP">Une partie de vos dépenses seront reversés à des associations de lutte pour la protection animal</p>
                    </div>

                </div>
            </Div>
            <Div class="OnBlock">
                <div class="Block">
                    <img src="../assets/HeroImageSpot.svg" alt="">
                    <div class="TextInBlock">
                        <H3>Made in France</H3>
                        <p class="TextInBlockP">Nous nous engageons à offrir des produits de qualité respectueux de l’environnement et les animaux !</p>
                    </div>
                </div>
                <div class="Block">
                    <img src="../assets/HeroImageSpot.svg" alt="">
                    <div class="TextInBlock">
                        <H3>Unisexe</H3>
                        <p class="TextInBlockP">Toutes nos peluches sont unisexes !</p>
                    </div>

                </div>
            </Div>
        </div>
        <div class="Collection">
<img src="../assets/FondAcheter.svg" alt="">
        </div>
    </div>
</template>

<style scoped>
#Home {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 10%;
    margin: 0px 500px;

}

#Home .Why {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 50px;
}

#Home .TextInBlockP {
    display: flex;
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
    width: 40vh;
    z-index: 1;

}

#Home .Panda {
    padding-left: 3%;
    width: 40vh;
    z-index: 2;
    position: absolute;

}



#Home .Discover {
    /* font-size: 150px; */
    margin: 50px;
}

#Home .AmisPrecieux {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0px 300px;
}

#Home .Separation {
    padding: 200px;
    /* width: 100vh; */
    background-repeat: repeat-x;
}

#Home .Line {
    width: 100vh;
    padding-top: 5%;
    background-repeat: repeat;

}

#Home .Decouvrir {
    width: 800px;
    height: 220px;
    font-size: 80px;
    /* padding: 1rem 3rem; */
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    background: #60547C;
    border: none;
    color: #fff;
    font-weight: bold;
    letter-spacing: 1px;
    border-radius: 250px;
    box-shadow: -2px 4px 16px #d6d6d6;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    border: 10px solid #121212;
    color: #fff;
    font-weight: bold;
    letter-spacing: 1px;
    box-shadow: 10px 10px 0px #000000;
    transition: box-shadow 0.3s, border 0.2s;


}

#Home .Decouvrir:hover {
    box-shadow: none;
    border: none;
}


@media screen and (max-width: 700px) {
    #Header .Icon {
        display: none;
    }

    #Header .logoPanda {
        display: none;
    }

    #Header .nav--icon {
        display: none;
    }
}</style>