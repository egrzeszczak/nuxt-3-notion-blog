<template>
    <div>
        <pre class="mb-0 scrollbar-thin scrollbar-thumb-zinc-700" v-for="element in block[block.type].rich_text">{{
            element[element.type].content
        }}</pre>
        <div v-if="block[block.type].caption" class="text-xs font-normal mt-1">
            <NotionRichText :richText="block[block.type].caption" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["block"]);
</script>
