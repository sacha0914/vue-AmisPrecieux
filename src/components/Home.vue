<script setup>
import { ref } from 'vue';

</script>

<template>
    <div id="Home">
        <div class="AmisPrecieux">
            <div class="Discover">
                <h1 class="AmisTitle">Amis Précieux </h1>
            </div>
            <div class="Logo">
                <img class="PointCercle" src="../assets/Hero Image Spot.svg" alt="">
                <img class="Panda" src="../assets/panda.svg" alt="">
            </div>
        </div>
        <div class="Separation">
        <img class="Line" src="../assets/Line-Dash.svg" alt="">
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
    margin: 100px;
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
    font-size: 130px;
    margin: 50px;
}

#Home .AmisPrecieux {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 250px;
}
#Home .Separation {
    /* padding: 300px; */
    width: 100vh;
    background-repeat: repeat-x;
}
#Home .Line {
    width: 100vh;
    padding-top: 25%;
background-repeat: repeat;

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