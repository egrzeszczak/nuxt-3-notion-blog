<template>
    <div>
        <div class="text-sm breadcrumbs">
            <ul>
                <li><NuxtLink to="/">Main page</NuxtLink></li>
                <li><NuxtLink to="/blog">Blog</NuxtLink></li>
                <li>{{ post.title }}</li>
            </ul>
        </div>
        <BlogPost
            :title="post.title"
            :author="post.author"
            :publishedAt="publishedAtReadable"
            :readEstimate="post.readEstimate"
            :contentHTML="post.contentHTML"
        />
    </div>
</template>

<script setup>
import { posts } from "~/store/global.js";
const route = useRoute();
const post = posts.value.filter((post) => post.slug == route.params.post)[0];
const publishedAtReadable = computed(() => {
    let date = new Date(post.publishedAt);
    return date.toLocaleString();
});
</script>
