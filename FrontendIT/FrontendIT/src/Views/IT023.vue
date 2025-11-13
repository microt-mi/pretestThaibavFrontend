<script setup>

    import { ref, onMounted } from "vue";
    import { jwtDecode } from "jwt-decode"; 
    const userName = ref("");
    const token = ref("");

    onMounted(() => {

      
        const token = localStorage.getItem("jwtToken");
        //if (username) {
        //    userName.value = username;
        //}
        if (token) {
            try {
                const decoded = jwtDecode(token);
                console.log("decoded token:", decoded);

               
                userName.value = decoded["unique_name"] || decoded["name"] || "";
            } catch (e) {
                console.error("JWT decode failed:", e);
            }
        }
    })

</script>

<template>
    <div id="app">
        <p v-if="userName"> Welcome User : {{ userName }}</p>
    </div>
</template>
<script>
    export default {
        name: "app",

    };

</script>

<style>

</style>
