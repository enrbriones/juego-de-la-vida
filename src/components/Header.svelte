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
    font-size: 1rem;
    letter-spacing: 0.5rem;
    color: #f2f2f2;
    margin: 0;
    padding: 0;
    font-weight: 400;
    text-transform: uppercase;
    flex-basis: auto;
    line-height: normal;
  }

  a {
    justify-self: end;
    /* color: white; */
    color: #EA80FC;
    animation:colorchange 10s infinite alternate;
    -webkit-animation:colorchange 10s infinite alternate;
  }

  a:hover {
    color: #BDBDBD;
  }

  
    @-webkit-keyframes colorchange {
      0% {
        color: #EA80FC;
      }
      
      10% {
        
        color: #B388FF;
      }
      
      20% {
        
        color: #8C9EFF;
      }
      
      30% {
        
        color: #82B1FF;
      }
      
      40% {
        
        color: #80D8FF;
      }
      
      50% {
        
        color: #84FFFF;
      }
      
      60% {
        
        color: #A7FFEB;
      }
      
      70% {
        
        color: #B9F6CA;
      }
      80% {
     
        color: #CCFF90;
      }
      
      90% {
     
        color: #F4FF81;
      }
      
      100% {
        
        color: #FFFF8D;
      }
    }
  
    @keyframes colorchange {
      0% {
        color: #EA80FC;
      }
      
      10% {
        
        color: #B388FF;
      }
      
      20% {
        
        color: #8C9EFF;
      }
      
      30% {
        
        color: #82B1FF;
      }
      
      40% {
        
        color: #80D8FF;
      }
      
      50% {
        
        color: #84FFFF;
      }
      
      60% {
        
        color: #A7FFEB;
      }
      
      70% {
        
        color: #B9F6CA;
      }
      80% {
     
        color: #CCFF90;
      }
      
      90% {
     
        color: #F4FF81;
      }
      
      100% {
        
        color: #FFFF8D;
      }
    }
</style>

<header>
  <h1>El Juego de la Vida</h1>

  <Controls/>
  <a href="https://github.com/enrbriones/juego-de-la-vida" target="blank" title='Ver proyecto en GitHub' >
    <span class="fab fa-github fa-2x" />
  </a>
</header>
