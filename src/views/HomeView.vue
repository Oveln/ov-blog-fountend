<script setup lang="ts">
import { onBeforeMount, onUnmounted, ref } from "vue";
import { type Article } from "@/model/article";
import ArticleCard from "@/components/ArticleCard.vue";

let list = ref<Article[]>([]);
async function getList() {
    // let res = await fetch(import.meta.env.VITE_API_BASEURL + "/article/");
    // let json = await res.json();
    // console.log(json);
    // if (json.code === 0) {
    //     if (!(list.value === json.data.list)) {
    //         list.value = json.data.list;
    //         console.log("list updated");
    //     }
    // }
}
list.value = {
    code: 0,
    msg: "success",
    data: {
        list: [
            {
                id: "6564752e0d6388a976e01e33",
                title: "你好",
                content: "this is second content",
                visible: true,
                create_time: "2023-11-27 10:53:34.157 +00:00:00",
                update_time: "2023-11-27 10:53:34.157 +00:00:00"
            },
            {
                id: "6565cb665b8efe5c69ff36ec",
                title: "测试文章1",
                content: "this is first content",
                visible: true,
                create_time: "2023-11-28 11:13:42.44 +00:00:00",
                update_time: "2023-11-28 11:13:42.44 +00:00:00"
            }
        ]
    }
}.data.list;
let interval: number;
// onBeforeMount(() => {
//     getList();
//     interval = setInterval(getList, 1000 * 10);
// });
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
