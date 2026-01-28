<script setup></script>

<template>
  <video id="video-bg" class="video-bg" autoplay muted loop playsinline>
    <source src="../../assets/videos/background.mp4" type="video/mp4" />
  </video>
</template>

<style scoped>
.video-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1000;
  filter: brightness(0.35) contrast(1.15) saturate(0.85);
}
</style>
