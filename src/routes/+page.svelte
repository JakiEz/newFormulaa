<script>
  import { onMount } from "svelte";
  import { quintOut } from "svelte/easing";
  import { fade, scale, slide, fly } from "svelte/transition";
  import car from "$lib/image.png";
  import logo from "$lib/th-r.png";
  import background from "$lib/background.png";
  import topCar from "$lib/topCar.jpg";
  import teamLogo from "$lib/logoT.png";
  import backCar from "$lib/backCar.jpg";
  import Hover from "./components/Hover.svelte";
  import Carousel from "svelte-carousel";
  import vid from "$lib/appsomething.mp4";
  import VideoPlayer from "./components/videoPlayer.svelte";

  let fadeIn = false;
  let isHovered = false;
  let active = false;
  let navigating = false;
  let slidee = false;

  const images = [
    { name: "topCar", car: topCar },
    { name: "backCar", car: backCar },
  ];

  function toggleSlidee() {
    slidee = true;
  }

  function toggleFadeIn() {
    fadeIn = true;
  }

  onMount(() => {
    toggleFadeIn();
    toggleSlidee();
  });

  function handleMouseEnter() {
    isHovered = true;
  }

  function handleMouseLeave() {
    isHovered = false;
  }

  let y = 10;
  let gen = "XV";
  let sticky = true;
</script>

<svelte:window bind:scrollY={y} />

<main>
  <div class="bigb">
    <nav
      class={`bg-black/0  border-b-2 bg-clip-padding backdrop-blur-xl border-stone-100 sticky top-0 `}
    >
      <img
        class="w-24 absolute ml-12 mt-[-20px]"
        alt="logo team "
        src={teamLogo}
      />
      <ul class="text-xl">
        <div class="text-white flex justify-center">
          <div></div>
          <a
            class="font-quest scaleInOut mt-2 ml-10"
            on:mouseenter={handleMouseEnter}
            on:mouseleave={handleMouseLeave}
            href="/store">Home</a
          >

          <a
            class="font-quest scaleInOut mt-2 ml-10"
            on:mouseenter={handleMouseEnter}
            on:mouseleave={handleMouseLeave}
            href="/store">Store</a
          >

          <a
            class="scaleInOut mt-0.5 ml-10"
            on:mouseenter={handleMouseEnter}
            on:mouseleave={handleMouseLeave}
            href="https://www.instagram.com/blackpearlracingteam/"
          >
            <img class="w-11 h-11" src={logo} alt="Instagram Logo" />
          </a>
        </div>
      </ul>
    </nav>
    {#if fadeIn}
      <!-- <div class="bg-orange-500 w-96 h-96 absolute z-2" transition:fade={{ duration: 2000 }}/> -->

      <div
        class=" flex flex-col desktop:mt-48 notebook:mt-[100px] items-center z-1"
        transition:fade={{ duration: 2000 }}
      >
        <h1
          class="font-quest align-center font-bold text-opacity-100 notebook:text-[200px] desktop:text-[230px] text-white"
        >
          Black Pearl {gen}
        </h1>
        <div>
          <h1
            class="font-quest desktop:text-[30px] text-2xl text-opacity-100 text-white"
          >
            " Trained man wins since 2007 "
          </h1>
        </div>
      </div>
    {/if}
  </div>
  <div class="h-screen flex items-center justify-center">
    <img class="object-cover h-full w-full" src={background} alt="bigcar" />
  </div>

  <div class="mt-24 text-zinc-50 flex mb-16">
    {#if y > 50}
      <div class="flex-1">
        <div
          transition:fly={{
            delay: 250,
            duration: 1000,
            x: -300,
          }}
          class="pl-10 pt-5 pr-10 notebook:ml-24 notebook:mt-[100px] desktop:ml-48 desktop:mt-48 h-[400px] w-[550px] bg-orange-500"
        >
          <h1 class="text-4xl font-quest-bold pb-4 pt-2">About us</h1>
          <div class="h-2" />
          <p class="font-quest">
            Our team made the decision to participate in this competition. Our
            journey in the KMUTT Formula Student began back in 2007 when our
            esteemed faculty member, Ajarn Surachet Chutima, had a vision. He
            recognized the importance of developing well-rounded engineers with
            hands-on skills that couldn’t be acquired through classroom
            education. Our primary goal in forming this team was not focused on
            winning the competition, but rather on nurturing the skills of our
            team members. Ajarn Chutima firmly believed that the true value lies
            in the experience gained during the competition. This competition
            demonstrates our commitment to being well rounded engineers and
            making a positive impact in the future field.
          </p>
        </div>
      </div>
    {/if}

    {#if y > 50}
      <div class="flex-1 w-96">
        <Carousel pauseOnFocus autoplay autoplayDuration={2000}>
          {#each images as image}
            <img src={image.car} alt={image.name} class="h-42 w-42" />
          {/each}
        </Carousel>
      </div>
    {/if}
  </div>

  <!-- {#if y >= 150}
    <div class=" flex flex-col align-items-center translate-x-1">
      <h2 class="font-quest text-4xl pb-24 text-center">Video</h2>
      <VideoPlayer vide={vid} />
    </div>
  {/if} -->

  <div class="flex flex-col items-center border-t-4 pt-5 mb-10">
    <h1 class="text-xl font-bold font-quest">Contact us</h1>

    <p class="font-quest mt-8">tel: +7 (999) 99</p>
    <p class="font-quest mt-2">instagram : blackpearlracingteam</p>
    <p class="font-quest mt-2">facebook : blackpearlracingteam</p>
  </div>
</main>

<style lang="postcss">
  :global(body) {
    margin: 0;
  }

  nav {
    /* border: 1px solid rgb(255, 255, 255); */
    /* border-width: 2px; */
    padding: 20px;
  }

  .scaleInOut {
    transition: transform 0.3s ease-in-out; /* Define transition */
  }

  .scaleInOut:hover {
    transform: scale(1.3); /* Scale up on hover */
    text-decoration: underline;
  }

  .bigb {
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 10;
    background: linear-gradient(
      360deg,
      #383838cc -10%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }

  .bigb {
    z-index: auto;
  }
</style>
