<template>
    <div>
        <div class="text-sm breadcrumbs">
            <ul>
                <li><NuxtLink to="/">Main page</NuxtLink></li>
                <li><NuxtLink to="/articles">Blog</NuxtLink></li>
                <li>{{ header.properties.Title.title[0].text.content }}</li>
            </ul>
        </div>
        <BlogPost
            :header="header"
            :content="content"
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
