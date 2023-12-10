<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/"><el-icon><House /></el-icon>Home</RouterLink>
      <RouterLink to="/about"><el-icon><User /></el-icon>About</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
header {
  display: flex;
  place-items: center;
  place-content: center;
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  // width: 100%;
  display: flex;
  flex-direction: column;
  place-items: center;
  place-content: center;
  height: 100%;
  font-size: 12px;
  text-align: center;
  border-left: 1px solid var(--color-border);
  border-right: 1px solid var(--color-border);
  a.router-link-exact-active {
    color: var(--color-text);
  }
  a.router-link-exact-active:hover {
    background-color: transparent;
  }
  a {
    display: flex;
    flex-direction: column;
    place-items: center;
    padding: 5px 1rem;
    margin: 0;
    el-icon {
      width: 50px;
    }
  }
}
main {
  margin: 0px 1rem 0px 1rem;
}
@media (max-width: 1024px) {
  nav {
    display: flex;
    flex-direction: row;
    place-items: center;
    place-content: center;
    border-left: 0;
    border-right: 0;
    font-size: 1rem;
    width: 100%;
    border-bottom: 1px solid var(--color-border);
    padding: 1rem 0;
  }
}
</style>
