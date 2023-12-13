<script setup lang="ts">
import { onBeforeMount, onUnmounted, ref } from "vue";
import { type Article } from "@/model/article";
import ArticleCard from "@/components/ArticleCard.vue";

let list = ref<Article[]>([]);
async function getList() {
    let res = await fetch(import.meta.env.VITE_API_BASEURL + "/article/");
    let json = await res.json();
    console.log(json);
    if (json.code === 0) {
        if (!(list.value === json.data.list)) {
            list.value = json.data.list;
            console.log("list updated");
        }
    }
}
let interval: number;
onBeforeMount(() => {
    getList();
    interval = setInterval(getList, 1000 * 10);
});
onUnmounted(() => {
    clearInterval(interval);
});
</script>

<template>
    <div class="article-list">
        <div v-for="article in list" :key="article.id">
            <ArticleCard :article="article"></ArticleCard>
        </div>
    </div>
</template>

<style scoped lang="scss">
.article-list {
    display: flex;
    height: 100%;
    flex-direction: column;
    place-content: center;
}
</style>
