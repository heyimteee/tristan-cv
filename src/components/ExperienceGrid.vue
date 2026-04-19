<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  },
  compact: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="exp-grid" :class="{ compact }">
    <article
      v-for="(item, index) in items"
      :key="`${item.role}-${item.org}-${item.period}`"
      class="exp-card reveal-on-scroll"
      :style="{ '--delay': `${index * 90}ms` }"
    >
      <header>
        <h3>{{ item.role }}</h3>
        <p class="meta">{{ item.org }}</p>
        <p class="period">{{ item.period }}</p>
      </header>
      <ul>
        <li v-for="point in item.points" :key="point">{{ point }}</li>
      </ul>
    </article>
  </div>
</template>
