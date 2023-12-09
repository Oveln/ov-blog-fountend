<template>
    <div class = "article">
        <header>
            {{ article?.title }}
        </header>
        <main v-html="content"></main>
    </div>
</template>

<script setup lang="ts">
import type { Article } from '@/model/article';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import MarkdownIt from 'markdown-it';
// @ts-ignore
import markdownitLatex2img from 'markdown-it-latex2img'

let article = ref<Article>()
const route = useRoute();

async function getArticle(id: string) {
    let res = await fetch(import.meta.env.VITE_API_BASEURL + '/article/' + id);
    let json = await res.json();
    console.log(id)
    console.log(json)
    if (json.code === 0) {
        article.value = json.data;
    }
    return null;
}

let id = route.params.id;
// 如果id是string[],则取最后一个
if (Array.isArray(id)) {
    id = id[id.length - 1];
}
getArticle(id)

let content = computed(() => {
    let content = article.value?.content;
    // 如果content存在
    if (content) {
        // 将markdown转换为html
        let md = MarkdownIt().use(markdownitLatex2img);
        return md.render(content);
    }
    return "None"
})




</script>

<style lang="scss" scoped>
.article {
    height: calc(100vh - 60px);
    padding: 10px;
    border: 1px solid var(--color-border);
    border-radius: 4px;
    margin: 10px 0;
    display: flex;
    flex-direction: column;

}
header {
    font-size: 24px;
    font-weight: bold;
    color: var(--color-text);
    text-align: center;
}
main {
    margin: 0px 10px;
    height: 100%;
    font-size: 14px;
    color: var(--color-paratext);
    overflow-y: auto;
}
</style>