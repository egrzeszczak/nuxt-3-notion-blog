<template>
    <div class="max-w-full mx-0">
        <div class="block lg:flex lg:flex-row-reverse lg:gap-2">
            <aside class="lg:max-w-sm w-full">
                <BlogCategoryBox :categories="categories" :pending="pending" />
            </aside>
            <div class="divide-y flex-1">
                <BlogPostSmall
                    v-if="!pending"
                    v-for="post in postsFromNotion.results"
                    :post="post"
                />
                <BlogPostSmallPlaceholder v-else v-for="el in [1, 2, 3]" />
            </div>
        </div>
    </div>
</template>

<script setup>

const { pending, data: postsFromNotion } = useLazyAsyncData(
    "postsFromNotion",
    () => $fetch("/api/post/all")
);
watch(postsFromNotion, (postsFromNotionW) => {
    // Because count starts out null, you won't have access
    // to its contents immediately, but you can watch it.
});

const categories = computed(() => {
    if (pending.value) {
        return [];
    } else {
        // To jest najgorsza rzecz jaką napisałem
        const notUniqueCategoryArraysProxied =
            postsFromNotion.value.results.map(
                (post) => post.properties.Category.multi_select
            );
        // Utwórz nowy set kategorii
        let uniqueCategories = new Set();
        // Przez to że to są wartości Proxy trzeba je zdekonstruktować
        notUniqueCategoryArraysProxied.forEach((proxyArray) => {
            proxyArray.forEach((proxyElement) => {
                uniqueCategories.add(proxyElement.name);
            });
        });
        // Yea....
        return uniqueCategories;
    }
});
</script>
