import { writable } from 'svelte/store';
import { lifeGame } from '../utils/lifeGame';
import {
  setedMat,
  buildMatrix,
  fillMatrix,
  randomMatrix,
} from '../utils/matrixUtils';


const ROWS = 60;
const COLS = 150;
let init = randomMatrix(ROWS, COLS);
// let init = buildMatrix(ROWS,COLS);

let interval;

function createMatrix() {
  const { subscribe, set, update } = writable(init, function start(update) {
    interval = setInterval(() => {
      init = lifeGame(init);
      update(init);
    }, 50);

    return function stop() {
      clearInterval(interval);
    };
  });

  const initInterval = (interval) => {
    interval = setInterval(() => {
      init = lifeGame(init);
      update(init);
    }, 100);
  };

  return {
    subscribe,
    toggle: (x, y) =>
      update((n) => {
        n[x][y] = n[x][y] === 0 ? 1 : 0;
        init = n;
        return n;
      }),
    reset: () => {
      init = buildMatrix(ROWS, COLS);
      set(buildMatrix(ROWS, COLS));
    },
    start: () => {
      interval = setInterval(() => {
        init = lifeGame(init);
        update((n) => (n = init));
      }, 50);
    },
    stop: () => clearInterval(interval),
  };
}

export const matrix = createMatrix();
