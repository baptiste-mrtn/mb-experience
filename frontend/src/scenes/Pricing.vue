<script setup>
import PricingCard from '@/components/layout/PricingCard.vue'
import CTAButton from '@/components/UI/CTAButton.vue'
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const cardsContainer = ref(null)
const offers = ref([
  {
    name: 'Starter',
    price: { value: '590€' },
    description: ['Site vitrine 1 page', 'Design sur mesure', 'Responsive et SEO de base'],
    border: 'border-amber-800',
    glow: '217,119,6',
  },
  {
    name: 'Pro',
    price: { value: '1 490€' },
    description: [
      'Site complet (3-5 pages)',
      'Dashboard admin simple',
      'Optimisation performance et responsive',
    ],
    border: 'border-zinc-400',
    glow: '161,161,170',
  },
  {
    name: 'Sur-mesure',
    price: { min: '2 900€', max: '5 900€' },
    description: [
      'Application / SaaS',
      'Dashboard avancé + API',
      'Support post-livraison 1 mois',
      'Développement fait-main complet',
    ],
    border: 'border-yellow-300',
    glow: '253,224,71',
  },
])

onMounted(() => {
  const cards = cardsContainer.value.querySelectorAll('.card')

  // 🎬 Entrée ciné des cartes
  gsap.from(cards, {
    opacity: 0,
    y: 80,
    scale: 0.95,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.15,
  })

  // 🧲 Effet hover premium
  cards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -12,
        boxShadow: `0 20px 50px rgba(${offers.value[index].glow},0.35),
        0 0 40px rgba(${offers.value[index].glow},0.25)`,
        duration: 0.4,
        ease: 'power2.out',
      })
    })

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
        duration: 0.4,
        ease: 'power2.out',
      })
    })
  })
})
</script>

<template>
  <div class="scene flex flex-col items-center justify-center px-6">
    <!-- Card container -->
    <div
      ref="cardsContainer"
      class="flex flex-col lg:flex-row gap-8 max-w-6xl w-full justify-center mb-8"
    >
      <PricingCard
        v-for="plan in offers"
        :key="plan.name"
        :name="plan.name"
        :price="plan.price"
        :description="plan.description"
        :border="plan.border"
      />
    </div>
    <span class="text-gray-300 mb-5">Prix à titre indicatif</span>
    <CTAButton text="Faire un devis" link="/contact" />
  </div>
</template>
