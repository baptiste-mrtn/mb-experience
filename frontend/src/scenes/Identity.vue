<script setup>
import CTAButton from '@/components/UI/CTAButton.vue'
import { IconFileInfo } from '@tabler/icons-vue'
</script>

<template>
  <div class="scene flex flex-col items-center text-center justify-center px-6">
    <img src="@/assets/images/logo.webp" alt="MB Logo" class="w-25 h-25 mb-6" />

    <div class="flex justify-between items-center mb-8">
      <div class="glass glass-bordered p-6 rounded-lg text-left max-w-3xl">
        <h1 class="text-4xl font-bold mb-6 text-center">Mon Identité</h1>
        <p class="mb-4">
          Freelance spécialisé en développement web et mobile, je crée des expériences numériques
          sur mesure alliant design, performance et accessibilité.
        </p>
        <p class="mb-4">
          Passionné par les technologies web, je m'efforce de transformer les idées en solutions
          digitales innovantes et efficaces.
        </p>
        <p>
          Mon approche centrée utilisateur garantit des produits intuitifs et engageants, adaptés
          aux besoins spécifiques de chaque client.
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
      <a
        download
        href="CV_Baptiste_Martin.pdf"
        target="_blank"
        class="relative flex items-center gap-3 w-full sm:w-auto text-center px-10 py-3 border border-white text-white bg-transparent rounded-full transition-all duration-500 hover:bg-green"
      >
        <IconFileInfo class="w-5 h-5" />
        Télécharger le CV
      </a>

      <CTAButton class="w-full sm:w-auto" text="Mes projets" link="/projects" />
    </div>
  </div>
</template>
