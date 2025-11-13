
<template>
    <div id="app">
        <b-container>
            <b-row>
                <!--<b-col cols="6">ซ้าย</b-col>-->
                <b-col cols="6">
                    <form @submit.prevent="submitForm">
                        <label>Username</label><br />
                        <input type="text" v-model="Username" /><br />
                        <label>Password</label><br />
                        <input type="password" v-model="password"  /><br />
                        <label>Confirm Password</label><br />
                        <input type="password" v-model="confirmPassword" /><br /><br />

                        <p v-if="confirmPassword && !match" style="color:red">
                            ConfirmPassword ไม่ตรงกับ Password
                        </p>

                        <button type="submit" :disabled="!match">สมัครสมาชิก</button><br /><br />

                    </form>

                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
    import { ref, computed, watch } from 'vue'
    import axios from 'axios'
    import router from "@/router";
   /* import router from './router'*/
    export default {
      
        setup() {
           /* const router = useRouter();*/
            const Username = ref('')
            const password = ref('')
            const confirmPassword = ref('')

            const match = computed(() => password.value === confirmPassword.value && password.value != "")
          
            const submitForm = () => {
                const formdata = new FormData();
                const payload = {
                    UserName: Username.value,
                    Password: password.value
                };
                //formdata.append('UserName', Username.value)
                //formdata.append('Password', password.value)
                axios.post("https://localhost:7173/api/UserManage", payload
                    ,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer $MySuperStrongJwtKey_kunanon_2025!`
                        }
                    }
                )
                    .then(res => {
                        console.log(res)
                        if (res.data == "Register success") {
                            alert("สมัครสมาชิกสำเร็จ")
                            router.push("/");


                        }

                    })
                    .catch(err => {
                        console.log(err);
                    });

            }
            console.log(password)

            const login = async () => {
                try {
                    const payload = {
                        UserName: this.username,
                        Password: this.password
                    };

                    const res = await axios.post(
                        "https://localhost:7173/api/UserManage/login",
                        payload,
                        { headers: { "Content-Type": "application/json" } }
                    );

                    const token = res.data.token;
                    localStorage.setItem("jwtToken", token);
                    alert("Login success!");
                } catch (err) {
                    console.error(err);
                    alert("Login failed");
                }
            }

            return { password, confirmPassword, Username , match, submitForm }

        }

        
        //  async login() {
        //    try {
        //        const payload = {
        //            UserName: this.username,
        //            Password: this.password
        //        };

        //        const res = await axios.post(
        //            "https://localhost:7173/api/UserManage/login",
        //            payload,
        //            { headers: { "Content-Type": "application/json" } }
        //        );

        //        const token = res.data.token;
        //        localStorage.setItem("jwtToken", token);
        //        alert("Login success!");
        //    } catch (err) {
        //        console.error(err);
        //        alert("Login failed");
        //    }
        //}
    };

</script>

