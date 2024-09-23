<script lang="ts">
  import logo from "$lib/th-r.png";
  import teamLogo from "$lib/logoT.png";
  import shirtR from "$lib/shirtRemove.png";
  import newShirt from "$lib/gshirtRemove.png";
  import Card from "../components/Card.svelte";
  import { fade, scale, slide, fly } from "svelte/transition";
  import { onMount } from "svelte";
  let sticky = true;
  let isHovered = false;

  let items = ["one"];

  function handleMouseEnter() {
    isHovered = true;
  }

  function handleMouseLeave() {
    isHovered = false;
  }
  let y = false;

  onMount(() => {
    y = true;
  });
</script>

<main class="bg-black">
  <nav
    class={`bg-black/30 ${sticky ? "sticky top-0" : "fixed"} border-b-2 bg-clip-padding backdrop-blur-xl border-stone-100 z-10`}
  >
    <img
      class="w-24 absolute ml-12 mt-[-20px]"
      alt="logo team "
      src={teamLogo}
    />
    <ul class=" text-xl">
      <div class="text-white flex justify-center">
        <a
          class="font-quest scaleInOut mt-2 ml-10"
          on:mouseenter={handleMouseEnter}
          on:mouseleave={handleMouseLeave}
          href="/">Home</a
        >

        <a
          class="font-quest scaleInOut mt-2 ml-10"
          on:mouseenter={handleMouseEnter}
          on:mouseleave={handleMouseLeave}
          href="/store">Store</a
        >
        <a
              class="font-quest scaleInOut mt-2 ml-10"
              on:mouseenter={handleMouseEnter}
              on:mouseleave={handleMouseLeave}
              href="/sponsor">Partner</a
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
  {#if y}
    <div
      in:fly={{ x: -500, duration: 2000, delay: 250 }}
      out:fly={{ x: 500, duration: 2000 }}
      class="bg-orange-400 flex justify-between"
    >
      <h1
        in:fly={{ x: -500, duration: 3000, delay: 500 }}
        out:fly={{ x: 500, duration: 3000 }}
        class="font-quest ml-24 text-white p-12 text-6xl"
      >
        Merchadise
      </h1>
      <!-- <div class="flex">
        <h1 class="text-white font-quest text-2xl p-12">Caps</h1>
        <h1 class="text-white font-quest text-2xl p-12">Shirt</h1>
        <h1 class="text-white font-quest text-2xl p-12">Models</h1>

      </div> -->
    </div>
  {/if} 
  <div class="flex justify-center gap-y-10 mt-24 z-10">
    {#each items as item}
      <Card shirt={newShirt} items={item} />
    {/each}
 
  </div>
  <div class="h-screen"/>
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
