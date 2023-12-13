<!-- eslint-disable vue/no-multiple-template-root -->
<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
    <div class="app">
        <header>
            <NavBar />
        </header>
        <main>
            <RouterView v-slot="{ Component }">
                <Transition name="fade" mode="out-in">
                    <component :is="Component" />
                </Transition>
            </RouterView>
        </main>
    </div>
</template>

<style scoped lang="scss">
.app {
    height: 100%;
    width: 100%;
}
header {
    display: flex;
    place-items: center;
    place-content: center;
    border-right: 1px solid var(--color-border);
}
main {
    margin: 0px 1rem 0px 1rem;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
@media (min-width: 1024px) {
    .app {
        display: grid;
        grid-template-columns: 1fr 15fr;
        padding: 0 rem;
    }
}
@media (max-width: 1024px) {
    header {
        border-bottom: 1px solid var(--color-border);
        border-right: 0;
    }
}
</style>
