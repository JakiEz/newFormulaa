<script>
  import { onMount } from "svelte";
  import { quintOut } from "svelte/easing";
  import { fade, scale, slide, fly } from "svelte/transition";
  import logo from "$lib/th-r.png";
  import background from "$lib/background.png";
  import topCar from "$lib/topCar.jpg";
  import teamLogo from "$lib/logoT.png";
  import logoblack from "$lib/blackpearlblack.png";
  import backCar from "$lib/backCar.jpg";
  import pose1 from "$lib/pose1.jpg";
  import pose2 from "$lib/pose2.jpg";
  import pose3 from "$lib/pose3.jpg";
  import pose4 from "$lib/pose4.jpg";
  import pose10 from "$lib/pose10.jpg";
  import pose13 from "$lib/pose13.jpg";
  import pose7 from "$lib/pose7.jpg";  


  let fadeIn = false;
  let isHovered = false;
  let active = false;
  let navigating = false;
  let slidee = false;

  const images = [
    { name: "pose1", car:pose1 },
    { name: "pose2", car:pose2 },
    { name: "topCar", car: topCar },
    { name: "pose3", car: pose3 },
    { name: "pose4", car: pose4 },
    { name: "pose10", car: pose10 },
    { name: "pose13", car: pose13 },
    { name: "pose7", car: pose7 },
  ];


  onMount(() => {
    
  });

  function handleMouseEnter() {
    isHovered = true;
  }

  function handleMouseLeave() {
    isHovered = false;
  }

  let y = 0;
  let gen = "XV";
  let sticky = true;
  $: console.log(y);
</script>

<svelte:window bind:scrollY={y} />
<main>
    <nav
        class={`bg-black/0 w-full sticky top-0 bg-clip-padding backdrop-blur-xl flex justify-between items-center z-10 p-4`}
    >
        <img class="w-24  ml-12" alt="logo team" src={logoblack}/>
        <ul class="flex z-20 text-xl justify-center items-center space-x-10 text-orange-500">
            <a
            class="font-quest scaleInOut "
            on:mouseenter={handleMouseEnter}
            on:mouseleave={handleMouseLeave}
            href="/">Home</a
            >
    
            <a
            class="font-quest scaleInOut ml-10"
            on:mouseenter={handleMouseEnter}
            on:mouseleave={handleMouseLeave}
            href="/store">Store</a
            >
            <a
            class="font-quest scaleInOut ml-10"
            on:mouseenter={handleMouseEnter}
            on:mouseleave={handleMouseLeave}
            href="/sponsor">Partner</a
            >
            <a
            class="font-quest scaleInOut ml-10"
            on:mouseenter={handleMouseEnter}
            on:mouseleave={handleMouseLeave}
            href="/Gallery">Gallery</a
            >
            <!-- <a
            class="scaleInOut mt-0.5 ml-10"
            on:mouseenter={handleMouseEnter}
            on:mouseleave={handleMouseLeave}
            href="https://www.instagram.com/blackpearlracingteam/"
            >
            <img class="w-11 h-11" src={logo} alt="Instagram Logo" />
            </a> -->
        </ul>
    </nav>
    

  <!-- Pinterest-style layout starts here -->
  <div class="columns-4 gap-3 mx-auto space-y-3 pb-28 mt-[120px]">
    {#each images as image (image.name)}
      <div class="break-inside-avoid hover:scale-[1.1] ml-12 mb-12 transition duration-200 object-fit">
        <img alt={image.name} src={image.car} class="object-cover" />
      </div>
    {/each}
  </div>
  
  <!-- <div class="bg-gray-200 grid grid-rows-2 break-inside-avoid">
    <img alt={"www"} src={topCar} class="w-12 h-12 hover:scale-[1.8] transition duration-200 object-fit" />
    <img alt={"www"} src={topCar} class="w-12 h-12 object-fit" />
    <img alt={"www"} src={topCar} class="w-12 h-12 object-fit" />
    <img alt={"www"} src={topCar} class="w-12 h-12 object-fit" />
    <img alt={"www"} src={topCar} class="w-12 h-12 object-fit" />
    <img alt={"www"} src={topCar} class="w-12 h-12 object-fit" />
    <img alt={"www"} src={topCar} class="w-12 h-12 object-fit" />
    <img alt={"www"} src={topCar} class="w-12 h-12 object-fit" />
    <img alt={"www"} src={topCar} class="w-12 h-12 object-fit" />
    <img alt={"www"} src={topCar} class="w-12 h-12 object-fit" />
  <div/> -->
  <!-- <div class="w-24 h-[2000px]">dwadwa</div> -->
</main>

<style>
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

  .masonry-layout {
    column-count: 3; /* Adjust number of columns as needed */
    column-gap: 1.5rem; /* Spacing between columns */
    padding: 1rem; /* Add padding to the container */
    width: 100%; /* Ensure the layout container takes up full width */
    max-width: 1200px; /* Optional: limit the maximum width */
    margin: 0 auto; /* Center the layout */
  }

  .masonry-item {
    break-inside: avoid;
    margin-bottom: 1.5rem; /* Spacing between items */
  }

  .masonry-item img {
    width: 100%; /* Ensure images fit within their columns */
    height: auto; /* Maintain aspect ratio */
    display: block;
  }

  @media (max-width: 1024px) {
    .masonry-layout {
      column-count: 2; /* Fewer columns on medium screens */
    }
  }

  @media (max-width: 768px) {
    .masonry-layout {
      column-count: 1; /* Single column on smaller screens */
    }
  }
</style>
