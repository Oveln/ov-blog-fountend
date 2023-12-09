<script setup lang="ts">
import { ref } from 'vue';
import { type Article } from '@/model/article';
import ArticleCard from '@/components/ArticleCard.vue';

let list = ref<Article[]>([])
async function getList() {
    let res = await fetch(import.meta.env.VITE_API_BASEURL + '/article/');
    let json = await res.json();
    console.log(json)
    if (json.code === 0) {
        list.value = json.data.list;
    }
}

getList()
</script>

<template>
    <div>
        <div v-for="article in list" :key="article.id">
            <ArticleCard :article="article"></ArticleCard>
        </div>
    </div>
</template>