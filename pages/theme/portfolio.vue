<template>
  <main class="w-full h-auto flex flex-col bg-slate-100">
    <!-- Main Section -->
    <section class="w-full h-screen flex flex-col items-center justify-center">
      <div id="main-image" class="w-[200px] h-[200px] md:w-[250px] md:h-[250px] xl:w-[300px] xl:h-[300px] rounded-full group overflow-hidden drop-shadow-xl ring-8 ring-white"
        :class="isMounted ? 'opacity-100' : 'opacity-0'">
        <img src="https://ik.imagekit.io/b3amk7ihm/1716347873206.webp" class="w-full h-full object-cover group-hover:scale-110 duration-300 object-top" />
      </div>

      <h1 id="main-text-name" class="font-gayathri text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase mt-20 text-slate-100">X</h1>
      <h3 id="main-text-role" class="font-gayathri text-lg md:text-3xl lg:text-4xl xl:text-5xl font-thin uppercase text-slate-100">X</h3>
    </section>
    <!-- ./Main Section -->

    <!-- About Section -->
    <section id="section-about" class="w-full md:min-h-screen py-8 md:py-0 flex flex-col items-center justify-center">
      <h1 id="about-text-title" class="font-gayathri text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-100">X</h1>
      <h3 id="about-text-description" class="w-full md:w-2/3 px-5 md:px-0 font-gayathri text-lg md:text-3xl lg:text-4xl xl:text-5xl font-thin text-start mt-8 md:mt-16 leading-tight text-slate-100">Through 8+ years of my experience, I have been working for over 30+ projects. My tech stacks are Nuxt.js for the front end and Express.js for the back end|</h3>
      
      <div class="flex flex-row mt-8 md:mt-16 font-montaga gap-5 md:gap-20">
        <div id="about-skills-1" class="w-[80px] h-[80px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] flex flex-col items-center justify-center ring-black ring-4 md:ring-8 rounded-full">
          <span class="text-sm md:text-3xl lg:text-4xl xl:text-5xl">*****</span>
          <span class="text-sm md:text-2xl lg:text-3xl">Front End</span>
        </div>

        <div id="about-skills-2" class="w-[80px] h-[80px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] flex flex-col items-center justify-center ring-black ring-4 md:ring-8 rounded-full">
          <span class="text-sm md:text-3xl lg:text-4xl xl:text-5xl">*****</span>
          <span class="text-sm md:text-2xl lg:text-3xl">Back End</span>
        </div>

        <div id="about-skills-3" class="w-[80px] h-[80px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] flex flex-col items-center justify-center ring-black ring-4 md:ring-8 rounded-full">
          <span class="text-sm md:text-3xl lg:text-4xl xl:text-5xl">*****</span>
          <span class="text-sm md:text-2xl lg:text-3xl">UI Design</span>
        </div>
      </div>
    </section>
    <!-- ./About Section -->

    <!-- Projects Section -->
    <section id="section-projects" class="w-full min-h-screen flex flex-col items-center justify-center p-10">
      <h1 id="projects-text-title" class="font-gayathri text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-100">X</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10">
        <a v-for="(item, index) in projects"
          :key="item"
          :id="`project-item-${index}`"
          class="card bg-base-100 shadow-xl group no-underline"
          :href="item.link"
          target="_blank"
          rel="noreferrer noopener">
          <figure class="bg-slate-300">
            <img :src="item.image" :alt="item.title" class="group-hover:scale-110 duration-300" />
          </figure>

          <div class="card-body p-5">
            <h3 class="text-sm md:text-lg font-medium group-hover:text-primary duration-300">{{ item.title }}</h3>
          </div>
        </a>
      </div>
    </section>
    <!-- ./Projects Section -->

    <!-- Contact Section -->
    <section id="section-contact" class="w-full h-screen flex flex-col items-center justify-center relative font-poppins">
      <div class="w-full flex items-center gap-4 md:gap-10 xl:gap-10">
        <div id="contact-image" class="w-5/12 md:w-1/2 xl:w-1/2 flex justify-end">
          <img id="img-contact" src="https://ik.imagekit.io/b3amk7ihm/1716347873206.webp" class="w-20 min-w-20 md:w-60 md:min-w-60 xl:w-60 xl:min-w-60 h-fit rounded-full drop-shadow-xl"/>
        </div>

        <div id="contact-divider" class="w-0.5 h-16 md:h-32 xl:h-32 bg-black"></div>

        <div class="flex flex-col text-black w-7/12 md:w-1/2 xl:w-1/2 gap-3">
          <div class="flex items-center gap-1 md:gap-2 xl:gap-2">
            <svg id="contact-icon-instagram" class="w-6 h-6 md:w-12 md:h-12" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 32C26.1217 32 28.1566 31.1571 29.6569 29.6569C31.1571 28.1566 32 26.1217 32 24C32 21.8783 31.1571 19.8434 29.6569 18.3431C28.1566 16.8429 26.1217 16 24 16C21.8783 16 19.8434 16.8429 18.3431 18.3431C16.8429 19.8434 16 21.8783 16 24C16 26.1217 16.8429 28.1566 18.3431 29.6569C19.8434 31.1571 21.8783 32 24 32Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6 32V16C6 13.3478 7.05357 10.8043 8.92893 8.92893C10.8043 7.05357 13.3478 6 16 6H32C34.6522 6 37.1957 7.05357 39.0711 8.92893C40.9464 10.8043 42 13.3478 42 16V32C42 34.6522 40.9464 37.1957 39.0711 39.0711C37.1957 40.9464 34.6522 42 32 42H16C13.3478 42 10.8043 40.9464 8.92893 39.0711C7.05357 37.1957 6 34.6522 6 32Z" stroke="black" stroke-width="1.5"/>
              <path d="M35 13.02L35.02 12.998" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <a id="contact-text-instagram" href="https://instagram.com/erfrandarmawan" class="text-xs md:text-lg xl:text-xl link link-hover text-slate-100" target="_blank" rel="noreferrer noopener" aria-label="@erfrandarmawan">X</a>
          </div>

          <div class="flex items-center gap-1 md:gap-2 xl:gap-2">
            <svg id="contact-icon-tiktok" class="w-6 h-6 md:w-12 md:h-12" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M33.1998 11.64C31.8327 10.0792 31.0793 8.07486 31.0798 6H24.8998V30.8C24.8522 32.142 24.2856 33.4132 23.3194 34.3459C22.3531 35.2785 21.0627 35.7998 19.7198 35.8C16.8798 35.8 14.5198 33.48 14.5198 30.6C14.5198 27.16 17.8398 24.58 21.2598 25.64V19.32C14.3598 18.4 8.31982 23.76 8.31982 30.6C8.31982 37.26 13.8398 42 19.6998 42C25.9798 42 31.0798 36.9 31.0798 30.6V18.02C33.5858 19.8197 36.5946 20.7853 39.6798 20.78V14.6C39.6798 14.6 35.9198 14.78 33.1998 11.64Z" fill="black"/>
            </svg>

            <a id="contact-text-tiktok" href="https://tiktok.com/@erfrandarmawan" class="text-xs md:text-lg xl:text-xl link link-hover text-slate-100" target="_blank" rel="noreferrer noopener" aria-label="@erfrandarmawan"></a>
          </div>
        </div>
      </div>

      <div id="developer-info" class="text-black absolute bottom-0 mb-5 md:mb-10 xl:mb-10 font-poppins text-xs md:text-base xl:text-lg text-center">
        Made by <a href="https://www.instagram.com/erfrandarmawan" class="link link-hover text-primary font-bold">Erfran Darmawan</a> from <a href="https://develobe.id/" class="link link-hover text-primary font-bold">DEVELOBE.ID</a>
      </div>
    </section>
    <!-- ./Contact Section -->
  </main>
</template>

<script setup>
  // Import library
  import gsap from 'gsap';
  import { TextPlugin } from 'gsap/TextPlugin';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  // Heading and set body attributes
  useHead({
    title: 'Portfolio',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [
      { name: 'description', content: 'Erfran Darmawan Portfolio' },
      { name: 'keywords', content: 'portfolio, skills, resume, cv, erfran darmawan' },
      { name: 'author', content: 'Erfran Darmawan' },

      { name: 'og:title', content: 'Portfolio' },
      { name: 'og:site_name', content: 'Portfolio' },
      { name: 'og:description', content: 'Erfran Darmawan Portfolio' },
      { name: 'og:url', content: 'https://weekend-ngoding.develobe.id/' },
      { name: 'og:image', content: 'https://ik.imagekit.io/b3amk7ihm/tr:w-300/1716347560340.webp' },
      { name: 'og:image:secure_url', content: 'https://ik.imagekit.io/b3amk7ihm/tr:w-300/1716347560340.webp' },
      { name: 'og:image:type', content: 'image/webp' },
      { name: 'og:image:width', content: '300' },
      { name: 'og:image:height', content: '173' },
      { name: 'og:type', content: 'website' },
      { name: 'og:locale', content: 'en_US' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Portfolio' },
      { name: 'twitter:description', content: 'Erfran Darmawan Portfolio' },
      { name: 'twitter:image', content: 'https://ik.imagekit.io/b3amk7ihm/tr:w-300/1716347560340.webp' },
    ],
  })

  // Variables
  const projects = ref([
    {
      "image": "https://ik.imagekit.io/b3amk7ihm/tr:w-1024/1714902833920.webp",
      "title": "Galeri DEVELOBE - SaaS Website",
      "link": "https://galeri.develobe.id"
    },
    {
      "image": "https://ik.imagekit.io/b3amk7ihm/tr:w-1024/1703574603128.webp",
      "title": "DEVELOBE Edu - Learning Website",
      "link": "https://education.develobe.id"
    },
    {
      "image": "https://ik.imagekit.io/b3amk7ihm/tr:w-1024/1703574658769.webp",
      "title": "Shanty F Putri - Portfolio Website",
      "link": "https://shantyfputri.com"
    },
    {
      "image": "https://ik.imagekit.io/b3amk7ihm/tr:w-1024/1716351162275.webp",
      "title": "DEVELOBE.ID - Portfolio Website",
      "link": "https://develobe.id"
    },
    {
      "image": "https://ik.imagekit.io/b3amk7ihm/tr:w-1024/1716351202566.webp",
      "title": "Book : Adulting - 3D Website",
      "link": "https://adulting.shantyfputri.com/"
    },
    {
      "image": "https://ik.imagekit.io/b3amk7ihm/tr:w-1024/1716351270957.webp",
      "title": "Book : Melihat Lebih Dekat - 3D Website",
      "link": "https://melihat-lebih-dekat.shantyfputri.com/"
    },
    {
      "image": "https://ik.imagekit.io/b3amk7ihm/tr:w-1024/1716351336202.webp",
      "title": "Clothy - Brand Website",
      "link": "https://clothy.develobe.id/"
    },
    {
      "image": "https://ik.imagekit.io/b3amk7ihm/tr:w-1024/1716351386898.webp",
      "title": "Wedding Invitation Website",
      "link": "https://wedding-invitation.develobe.id/"
    },
    {
      "image": "https://ik.imagekit.io/b3amk7ihm/tr:w-1024/1703573580747.webp",
      "title": "Cinemation - Movie Catalogue",
      "link": "https://cinemation.develobe.id"
    },
    {
      "image": "https://ik.imagekit.io/b3amk7ihm/tr:w-1024/1703574144845.webp",
      "title": "World Heritage Website",
      "link": "https://heritage.develobe.id"
    },
    {
      "image": "https://ik.imagekit.io/b3amk7ihm/tr:w-1024/1703574628851.webp",
      "title": "Djimbaran - Company Profile",
      "link": "https://djimbaran.develobe.id"
    }
  ]);

  let ctx;
  const isMounted = ref(false);

  // Register GSAP plugin
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);

  // Functions
  function animatePage(){
    // Animate page
    ctx = gsap.context((self) => {
      gsap.timeline()
        .from("#main-image", {
          y: 50,
          duration: 0.8,
          opacity: 0,
        })
        .to("#main-text-name", {
          duration: 0.8,
          ease: "none",
          text: {
            value: "Erfran Darmawan",
            newClass: "text-black",
          }
        })
        .to("#main-text-role", {
          duration: 0.8,
          ease: "none",
          text: {
            value: "Front End Developer",
            newClass: "text-black",
          }
        });

      gsap.timeline({
          scrollTrigger: {
            trigger: "#section-about",
            start: 'top 50%'
          }
        })
        .to("#about-text-title", {
          duration: 0.8,
          ease: "none",
          text: {
            value: "About Me",
            newClass: "text-black",
          }
        })
        .to("#about-text-description", {
          duration: 5,
          ease: "none",
          text: {
            value: "Through 8+ years of my experience, I have been working for over 30+ projects. My tech stacks are Nuxt.js for the front end and Express.js for the back end",
            newClass: "text-black",
          }
        })
        .from("#about-skills-1", {
          y: 50,
          duration: 0.8,
          opacity: 0,
        })
        .from("#about-skills-2", {
          y: 50,
          duration: 0.8,
          opacity: 0,
        })
        .from("#about-skills-3", {
          y: 50,
          duration: 0.8,
          opacity: 0,
        })

      const projectTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#section-projects",
          start: 'top 50%'
        }
      });

      projectTimeline
        .to("#projects-text-title", {
          duration: 0.8,
          ease: "none",
          text: {
            value: "Projects",
            newClass: "text-black",
          }
        });

      projects.value.forEach((item, index) => {
        projectTimeline
          .from(`#project-item-${index}`, {
            y: 50,
            duration: 0.8,
            opacity: 0,
          });
      });

      gsap.timeline({
          scrollTrigger: {
            trigger: "#section-contact",
            start: 'top top',
          }
        })
        .from("#contact-divider", {
          y: 50,
          duration: 0.8,
          opacity: 0,
        })
        .from("#contact-image", {
          y: 50,
          duration: 0.8,
          opacity: 0,
        })
        .from("#contact-icon-instagram", {
          y: 50,
          duration: 0.8,
          opacity: 0,
        })
        .to("#contact-text-instagram", {
          duration: 0.8,
          ease: "none",
          text: {
            value: "@erfrandarmawan",
            newClass: "text-black",
          }
        })
        .from("#contact-icon-tiktok", {
          y: 50,
          duration: 0.8,
          opacity: 0,
        })
        .to("#contact-text-tiktok", {
          duration: 0.8,
          ease: "none",
          text: {
            value: "@erfrandarmawan",
            newClass: "text-black",
          }
        })
        .from("#developer-info", {
          y: 50,
          duration: 0.8,
          opacity: 0,
        });
    });
  }

  // Lifecycle callback
  onMounted(() => {
    // Set flag mounted
    isMounted.value = true;

    // Animate page
    animatePage();
  });

  onUnmounted(() => {
    // Revert to original state
    if (ctx){
      ctx.revert();
    }
  });
</script>