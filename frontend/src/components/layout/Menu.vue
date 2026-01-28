<template>
  <nav class="fixed top-6 left-1/2 -translate-x-1/2 z-50">
    <div
      class="flex gap-6 px-6 py-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-sm text-white shadow-lg"
    >
      <RouterLink
        v-for="item in menu"
        :key="item.path"
        :to="item.path"
        activeClass="transform scale-125"
        class="relative px-2 py-1 transition-all duration-300 hover:text-green"
      >
        {{ item.label }}
        <span
          class="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-green to-blue-500 transition-all duration-300 group-hover:w-full"
        ></span>
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
const menu = [
  { label: 'Intro', path: '/' },
  { label: 'Identité', path: '/identity' },
  { label: 'Projets', path: '/projects' },
  { label: 'Offres', path: '/pricing' },
  { label: 'Contact', path: '/contact' },
]
</script>
