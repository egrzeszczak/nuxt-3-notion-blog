<template>
    <div>
        <h2 class="text-md font-normal my-2">Categories</h2>
        <div class="flex flex-row flex-wrap gap-1">
            <span
                v-if="!pending"
                v-for="category in categories.properties.Category.multi_select.options"
                class="btn btn-xs btn-outline"
                >{{ category.name }}</span
            >
            <span
                data-placeholder
                v-else
                v-for="categoryPlaceholder in ['w-12', 'w-32', 'w-48', 'w-16', 'w-24', 'w-48', 'w-48', 'w-12']"
                :class="categoryPlaceholder"
                class="btn btn-xs btn-outline overflow-hidden relative"
            ></span>
        </div>
    </div>
</template>

<script setup>
const {
    pending,
    data: categories,
} = useLazyAsyncData("categories", () =>
    $fetch(`/api/notion/retrieve-database`)
);
watch(categories, (categoriesW) => {
    // Because count starts out null, you won't have access
    // to its contents immediately, but you can watch it.
});
</script>