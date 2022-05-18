<template>
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                </label>
                <ul
                    tabindex="0"
                    class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                    <li v-for="link in links">
                        <NuxtLink
                            :to="link.link"
                            v-if="link.children"
                            tabindex="0"
                            class="justify-between"
                            >{{ link.name
                            }}<svg
                                class="fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                                /></svg
                        ></NuxtLink>
                        <ul
                            v-if="link.children"
                            class="menu bg-base-100 p-2 rounded-box border shadow"
                        >
                            <li v-for="child in link.children">
                                <NuxtLink :to="child.link">{{
                                    child.name
                                }}</NuxtLink>
                            </li>
                        </ul>
                        <NuxtLink :to="link.link" v-else>{{
                            link.name
                        }}</NuxtLink>
                    </li>
                </ul>
            </div>
            <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">daisyUI</NuxtLink>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0">
                <li v-for="link in links">
                    <NuxtLink :to="link.link" v-if="link.children" tabindex="0"
                        >{{ link.name
                        }}<svg
                            class="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                            /></svg
                    ></NuxtLink>
                    <ul
                        v-if="link.children"
                        class="menu bg-base-100 p-2 rounded-box border shadow"
                    >
                        <li v-for="child in link.children">
                            <NuxtLink :to="child.link">{{
                                child.name
                            }}</NuxtLink>
                        </li>
                    </ul>
                    <NuxtLink :to="link.link" v-else>{{ link.name }}</NuxtLink>
                </li>
            </ul>
        </div>
        <div class="navbar-end">
            <a class="btn">Contact</a>
        </div>
    </div>
</template>

<script setup>
const links = ref([
    {
        name: "Blog",
        link: "/blog",
    },
    {
        name: "About",
        link: "/about",
    },
]);
/*
    {
        name: "Parent",
        link: "/parent",
        children: [
            {
                name: "Child 1",
                link: "/child1",
            },
            {
                name: "Child 2",
                link: "/child1",
            },
        ],
    },
    {
        name: "Item 3",
        link: "/item3",
    },
*/
</script>
