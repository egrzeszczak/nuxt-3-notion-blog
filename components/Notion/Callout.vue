<template>
    <div
        class="bg-base-200 p-4 rounded-box flex"
        :class="{
            'bg-red-100': block.callout.color == 'red_background',
            'bg-pink-100': block.callout.color == 'pink_background',
            'bg-purple-100': block.callout.color == 'purple_background',
            'bg-blue-100': block.callout.color == 'blue_background',
            'bg-green-100': block.callout.color == 'green_background',
            'bg-yellow-100': block.callout.color == 'yellow_background',
            'bg-orange-100': block.callout.color == 'orange_background',
            'bg-amber-100': block.callout.color == 'brown_background',
            'bg-gray-100': block.callout.color == 'gray_background',
        }"
    >
        <div v-if="block.callout.icon.type == 'emoji'" class="mr-4">
            {{ block.callout.icon.emoji }}
        </div>
        <div v-else class="mr-4 not-prose">
            <img :src="block.callout.icon[block.callout.icon.type].url" alt="Callout icon" class="w-6 h-6">
        </div>
        <div class="flex-1">
            <NotionRichText :richText="block.callout.rich_text" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["block"]);
</script>
