# nuxt3-blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/ddbeeb2c-df54-4838-a059-66a3210facba/deploy-status)](https://app.netlify.com/sites/earnest-longma-3caf94/deploys)

### Description
This is a **work in progress** project based on Nuxt 3, Tailwind CSS and Notion API

You can see the demo [here](https://earnest-longma-3caf94.netlify.app).

### Stack

<p align="center">
    <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/nuxtjs/nuxtjs-original.svg" width=32 height=32>
    <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/tailwindcss/tailwindcss-plain.svg" width=32 height=32>
    <img src="https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg" width=32 height=32>
</p>

### Environment variables setup
```env
NOTION_API_TOKEN=your_notion_integration_token
NOTION_POST_DATABASE=your_notion_posts_database
```

### Notion database template
|Title|Description|Category|Author|Date|Visible|
|-|-|-|-|-|-|
|type: `Key`|type: `Text`|type: `Multi-select`|type: `User`|type: `Date`|type: `Checkbox`|

### Notion compontents

|Block type|Status|Comment|
|:-:|:-:|:-|
|Heading 1|✅||
|Heading 2|✅||
|Heading 3|✅||
|Toggle heading 1|✅||
|Toggle heading 2|✅||
|Toggle heading 3|✅||
|Paragraph|✅||
|Rich text|✅||
|To-do list|✅||
|Bullet list|✅||
|Table|✅||
|Toggle|✅||
|Quote|✅||
|Divider|✅||
|Page link|✅||
|Callout|✅||
|Table of contents|✅||
|Block equation|✅||
|Image|✅||
|Emoji|✅||
|User mention|✅|Works, just highlights the user|
|Code|✅🔨|Works without syntax highlighting - will implement something like `highlight.js` later|
|Numbered list|🔨||
|Subpage|🔨|It has to have the same properties as the parent article, will fix it later|
|Page mention|🔨|Works, but for articles - not for subpages|
|Date mention|🔨|Formatting still to do|
|Inline Equation|🔨|For now inline displays as a block - will fix it later|
|Web bookmark|🔨|To do|
|Video|🔨|To do|
|Audio|🔨|To do|
|File|🔨|To do|
|Embed|🔨|To do|
|Synced block|🔨|To do|
|Child database|❌|Not implementing|
|Breadcrumb|❌|Not implementing|
|Button|❌|Not implementing|
