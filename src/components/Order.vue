<template>
    <div>
        <div
            class="w-full overflow-x-auto md:overflow-x-hidden mb-[20px] space-y-[50px] xl:space-y-[0px] lg:space-y-[50px] lg:space-x-[0px] xl:space-x-[20px] block lg:block xl:flex">
            <div
                class="xl:w-[55%] md:w-full w-fit overflow-x-scroll md:overflow-x-hidden lg:h-fit xl:h-fit lg:w-full bg-[#fff] border border-[#edf2f7] rounded-[14px] py-[21.5px] px-[20px]">
                <div class="flex mb-[14px] items-center justify-between">
                    <div class="text-[#26282c] leading-[26px] font-[600] plus text-[18px]">
                        Last Orders
                    </div>
                    <div class="text-[#34caa5] leading-[26px] font-[500] text-[18px] plus">
                        See All
                    </div>
                </div>
                <div
                    class="md:w-full w-fit overflow-x-scroll md:overflow-x-hidden space-x-[10px] mb-[20px] flex items-center">
                    <div class="md:w-[30%] w-[200px] text-left plus leading-[24px] font-[500] text-[#9ca4ab] text-[16px]">
                        Name
                    </div>
                    <div class="md:w-[20%] w-[200px] text-left plus leading-[24px] font-[500] text-[#9ca4ab] text-[16px]">
                        Date
                    </div>
                    <div class="md:w-[16%] w-[200px] text-left plus leading-[24px] font-[500] text-[#9ca4ab] text-[16px]">
                        Amount
                    </div>
                    <div class="md:w-[16%] w-[200px] text-left plus leading-[24px] font-[500] text-[#9ca4ab] text-[16px]">
                        Status
                    </div>
                    <div class="md:w-[16%] w-[200px] text-left plus leading-[24px] font-[500] text-[#9ca4ab] text-[16px]">
                        Invoice
                    </div>
                </div>
                <div class="h-[1px] w-full bg-[#edf2f6]"></div>
                <div class="md:w-full w-fit space-x-[10px] mt-[12px] mb-[12px] flex items-center">
                    <div
                        class="md:w-[30%] w-[200px] flex items-center space-x-[8px] text-left plus leading-[24px] font-[500] text-[#3a3f51] text-[16px]">
                        <div class="w-fit h-fit">
                            <img src="/avione.svg" class="" />
                        </div>
                        <div>Marcus Bergson</div>
                    </div>
                    <div class="md:w-[20%] w-[200px] text-left plus leading-[24px] font-[400] text-[#737373] text-[16px]">
                        Nov 15, 2023
                    </div>
                    <div class="md:w-[16%] w-[200px] text-left plus leading-[24px] font-[500] text-[#0d062d] text-[16px]">
                        $80,000
                    </div>
                    <div class="md:w-[16%] w-[200px] text-left plus leading-[24px] font-[400] text-[#34caa5] text-[16px]">
                        Paid
                    </div>
                    <div
                        class="md:w-[16%] w-[200px] flex items-center space-x-[6px] text-left plus leading-[22px] font-[400] text-[#0d062d] text-[14px]">
                        <div class="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path
                                    d="M6 11.8334C5.93333 11.8334 5.87333 11.82 5.80667 11.7934C5.62 11.72 5.5 11.5334 5.5 11.3334V7.33337C5.5 7.06004 5.72667 6.83337 6 6.83337C6.27333 6.83337 6.5 7.06004 6.5 7.33337V10.1267L6.98 9.64671C7.17333 9.45337 7.49333 9.45337 7.68667 9.64671C7.88 9.84004 7.88 10.16 7.68667 10.3534L6.35333 11.6867C6.26 11.78 6.12667 11.8334 6 11.8334Z"
                                    fill="#292D32" />
                                <path
                                    d="M5.99964 11.8334C5.87297 11.8334 5.7463 11.7867 5.6463 11.6867L4.31297 10.3534C4.11964 10.16 4.11964 9.84004 4.31297 9.64671C4.5063 9.45338 4.8263 9.45338 5.01964 9.64671L6.35297 10.98C6.5463 11.1734 6.5463 11.4934 6.35297 11.6867C6.25297 11.7867 6.1263 11.8334 5.99964 11.8334Z"
                                    fill="#292D32" />
                                <path
                                    d="M9.99967 15.1667H5.99967C2.37967 15.1667 0.833008 13.62 0.833008 10V6.00004C0.833008 2.38004 2.37967 0.833374 5.99967 0.833374H9.33301C9.60634 0.833374 9.83301 1.06004 9.83301 1.33337C9.83301 1.60671 9.60634 1.83337 9.33301 1.83337H5.99967C2.92634 1.83337 1.83301 2.92671 1.83301 6.00004V10C1.83301 13.0734 2.92634 14.1667 5.99967 14.1667H9.99967C13.073 14.1667 14.1663 13.0734 14.1663 10V6.66671C14.1663 6.39337 14.393 6.16671 14.6663 6.16671C14.9397 6.16671 15.1663 6.39337 15.1663 6.66671V10C15.1663 13.62 13.6197 15.1667 9.99967 15.1667Z"
                                    fill="#292D32" />
                                <path
                                    d="M14.6663 7.1667H11.9997C9.71967 7.1667 8.83301 6.28003 8.83301 4.00003V1.33337C8.83301 1.13337 8.95301 0.9467 9.13967 0.873366C9.32634 0.793366 9.53967 0.840033 9.68634 0.980033L15.0197 6.31337C15.1597 6.45337 15.2063 6.67337 15.1263 6.86003C15.0463 7.0467 14.8663 7.1667 14.6663 7.1667ZM9.83301 2.54003V4.00003C9.83301 5.72003 10.2797 6.1667 11.9997 6.1667H13.4597L9.83301 2.54003Z"
                                    fill="#292D32" />
                            </svg>
                        </div>
                        <div class="cursor-pointer">View</div>
                    </div>
                </div>
                <div class="h-[1px] w-full bg-[#edf2f6]"></div>
                <div class="md:w-full w-fit space-x-[10px] mt-[12px] mb-[12px] flex items-center">
                    <div
                        class="md:w-[30%] w-[200px] flex items-center space-x-[8px] text-left plus leading-[24px] font-[500] text-[#3a3f51] text-[16px]">
                        <div class="w-fit h-fit">
                            <img src="/avitwo.svg" class="" />
                        </div>
                        <div>Jaydon Vaccaro</div>
                    </div>
                    <div class="md:w-[20%] w-[200px] text-left plus leading-[24px] font-[400] text-[#737373] text-[16px]">
                        Nov 15, 2023
                    </div>
                    <div class="md:w-[16%] w-[200px] text-left plus leading-[24px] font-[500] text-[#0d062d] text-[16px]">
                        $150,000
                    </div>
                    <div class="md:w-[16%] w-[200px] text-left plus leading-[24px] font-[400] text-[#ed544e] text-[16px]">
                        Refund
                    </div>
                    <div
                        class="md:w-[16%] w-[200px] flex items-center space-x-[6px] text-left plus leading-[22px] font-[400] text-[#0d062d] text-[14px]">
                        <div class="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path
                                    d="M6 11.8334C5.93333 11.8334 5.87333 11.82 5.80667 11.7934C5.62 11.72 5.5 11.5334 5.5 11.3334V7.33337C5.5 7.06004 5.72667 6.83337 6 6.83337C6.27333 6.83337 6.5 7.06004 6.5 7.33337V10.1267L6.98 9.64671C7.17333 9.45337 7.49333 9.45337 7.68667 9.64671C7.88 9.84004 7.88 10.16 7.68667 10.3534L6.35333 11.6867C6.26 11.78 6.12667 11.8334 6 11.8334Z"
                                    fill="#292D32" />
                                <path
                                    d="M5.99964 11.8334C5.87297 11.8334 5.7463 11.7867 5.6463 11.6867L4.31297 10.3534C4.11964 10.16 4.11964 9.84004 4.31297 9.64671C4.5063 9.45338 4.8263 9.45338 5.01964 9.64671L6.35297 10.98C6.5463 11.1734 6.5463 11.4934 6.35297 11.6867C6.25297 11.7867 6.1263 11.8334 5.99964 11.8334Z"
                                    fill="#292D32" />
                                <path
                                    d="M9.99967 15.1667H5.99967C2.37967 15.1667 0.833008 13.62 0.833008 10V6.00004C0.833008 2.38004 2.37967 0.833374 5.99967 0.833374H9.33301C9.60634 0.833374 9.83301 1.06004 9.83301 1.33337C9.83301 1.60671 9.60634 1.83337 9.33301 1.83337H5.99967C2.92634 1.83337 1.83301 2.92671 1.83301 6.00004V10C1.83301 13.0734 2.92634 14.1667 5.99967 14.1667H9.99967C13.073 14.1667 14.1663 13.0734 14.1663 10V6.66671C14.1663 6.39337 14.393 6.16671 14.6663 6.16671C14.9397 6.16671 15.1663 6.39337 15.1663 6.66671V10C15.1663 13.62 13.6197 15.1667 9.99967 15.1667Z"
                                    fill="#292D32" />
                                <path
                                    d="M14.6663 7.1667H11.9997C9.71967 7.1667 8.83301 6.28003 8.83301 4.00003V1.33337C8.83301 1.13337 8.95301 0.9467 9.13967 0.873366C9.32634 0.793366 9.53967 0.840033 9.68634 0.980033L15.0197 6.31337C15.1597 6.45337 15.2063 6.67337 15.1263 6.86003C15.0463 7.0467 14.8663 7.1667 14.6663 7.1667ZM9.83301 2.54003V4.00003C9.83301 5.72003 10.2797 6.1667 11.9997 6.1667H13.4597L9.83301 2.54003Z"
                                    fill="#292D32" />
                            </svg>
                        </div>
                        <div class="cursor-pointer">View</div>
                    </div>
                </div>
                <div class="h-[1px] w-full bg-[#edf2f6]"></div>
                <div class="md:w-full w-fit space-x-[10px] mt-[12px] mb-[12px] flex items-center">
                    <div
                        class="md:w-[30%] w-[200px] flex items-center space-x-[8px] text-left plus leading-[24px] font-[500] text-[#3a3f51] text-[16px]">
                        <div class="w-fit h-fit">
                            <img src="/avithree.svg" class="" />
                        </div>
                        <div>Corey Schleifer</div>
                    </div>
                    <div class="md:w-[20%] w-[200px] text-left plus leading-[24px] font-[400] text-[#737373] text-[16px]">
                        Nov 14, 2023
                    </div>
                    <div class="md:w-[16%] w-[200px] text-left plus leading-[24px] font-[500] text-[#0d062d] text-[16px]">
                        $87,000
                    </div>
                    <div class="md:w-[16%] w-[200px] text-left plus leading-[24px] font-[400] text-[#34caa5] text-[16px]">
                        Paid
                    </div>
                    <div
                        class="md:w-[16%] w-[200px] flex items-center space-x-[6px] text-left plus leading-[22px] font-[400] text-[#0d062d] text-[14px]">
                        <div class="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path
                                    d="M6 11.8334C5.93333 11.8334 5.87333 11.82 5.80667 11.7934C5.62 11.72 5.5 11.5334 5.5 11.3334V7.33337C5.5 7.06004 5.72667 6.83337 6 6.83337C6.27333 6.83337 6.5 7.06004 6.5 7.33337V10.1267L6.98 9.64671C7.17333 9.45337 7.49333 9.45337 7.68667 9.64671C7.88 9.84004 7.88 10.16 7.68667 10.3534L6.35333 11.6867C6.26 11.78 6.12667 11.8334 6 11.8334Z"
                                    fill="#292D32" />
                                <path
                                    d="M5.99964 11.8334C5.87297 11.8334 5.7463 11.7867 5.6463 11.6867L4.31297 10.3534C4.11964 10.16 4.11964 9.84004 4.31297 9.64671C4.5063 9.45338 4.8263 9.45338 5.01964 9.64671L6.35297 10.98C6.5463 11.1734 6.5463 11.4934 6.35297 11.6867C6.25297 11.7867 6.1263 11.8334 5.99964 11.8334Z"
                                    fill="#292D32" />
                                <path
                                    d="M9.99967 15.1667H5.99967C2.37967 15.1667 0.833008 13.62 0.833008 10V6.00004C0.833008 2.38004 2.37967 0.833374 5.99967 0.833374H9.33301C9.60634 0.833374 9.83301 1.06004 9.83301 1.33337C9.83301 1.60671 9.60634 1.83337 9.33301 1.83337H5.99967C2.92634 1.83337 1.83301 2.92671 1.83301 6.00004V10C1.83301 13.0734 2.92634 14.1667 5.99967 14.1667H9.99967C13.073 14.1667 14.1663 13.0734 14.1663 10V6.66671C14.1663 6.39337 14.393 6.16671 14.6663 6.16671C14.9397 6.16671 15.1663 6.39337 15.1663 6.66671V10C15.1663 13.62 13.6197 15.1667 9.99967 15.1667Z"
                                    fill="#292D32" />
                                <path
                                    d="M14.6663 7.1667H11.9997C9.71967 7.1667 8.83301 6.28003 8.83301 4.00003V1.33337C8.83301 1.13337 8.95301 0.9467 9.13967 0.873366C9.32634 0.793366 9.53967 0.840033 9.68634 0.980033L15.0197 6.31337C15.1597 6.45337 15.2063 6.67337 15.1263 6.86003C15.0463 7.0467 14.8663 7.1667 14.6663 7.1667ZM9.83301 2.54003V4.00003C9.83301 5.72003 10.2797 6.1667 11.9997 6.1667H13.4597L9.83301 2.54003Z"
                                    fill="#292D32" />
                            </svg>
                        </div>
                        <div class="cursor-pointer">View</div>
                    </div>
                </div>
                <div class="h-[1px] w-full bg-[#edf2f6]"></div>
                <div class="md:w-full w-fit space-x-[10px] mt-[12px] mb-[12px] flex items-center">
                    <div
                        class="md:w-[30%] w-[200px] flex items-center space-x-[8px] text-left plus leading-[24px] font-[500] text-[#3a3f51] text-[16px]">
                        <div class="w-fit h-fit">
                            <img src="/avifour.svg" class="" />
                        </div>
                        <div>Cooper Press</div>
                    </div>
                    <div class="md:w-[20%] w-[200px] text-left plus leading-[24px] font-[400] text-[#737373] text-[16px]">
                        Nov 14, 2023
                    </div>
                    <div class="md:w-[16%] w-[200px] text-left plus leading-[24px] font-[500] text-[#0d062d] text-[16px]">
                        $100,000
                    </div>
                    <div class="md:w-[16%] w-[200px] text-left plus leading-[24px] font-[400] text-[#ed544e] text-[16px]">
                        Refund
                    </div>
                    <div
                        class="md:w-[16%] w-[200px] flex items-center space-x-[6px] text-left plus leading-[22px] font-[400] text-[#0d062d] text-[14px]">
                        <div class="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path
                                    d="M6 11.8334C5.93333 11.8334 5.87333 11.82 5.80667 11.7934C5.62 11.72 5.5 11.5334 5.5 11.3334V7.33337C5.5 7.06004 5.72667 6.83337 6 6.83337C6.27333 6.83337 6.5 7.06004 6.5 7.33337V10.1267L6.98 9.64671C7.17333 9.45337 7.49333 9.45337 7.68667 9.64671C7.88 9.84004 7.88 10.16 7.68667 10.3534L6.35333 11.6867C6.26 11.78 6.12667 11.8334 6 11.8334Z"
                                    fill="#292D32" />
                                <path
                                    d="M5.99964 11.8334C5.87297 11.8334 5.7463 11.7867 5.6463 11.6867L4.31297 10.3534C4.11964 10.16 4.11964 9.84004 4.31297 9.64671C4.5063 9.45338 4.8263 9.45338 5.01964 9.64671L6.35297 10.98C6.5463 11.1734 6.5463 11.4934 6.35297 11.6867C6.25297 11.7867 6.1263 11.8334 5.99964 11.8334Z"
                                    fill="#292D32" />
                                <path
                                    d="M9.99967 15.1667H5.99967C2.37967 15.1667 0.833008 13.62 0.833008 10V6.00004C0.833008 2.38004 2.37967 0.833374 5.99967 0.833374H9.33301C9.60634 0.833374 9.83301 1.06004 9.83301 1.33337C9.83301 1.60671 9.60634 1.83337 9.33301 1.83337H5.99967C2.92634 1.83337 1.83301 2.92671 1.83301 6.00004V10C1.83301 13.0734 2.92634 14.1667 5.99967 14.1667H9.99967C13.073 14.1667 14.1663 13.0734 14.1663 10V6.66671C14.1663 6.39337 14.393 6.16671 14.6663 6.16671C14.9397 6.16671 15.1663 6.39337 15.1663 6.66671V10C15.1663 13.62 13.6197 15.1667 9.99967 15.1667Z"
                                    fill="#292D32" />
                                <path
                                    d="M14.6663 7.1667H11.9997C9.71967 7.1667 8.83301 6.28003 8.83301 4.00003V1.33337C8.83301 1.13337 8.95301 0.9467 9.13967 0.873366C9.32634 0.793366 9.53967 0.840033 9.68634 0.980033L15.0197 6.31337C15.1597 6.45337 15.2063 6.67337 15.1263 6.86003C15.0463 7.0467 14.8663 7.1667 14.6663 7.1667ZM9.83301 2.54003V4.00003C9.83301 5.72003 10.2797 6.1667 11.9997 6.1667H13.4597L9.83301 2.54003Z"
                                    fill="#292D32" />
                            </svg>
                        </div>
                        <div class="cursor-pointer">View</div>
                    </div>
                </div>
                <div class="h-[1px] w-full bg-[#edf2f6]"></div>
                <div class="md:w-full w-fit space-x-[10px] mt-[12px] flex items-center">
                    <div
                        class="md:w-[30%] w-[200px] flex items-center space-x-[8px] text-left plus leading-[24px] font-[500] text-[#3a3f51] text-[16px]">
                        <div class="w-fit h-fit">
                            <img src="/avifive.svg" class="" />
                        </div>
                        <div>Phillip Lubin</div>
                    </div>
                    <div class="md:w-[20%] w-[200px] text-left plus leading-[24px] font-[400] text-[#737373] text-[16px]">
                        Nov 13, 2023
                    </div>
                    <div class="md:w-[16%] w-[200px] text-left plus leading-[24px] font-[500] text-[#0d062d] text-[16px]">
                        $78,000
                    </div>
                    <div class="md:w-[16%] w-[200px] text-left plus leading-[24px] font-[400] text-[#34caa5] text-[16px]">
                        Paid
                    </div>
                    <div
                        class="md:w-[16%] w-[200px] flex items-center space-x-[6px] text-left plus leading-[22px] font-[400] text-[#0d062d] text-[14px]">
                        <div class="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path
                                    d="M6 11.8334C5.93333 11.8334 5.87333 11.82 5.80667 11.7934C5.62 11.72 5.5 11.5334 5.5 11.3334V7.33337C5.5 7.06004 5.72667 6.83337 6 6.83337C6.27333 6.83337 6.5 7.06004 6.5 7.33337V10.1267L6.98 9.64671C7.17333 9.45337 7.49333 9.45337 7.68667 9.64671C7.88 9.84004 7.88 10.16 7.68667 10.3534L6.35333 11.6867C6.26 11.78 6.12667 11.8334 6 11.8334Z"
                                    fill="#292D32" />
                                <path
                                    d="M5.99964 11.8334C5.87297 11.8334 5.7463 11.7867 5.6463 11.6867L4.31297 10.3534C4.11964 10.16 4.11964 9.84004 4.31297 9.64671C4.5063 9.45338 4.8263 9.45338 5.01964 9.64671L6.35297 10.98C6.5463 11.1734 6.5463 11.4934 6.35297 11.6867C6.25297 11.7867 6.1263 11.8334 5.99964 11.8334Z"
                                    fill="#292D32" />
                                <path
                                    d="M9.99967 15.1667H5.99967C2.37967 15.1667 0.833008 13.62 0.833008 10V6.00004C0.833008 2.38004 2.37967 0.833374 5.99967 0.833374H9.33301C9.60634 0.833374 9.83301 1.06004 9.83301 1.33337C9.83301 1.60671 9.60634 1.83337 9.33301 1.83337H5.99967C2.92634 1.83337 1.83301 2.92671 1.83301 6.00004V10C1.83301 13.0734 2.92634 14.1667 5.99967 14.1667H9.99967C13.073 14.1667 14.1663 13.0734 14.1663 10V6.66671C14.1663 6.39337 14.393 6.16671 14.6663 6.16671C14.9397 6.16671 15.1663 6.39337 15.1663 6.66671V10C15.1663 13.62 13.6197 15.1667 9.99967 15.1667Z"
                                    fill="#292D32" />
                                <path
                                    d="M14.6663 7.1667H11.9997C9.71967 7.1667 8.83301 6.28003 8.83301 4.00003V1.33337C8.83301 1.13337 8.95301 0.9467 9.13967 0.873366C9.32634 0.793366 9.53967 0.840033 9.68634 0.980033L15.0197 6.31337C15.1597 6.45337 15.2063 6.67337 15.1263 6.86003C15.0463 7.0467 14.8663 7.1667 14.6663 7.1667ZM9.83301 2.54003V4.00003C9.83301 5.72003 10.2797 6.1667 11.9997 6.1667H13.4597L9.83301 2.54003Z"
                                    fill="#292D32" />
                            </svg>
                        </div>
                        <div class="cursor-pointer">View</div>
                    </div>
                </div>
                <!--end all list-->
            </div>
            <!--end first flex-->
            <!--begin second flex-->
            <div
                class="xl:w-[45%] hidden md:block bg-[#fff] pl-[20px] pr-[16px] pt-[16px] pb-[32px] lg:h-fit xl:h-fit lg:w-full rounded-[8px]">
                <div class="flex mb-[20px] items-center justify-between">
                    <div class="text-[#26282c] leading-[26px] font-[600] plus text-[18px]">
                        Top Platform
                    </div>
                    <div class="text-[#34caa5] leading-[26px] font-[500] text-[18px] plus">
                        See All
                    </div>
                </div>
                <div class="mb-[17px] plus leading-[26px] font-[600] text-[18px] text-[#22242c]">
                    Book Bazar
                </div>
                <div class="w-full mb-[16px] h-fit rounded-[40px] bg-[#f5f5f5]">
                    <div class="h-[12px] lone w-[55%] rounded-[40px] bg-[#6160dc]"></div>
                </div>
                <div class="flex mb-[20px] items-center justify-between">
                    <div class="text-[#525252] leading-[26px] font-[400] plus text-[18px]">
                        $2,500,000
                    </div>
                    <div class="text-[#525252] leading-[26px] font-[400] plus text-[18px]">
                        +15%
                    </div>
                </div>
                <div class="mb-[17px] plus leading-[26px] font-[600] text-[18px] text-[#22242c]">
                    Artisan Aisle
                </div>
                <div class="w-full mb-[16px] h-fit rounded-[40px] bg-[#f5f5f5]">
                    <div class="h-[12px] ltwo w-[40%] rounded-[40px] bg-[#54C5EB]"></div>
                </div>
                <div class="flex mb-[20px] items-center justify-between">
                    <div class="text-[#525252] leading-[26px] font-[400] plus text-[18px]">
                        $1,800,000
                    </div>
                    <div class="text-[#525252] leading-[26px] font-[400] plus text-[18px]">
                        +10%
                    </div>
                </div>
                <div class="mb-[17px] plus leading-[26px] font-[600] text-[18px] text-[#22242c]">
                    Toy Troop
                </div>
                <div class="w-full mb-[16px] h-fit rounded-[40px] bg-[#f5f5f5]">
                    <div class="h-[12px] lthree w-[30%] rounded-[40px] bg-[#FFB74A]"></div>
                </div>
                <div class="flex mb-[20px] items-center justify-between">
                    <div class="text-[#525252] leading-[26px] font-[400] plus text-[18px]">
                        $1,200,000
                    </div>
                    <div class="text-[#525252] leading-[26px] font-[400] plus text-[18px]">
                        +8%
                    </div>
                </div>
                <div class="mb-[17px] plus leading-[26px] font-[600] text-[18px] text-[#22242c]">
                    XStore
                </div>
                <div class="w-full mb-[16px] h-fit rounded-[40px] bg-[#f5f5f5]">
                    <div class="h-[12px] lfour w-[30%] rounded-[40px] bg-[#FF4A55]"></div>
                </div>
                <div class="flex mb-[0px] items-center justify-between">
                    <div class="text-[#525252] leading-[26px] font-[400] plus text-[18px]">
                        $600,000
                    </div>
                    <div class="text-[#525252] leading-[26px] font-[400] plus text-[18px]">
                        +5%
                    </div>
                </div>
            </div>
            <!--end second flex-->
        </div>
        <div
            class="xl:w-[45%] mb-[20px] block md:hidden bg-[#fff] pl-[20px] pr-[16px] pt-[16px] pb-[32px] lg:h-fit xl:h-fit lg:w-[40%] rounded-[8px]">
            <div class="flex mb-[20px] items-center justify-between">
                <div class="text-[#26282c] leading-[26px] font-[600] plus text-[18px]">
                    Top Platform
                </div>
                <div class="text-[#34caa5] leading-[26px] font-[500] text-[18px] plus">
                    See All
                </div>
            </div>
            <div class="mb-[17px] plus leading-[26px] font-[600] text-[18px] text-[#22242c]">
                Book Bazar
            </div>
            <div class="w-full mb-[16px] h-fit rounded-[40px] bg-[#f5f5f5]">
                <div class="h-[12px] lone w-[55%] rounded-[40px] bg-[#6160dc]"></div>
            </div>
            <div class="flex mb-[20px] items-center justify-between">
                <div class="text-[#525252] leading-[26px] font-[400] plus text-[18px]">
                    $2,500,000
                </div>
                <div class="text-[#525252] leading-[26px] font-[400] plus text-[18px]">
                    +15%
                </div>
            </div>
            <div class="mb-[17px] plus leading-[26px] font-[600] text-[18px] text-[#22242c]">
                Artisan Aisle
            </div>
            <div class="w-full mb-[16px] h-fit rounded-[40px] bg-[#f5f5f5]">
                <div class="h-[12px] ltwo w-[40%] rounded-[40px] bg-[#54C5EB]"></div>
            </div>
            <div class="flex mb-[20px] items-center justify-between">
                <div class="text-[#525252] leading-[26px] font-[400] plus text-[18px]">
                    $1,800,000
                </div>
                <div class="text-[#525252] leading-[26px] font-[400] plus text-[18px]">
                    +10%
                </div>
            </div>
            <div class="mb-[17px] plus leading-[26px] font-[600] text-[18px] text-[#22242c]">
                Toy Troop
            </div>
            <div class="w-full mb-[16px] h-fit rounded-[40px] bg-[#f5f5f5]">
                <div class="h-[12px] lthree w-[30%] rounded-[40px] bg-[#FFB74A]"></div>
            </div>
            <div class="flex mb-[20px] items-center justify-between">
                <div class="text-[#525252] leading-[26px] font-[400] plus text-[18px]">
                    $1,200,000
                </div>
                <div class="text-[#525252] leading-[26px] font-[400] plus text-[18px]">
                    +8%
                </div>
            </div>
            <div class="mb-[17px] plus leading-[26px] font-[600] text-[18px] text-[#22242c]">
                XStore
            </div>
            <div class="w-full mb-[16px] h-fit rounded-[40px] bg-[#f5f5f5]">
                <div class="h-[12px] lfour w-[30%] rounded-[40px] bg-[#FF4A55]"></div>
            </div>
            <div class="flex mb-[0px] items-center justify-between">
                <div class="text-[#525252] leading-[26px] font-[400] plus text-[18px]">
                    $600,000
                </div>
                <div class="text-[#525252] leading-[26px] font-[400] plus text-[18px]">
                    +5%
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { gsap } from 'gsap';
import { onMounted } from 'vue'

import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

const loadlines = () => {
    gsap.fromTo('.lone', { x: 0, width: 0 }, { x: 0, duration: 2, width: '55%', scrollTrigger: { trigger: '.lone', toggleActions: 'restart' } })
    gsap.fromTo('.ltwo', { x: 0, width: 0 }, { x: 0, duration: 2, width: '40%', scrollTrigger: { trigger: '.ltwo', toggleActions: 'restart' } })
    gsap.fromTo('.lthree', { x: 0, width: 0 }, { x: 0, duration: 2, width: '30%', scrollTrigger: { trigger: '.lthree', toggleActions: 'restart' } })
    gsap.fromTo('.lfour', { x: 0, width: 0 }, { x: 0, duration: 2, width: '30%', scrollTrigger: { trigger: '.lfour', toggleActions: 'restart' } })
}

onMounted(() => {
    loadlines();
})
</script>