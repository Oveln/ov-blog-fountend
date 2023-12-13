<template>
    <div class="article-card" @click="jump">
        <div class="article-title">
            {{ article.title }}
        </div>
        <div class="article-content">
            {{ article.content }}
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Article } from "@/model/article";
import type { PropType } from "vue";
import { useRouter } from "vue-router";

let router = useRouter();

let jump = () => {
    router.push("/article/" + props.article.id);
};

let props = defineProps({
    article: {
        type: Object as PropType<Article>,
        required: true
    }
});
</script>

<style lang="scss" scoped>
.article-card {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid var(--color-border);
    border-radius: 4px;
    margin: 10px 0;
    // 仅card边框有阴影
    &:hover {
        border: 1px solid var(--color-border-hover);
    }
}
.article-title {
    font-size: 16px;
    font-weight: bold;
    /* color: #333; */
    color: var(--color-text);
}
.article-content {
    margin-top: 6px;
    font-size: 14px;
    /* color: #666; */
    color: var(--color-paratext);
}
</style>
