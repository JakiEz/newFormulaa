<script>
  import { onMount } from "svelte";
  import { quintOut } from "svelte/easing";
  import { fade, scale, slide, fly } from "svelte/transition";
  import car from "$lib/car.jpg";
  import logo from "$lib/th-r.png";
  import topCar from "$lib/topCar.jpg";
  import backCar from "$lib/backCar.jpg";
  import Hover from "./components/Hover.svelte";
  import Carousel from 'svelte-carousel'

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
</script>

<svelte:window bind:scrollY={y} />

<main>
  <div class="bigb">
    <div class="bg-opacity-10 text-slate-50 py-5 z-10">
      <nav class="border-b-2 border-stone-100">
        <ul class="text-xl flex justify-center">
          <div class=" flex">
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
    </div>
    {#if fadeIn}
      <div
        class=" flex flex-col desktop:mt-48 notebook:mt-[100px] items-center"
        transition:fade={{ duration: 2000 }}
      >
        <h1 class="font-quest align-center notebook:text-9xl desktop:tex text-slate-50">
          Black Pearl XIV
        </h1>
        <div>
          <h1 class="font-quest pt-8 text-2xl text-slate-50">
            " Train man wins since 2007 "
          </h1>
        </div>
      </div>
    {/if}
  </div>
  <div class="h-screen flex items-center justify-center">
    <img class="object-cover h-full w-full" src={car} alt="bigcar" />
  </div>

  <div class="mt-24 text-zinc-50 flex mb-16">
    {#if y>50}
      <div class="flex-1">
        <div
          transition:fly={{
            delay: 250,
            duration: 1000,
            x: -300,
          }}
          class="pl-10 pt-5 pr-10 notebook:ml-24 notebook:mt-[120px] desktop:ml-48 desktop:mt-48 h-[300px] w-[550px] bg-orange-500"
        >
          <h1 class="text-2xl font-quest-bold">About us</h1>
          <div class="h-2"/>
          <p class="font-quest">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    {/if}

    {#if y>50}
      <div class="flex-1 w-96">
        <Carousel
          pauseOnFocus
          autoplay
          autoplayDuration={2000}
        >
          {#each images as image}
            <img src={image.car} alt={image.name} class="h-42 w-42" />
          {/each}
        </Carousel>
      </div>
    {/if}
  </div>

  <div class="">

  </div>



  <footer class="flex  bg-orange-200 h-72 border-width:20px">

    <h2 class="self-center font-quest">Contact us</h2>
  </footer>
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
