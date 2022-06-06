<template>
    <div class="max-w-full mx-0">
        <div class="text-sm breadcrumbs">
            <ul>
                <li><NuxtLink to="/">Main page</NuxtLink></li>
                <li><NuxtLink to="/articles">Articles</NuxtLink></li>
            </ul>
        </div>
        <div class="block lg:flex lg:flex-row-reverse lg:gap-2">
            <aside class="lg:max-w-sm w-full">
                <BlogCategoryBox />
            </aside>
            <div class="divide-y flex-1 divide-base-200">
                <BlogPostSmall v-for="post in postsToRemain" :post="post" />
                <BlogPostSmall
                    v-if="!pending"
                    v-for="post in postsFromNotion.results"
                    :post="post"
                />
                <BlogPostSmallPlaceholder v-else v-for="el in [1, 2, 3]" />
                <button
                    class="btn btn-block btn-primary"
                    :class="{ loading: pending }"
                    @click="loadMore"
                    :disabled="pending || !postsFromNotion.has_more"
                >
                    <span>Load more</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const cursor = ref(undefined);

import { postsToRemain } from "~/store/articles.js";

const {
    pending,
    data: postsFromNotion,
    refresh,
} = useLazyAsyncData("postsFromNotion", () =>
    $fetch(`/api/notion/query-database?cursor=${cursor.value}`)
);
watch(postsFromNotion, (postsFromNotionW) => {
    // Because count starts out null, you won't have access
    // to its contents immediately, but you can watch it.
});

const loadMore = () => {
    postsToRemain.value = [
        ...postsToRemain.value,
        ...postsFromNotion.value.results,
    ];
    cursor.value = postsFromNotion.value.next_cursor;
    refresh();
};
</script>
