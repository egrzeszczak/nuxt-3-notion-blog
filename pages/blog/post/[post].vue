<template>
    <div>
        <div class="text-sm breadcrumbs">
            <ul>
                <li><NuxtLink to="/">Main page</NuxtLink></li>
                <li><NuxtLink to="/blog">Blog</NuxtLink></li>
                <li>{{ header.properties.Title.title[0].text.content }}</li>
            </ul>
        </div>
        <BlogPost
            :title="header.properties.Title.title[0].text.content"
            :author="header.properties.Author.people[0].name"
            :authorImage="header.properties.Author.people[0].avatar_url"
            :publishedAt="header.properties.Date.date.start"
            :content="content.results"
        />
    </div>
</template>

<script setup>
const route = useRoute();
const { data: header } = await useFetch(
    `/api/post/header/${route.params.post}`
);
const { data: content } = await useFetch(
    `/api/post/content/${route.params.post}`
);
</script>
