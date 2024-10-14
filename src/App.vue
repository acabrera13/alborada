<script setup>
  import { ref, onMounted } from 'vue';
  import { RouterLink, RouterView } from 'vue-router'
  import Reserva from '@/components/Reserva.vue'
  import LogoAlborada from '@/assets/LogoAlborada.svg'

  const menues = ref([
      {
          label: 'Inicio',
          to: '/'
      },
      {
          label: 'Acerca de',
          to: '/acerca'
      },
      {
          label: 'Contacto',
          to: '/contacto'
      }
  ]);
</script>

<template>
  <div class="
  font-Sen 
  rounded-b-xl
  ml-[5%] 
  mr-[5%] 
  w-[90%]
  md:w-full
  md:ml-[0px]
  md:mr-[0px]
  md:rounded-none
  sm:w-full
  sm:ml-[0px]
  sm:mr-[0px]
  sm:rounded-none  
  top-0 fixed z-[9] bg-white px-32 h-[83px] md:px-0 sm:px-0 md:h-[75px] sm:h-[67px]">
    <Menubar 
      pt:root:class="flex justify-between bg-transparent"
      :model="menues"
    >
      <template #start>
        <img :src="LogoAlborada" class="w-56 md:w-52 sm:w-40" alt="">
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <RouterLink v-ripple :to="item.to" :class="props.action.class">
          {{ item.label }}
        </RouterLink>
      </template>
    </Menubar>
  </div>
  <RouterView />
  <div>
    <div class="font-Sen bg-black text-slate-300 w-full py-8 px-32 md:px-8 sm:px-0 sm:text-center sm:space-y-2">
      <div>
        Encuentranos en 
      </div>
      <div class="flex justify-between items-center sm:block sm:space-y-1.5">
        <div>
          <i class="fa-solid fa-location-dot"></i>&nbsp;
          Av. Siempre Viva 333 - Comas, Lima - Peru
        </div>
        <div>
          <i class="fa-solid fa-phone"></i>&nbsp;
          +51 989 781 112
        </div>
        <div class="flex sm:justify-center">
          <a class="bg-slate-500 text-white w-[40px] h-[40px] flex justify-center items-center rounded-full cursor-pointer">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a class="bg-slate-500 text-white w-[40px] h-[40px] flex justify-center items-center rounded-full cursor-pointer mx-2.5">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a class="bg-slate-500 text-white w-[40px] h-[40px] flex justify-center items-center rounded-full cursor-pointer">
            <i class="fa-brands fa-tiktok"></i>
          </a>
        </div>
      </div>
     
    </div>
    <div class="font-Sen bg-black text-slate-300 text-center w-full py-2.5">
      Designed by ❤️ Luchito el bravo de bravos
    </div>
  </div>
  <Reserva/>
</template>
<style>
  .p-menubar-root-list{
    margin-top: -11px;
  }
</style>
