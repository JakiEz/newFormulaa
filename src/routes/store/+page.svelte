<script lang="ts">
  import logo from "$lib/th-r.png";
  import teamLogo from "$lib/logoT.png";
  import shirt from "$lib/shirtRemove.png";
  import Card from "../components/Card.svelte";
  let sticky = true;
  let isHovered = false;

  function handleMouseEnter() {
    isHovered = true;
  }

  function handleMouseLeave() {
    isHovered = false;
  }4

</script>

<main class="bg-gray-400">
    <div>
        <nav
          class={`bg-black/0 ${sticky ? "sticky top-0" : "fixed"} border-b-2 bg-clip-padding backdrop-blur-xl border-stone-100`}
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
    <div>
      <div class="grid grid-cols-3 gap-y-10 mt-24 justify-items-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
          <!-- <div class="flex flex-col w-36 h-36 bg-slate-600 justify-items-center">
            <img class="w-24 h-24 " alt=shirt src={shirt}/>
            <p>T-Shirt</p>
          </div> -->
          
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