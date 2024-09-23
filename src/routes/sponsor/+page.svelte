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
    import Hover from "../components/Hover.svelte";
    import upBeat from "$lib/upBeat.png";
    import Carousel from "svelte-carousel";
    import vid from "$lib/appsomething.mp4";
    import VideoPlayer from "../components/videoPlayer.svelte";

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
      
      <div class="flex justify-center ">
        <h1>Premium</h1>
        <div class="">
            <!-- <h1 class="font-quest text-white absolute text-9xl">UpBeat</h1> -->
              <div class="bg-slate-500">
                <img class="w-42 h-42 object-contain" alt="upbeat" src={upBeat} />
              </div>
        </div>
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
  