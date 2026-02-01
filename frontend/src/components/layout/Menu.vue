<template>
  <nav class="fixed top-6 left-1/2 -translate-x-1/2 z-50">
    <div
      class="flex sm:gap-6 sm:px-6 sm:py-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-sm text-white shadow-lg px-3 py-1 gap-4"
    >
      <RouterLink
        v-for="item in menu"
        :key="item.path"
        :to="item.path"
        activeClass="text-green-200 font-medium"
        class="relative font-small px-1 py-1 transition-all duration-300 hover:text-green-300 hover:text-md"
      >
        {{ item.label }}
        <span class="absolute left-0 -bottom-1 h-0.5 w-0"></span>
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
