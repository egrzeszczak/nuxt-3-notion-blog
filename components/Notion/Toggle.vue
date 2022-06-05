<template>
    <div class="collapse collapse-arrow">
        <input type="checkbox" />
        <div class="collapse-title text-md font-medium">
            <NotionRichText :richText="block[block.type].rich_text  "/>
        </div>
        <div class="collapse-content">
            <NotionRender :content="content.results" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["block"]);
const { data: content } = await useFetch(
    `/api/post/content/${props.block.id}`
);
</script>
