<template>
    <div>
        <div class="text-sm breadcrumbs">
            <ul>
                <li><NuxtLink to="/">Main page</NuxtLink></li>
                <li><NuxtLink to="/articles">Blog</NuxtLink></li>
                <li v-if="!pendingHeader">
                    {{ header.properties.Title.title[0].text.content }}
                </li>
            </ul>
        </div>
        <BlogPost
            v-if="!pendingHeader && !pendingContent"
            :header="header"
            :content="content"
        />
        <BlogPostPlaceholder v-else/>
    </div>
</template>

<script setup>
const route = useRoute();

const {
    data: header,
    pending: pendingHeader,
    refresh: refreshHeader,
} = await useLazyAsyncData("header", () =>
    $fetch(`/api/notion/retrieve-page/${route.params.post}`)
);

const {
    data: content,
    pending: pendingContent,
    refresh: refreshContent,
} = await useLazyAsyncData("content", () =>
    $fetch(`/api/notion/retrieve-block-children/${route.params.post}`)
);

watch(header, (headerW) => {
    // Because count starts out null, you won't have access
    // to its contents immediately, but you can watch it.
});
watch(content, (contentW) => {
    // Because count starts out null, you won't have access
    // to its contents immediately, but you can watch it.
});

refreshHeader();
refreshContent();
</script>
