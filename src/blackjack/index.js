import {crearDeck, pedirCarta, valorCarta} from './usecases/index'

(() => {
  'use strict'

  let deck = [];

  const tipos = ['C', 'D', 'H', 'S'];
  const especiales = ['A', 'J', 'Q', 'K'];
  
  let puntosJugador = 0;
  let puntosComputadora = 0;
  
  const turnoComputadora = ( puntosJugador ) => {
      do {
          const carta = pedirCarta(deck);
  
          puntosComputadora += valorCarta(carta);
          puntosComputadoraHTML.innerText = puntosComputadora;
  
          const imgCarta = document.createElement('img');
          imgCarta.src = `assets/cartas/${carta}.png`
          computadoraCartasHTML.append(imgCarta);
      } while(puntosComputadora < puntosJugador && puntosJugador <= 21);
  }
  
  const ganador = (puntosJugador, puntosComputadora) => {
      if (puntosJugador === puntosComputadora)
          return 'Empate';
      else if (puntosJugador === 21)
          return '21 Black Jack !!';
      else if ((puntosJugador > puntosComputadora || puntosComputadora > 21) && puntosJugador < 21)
          return 'Ganador!!';
      else 
          return 'Perdiste!!'
  }

  deck = crearDeck( tipos, especiales );
  
  // Referencias HTML
  const btnNuevoHTML = document.querySelector('#btnNuevo');
  const btnPedirHTML = document.querySelector('#btnPedir');
  const btnDetenerHTML = document.querySelector('#btnDetener');
  
  const jugadorCartasHTML = document.querySelector('#jugador-cartas');
  const computadoraCartasHTML = document.querySelector('#computadora-cartas');
  
  const puntosJugadorHTML = document.querySelector('#puntos-jugador');
  const puntosComputadoraHTML = document.querySelector('#puntos-computadora');
  
  const resultadoHTML = document.querySelector('.resultado');
  
  // Eventos
  btnNuevoHTML.addEventListener('click', () => {
      deck = crearDeck( tipos, especiales );
      puntosJugador = 0;
      puntosComputadora = 0;
      puntosJugadorHTML.innerText = '0';
      puntosComputadoraHTML.innerText = '0';
  
      jugadorCartasHTML.innerText = '';
      computadoraCartasHTML.innerText = '';
      
      btnPedirHTML.disabled = false;
      btnDetenerHTML.disabled = false;
      resultadoHTML.innerText = '';
  });
  
  btnPedirHTML.addEventListener('click', () => {
      const carta = pedirCarta(deck);
      
      puntosJugador += valorCarta(carta);
      puntosJugadorHTML.innerText = puntosJugador;
  
      const imgCarta = document.createElement('img');
      imgCarta.src = `assets/cartas/${carta}.png`
      jugadorCartasHTML.append(imgCarta);
  
      if ( puntosJugador > 21 ) {
          btnPedirHTML.disabled = true;
          btnDetenerHTML.disabled = true;
          turnoComputadora(puntosJugador);
          resultadoHTML.innerText = ganador(puntosJugador, puntosComputadora);
      }
  });
  
  btnDetenerHTML.addEventListener('click', () => {
      turnoComputadora(puntosJugador);
      btnPedirHTML.disabled = true;
      btnDetenerHTML.disabled = true;
      resultadoHTML.innerText = ganador(puntosJugador, puntosComputadora);
  });
})();


