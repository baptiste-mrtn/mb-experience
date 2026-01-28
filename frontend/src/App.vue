<script setup>
import Menu from '@/components/layout/Menu.vue'
import VideoBackground from '@/components/UI/VideoBackground.vue'
</script>

<template>
  <div class="w-screen h-screen relative overflow-hidden">
    <!-- VIDEO BACKGROUND -->
    <VideoBackground />

    <!-- OVERLAY -->
    <div class="absolute inset-0 bg-black/50 backdrop-blur-[2px] z-[-1]"></div>

    <Menu />

    <!-- SCENES -->
    <Transition name="scene" mode="out-in">
      <router-view />
    </Transition>
  </div>
</template>

<style>
.scene-enter-active,
.scene-leave-active {
  transition: all 0.8s cubic-bezier(0.77, 0, 0.175, 1);
}

.scene-enter-from {
  opacity: 0;
  transform: scale(1.05);
  filter: blur(10px);
}

.scene-leave-to {
  opacity: 0;
  transform: scale(0.95);
  filter: blur(10px);
}
</style>
