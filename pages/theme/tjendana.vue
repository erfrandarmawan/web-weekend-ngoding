<template>
  <main class="w-full h-auto flex flex-col bg-white font-teachers" data-theme="tjendana">
    <!-- Landing Page Section -->
    <section id="section-landing-page" class="w-full h-screen flex items-center justify-center absolute top-0 z-10 bg-white">
      <img id="logo-landing-page"
        src="https://ik.imagekit.io/b3amk7ihm/tjendana_logo.png" 
        class="w-40 md:w-60 xl:w-60"
        :class="isMounted ? 'opacity-100' : 'opacity-0'"/>
    </section>
    <!-- ./Landing Page Section -->

    <!-- Gallery Section -->
    <section id="section-gallery" class="w-full h-screen flex items-center justify-center">
      <div class="w-2/3 h-screen">
        <div id="image-carousel" class="carousel w-full h-screen bg-slate-50">
          <div id="slide1" class="carousel-item relative w-full">
            <img src="https://ik.imagekit.io/b3amk7ihm/1716044865197.webp" class="w-full object-contain" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide5" class="btn btn-circle">
                <ClientOnly><font-awesome-icon :icon="['fas', 'chevron-left']" class="text-3xl"></font-awesome-icon></ClientOnly>
              </a> 
              <a href="#slide2" class="btn btn-circle">
                <ClientOnly><font-awesome-icon :icon="['fas', 'chevron-right']" class="text-3xl"></font-awesome-icon></ClientOnly>
              </a>
            </div>
          </div>
          
          <div id="slide2" class="carousel-item relative w-full">
            <img src="https://ik.imagekit.io/b3amk7ihm/1716044948248.webp" class="w-full object-contain" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" class="btn btn-circle">
                <ClientOnly><font-awesome-icon :icon="['fas', 'chevron-left']" class="text-3xl"></font-awesome-icon></ClientOnly>
              </a> 
              <a href="#slide3" class="btn btn-circle">
                <ClientOnly><font-awesome-icon :icon="['fas', 'chevron-right']" class="text-3xl"></font-awesome-icon></ClientOnly>
              </a>
            </div>
          </div>

          <div id="slide3" class="carousel-item relative w-full">
            <img src="https://ik.imagekit.io/b3amk7ihm/1716045016863.webp" class="w-full object-contain" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" class="btn btn-circle">
                <ClientOnly><font-awesome-icon :icon="['fas', 'chevron-left']" class="text-3xl"></font-awesome-icon></ClientOnly>
              </a> 
              <a href="#slide4" class="btn btn-circle">
                <ClientOnly><font-awesome-icon :icon="['fas', 'chevron-right']" class="text-3xl"></font-awesome-icon></ClientOnly>
              </a>
            </div>
          </div>

          <div id="slide4" class="carousel-item relative w-full">
            <img src="https://ik.imagekit.io/b3amk7ihm/1716045044196.webp" class="w-full object-contain" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" class="btn btn-circle">
                <ClientOnly><font-awesome-icon :icon="['fas', 'chevron-left']" class="text-3xl"></font-awesome-icon></ClientOnly>
              </a> 
              <a href="#slide5" class="btn btn-circle">
                <ClientOnly><font-awesome-icon :icon="['fas', 'chevron-right']" class="text-3xl"></font-awesome-icon></ClientOnly>
              </a>
            </div>
          </div>
          
          <div id="slide5" class="carousel-item relative w-full">
            <img src="https://ik.imagekit.io/b3amk7ihm/1716045141801.webp" class="w-full object-contain" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" class="btn btn-circle">
                <ClientOnly><font-awesome-icon :icon="['fas', 'chevron-left']" class="text-3xl"></font-awesome-icon></ClientOnly>
              </a> 
              <a href="#slide1" class="btn btn-circle">
                <ClientOnly><font-awesome-icon :icon="['fas', 'chevron-right']" class="text-3xl"></font-awesome-icon></ClientOnly>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="w-1/3 h-screen flex flex-col justify-center p-10">
        <h3 class="text-5xl"><span id="text-gallery-tjendana" class="text-secondary"></span> <span id="text-gallery-bistro" class="text-primary"></span></h3>
        <p id="text-gallery-description" class="font-poppins mt-5 text-2xl italic font-light"></p>

        <div id="link-wrapper-explore-tjendana">
          <a id="link-explore-tjendana"
            href="https://maps.app.goo.gl/fPeCZPHwxjAR1aaLA" target="_blank" rel="noopener noreferrer"
            class="btn btn-lg w-full rounded-none mt-12 btn-primary text-white font-medium text-2xl">
            Explore Authentic Asian Food
          </a>
        </div>
      </div>
    </section>
    <!-- ./Gallery Section -->

    <!-- Popular Menu Section -->
    <section id="section-popular-menu" class="w-full h-screen flex flex-col items-center justify-center">
      <h1 class="text-6xl uppercase"><span id="text-popular" class="text-primary"></span> <span id="text-menu" class="text-secondary"></span></h1>

      <div id="swiper-popular-menu" class='w-full h-auto overflow-hidden mt-5 lg:mt-20'>
        <Swiper
          :modules="[SwiperParallax]"
          :loop="true"
          :slides-per-view="1"
          :slides-per-group="1"
          :space-between="0"
          :speed="500"
          :slides-offset-before="0"
          :breakpoints="{
            '768': {
              slidesPerView: 3,
              spaceBetween: 150,
              slidesOffsetBefore: 0
            },
            '1024': {
              slidesPerView: 3,
              spaceBetween: 50,
              slidesOffsetBefore: 0
            },
          }">
          <SwiperSlide v-for="(item, index) in popularMenu" :key="index"
            class="tooltip"
            :data-tip="item.name">
            <img :src="item.image" 
              class='w-[270px] min-w-[270px] h-[324px] min-h-[324px] lg:w-[360px] lg:min-w-[360px] lg:h-[432px] lg:min-h-[432px] object-cover rounded-[20px] duration-300 mx-auto border'/>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
    <!-- ./Popular Menu Section -->

    <!-- Moment Section -->
    <section id="section-moment" class="w-full min-h-screen flex flex-col items-center bg-cover bg-center bg-no-repeat bg-fixed relative" style="background-image: url('https://ik.imagekit.io/b3amk7ihm/')">
      <div class="bg-white bg-opacity-80 absolute top-0 w-full h-full z-10"></div>

      <div class="flex flex-col z-10">
        <h1 class="text-6xl uppercase mt-20 text-center"><span id="text-create-moment" class="text-primary"></span><br><span id="text-with-us" class="text-secondary"></span></h1>

        <div id="moment-dine-in" class="flex flex-row w-full justify-center mt-20 font-poppins font-extralight items-center gap-24">
          <div class="w-[500px] h-[500px] rounded-2xl overflow-hidden">
            <img src="https://ik.imagekit.io/b3amk7ihm/1716045796159.webp"
              class="w-full h-full object-cover hover:scale-110 duration-300"/>
          </div>

          <h2 class="uppercase text-8xl">Dine In</h2>
        </div>

        <div id="moment-wedding" class="flex flex-row-reverse w-full justify-center mt-28 font-poppins font-extralight items-center gap-24">
          <div class="w-[500px] h-[500px] rounded-2xl overflow-hidden">
            <img src="https://ik.imagekit.io/b3amk7ihm/1716045858269.webp"
              class="w-full h-full object-cover hover:scale-110 duration-300"/>
          </div>

          <h2 class="uppercase text-8xl">Wedding</h2>
        </div>

        <div id="moment-birthday" class="flex flex-row w-full justify-center mt-28 font-poppins font-extralight items-center gap-24">
          <div class="w-[500px] h-[500px] rounded-2xl overflow-hidden">
            <img src="https://ik.imagekit.io/b3amk7ihm/1716045941027.webp"
              class="w-full h-full object-cover hover:scale-110 duration-300"/>
          </div>

          <h2 class="uppercase text-8xl">Birthday</h2>
        </div>

        <div id="moment-meeting" class="flex flex-row-reverse w-full justify-center mt-28 mb-20 font-poppins font-extralight items-center gap-24">
          <div class="w-[500px] h-[500px] rounded-2xl overflow-hidden">
            <img src="https://ik.imagekit.io/b3amk7ihm/1716045975039.webp"
              class="w-full h-full object-cover hover:scale-110 duration-300"/>
          </div>

          <h2 class="uppercase text-8xl">Meeting</h2>
        </div>
      </div>
    </section>
    <!-- ./Moment Section -->

    <!-- Contact Section -->
    <section id="section-contact" class="w-full h-screen flex flex-col items-center justify-center relative">
      <div class="w-full flex items-center gap-2 md:gap-10 xl:gap-10">
        <div class="w-5/12 md:w-1/2 xl:w-1/2 flex justify-end">
          <img id="img-contact" src="https://ik.imagekit.io/b3amk7ihm/tjendana_logo.png" class="w-24 min-w-24 md:w-60 md:min-w-60 xl:w-60 xl:min-w-60 h-fit"/>
        </div>

        <div id="divider-contact" class="w-0.5 h-16 md:h-32 xl:h-32 bg-secondary"></div>

        <div class="flex flex-col text-black w-7/12 md:w-1/2 xl:w-1/2 gap-3">
          <div class="flex items-center gap-1 md:gap-2 xl:gap-2">
            <span id="text-location-tjendana" class="text-xs md:text-lg xl:text-xl" aria-label="Jl. Sukajadi, No. 181 Bandung, Indonesia 40161"></span>
          </div>
          
          <div class="flex items-center gap-1 md:gap-2 xl:gap-2">
            <span id="text-time-tjendana" class="text-xs md:text-lg xl:text-xl" aria-label="Senin - Minggu | 10.00 - 21.00"></span>
          </div>

          <div class="flex items-center gap-1 md:gap-2 xl:gap-2">
            <a id="link-instagram-tjendana" href="https://www.instagram.com/tjendanabistro/" class="text-xs md:text-lg xl:text-xl link link-hover" target="_blank" rel="noreferrer noopener" aria-label="@tjendanabistro"></a>
          </div>

          <div class="flex items-center gap-1 md:gap-2 xl:gap-2">
            <span id="text-phone-tjendana" class="text-xs md:text-lg xl:text-xl" aria-label="(022) 2034622 / 085339887000"></span>
          </div>
        </div>
      </div>

      <div id="developer-info" class="text-black absolute bottom-0 mb-5 md:mb-10 xl:mb-10 font-poppins text-xs md:text-base xl:text-lg text-center">
        Made by <a href="https://www.instagram.com/erfrandarmawan" class="link link-hover text-secondary font-bold">Erfran Darmawan</a> from <a href="https://develobe.id/" class="link link-hover text-secondary font-bold">DEVELOBE.ID</a>
      </div>
    </section>
    <!-- ./Contact Section -->
  </main>
</template>

<script setup lang="ts">
  // Import library
  import gsap from 'gsap';
  import { TextPlugin } from 'gsap/TextPlugin';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  // Heading and set body attributes
  useHead({
    title: 'Tjendana Bistro',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [
      { name: 'description', content: 'Authentic Asian Food. We will make you feel like home, a sense of comfort and warmth with authentic Asian dishes cooked with all our heart' },
      { name: 'keywords', content: 'tjendana bistro, restaurant, food, wedding, venue, moment' },
      { name: 'author', content: 'Erfran Darmawan' },

      { name: 'og:title', content: 'Tjendana Bistro' },
      { name: 'og:site_name', content: 'Tjendana Bistro' },
      { name: 'og:description', content: 'Authentic Asian Food. We will make you feel like home, a sense of comfort and warmth with authentic Asian dishes cooked with all our heart' },
      { name: 'og:url', content: 'https://tjendana.develobe.id/' },
      { name: 'og:image', content: 'TODO' },
      { name: 'og:image:secure_url', content: 'TODO' },
      { name: 'og:image:type', content: 'image/png' },
      { name: 'og:image:width', content: '300' },
      { name: 'og:image:height', content: '213' },
      { name: 'og:type', content: 'website' },
      { name: 'og:locale', content: 'en_US' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Tjendana Bistro' },
      { name: 'twitter:description', content: 'Authentic Asian Food. We will make you feel like home, a sense of comfort and warmth with authentic Asian dishes cooked with all our heart' },
      { name: 'twitter:image', content: 'TODO' },
    ],
  })

  // Variables
  const popularMenu = ref([
    {
      "name": "Mango Chicken",
      "image": "https://ik.imagekit.io/b3amk7ihm/1716045284385.webp"
    },
    {
      "name": "Tahu Cabe Garam",
      "image": "https://ik.imagekit.io/b3amk7ihm/1716045362532.webp"
    },
    {
      "name": "Ikan Malas Stim Kecap Asin",
      "image": "https://ik.imagekit.io/b3amk7ihm/1716045390366.webp"
    },
    {
      "name": "Baby Kailan 2 Rasa",
      "image": "https://ik.imagekit.io/b3amk7ihm/1716045448310.webp"
    },
    {
      "name": "Grill Jumbo Sotong",
      "image": "https://ik.imagekit.io/b3amk7ihm/1716045479952.webp"
    },
    {
      "name": "Chicken Satay Bumbu Kacang",
      "image": "https://ik.imagekit.io/b3amk7ihm/1716045536646.webp"
    },
  ]);

  // Variables
  let ctx: any;
  const isMounted = ref(false);

  // Register GSAP plugin
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);
  
  // Functions
  function animatePage(){
    // Animate page
    ctx = gsap.context((self: any) => {
      // Landing page animation
      gsap.timeline()
        .from("#logo-landing-page", {
          duration: 0.5,
          opacity: 0,
        })
        .to("#section-landing-page", {
          delay: 1,
          duration: 0.5,
          opacity: 0,
        })
        .to("#logo-landing-page", {
          duration: 0.5,
          y: -50,
          opacity: 0,
        }, "<")
        .to("#section-landing-page", {
          duration: 0.5,
          y: -1920,
        })
        .from("#image-carousel", {
          duration: 0.5,
          opacity: 0,
        })
        .to("#text-gallery-tjendana", {
          duration: 0.5,
          ease: "none",
          text: "Tjendana"
        })
        .to("#text-gallery-bistro", {
          duration: 0.5,
          ease: "none",
          text: "Bistro"
        })
        .to("#text-gallery-description", {
          delay: 1,
          duration: 5,
          ease: "none",
          text: "We will make you feel like home, a sense of comfort and warmth with authentic Asian dishes cooked with all our heart"
        })
        .from("#link-wrapper-explore-tjendana", {
          duration: 0.5,
          opacity: 0,
        });

      // Popular menu animation
      gsap.timeline({
          scrollTrigger: {
            trigger: "#section-popular-menu",
            start: 'top 50%',
          }
        })
        .to("#text-popular", {
          duration: 0.8,
          ease: "none",
          text: "Popular"
        })
        .to("#text-menu", {
          duration: 0.8,
          ease: "none",
          text: "Menu"
        })
        .from("#swiper-popular-menu", {
          duration: 0.5,
          opacity: 0,
          y: 50,
        });

      // Moment animation
      gsap.timeline({
          scrollTrigger: {
            trigger: "#section-moment",
            start: 'top 50%',
          }
        })
        .to("#text-create-moment", {
          duration: 1.5,
          ease: "none",
          text: "Create Special Moments"
        })
        .to("#text-with-us", {
          duration: 0.8,
          ease: "none",
          text: "With Us"
        })
        .from("#moment-dine-in", {
          duration: 0.5,
          opacity: 0,
          y: 50,
        });

      gsap.timeline({
          scrollTrigger: {
            trigger: "#moment-dine-in",
            start: '50% top',
          }
        })
        .from("#moment-wedding", {
          duration: 0.5,
          opacity: 0,
          y: 50,
        });
      
      gsap.timeline({
          scrollTrigger: {
            trigger: "#moment-wedding",
            start: '50% top',
          }
        })
        .from("#moment-birthday", {
          duration: 0.5,
          opacity: 0,
          y: 50,
        });

      gsap.timeline({
          scrollTrigger: {
            trigger: "#moment-birthday",
            start: '50% top',
          }
        })
        .from("#moment-meeting", {
          duration: 0.5,
          opacity: 0,
          y: 50,
        });

      // Contact animation
      gsap.timeline({
          scrollTrigger: {
            trigger: "#section-contact",
            start: '50% 50%',
          }
        })
        .from("#divider-contact", {
          duration: 0.5,
          y: 40,
          opacity: 0
        })
        .from("#img-contact", {
          duration: 0.5,
          x: 60,
          opacity: 0
        })
        .to("#text-location-tjendana", {
          duration: 1.5,
          ease: "none",
          text: "Jl. Sukajadi, No. 181 Bandung, Indonesia 40161"
        })
        .to("#text-time-tjendana", {
          duration: 1.5,
          ease: "none",
          text: "Senin - Minggu | 10.00 - 21.00"
        }, "<")
        .to("#link-instagram-tjendana", {
          duration: 1.5,
          ease: "none",
          text: "@tjendanabistro"
        }, "<")
        .to("#text-phone-tjendana", {
          duration: 1.5,
          ease: "none",
          text: "(022) 2034622 / 085339887000"
        }, "<")
        .from("#developer-info", {
          duration: 0.5,
          opacity: 0
        })
    });
  }

  // Lifecycle Callback
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