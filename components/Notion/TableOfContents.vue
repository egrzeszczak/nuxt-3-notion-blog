<template>
    <div class="bg-base-100 my-4">
        <ul
            class="menu menu-compact bg-base-100 w-full p-2 rounded-box border my-2"
        >
            <li
                v-for="(block, index) in content"
                :key="index"
                class="font-bold divide-y"
            >
                <a
                    class="no-underline"
                    :href="`#${block.id}`"
                    :class="{
                        'font-extrabold': block.type == 'heading_1',
                        'pl-10 font-bold': block.type == 'heading_2',
                        'pl-20 font-medium': block.type == 'heading_3',
                    }"
                >
                    <span class="font-mono">#</span>
                    <span class="" v-for="text in block[block.type].rich_text">
                        {{ text.plain_text }}
                    </span>
                </a>
            </li>
        </ul>
    </div>
</template>
<script setup>
// This is work in progress
const props = defineProps(["content"]);
</script>
