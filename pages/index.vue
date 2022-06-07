<template>
    <div>
        <Header class="absolute bg-transparent align-top text-neutral-content" />
        <div
            class="hero h-screen items-top"
            style="
                background-image: url(https://images.unsplash.com/photo-1654531802344-ba2b2ca67699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);
            "
        >
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                    <p class="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
definePageMeta({
    layout: "landing",
});
</script>
