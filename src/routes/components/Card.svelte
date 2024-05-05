<script>
  import App from "./App.svelte";

  // import shirt from "$lib/shirtRemove.png";
  export let shirt = "$lib/shirtRemove.png";
  export let items = "something";
  // export {default as Card} from "../components/Card.svelte"
</script>


<div class="flex flex-col w-36 h-36 pb-8 hover:hover:ease-in-out duration 300 transform-gpu hover:scale-105 bg-slate-600 items-center mb-12">
    <img class="w-24 h-24 mt-4" alt=shirt src={shirt}/>
    <p class="mt-4 font-quest text-white">{items}</p>
</div>


