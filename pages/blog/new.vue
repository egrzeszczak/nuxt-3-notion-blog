<template>
    <div>
        <div class="text-sm breadcrumbs">
            <ul>
                <li><NuxtLink to="/">Main page</NuxtLink></li>
                <li><NuxtLink to="/blog">Blog</NuxtLink></li>
                <li>New post</li>
            </ul>
        </div>
        <h1 class="text-2xl mb-4">New post</h1>
        <section v-if="!preview">
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">Title</span>
                </label>
                <input
                    type="text"
                    placeholder="Input your title..."
                    class="input input-bordered w-full"
                    v-model="title"
                />
            </div>
            <div class="form-control w-full">
                <label class="label">
                    <span class="label-text">Tags</span>
                </label>
                <div
                    class="input input-bordered input-sm px-2 w-full flex items-center gap-2"
                >
                    <div
                        class="badge flex gap-2"
                        v-for="category in categories"
                    >
                        {{ category }}
                        <span
                            @click="removeCategoryByName(category)"
                            class="cursor-pointer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                class="inline-block w-4 h-4 stroke-current"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </span>
                    </div>
                    <!-- @keyup.space="addCategory" -->
                    <input
                        v-model="categoryInput"
                        @keyup.enter="addCategory"
                        @keyup.backspace="removeCategory"
                        type="text"
                        placeholder="ex. Cybersecurity, Crypto, Software development..."
                        class="input input-ghost input-xs flex-1 outline-none"
                    />
                </div>
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Content</span>
                    <span class="label-text">Markdown</span>
                </label>
                <textarea
                    class="textarea textarea-bordered h-72 leading-normal"
                    placeholder="What whould you expose to the world?"
                    v-model="contentMD"
                ></textarea>
            </div>
        </section>
        <BlogPost
            v-else
            :title="title"
            :author="author"
            :publishedAt="'teraz'"
            :readEstimate="readEstimate"
            :contentHTML="contentHTML"
        />
        <div class="flex flex-row-reverse gap-2 my-4">
            <button class="btn btn-primary btn-wide" @click="publishArticle">
                Publish
            </button>
            <button
                class="btn btn-outline"
                @click="showPreview"
                :disabled="!(title.length > 0 && contentMD.length > 0)"
            >
                <span v-if="!preview">Preview</span>
                <span v-else>Editor</span>
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { marked } from "marked";
import slugify from "slugify";
import { posts } from "~/store/global.js";
const route = useRoute();

// title: TYTUŁ
let title = ref("");

// category: KATEORIA
let categories = ref([]);
let categoryInput = ref("");
const addCategory = () => {
    categories.value.push(categoryInput.value);
    categoryInput.value = "";
};
const removeCategory = () => {
    if (categoryInput.value.length == 0) {
        categories.value.pop();
    }
};
const removeCategoryByName = (nameToFilter) => {
    categories.value = categories.value.filter(
        (category) => category != nameToFilter
    );
};

// slug: LINK (DO ZROBIENIA)
const slug = computed(() => {
    return slugify(title.value, {
        lower: true,
        strict: true,
    });
});

// contentMD: TEKST PISANY
let contentMD = ref("");

// author: AUTOR
const author = ref("Ernest G");

// excerpt: WYCINEK
const excerpt = computed(() => {
    return (
        contentHTML.value
            .replace(/<[^>]*>?/gm, "")
            .replace(/\n/gm, " ")
            .substring(0, 250) + "..."
    );
});

// contentHTML: TEKST WYŚWIETLANY
let contentHTML = ref("");
const showPreview = () => {
    contentHTML.value = marked.parse(contentMD.value);
    preview.value = !preview.value;
};

// readEstimate: OKOŁO ILE CZASU TO ZAJMIE
const readEstimate = computed(() => {
    return Math.ceil(contentMD.value.length / 800);
});

// publishedAt: CZAS PUBLIKACJI
// Automatycznie przy dodawaniu

// image: LINK DO ZDJĘCIA
const image = ref(
    "https://miro.medium.com/fit/c/179/179/1*8apHdyNy026HDUUzHeGSBA.png"
);

const publishArticle = () => {
    // Końcowe przeparsowanie
    contentHTML.value = marked.parse(contentMD.value);
    // Publikacja
    posts.value.push({
        title: title.value,
        slug: slug.value,
        excerpt: excerpt.value,
        contentHTML: contentHTML.value,
        contentMD: contentMD.value,
        category: categories.value,
        readEstimate: readEstimate.value,
        publishedAt: Date.now(),
        author: author.value,
        image: image.value,
    });
    // Przejście do postu
    navigateTo(`/blog/post/${slug.value}`);
};

let preview = ref(false);
</script>
