<template>
<div class="home">

<section class="hero-section">
<Hero />
<CpuCard />
</section>

</div>
</template>

<script setup>
import Hero from '../components/hero.vue'
import CpuCard from '../components/cpucard.vue'
</script>

<style scoped>
.home{
min-height:100vh;
background:#f5f6fa;
}

.hero-section{
max-width:1400px;
margin:auto;
padding:60px 40px;
display:grid;
grid-template-columns:1.2fr 1fr;
gap:50px;
align-items:center;
}

@media(max-width:900px){
.hero-section{
grid-template-columns:1fr;
}
}
</style>