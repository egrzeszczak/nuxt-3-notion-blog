<template>
    <section class="mt-1 mb-6">
        <!-- TYTUŁ -->
        <div>
            <img
                v-if="header.cover"
                class="w-full h-64 object-cover rounded-box mt-2 mb-4"
                :src="header.cover[header.cover.type].url"
                alt="zdjęcie posta"
            />
            <div v-else></div>
        </div>

        <div class="prose mb-6">
            <h1
                v-for="title in header.properties.Title[
                    header.properties.Title.type
                ]"
            >
                {{ title.plain_text }}
            </h1>
        </div>
        <!-- TYTUŁ -->

        <!-- Autor, Data publikacji, W ile do przeczytania? -->
        <div class="flex items-center gap-2 text-sm mb-6">
            <div
                class="flex items-center gap-2"
                v-for="author in header.properties.Author.people"
            >
                <div class="avatar">
                    <div class="w-6 rounded">
                        <img :src="author.avatar_url" />
                    </div>
                </div>
                {{ author.name }}
            </div>
            <div v-if="header.properties.Date[header.properties.Date.type]">
                {{ publishedAtReadable }}
            </div>
        </div>
        <!-- Autor, Data publikacji, W ile do przeczytania? -->

        <!-- Treść -->
        <!-- <article class="prose" v-html="content"></article> -->
        <article class="prose">
            <div v-for="block in content.results" :key="block.id">
                <h1 v-if="block.type == 'heading_1'" :id="block.id">
                    <NotionRichText :richText="block.heading_1.rich_text" />
                </h1>
                <h2 v-else-if="block.type == 'heading_2'" :id="block.id">
                    <NotionRichText :richText="block.heading_2.rich_text" />
                </h2>
                <h3 v-else-if="block.type == 'heading_3'" :id="block.id">
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

                <NotionCode v-else-if="block.type == 'code'" :block="block" />

                <NotionCallout v-else-if="block.type == 'callout'" :block="block"/>
                
                <NotionImage v-else-if="block.type == 'image'" :block="block" />

                <blockquote v-else-if="block.type == 'quote'">
                    <NotionRichText :richText="block.quote.rich_text" />
                </blockquote>

                <NotionBookmark v-else-if="block.type == 'bookmark'" :block="block"/>

                <NotionTableOfContents v-else-if="block.type == 'table_of_contents'" :content="content.results.filter(block => {
                    return (block.type == 'heading_1' || block.type == 'heading_2' || block.type == 'heading_3')
                })" />

                <pre v-else>{{ block }}</pre>
            </div>
        </article>
        <!-- Treść -->
    </section>
</template>

<script setup>
const props = defineProps(["header", "content"]);
const publishedAtReadable = computed(() => {
    // Obliczanie daty do przyjaznego formatu
    if (props.header.properties.Date[props.header.properties.Date.type]) {
        let date = new Date(
            props.header.properties.Date[
                props.header.properties.Date.type
            ].start
        );
        return date.toLocaleString();
    } else return "?";
});
</script>
