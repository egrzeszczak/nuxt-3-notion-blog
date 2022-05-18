<template>
    <section>
        <!-- TYTUŁ -->
        <div class="prose mb-6">
            <h1>{{ title }}</h1>
        </div>
        <!-- TYTUŁ -->

        <!-- Autor, Data publikacji, W ile do przeczytania? -->
        <div class="flex items-center gap-2 text-sm mb-6">
            <div class="avatar">
                <div class="w-6 rounded">
                    <img src="https://api.lorem.space/image/face?hash=92048" />
                </div>
            </div>
            <div class="">{{ author }}</div>
            <div class="">{{ publishedAt }}</div>
            <div class="">{{ readEstimate }} minut</div>
        </div>
        <!-- Autor, Data publikacji, W ile do przeczytania? -->

        <!-- Treść -->
        <article class="prose" v-html="contentHTML"></article>
        <!-- Treść -->
    </section>
</template>

<script setup>
const props = defineProps(["title", "author", "publishedAt", "readEstimate", "contentHTML"]);
</script>
