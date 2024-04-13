<script>
  import shirt from "$lib/shirtRemove.png";
  export {default as Card} from "./components/Card.svelte"
</script>


<div class="flex flex-col w-36 h-36 bg-slate-600 items-center ">
    <img class="w-24 h-24 mt-4" alt=shirt src={shirt}/>
    <p class="mt-4 font-quest text-white">T-Shirt</p>
</div>


