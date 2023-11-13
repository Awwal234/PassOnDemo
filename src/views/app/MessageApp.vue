<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
import { ref, onMounted } from 'vue'
const userName = ref('') as any
const userEmail = ref('') as any
const activeMsg = ref(0)
const goHome = () => {
    router.push('/home_application')
}
const goFinance = () => {
    router.push('/finance')
}
const displayUser = () => {
    userName.value = localStorage.getItem('name')
    userEmail.value = localStorage.getItem('email')
}
onMounted(() => {
    displayUser();
})
</script>
<template>
    <main class="bg-[#fff] hidden md:hidden lg:block min-h-[100vh] w-full">
        <div class="flex bg-[#fff] z-[100] w-full items-center pt-[38px] px-[63px] justify-between">
            <div
                class="p-[10px] text-center w-[144px] text-[24px] font-[700] text-[#101828] hanken rounded-[30px] bg-[#eaecf0]">
                PassOn
            </div>
            <div class="flex space-x-[10px]">
                <div class="w-[42px] h-[42px] bg-[#d9d9d9] rounded-full"></div>
                <div class="space-y-[3px]">
                    <div class="text-[#101828] hanken text-[22px] font-[600]">
                        {{ userName }}
                    </div>
                    <div class="text-[#808080] hanken text-[16px] font-[500]">
                        {{ userEmail }}
                    </div>
                </div>
            </div>
        </div>
        <!--flex part-->
        <div class="pt-[117.5px] h-[100%] absolute px-[63px] flex w-full">
            <div class="w-[20%] bg-[#fff]">
                <div @click="goHome" class="flex mb-[47px] cursor-pointer items-center space-x-[8px]">
                    <div><img src="/Image/homeicongray.svg" class="" /></div>
                    <div class="text-[#808080] hanken text-[22px] font-[700] hover:text-[#101828]">Home</div>
                </div>
                <div class="flex mb-[47px] cursor-pointer items-center space-x-[8px]">
                    <div><img src="/Image/messageicondark.svg" class="" /></div>
                    <div class="text-[#101828] hanken text-[22px] font-[700] hover:text-[#101828]">Messages</div>
                </div>
                <div @click="goFinance" class="flex mb-[47px] cursor-pointer items-center space-x-[8px]">
                    <div><img src="/Image/financeicon.svg" class="" /></div>
                    <div class="text-[#808080] hanken text-[22px] font-[700] hover:text-[#101828]">Finances</div>
                </div>
                <div class="flex mb-[47px] cursor-pointer items-center space-x-[8px]">
                    <div><img src="/Image/accounticon.svg" class="" /></div>
                    <div class="text-[#808080] hanken text-[22px] font-[700] hover:text-[#101828]">Account</div>
                </div>
            </div>
            <div class="w-[80%] mb-[112px] side h-[100%] overflow-y-scroll bg-[#fff]">
                <div class="flex h-[100%]">
                    <div class="w-[30%] h-fit">
                        <div class="text-[#101828] mb-[38px] font-[700] hanken text-[32px]">All messages</div>
                        <div class="flex mb-[22px] items-center space-x-[4px]">
                            <div class="text-[#1e1e1e] font-[500] hanken text-[20px]">Active message</div>
                            <div
                                class="bg-[#101828] text-[#fff] hanken text-[16px] font-[400] rounded-[30px] text-center py-[7px] px-[1px] w-[35px] h-[40px]">
                                {{ activeMsg }}
                            </div>
                        </div>
                    </div>
                    <!---->
                </div>
                <!---->
            </div>
        </div>
        <!---->
    </main>
</template>

<style scoped>
.side::-webkit-scrollbar {
    width: 2px;
    background: transparent;

}

.side::-webkit-scrollbar-track {
    width: 2px;
    background: transparent;
}

.side::-webkit-scrollbar-thumb {
    width: 2px;
    background: #101828;
}
</style>