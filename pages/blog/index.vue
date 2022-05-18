<template>
    <div>
        <h1 class="text-2xl">Blog</h1>
        <div class="flex gap-2">
            <div class="divide-y flex-1">
                <BlogPostSmall 
                    v-for="post in posts" 
                    :author="post.author"
                    :publishedAt="post.publishedAt"
                    :title="post.title"
                    :slug="post.slug"
                    :excerpt="post.excerpt" 
                    :image="post.image"
                    :categories="post.category"
                    :readEstimate="post.readEstimate"
                />
                <div class="flex justify-center items-center py-8"><NuxtLink to="/blog/new" class="btn btn-wide">New post</NuxtLink></div>
            </div>
            <aside class="max-w-sm w-full">
                <h2 class="text-md font-normal my-2">Tags</h2>
                <div class="flex flex-row flex-wrap gap-1">
                    <span
                        v-for="category in categories"
                        class="btn btn-xs btn-outline"
                        >{{ category }}</span
                    >
                </div>
            </aside>
        </div>
    </div>
</template>

<script setup>
// const posts = ref([])
import { posts } from "~/store/global.js"

const categories = computed(() => {
    const arrays = posts.value.map((post) => post.category);
    return [...new Set(arrays.flat())];
});
</script>
