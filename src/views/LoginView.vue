<script setup lang="ts">
import SideSection from "@/components/SideSection.vue";
import LogUser from "@/components/LogUser.vue";
</script>

<template>
    <main class="bg-[#fff] w-full hidden md:hidden lg:block">
        <div class="w-full flex flex-row">
            <SideSection />
            <LogUser />
        </div>
    </main>
</template>