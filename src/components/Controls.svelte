<script>
  import { matrix } from "../stores/stores";

  let isRunning = true;
  const toggleRun = () => {
    if (isRunning) {
      matrix.stop();
    } else {
      matrix.start();
    }
    isRunning = !isRunning;
  };
</script>

<style>
  .controls {
    margin-top: 10px;
    justify-self: center;
  }
</style>

<div class="controls">
  <button on:click={() => toggleRun()}>
    <span class={isRunning ? 'fa fa-pause' : 'fa fa-play'} /> {isRunning?'Pause':'Play'}
  </button>
  <button on:click={() => matrix.reset()}>
    <span class="fa fa-eraser" />
    Reset
  </button>
</div>
