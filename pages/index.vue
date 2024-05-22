<template>
  <main class="w-full flex flex-col items-center px-10 py-20 bg-slate-50 min-h-screen">
    <article class="prose flex flex-col max-w-none items-center">
      <h1 class="p-3 m-0">Weekend Ngoding</h1>
      <span>Learn to build website via source code (<a href="https://github.com/erfrandarmawan/web-weekend-ngoding" target="_blank" rel="noreferrer noopener">github.com/erfrandarmawan/web-weekend-ngoding)</a></span>
    </article>

    <div class="w-8/12 grid grid-cols-2 gap-5 mt-10">
      <a v-for="item in projects"
        :key="item"
        class="card bg-base-100 shadow-xl no-underline gap-0 group" :href="item.path">
        <figure class="bg-slate-200">
          <img :src="item.image" :alt="item.title" class="object-cover group-hover:scale-110 duration-300" />
        </figure>
        <div class="card-body p-5">
          <span class="card-title group-hover:text-primary duration-300">{{ item.title }}</span>
        </div>
      </a>
    </div>
  </main>
</template>

<script setup lang="ts">
  // Import library
  import gsap from 'gsap';
  import { TextPlugin } from 'gsap/TextPlugin';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  // Heading and set body attributes
  useHead({
    title: 'Weekend Ngoding',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [
      { name: 'description', content: 'Learn to build website via source code' },
      { name: 'keywords', content: 'weekend ngoding, ngoding, informatika, coding, code, front end, frontend, learning, ui, web, html, css, nuxt' },
      { name: 'author', content: 'Erfran Darmawan' },

      { name: 'og:title', content: 'Weekend Ngoding' },
      { name: 'og:site_name', content: 'Weekend Ngoding' },
      { name: 'og:description', content: 'Learn to build website via source code' },
      { name: 'og:url', content: 'https://weekend-ngoding.develobe.id/' },
      { name: 'og:image', content: 'https://ik.imagekit.io/b3amk7ihm/tr:w-300/1716347560340.webp' },
      { name: 'og:image:secure_url', content: 'https://ik.imagekit.io/b3amk7ihm/tr:w-300/1716347560340.webp' },
      { name: 'og:image:type', content: 'image/webp' },
      { name: 'og:image:width', content: '300' },
      { name: 'og:image:height', content: '173' },
      { name: 'og:type', content: 'website' },
      { name: 'og:locale', content: 'en_US' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Weekend Ngoding' },
      { name: 'twitter:description', content: 'Learn to build website via source code' },
      { name: 'twitter:image', content: 'https://ik.imagekit.io/b3amk7ihm/tr:w-300/1716347560340.webp' },
    ],
  })

  // Variables
  const projects = ref([
    {
      "path": "/theme/senyawa",
      "image": "https://ik.imagekit.io/b3amk7ihm/1716298815580.webp",
      "title": "#1 Senyawa Plus"
    },
    {
      "path": "/theme/tjendana",
      "image": "https://ik.imagekit.io/b3amk7ihm/1716299244692.webp",
      "title": "#2 Tjendana Bistro"
    },
    {
      "path": "/theme/portfolio",
      "image": "https://ik.imagekit.io/b3amk7ihm/1716385079916.webp",
      "title": "#3 Portfolio"
    }
  ]);
</script>