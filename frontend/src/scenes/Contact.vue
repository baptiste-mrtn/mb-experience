<script setup>
import { onMounted, ref } from 'vue'
import { IconBrandLinkedin } from '@tabler/icons-vue'
import gsap from 'gsap'

const formName = ref('')
const formEmail = ref('')
const formMessage = ref('')
const status = ref('')
const error = ref('')

const sendForm = async () => {
  status.value = 'loading'
  console.log('Envoi du formulaire avec :', {
    name: formName.value,
    email: formEmail.value,
    message: formMessage.value,
  })
  try {
    const res = await fetch('api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formName.value,
        email: formEmail.value,
        message: formMessage.value,
      }),
    })

    const data = await res.json()

    if (data.success) {
      status.value = 'success'
      animateSuccess()
      formName.value = ''
      formEmail.value = ''
      formMessage.value = ''
    } else {
      status.value = 'error'
    }
  } catch (e) {
    status.value = 'error'
    error.value = e.message
    console.error('Erreur lors de l’envoi du formulaire :', e)
  }
}

const formContainer = ref(null)

onMounted(() => {
  const elements = formContainer.value.querySelectorAll('.fade-up')

  // entrée progressive
  gsap.from(elements, {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.15,
    ease: 'power3.out',
  })
})

const animateSuccess = () => {
  gsap.fromTo(
    '.form-box',
    { scale: 0.95, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.6, ease: 'power3.out' },
  )

  gsap.fromTo(
    '.success-msg',
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, delay: 0.2 },
  )
}
</script>

<template>
  <div class="scene flex flex-col items-center justify-center px-6">
    <div ref="formContainer" class="glass glass-bordered relative p-8 rounded-2xl max-w-3xl w-full">
      <!-- Titre -->
      <h1 class="fade-up text-4xl font-bold mb-6 text-center">Contactez-moi</h1>

      <!-- Sous-titre -->
      <p class="fade-up text-gray-300 mb-8 text-center">
        Une idée de projet ? Envoyez-moi un message et construisons-le ensemble.
      </p>

      <!-- Formulaire -->
      <form @submit.prevent="sendForm" class="form-box space-y-4">
        <div class="fade-up">
          <label for="name">Nom et Prénom:</label>
          <input
            class="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green transition-all duration-300"
            type="text"
            id="name"
            name="name"
            v-model="formName"
            required
          />
        </div>

        <div class="fade-up">
          <label for="email">Email:</label>
          <input
            class="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green transition-all duration-300"
            type="email"
            id="email"
            name="email"
            v-model="formEmail"
            required
          />
        </div>

        <div class="fade-up">
          <label for="message">Message:</label>
          <textarea
            class="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-green transition-all duration-300"
            id="message"
            name="message"
            v-model="formMessage"
            required
          ></textarea>
        </div>

        <input type="text" name="website" style="display: none" />

        <!-- CTA -->
        <div
          class="fade-up flex flex-col justify-between md:flex-row items-center gap-4 md:gap-6 mt-6"
        >
          <a
            href="https://linkedin.fr/baptiste-mrtn"
            target="_blank"
            class="flex items-center gap-3 px-8 py-3 border border-white text-white rounded-full transition-all duration-500 hover:bg-green hover:shadow-[0_0_25px_rgba(9,82,40,0.5)]"
          >
            <IconBrandLinkedin class="w-5 h-5" />
            Me contacter autrement
          </a>

          <button
            type="submit"
            class="relative px-8 py-3 border border-white text-white rounded-full transition-all duration-500 hover:bg-linear-to-r hover:from-green hover:to-cyan-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] active:scale-95 active:brightness-90"
          >
            <span v-if="status !== 'loading'">Envoyer</span>
            <span v-else>Envoi...</span>
          </button>
        </div>
        <p v-if="status === 'success'" class="success-msg">Message envoyé ✓</p>
        <p v-if="status === 'error'" class="error-msg">{{ error }}</p>
      </form>
    </div>
  </div>
</template>
