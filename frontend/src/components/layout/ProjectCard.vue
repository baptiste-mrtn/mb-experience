<script setup>
defineProps({
  name: String,
  description: String,
  link: String,
})
</script>

<template>
  <div class="group relative">
    <!-- glow background -->
    <div
      class="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition duration-500 bg-linear-to-r from-green-500/30 to-cyan-500/30"
    ></div>

    <a
      v-if="link"
      :href="link"
      target="_blank"
      class="relative block rounded-2xl p-6 border border-white/15 bg-white/5 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-green/50"
    >
      <!-- title -->
      <h3 class="text-xl font-bold mb-2 tracking-wide group-hover:text-white transition">
        {{ name }}
      </h3>

      <!-- description -->
      <p class="text-sm text-gray-300 leading-relaxed">
        {{ description }}
      </p>

      <!-- link hint -->
      <div class="mt-4 text-xs text-green-300 opacity-0 group-hover:opacity-100 transition">
        Voir le projet →
      </div>
    </a>

    <div v-else class="relative rounded-2xl p-6 border border-white/15 bg-white/5 backdrop-blur-xl">
      <h3 class="text-xl font-bold mb-2">{{ name }}</h3>
      <p class="text-sm text-gray-300">{{ description }}</p>
    </div>
  </div>
</template>
