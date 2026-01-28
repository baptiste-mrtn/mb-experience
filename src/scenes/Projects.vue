<script setup>
import ProjectCard from '@/components/layout/ProjectCard.vue'
import CTAButton from '@/components/UI/CTAButton.vue'
import { IconBrandGithub } from '@tabler/icons-vue'

const projects = [
  {
    id: 1,
    name: 'ClimJac',
    description: 'Site vitrine pour une entreprise de climatisation et chauffage.',
    link: 'https://climjac.fr',
  },
  {
    id: 2,
    name: 'April Detectives',
    description: 'Site vitrine pour une agence de détectives privés à Grenoble.',
    link: 'https://www.detective-grenoble.fr/',
  },
  {
    id: 3,
    name: 'Pierre Papier Ciseaux',
    description: 'Jeu de Pierre, Papier, Ciseaux.',
    link: 'https://rps-game.martinbaptiste.fr/',
  },
  {
    id: 4,
    name: 'Discorev',
    description: "Plateforme web de création et gestion d'offres d'emplois.",
    link: 'https://discorev.fr',
  },
]
</script>
<template>
  <div class="scene flex flex-col items-center text-center justify-center md:pt-10 px-6">
    <div class="glass glass-bordered p-6 rounded-lg text-left max-w-3xl mb-8">
      <h1 class="text-4xl font-bold mb-6 text-center">Mes Projets</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full mb-10">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :name="project.name"
          :description="project.description"
          :link="project.link"
        />
      </div>
    </div>

    <!-- CTA -->
    <div class="flex items-center gap-50">
      <a
        href="https://github.com/baptiste-mrtn"
        target="_blank"
        class="relative flex items-center gap-3 px-10 py-3 border border-white text-white bg-transparent rounded-full transition-all duration-500 hover:bg-green"
      >
        <IconBrandGithub class="w-5 h-5" />
        Voir plus
      </a>

      <CTAButton text="Créons le vôtre" link="/pricing" />
    </div>
  </div>
</template>
