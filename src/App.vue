<script setup>
import { nextTick, onBeforeUnmount, onMounted } from 'vue'
import cv from './data/cvData'
import SectionBlock from './components/SectionBlock.vue'
import EducationTimeline from './components/EducationTimeline.vue'
import ExperienceGrid from './components/ExperienceGrid.vue'

let revealObserver

onMounted(async () => {
  await nextTick()
  const revealItems = document.querySelectorAll('.reveal-on-scroll')
  if (!revealItems.length) {
    return
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          revealObserver.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -8% 0px'
    }
  )

  revealItems.forEach((item) => revealObserver.observe(item))
})

onBeforeUnmount(() => {
  if (revealObserver) {
    revealObserver.disconnect()
  }
})
</script>

<template>
  <div class="page-shell">
    <div class="bg-orb bg-orb-a" aria-hidden="true"></div>
    <div class="bg-orb bg-orb-b" aria-hidden="true"></div>

    <main class="cv-wrap">
      <header class="hero card">
        <div class="hero-copy">
          <div class="brand-mark">
            <span class="brand-logo">
              <img src="/logo.svg" alt="Site logo" />
            </span>
            <span>Tristan CV</span>
          </div>
          <p class="kicker">Curriculum Vitae</p>
          <h1>{{ cv.name }}</h1>
          <p class="subtitle">{{ cv.title }}</p>

          <div class="meta-row">
            <span class="meta-label">Student ID (NIM)</span>
            <strong class="meta-value">{{ cv.nim }}</strong>
          </div>

          <p class="summary">{{ cv.summary }}</p>

          <ul class="quick-info">
            <li>{{ cv.location }}</li>
            <li>{{ cv.phone }}</li>
            <li>{{ cv.email }}</li>
          </ul>

          <div class="contact-actions">
            <a :href="cv.links.github" target="_blank" rel="noreferrer">GitHub</a>
            <a :href="cv.links.linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
            <a :href="cv.links.email">Email</a>
          </div>
        </div>

        <figure class="hero-photo-wrap">
          <img
            class="hero-photo"
            :src="cv.photo"
            :alt="`Photo of ${cv.name}`"
            loading="eager"
          />
        </figure>
      </header>

      <SectionBlock title="Education" subtitle="Academic journey and formal studies">
        <EducationTimeline :items="cv.education" />
      </SectionBlock>

      <SectionBlock title="Experience" subtitle="Professional roles and leadership contributions">
        <ExperienceGrid :items="cv.experiences" />
      </SectionBlock>

      <SectionBlock title="Selected Projects" subtitle="Technical projects built and shipped">
        <ExperienceGrid :items="cv.projects" compact />
      </SectionBlock>

      <SectionBlock title="Technical Skills" subtitle="Core stack and technical strengths">
        <div class="skills-grid">
          <article
            v-for="(skill, index) in cv.skills"
            :key="`${skill.category}-${index}`"
            class="skill-card reveal-on-scroll"
            :style="{ '--delay': `${index * 90}ms` }"
          >
            <h3>{{ skill.category }}</h3>
            <p>{{ skill.items }}</p>
          </article>
        </div>
      </SectionBlock>
    </main>
  </div>
</template>
