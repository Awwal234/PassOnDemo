<script setup lang="ts">
import DisplayCard from './DisplayCard.vue'
const tables = [
    {
        id: '#1212312',
        ordername: 'coffin creation',
        date: '18|04|2023',
    },
    {
        id: '#1212312',
        ordername: 'coffin creation',
        date: '18|04|2023',
    }
]
interface Props {
    name: string
}
const props = defineProps<Props>()
</script>
<template>
    <div class="h-fit">
        <div class="text-[#101828] mb-[4px] hanken text-[32px] font-[700]">
            Hello, {{ props.name }}
        </div>
        <div class="text-[#808080] mb-[44px] hanken text-[24px] font-[400]">
            Check how your business is performing
        </div>
        <div class="mb-[68px]">
            <DisplayCard />
        </div>
        <div class="flex mb-[26px] justify-between items-center">
            <div class="text-[#000] hanken text-[28px] font-[600]">
                Orders
            </div>
            <div class="text-[#000] hanken text-[22px] font-[400]">
                see all
            </div>
        </div>
        <div class="rounded-t-[15px] pb-[183px] bg-[#d9d9d9]">
            <div
                class="py-[13px] mb-[27px] w-full space-x-[10px] flex rounded-t-[15px] border bg-[#101828] border-[#333] px-[41px]">
                <div class="w-[25%] text-[#fff] hanken text-[20px] font-[500] tracking-[0.2px]">
                    Code
                </div>
                <div class="w-[25%] text-[#fff] hanken text-[20px] font-[500] tracking-[0.2px]">
                    Order name
                </div>
                <div class="w-[25%] text-[#fff] hanken text-[20px] font-[500] tracking-[0.2px]">
                    Date
                </div>
                <div class="w-[25%] text-[#fff] hanken text-[20px] font-[500] tracking-[0.2px]">
                    Action
                </div>
            </div>
            <div class="w-full px-[41px] mt-[42px]" v-for="table in tables" :key="table.id">
                <div class="flex w-full">
                    <div class="w-[25%] hanken">
                        {{ table.id }}
                    </div>
                    <div class="w-[25%] hanken">
                        {{ table.ordername }}
                    </div>
                    <div class="w-[25%] hanken">
                        {{ table.date }}
                    </div>
                    <div class="w-[25%] hanken flex space-x-[10px]">
                        <div
                            class="px-[15px] cursor-pointer text-[#fff] tracking-[0.15px] hanken text-[15px] text-center py-[6px] bg-[#3a9800] rounded-[6px]">
                            Accept
                        </div>
                        <div
                            class="px-[15px] cursor-pointer text-[#fff] tracking-[0.15px] hanken text-[15px] text-center py-[6px] bg-[#e12121] rounded-[6px]">
                            Reject
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!---->
    </div>
</template>