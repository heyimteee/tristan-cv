<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <ol class="timeline">
    <li
      v-for="(item, index) in items"
      :key="`${item.institution}-${item.period}`"
      class="timeline-item reveal-on-scroll reveal-left"
      :style="{ '--delay': `${index * 100}ms` }"
    >
      <div class="dot" aria-hidden="true"></div>
      <article class="timeline-card">
        <h3>{{ item.institution }}</h3>
        <p class="meta">{{ item.degree }}</p>
        <p class="meta">{{ item.place }} | {{ item.period }}</p>
        <p class="detail">{{ item.detail }}</p>
      </article>
    </li>
  </ol>
</template>
