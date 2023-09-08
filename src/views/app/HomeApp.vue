<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
import { ref } from 'vue'
import DashBoard from '@/components/utils/DashBoard.vue'
const userName = ref('Kemi ventures')
const userEmail = ref('kemiventures@click.com')
const standaloneName = ref('Kemi')

const goFinance = () => {
    router.push('/finance')
}
const goMessage = () => {
    router.push('/message')
}
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
        <div class="pt-[117.5px] px-[63px] flex w-full">
            <div class="w-[20%] bg-[#fff]">
                <div class="flex mb-[47px] cursor-pointer items-center space-x-[8px]">
                    <div><img src="/Image/homeicon.svg" class="" /></div>
                    <div class="text-[#101828] hanken text-[22px] font-[700]">Home</div>
                </div>
                <div @click="goMessage" class="flex mb-[47px] cursor-pointer items-center space-x-[8px]">
                    <div><img src="/Image/messageicon.svg" class="" /></div>
                    <div class="text-[#808080] hanken text-[22px] font-[700] hover:text-[#101828]">Messages</div>
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
            <div class="w-[85%] mb-[112px] side h-fit overflow-y-scroll bg-[#fff]">
                <DashBoard :name="standaloneName" />
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