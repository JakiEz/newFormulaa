<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import car from "$lib/car.jpg";
  import logo from "$lib/th-r.png";

  let fadeIn = false;

  function toggleFadeIn() {
    fadeIn = true;
  }

  onMount(() => {
    toggleFadeIn();
  });

  let active = false, navigating = false;


</script>

<main>
  <div class="bigb">
    <div class="bg-opacity-10 text-slate-50 py-5 z-10">
      <nav class="mt-32">
        <ul class="text-xl flex justify-center">
          <div class="flex mx-10">
            <a class:active on:mouseenter={() => {
              console.log("enter", navigating);
              if (!navigating) {
                active = true;
              }
            }} href="/" class="mr-20">Home</a>
            
            <a href="/store" class="mr-20">Store</a>
            <a class="py-8-" href="https://www.instagram.com/blackpearlracingteam/">
              <img class="w-11 h-11" src={logo} />
            </a>
          </div>
        </ul>
      </nav>
    </div>
    {#if fadeIn}
      <div
        class=" flex flex-col mx-32 my-48 items-center"
        transition:fade={{ duration: 2000 }}
      >
        <h1 class="text-9xl text-slate-50">Black Pearl XIV</h1>
        <div>
          <h1 class="pt-8 text-2xl text-slate-50">
            " Train man wins since 2007 "
          </h1>
        </div>
      </div>
    {/if}

    <footer></footer>
  </div>
  <div class="h-screen flex items-center justify-center">
    <img class="object-cover h-full w-full" src={car} />
  </div>

  <div class="flex">
    <div class="w- h-24">
      <h1>About us</h1>
      <p>Our team has been founded since 2007 by Prof.Chutima</p>
    </div>
  </div>
</main>

<style lang="postcss">
  :global(body) {
    margin: 0;
    
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

