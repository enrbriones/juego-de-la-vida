<script>
  import { matrix } from "../stores/stores";
  import Cell from "./Cell.svelte";

  $: mat = $matrix;
  let rows = 60;
  let cols = 150;
  let ww =  window.innerWidth;
  let perimeter = ww / cols - 1;
</script>

<style>
  main {
    display: grid;
    width: 100%;
    height: auto;
    margin: auto;
    gap: 1px;
    background: #424242;
  }
</style>

<main
  style="grid-template-columns: repeat({cols},{perimeter}px);
  grid-template-rows: repeat({rows},{perimeter}px);">

  {#each mat as row, x}
    {#each row as value, y}
      <Cell {value} {x} {y} />
    {/each}
  {/each}

</main>