<script>
  import { matrix } from "../stores/stores";
  export let value;
  export let x;
  export let y;
  $:background= value?'#f2f2f2':'black';
</script>

<style>

.cell{
  display: flex;
}

.highlight{
  width: 100%;
  height: 100%;
  /* background: red; */
}
.highlight:hover{
  background: rgba(175,175,175,0.5);
}
</style>

<div class="cell"
  style="background:{background}"
  on:click={() => matrix.toggle(x, y)} >
    <span class="highlight"></span>
  </div>
