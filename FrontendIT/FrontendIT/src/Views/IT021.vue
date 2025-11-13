<template>
    <div id="app">
        <b-container>
            <b-row>
                <b-col cols="6" style="position: center">
                    <label>Username</label><br />
                    <input type="text" v-model="username" placeholder="Username" /><br />
                    <label>Password</label><br />
                    <input type="password" v-model="password" placeholder="Password" /><br /><br />

                    <button @click="login">ลงชื่อเข้าใช้งาน</button><br /><br />
                    <router-link to="/IT022">สมัครสมาชิก</router-link>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import axios from "axios";
    import { useRouter } from "vue-router";

    const username = ref("");
    const password = ref("");
    const router = useRouter(); q


    const login = async () => {
        try {
            const payload = { UserName: username.value, Password: password.value };
            const res = await axios.post(
                "https://localhost:7173/api/UserManage/login",
                payload,
                { headers: { "Content-Type": "application/json" } }
            );

            localStorage.setItem("jwtToken", res.data.token);
            alert("Login success!");
            router.push("/IT023");
        } catch (err) {
            alert("Login failed: " + (err.response?.data || err.message));
        }
    };
</script>
