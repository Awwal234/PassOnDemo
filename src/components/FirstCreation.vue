<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
import { ref } from 'vue'
const firstShow = ref(true)
const secondShow = ref(false)
const thirdShow = ref(false)

const nextOne = () => {
    firstShow.value = false;
    secondShow.value = true;
    thirdShow.value = false;
}
const goOne = () => {
    firstShow.value = true;
    secondShow.value = false;
    thirdShow.value = false;
}
const goThird = () => {
    firstShow.value = false;
    secondShow.value = false;
    thirdShow.value = true;
}
const goTwo = () => {
    firstShow.value = false;
    secondShow.value = true;
    thirdShow.value = false;
}

const signUp = () => {
    router.push('/home_application')
}
</script>

<template>
    <div class="w-[70%] px-[60px] py-[34px]">
        <div class="flex justify-between mb-[97px]">
            <div></div>
            <div
                class="p-[10px] text-center cursor-pointer w-[174px] text-[17px] text-[#fff] font-[600] rounded-[30px] inter bg-[#101828]">
                Log in
            </div>
        </div>
        <div v-show="firstShow">
            <div class="text-[#000] mb-[32px] hanken text-[42px] font-[600]">
                Hi, let’s get started
            </div>
            <!--form environment-->
            <div>
                <div class="text-[#1e1e1e] mb-[4px] inter text-[18px] font-[500] leading-[27.25px]">
                    <label for="name">Full name</label>
                </div>
                <div class="w-[50%] mb-[16px]">
                    <input autocomplete="off" id="name" type="text" placeholder="enter your full name here"
                        class="w-full input_shadow inter font-[400] text-[#667085] text-[16px] leading-[32.7px] py-[13.625px] px-[19.075px] border-[1.362px] border-[#d0d5dd] rounded-[30px] focus:outline-none" />
                </div>
                <div class="text-[#1e1e1e] mb-[4px] inter text-[18px] font-[500] leading-[27.25px]">
                    <label for="email">Business email</label>
                </div>
                <div class="w-full items-center flex mb-[16px]">
                    <div class="w-[50%]">
                        <input autocomplete="off" id="email" type="email" placeholder="enter your business email"
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
                        <input autocomplete="off" id="password" type="password"
                            class="w-full inter input_shadow font-[400] text-[#667085] text-[16px] leading-[32.7px] py-[13.625px] px-[19.075px] border-[1.362px] border-[#d0d5dd] rounded-[30px] focus:outline-none" />
                    </div>
                    <div class="w-fit cursor-pointer relative left-[-40px] h-fit">
                        <img src="/Image/mdieye.png" class="w-[21.8px] h-[21.8px]" />
                    </div>
                </div>
                <!--end pswd-->
                <div @click="nextOne"
                    class="w-[50%] inter mb-[15.75px] cursor-pointer text-[20px] font-[600] text-[#fff] py-[18px] bg-[#101828] rounded-[30px] text-center">
                    Next
                </div>
                <div class="pl-[80px] inter text-[16px] font-[400] text-[#667085] leading-[32.7px]">
                    Already, have an account ? <span
                        class="font-[500] cursor-pointer text-[#101828] hover:opacity-[0.8]">Log in</span>
                </div>
                <!--button-->
            </div>
            <!--end form environment-->
        </div>
        <!---->
        <!--get to know business-->
        <div v-show="secondShow">
            <div class="text-[#000] w-[60%] mb-[32px] hanken text-[42px] font-[600]">
                Let’s get to know your business
            </div>
            <!--form enviroment-->
            <div>
                <div class="text-[#1e1e1e] mb-[4px] inter text-[18px] font-[500] leading-[27.25px]">
                    <label for="b_name">Business name</label>
                </div>
                <div class="w-[50%] mb-[16px]">
                    <input autocomplete="off" id="b_name" type="text" placeholder="enter your name here"
                        class="w-full inter input_shadow font-[400] text-[#667085] text-[16px] leading-[32.7px] py-[13.625px] px-[19.075px] border-[1.362px] border-[#d0d5dd] rounded-[30px] focus:outline-none" />
                </div>
                <div class="text-[#1e1e1e] mb-[4px] inter text-[18px] font-[500] leading-[27.25px]">
                    <label for="type_ofb">Type of business</label>
                </div>
                <div class="w-full items-center flex mb-[16px]">
                    <div class="w-[50%]">
                        <input readonly autocomplete="off" id="type_ofb" type="text" placeholder="select your business type"
                            class="w-full inter input_shadow font-[400] text-[#667085] text-[16px] leading-[32.7px] py-[13.625px] px-[19.075px] border-[1.362px] border-[#d0d5dd] rounded-[30px] focus:outline-none" />
                    </div>
                    <div class="w-fit cursor-pointer relative left-[-40px] h-fit">
                        <img src="/Image/dropb.png" class="w-[18px] h-[9px]" />
                    </div>
                </div>
                <div class="text-[#1e1e1e] mb-[4px] inter text-[18px] font-[500] leading-[27.25px]">
                    <label for="b_number">Business phone number</label>
                </div>
                <div class="w-[50%] mb-[42px]">
                    <input autocomplete="off" id="b_number" type="tel" placeholder="enter your number here"
                        class="w-full inter input_shadow font-[400] text-[#667085] text-[16px] leading-[32.7px] py-[13.625px] px-[19.075px] border-[1.362px] border-[#d0d5dd] rounded-[30px] focus:outline-none" />
                </div>
                <div @click="goThird"
                    class="w-[50%] inter mb-[8px] cursor-pointer text-[20px] font-[600] text-[#fff] py-[18px] bg-[#101828] rounded-[30px] text-center">
                    Next
                </div>
                <div @click="goOne"
                    class="w-[50%] inter cursor-pointer text-[20px] font-[600] text-[#101828] py-[18px] bg-[#fff] rounded-[30px] text-center">
                    Previous
                </div>
            </div>
            <!--end form environment-->
        </div>
        <!--end get to know business-->
        <!--more about business-->
        <div v-show="thirdShow">
            <div class="text-[#000] w-[60%] mb-[29px] hanken text-[42px] font-[600]">
                Tell us more about your business
            </div>
            <div class="text-[#1e1e1e] mb-[4px] text-[18px] inter font-[500] leading-[27.25px]">
                More info about your business
            </div>
            <div class="w-[50%] mb-[87.25px] h-fit">
                <input placeholder="enter your info here"
                    class="w-full h-full input_shadow inter font-[400] text-[#667085] text-[16px] border-[1.362px] border-[#d0d5dd] bg-[#fff] rounded-[30px] px-[19.075px] pt-[13px] pb-[232px]" />
            </div>
            <div @click="signUp"
                class="w-[50%] inter mb-[8px] cursor-pointer text-[20px] font-[600] text-[#fff] py-[18px] bg-[#101828] rounded-[30px] text-center">
                Sign up
            </div>
            <div @click="goTwo"
                class="w-[50%] inter cursor-pointer text-[20px] font-[600] text-[#101828] py-[18px] bg-[#fff] rounded-[30px] text-center">
                Previous
            </div>
        </div>
        <!--end more-->
    </div>
</template>

<style scoped>
.input_shadow {
    box-shadow: 0px 1.3625px 2.725px 0px rgba(16, 24, 40, 0.05);
}
</style>
