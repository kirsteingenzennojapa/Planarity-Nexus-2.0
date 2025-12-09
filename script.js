// Distance helper
function dist(a, b) {
  if (a.z !== undefined && b.z !== undefined) {
    return Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
  }
  return Math.hypot(a.x - b.x, a.y - b.y);
}

/* Full PlanarityGame and Graph classes code here — 
   (copy everything from the <script> in your HTML, unchanged) */

class Graph {
  /* ... (full Graph class code here) ... */
}

class PlanarityGame {
  /* ... (full PlanarityGame class code here) ... */
}

const game = new PlanarityGame();
