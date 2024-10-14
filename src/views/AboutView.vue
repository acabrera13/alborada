<script setup>
    import Testimonio from '@/components/Testimonio.vue'
</script>
<template>
    <div class="mt-[83px] md:mt-[75px] sm:mt-[67px]">
        <div class="bg-slate-200 py-8">
            <h2 class="text-2xl text-center">Sobre nosotros</h2>
        </div>
        <div class="grid grid-cols-2 gap-8 px-32 sm:grid-cols-1 md:px-5 sm:px-5 sm:gap-4 py-8">
            <div class="flex justify-center items-center">
                <img src="/src/assets/img/about/imagen1.jpg" alt="lic" class="h-[300px] w-auto">
            </div>
            <div class="flex justify-center items-center">
                <div>
                    <div class="mb-3.5 text-lg sm:text-center">Lic. Ivan Apellido Apellido</div>
                    <p class="mb-3.5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vivamus mattis lorem ut ligula tempor dignissim. 
                        Aenean porttitor nisi vitae leo hendrerit, consectetur consectetur justo scelerisque. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vivamus mattis lorem ut ligula tempor dignissim. 
                        Aenean porttitor nisi vitae leo hendrerit, consectetur consectetur justo scelerisque. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vivamus mattis lorem ut ligula tempor dignissim. 
                        Aenean porttitor nisi vitae leo hendrerit, consectetur consectetur justo scelerisque. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vivamus mattis lorem ut ligula tempor dignissim. 
                        Aenean porttitor nisi vitae leo hendrerit, consectetur consectetur justo scelerisque. 
                    </p>
                </div>
            </div>
        </div>
        <div class="py-8 text-center">
            <h2 class="text-2xl text-center">Testimonios y casos de éxito</h2>
            <div class="mx-auto max-w-[80%]">
                <vueper-slides
                    autoplay
                    :pause-on-hover="true"
                    :infinite="true"
                    :arrows="true"
                    fade 
                    :touchable="false"
                    class="no-shadow"
                    :visible-slides="3"
                    slide-multiple
                    :gap="3"
                    :dragging-distance="200"
                    :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
                >
                    <template #arrow-left>
                        <i class="fa-solid fa-chevron-left text-4xl ml-5 md:text-2xl md:ml-2.5 sm:text-lg sm:ml-1"></i>
                    </template>

                    <template #arrow-right>
                        <i class="fa-solid fa-chevron-right text-4xl mr-5 md:text-2xl md:mr-2.5 sm:text-lg sm:mr-1"></i>
                    </template>
                    <vueper-slide v-for="i in 10" :key="i" :title="i.toString()">
                    </vueper-slide>
                </vueper-slides>
            </div>
        </div>
    </div>
</template>