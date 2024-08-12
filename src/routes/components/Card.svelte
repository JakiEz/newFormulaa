<script>
  import App from "./App.svelte";

  // import shirt from "$lib/shirtRemove.png";
  export let shirt = "$lib/shirtRemove.png";
  export let items = "something";
  // export {default as Card} from "../components/Card.svelte"
</script>

<div class="flex transform-gpu hover:scale-125 duration-300 rounded-xl justify-center w-1/3 bg-stone-50  ">
  <div class="flex-col items-center w-1/2 ">
      <img class="p-6 mt-2 " alt=shirt src={shirt}/>
      <p class="mt-4 mb-[10px] font-quest text-3xl text-gray-900">{items}</p>
  </div>
  <div class="text-2xl w-1/2 h-64 mt-8 text-center pt-24 border-gray-500 border-l-4 ">
    <h1>POLO shirt</h1>
    <button class="hover:bg-slate-600" type="button">Click Me!</button>
  </div>
  


</div>
<!-- <div class="h-screen "/> -->


