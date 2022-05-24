<template>
    <div class="grid grid-cols-5 gap-2 py-8">
        <div class="col-span-5 flex items-center gap-2 text-sm">
            <div class="avatar">
                <div class="w-6 rounded">
                    <img :src="authorImage" />
                </div>
            </div>
            <div class="">{{ author }}</div>
            <div class="">{{ publishedAtReadable }}</div>
        </div>
        <div class="col-span-4">
            <div class="font-semibold text-xl">
                <NuxtLink class="link link-hover" :to="`/blog/post/${id}`">{{
                    title
                }}</NuxtLink>
            </div>
            <div class="font-light">{{ excerpt }}</div>
        </div>
        <div class="col-span-1 flex items-center justify-center">
            <img
                class="w-24 h-24 object-cover"
                :src="image"
                alt="zdjęcie posta"
            />
        </div>
        <div class="col-span-5 flex gap-2 items-center flex-wrap">
            <div class="badge" v-for="category in categories">
                {{ category.name }}
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps([
    "id",
    "author",
    "authorImage",
    "publishedAt",
    "slug",
    "title",
    "excerpt",
    "image",
    "categories",
    "readEstimate",
]);
const publishedAtReadable = computed(() => {
    let date = new Date(props.publishedAt)
    return date.toLocaleString()
})
</script>
