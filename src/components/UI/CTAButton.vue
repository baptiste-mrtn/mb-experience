<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <router-link :to="link">
    <button
      class="btn-premium relative px-10 py-3 border border-white text-white bg-transparent rounded-full transition-all duration-500 hover:bg-linear-to-r hover:from-green hover:to-blue-900 active:scale-95 active:brightness-90"
    >
      <span class="relative z-10">{{ text }}</span>

      <!-- Glow gradient -->
      <span
        class="absolute inset-0 rounded-full opacity-0 blur-xl transition-opacity duration-500 hover:opacity-100 bg-linear-to-r from-green to-blue-900"
      ></span>
    </button>
  </router-link>
</template>
