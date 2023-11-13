<script setup lang="ts">
import axios from 'axios'
//@ts-ignore
import apiurl from '../api/base'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const form = reactive({
    password: '' as string,
    businessEmail: '' as string,
})
const back = () => {
    router.push('/')
}

const Login = async (e: any) => {
    e.preventDefault()
    try {
        const res = await apiurl.post('/api/auth/login', form)
        console.log(res.data)
        localStorage.setItem('name', res.data.fullname)
        localStorage.setItem('email', res.data.user_email)
        router.push('/home_application')
    } catch (err) {
        console.log(err)
    }
}
</script>

<template>
    <div class="w-[70%] px-[60px] py-[34px]">
        <div class="flex justify-between mb-[97px]">
            <div></div>
            <div @click="back"
                class="p-[10px] text-center cursor-pointer w-[174px] text-[17px] text-[#fff] font-[600] rounded-[30px] inter bg-[#101828]">
                Signup
            </div>
        </div>
        <div>
            <div class="text-[#000] mb-[32px] hanken text-[42px] font-[600]">
                Login
            </div>
            <!--form environment-->
            <div>
                <div class="text-[#1e1e1e] mb-[4px] inter text-[18px] font-[500] leading-[27.25px]">
                    <label for="email">Business email</label>
                </div>
                <div class="w-full items-center flex mb-[16px]">
                    <div class="w-[50%]">
                        <input v-model="form.businessEmail" autocomplete="off" id="email" type="email"
                            placeholder="enter your business email"
                            class="w-full inter input_shadow font-[400] text-[#667085] text-[16px] leading-[32.7px] py-[13.625px] px-[19.075px] border-[1.362px] border-[#d0d5dd] rounded-[30px] focus:outline-none" />
                    </div>
                    <div class="w-fit relative left-[-40px] h-fit">
                        <img src="/Image/helpicon.png" class="w-[21.8px] h-[21.8px]" />
                    </div>
                </div>
                <!--password-->
                <div class="text-[#1e1e1e] mb-[4px] inter text-[18px] font-[500] leading-[27.25px]">
                    <label for="password">Password</label>
                </div>
                <div class="w-full items-center flex mb-[42px]">
                    <div class="w-[50%]">
                        <input v-model="form.password" autocomplete="off" id="password" type="password"
                            class="w-full inter input_shadow font-[400] text-[#667085] text-[16px] leading-[32.7px] py-[13.625px] px-[19.075px] border-[1.362px] border-[#d0d5dd] rounded-[30px] focus:outline-none" />
                    </div>
                    <div class="w-fit cursor-pointer relative left-[-40px] h-fit">
                        <img src="/Image/mdieye.png" class="w-[21.8px] h-[21.8px]" />
                    </div>
                </div>
                <!--end pswd-->
                <div @click="Login"
                    class="w-[50%] inter mb-[15.75px] cursor-pointer text-[20px] font-[600] text-[#fff] py-[18px] bg-[#101828] rounded-[30px] text-center">
                    Login
                </div>
                <div class="pl-[80px] inter text-[16px] font-[400] text-[#667085] leading-[32.7px]">
                    Don&apos;t have an account ? <span @click="back"
                        class="font-[500] cursor-pointer text-[#101828] hover:opacity-[0.8]">Signup</span>
                </div>
                <!--button-->
            </div>
            <!--end form environment-->
        </div>
        <!---->
        <!--end get to know business-->
    </div>
</template>

<style scoped>
.input_shadow {
    box-shadow: 0px 1.3625px 2.725px 0px rgba(16, 24, 40, 0.05);
}
</style>
