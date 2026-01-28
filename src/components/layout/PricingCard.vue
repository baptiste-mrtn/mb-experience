<script setup>
defineProps({
  name: String,
  description: Array,
  price: String,
  border: String,
})
</script>

<template>
  <div
    class="glass card flex-1 px-8 py-10 text-center flex flex-col items-center border-2"
    :class="border"
  >
    <h2 class="text-3xl font-display mb-4">{{ name }}</h2>
    <div class="relative mb-6">
      <span
        class="absolute inset-0 blur-2xl opacity-40 group-hover:opacity-70 transition"
        :class="border.replace('border-', 'bg-')"
      ></span>

      <p
        class="relative text-5xl font-bold bg-linear-to-r from-green to-cyan-400 bg-clip-text text-transparent"
      >
        {{ price }}
      </p>
    </div>
    <ul class="text-gray-300 mb-6 list-none">
      <li v-for="item in description" :key="item" class="flex items-center gap-2 text-sm">
        <span class="w-1.5 h-1.5 rounded-full bg-green"></span>{{ item }}
      </li>
    </ul>
  </div>
</template>
