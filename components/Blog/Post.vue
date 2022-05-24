<template>
    <section class="my-6">
        <!-- TYTUŁ -->
        <div class="prose mb-6">
            <h1>{{ title }}</h1>
        </div>
        <!-- TYTUŁ -->

        <!-- Autor, Data publikacji, W ile do przeczytania? -->
        <div class="flex items-center gap-2 text-sm mb-6">
            <div class="avatar">
                <div class="w-6 rounded">
                    <img :src="authorImage" />
                </div>
            </div>
            <div class="">{{ author }}</div>
            <div class="">{{ publishedAtReadable }}</div>
        </div>
        <!-- Autor, Data publikacji, W ile do przeczytania? -->

        <!-- Treść -->
        <!-- <article class="prose" v-html="content"></article> -->
        <article class="prose">
            <div v-for="block in content">
                <h1 v-if="block.type == 'heading_1'">
                    <NotionRichText :richText="block.heading_1.rich_text" />
                </h1>
                <h2 v-else-if="block.type == 'heading_2'">
                    <NotionRichText :richText="block.heading_2.rich_text" />
                </h2>
                <h3 v-else-if="block.type == 'heading_3'">
                    <NotionRichText :richText="block.heading_3.rich_text" />
                </h3>
                <p v-else-if="block.type == 'paragraph'">
                    <NotionRichText :richText="block.paragraph.rich_text" />
                </p>
                <li v-else-if="block.type == 'bulleted_list_item'">
                    <NotionRichText
                        :richText="block.bulleted_list_item.rich_text"
                    />
                </li>
                <li v-else-if="block.type == 'numbered_list_item'">
                    <NotionRichText
                        :richText="block.numbered_list_item.rich_text"
                    />
                </li>
                <div v-else-if="block.type == 'code'">
                    <pre class="mb-0">{{
                        block.code.rich_text[0].text.content
                    }}</pre>
                    <div
                        v-if="block.code.caption"
                        class="text-xs font-normal mt-1"
                    >
                        <NotionRichText :richText="block.code.caption" />
                    </div>
                </div>
                <blockquote v-else-if="block.type == 'quote'">
                    <NotionRichText :richText="block.quote.rich_text" />
                </blockquote>
                <div
                    v-else-if="block.type == 'callout'"
                    class="bg-base-200 p-4 rounded-box flex"
                    :class="{
                        'bg-red-100': block.callout.color == 'red_background',
                        'bg-pink-100': block.callout.color == 'pink_background',
                        'bg-purple-100':
                            block.callout.color == 'purple_background',
                        'bg-blue-100': block.callout.color == 'blue_background',
                        'bg-green-100':
                            block.callout.color == 'green_background',
                        'bg-yellow-100':
                            block.callout.color == 'yellow_background',
                        'bg-orange-100':
                            block.callout.color == 'orange_background',
                        'bg-brown-100':
                            block.callout.color == 'brown_background',
                        'bg-gray-100': block.callout.color == 'gray_background',
                    }"
                >
                    <div class="mr-4">
                        {{ block.callout.icon.emoji }}
                    </div>
                    <div class="">
                        <NotionRichText :richText="block.callout.rich_text" />
                    </div>
                </div>
                <div v-else-if="block.type == 'image'" class="">
                    <img :src="block.image.external.url" class="mb-0" />
                    <div
                        v-if="block.image.caption"
                        class="text-xs font-normal mt-1"
                    >
                        <NotionRichText :richText="block.image.caption" />
                    </div>
                </div>
                <div
                    v-else-if="block.type == 'bookmark'"
                    class="bg-base-200 p-4 rounded-box my-2"
                >
                    <div class="flex gap-2 items-center text-xl justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                            class="w-6 h-6"
                        >
                            <path
                                d="M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z"
                            />
                        </svg>
                        <a :href="block.bookmark.url" class="link link-hover">{{
                            block.bookmark.url
                        }}</a>
                    </div>
                    <div
                        v-if="block.bookmark.caption"
                        class="text-xs font-normal mt-1 text-center"
                    >
                        <NotionRichText :richText="block.bookmark.caption" />
                    </div>
                </div>
                <pre v-else>{{ block }}</pre>
            </div>
        </article>
        <!-- Treść -->
    </section>
</template>

<script setup>
const props = defineProps([
    "title",
    "author",
    "authorImage",
    "publishedAt",
    "content",
]);
const publishedAtReadable = computed(() => {
    let date = new Date(props.publishedAt);
    return date.toLocaleString();
});
</script>
