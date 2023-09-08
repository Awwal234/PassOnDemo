<script setup lang="ts">
const tables = [
    {
        id: '#1212312',
        ordername: 'withdrawal',
        date: '18|04|2023',
        amount: '20,000'
    },
    {
        id: '#1212314',
        ordername: 'withdrawal',
        date: '22|04|2023',
        amount: '35,000'
    }
]
</script>
<template>
    <div class="h-fit">
        <div class="flex mb-[21px] justify-between items-center">
            <div class="text-[#101828] hanken text-[32px] font-[700]">Finances</div>
            <div class="text-[#101828 hanken text-[24px] font-[700]]">Withdraw</div>
        </div>
        <div class="py-[40px] mb-[52px] px-[32px] bg-[#101828] rounded-[15px]">
            <div class="text-[#fff] mb-[14px] hanken text-[24px] font-[700]">Total balance</div>
            <div class="text-[#fff] hanken text-[24px] font-[700]">NGN<span class="text-[38px]">0</span></div>
        </div>
        <div class="mb-[26px] items-center">
            <div class="text-[#000] hanken text-[28px] font-[600]">
                Recent transactions
            </div>
        </div>
        <div class="rounded-t-[15px] pb-[183px] bg-[#d9d9d9]">
            <div
                class="py-[13px] mb-[27px] w-full space-x-[10px] flex rounded-t-[15px] border bg-[#101828] border-[#333] px-[41px]">
                <div class="w-[25%] text-[#fff] hanken text-[20px] font-[500] tracking-[0.2px]">
                    Code
                </div>
                <div class="w-[25%] text-[#fff] hanken text-[20px] font-[500] tracking-[0.2px]">
                    Type
                </div>
                <div class="w-[25%] text-[#fff] hanken text-[20px] font-[500] tracking-[0.2px]">
                    Date
                </div>
                <div class="w-[25%] text-[#fff] hanken text-[20px] font-[500] tracking-[0.2px]">
                    Amount
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
                    <div class="w-[25%] hanken">
                        -NGN<span class="text-[20px]">{{ table.amount }}</span>
                    </div>
                </div>
            </div>
        </div>
        <!---->
    </div>
</template>