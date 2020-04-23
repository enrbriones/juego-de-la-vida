<script>
import Controls from './Controls.svelte'
</script>

<style>
  header {
    display: grid;
    padding: 10px;
   grid-template-columns: repeat(3,1fr);
    align-items: center;
    flex-grow: 1;
  }

  h1 {
    font-size: 1.2rem;
    color: #f2f2f2;
    margin: 0;
    padding: 0;
    font-weight: 400;
    text-transform: uppercase;
    flex-basis: auto;
  }

  a {
    justify-self: end;
    color: white;
  }

  a:hover {
    color: #f2f2f2;
  }
</style>

<header>
  <h1>El Juego de la Vida</h1>

  <Controls/>
  <a href="https://github.com/enrbriones/juego-de-la-vida" target="blank" title='Ver proyecto en GitHub' >
    <span class="fab fa-github fa-2x" />
  </a>
</header>
