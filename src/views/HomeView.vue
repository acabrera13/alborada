<script setup>
    import { ref, onMounted } from 'vue';

    const imagesHero = ref([
      {
        id: 1,
        src: '/src/assets/img/hero/imagen1.png',
        alt: 'test01'
      },
      {
        id: 2,
        src: '/src/assets/img/hero/imagen2.jpg',
        alt: 'test01'
      },
      {
        id: 3,
        src: '/src/assets/img/hero/imagen3.jpg',
        alt: 'test01'
      }
  ]);
  const imagesLanding = ref([
      {
        id: 1,
        src: '/src/assets/img/landing/imagen1.jpg',
        class : "bg-[url('/src/assets/img/landing/imagen1.jpg')]",
        alt: 'test01'
      },
      {
        id: 2,
        src: '/src/assets/img/landing/imagen2.jpg',
        class : "bg-[url('/src/assets/img/landing/imagen2.jpg')]",
        alt: 'test01'
      },
      {
        id: 3,
        src: '/src/assets/img/landing/imagen3.jpg',
        class : "bg-[url('/src/assets/img/landing/imagen3.jpg')]",
        alt: 'test01'
      }
  ]);
</script>
<template>
   <!--<div class="mt-[83px] md:mt-[75px] sm:mt-[67px]">-->
    <div>
        <vueper-slides 
            autoplay
            :pause-on-hover="true"
            :infinite="true"
            :arrows="true"
            fade 
            :touchable="false"
        >
        <template #arrow-left>
            <i class="fa-solid fa-chevron-left text-4xl ml-5 md:text-2xl md:ml-2.5 sm:text-lg sm:ml-1"></i>
        </template>

        <template #arrow-right>
            <i class="fa-solid fa-chevron-right text-4xl mr-5 md:text-2xl md:mr-2.5 sm:text-lg sm:mr-1"></i>
        </template>
            <vueper-slide v-for="image in imagesHero" 
            :key="image.id"
            :image="image.src" 
            />
        </vueper-slides>
   </div>
   <div class="bg-gradient-to-r from-xblue-500 to-xsky-500 py-8">
        <h2 class="font-Sen font-extrabold text-2xl text-center text-xblue-200">Conocenos</h2>
   </div>
   <div class="font-Sen bg-white py-8">
        <h2 class="text-2xl text-center mb-5 font-bold"> Tu bienestar es nuestra prioridad</h2>
        <div class="grid grid-cols-3 gap-36 px-32 sm:grid-cols-1 md:px-5 sm:px-5 sm:gap-8">
          <div class="text-center">
            <div class="flex justify-center mb-3.5">
              <div :class="imagesLanding[0].class" class="w-[180px] h-[180px] bg-no-repeat bg-center rounded-full sm:w-[140px] sm:h-[140px]"></div>
            </div>
            <div class="mb-3.5 font-semibold">Servicio 1</div>
            <p class="mb-3.5 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Vivamus mattis lorem ut ligula tempor dignissim. 
              Aenean porttitor nisi vitae leo hendrerit, consectetur consectetur justo scelerisque. 
            </p>
            <Button as="router-link" label="Saber más" to="/" severity="secondary" />
          </div>
          <div class="text-center">
            <div class="flex justify-center mb-3.5">
              <div :class="imagesLanding[1].class" class="w-[180px] h-[180px] bg-no-repeat bg-center rounded-full sm:w-[140px] sm:h-[140px]"></div>
            </div>
            <div class="mb-3.5">Servicio 2</div>
            <p class="mb-3.5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Vivamus mattis lorem ut ligula tempor dignissim. 
              Aenean porttitor nisi vitae leo hendrerit, consectetur consectetur justo scelerisque. 
            </p>
            <Button as="router-link" label="Saber más" to="/" severity="secondary" />
          </div>
          <div class="text-center">
            <div class="flex justify-center mb-3.5">
              <div :class="imagesLanding[2].class" class="w-[180px] h-[180px] bg-no-repeat bg-center rounded-full sm:w-[140px] sm:h-[140px]"></div>
            </div>
            <div class="mb-3.5">Servicio 3</div>
            <p class="mb-3.5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Vivamus mattis lorem ut ligula tempor dignissim. 
              Aenean porttitor nisi vitae leo hendrerit, consectetur consectetur justo scelerisque. 
            </p>
            <Button as="router-link" label="Saber más" to="/" severity="secondary" />
          </div>
        </div>
   </div>
</template>
