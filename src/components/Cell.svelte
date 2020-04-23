<script>
  import { matrix } from "../stores/stores";
  export let value;
  export let x;
  export let y;
</script>

<style>

</style>

<div
  style="background:{value === 0 ? 'black' : 'white'}"
  on:click={() => matrix.toggle(x, y)} />
