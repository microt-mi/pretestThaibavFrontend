<script setup>
    //import HelloWorld from './components/HelloWorld.vue'
    //import TheWelcome from './components/TheWelcome.vue'




</script>

<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: "app",
    };
    
</script>

<style>
/*    @font-face {
        font-family: 'NotoSansThai-VariableFont_wdth,wght';
        src: url('font/NotoSansThai-VariableFont_wdth,wght.ttf') format('truetype');
    }*/
/*    #app {
    
        font-family: "Noto Sans Thai", sans-serif;
        font-optical-sizing: auto;
        font-weight: 200;
        font-style: normal;
     
    
    }*/

</style>
<style scoped>
  

    header {
        line-height: 1.5;
    }

    .logo {
        display: block;
        margin: 0 auto 2rem;
    }

    @media (min-width: 1024px) {
        header {
            display: flex;
            place-items: center;
            padding-right: calc(var(--section-gap) / 2);
        }

        .logo {
            margin: 0 2rem 0 0;
        }

        header .wrapper {
            display: flex;
            place-items: flex-start;
            flex-wrap: wrap;
        }
    }
</style>
