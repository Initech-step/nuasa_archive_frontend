<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderBar from '@/components/Header.vue'
import FooterBar from '@/components/Footer.vue'
</script>

<template>
  <HeaderBar/>
  <RouterView />
  <FooterBar/>
</template>

