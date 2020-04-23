<script>
  import { matrix } from "../stores/stores";
  import Cell from "./Cell.svelte";

  $: mat = $matrix;
  let rows = 60;
  let cols = 150;
  let ww = window.innerWidth;
  let perimeter = ww / cols - 1;
</script>

<style>
  :root {
    --content-width: 100vw;

    /* The size of the gutter */
    --gutter: 1px;

    /* // The amount of columns */
    --columns: 150;

    /* // This is the calculation for the row height. */
    --row-size: calc(
      (var(--content-width) - (var(--gutter) * (var(--columns) - 1))) /
        var(--columns)
    );
  }

  main {
    background: #424242;
    display: grid;
    width: 100%;
    height: auto;
    margin: auto;

    grid-template-columns: repeat(var(--columns), 1fr);
    grid-auto-rows: var(--row-size);

    gap: var(--gutter);
  }
</style>

<main>

  {#each mat as row, x}
    {#each row as value, y}
      <Cell {value} {x} {y} />
    {/each}
  {/each}

</main>
