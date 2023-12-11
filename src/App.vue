<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
      <RouterView v-slot="{ Component }" >
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
  </main>
</template>

<style scoped lang="scss">
header {
  display: flex;
  place-items: center;
  place-content: center;
  border-right: 1px solid var(--color-border);
}
main {
  margin: 0px 1rem 0px 1rem;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
@media (max-width: 1024px) {
  header {
    border-bottom: 1px solid var(--color-border);
    border-right: 0;
  }
}
</style>
