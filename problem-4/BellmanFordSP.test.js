const { EdgeWeightedDigraph } = require('./EdgeWeightedDigraph');
const { DirectedEdge } = require('./DirectedEdge');
const { BellmanFordSP } = require('./BellmanFordSP');

describe('BellmanFordSP', () => {
  const edges = [
    [4, 5, 6],
    [5, 4, 6],
    [4, 7, 7],
    [5, 7, 2],
    [7, 5, 2],
    [5, 1, 4],
    [0, 4, 8],
    [0, 2, 1],
    [7, 3, 9],
    [1, 3, 3],
    [2, 7, 5],
    [6, 2, 10],
    [3, 6, 11],
    [6, 0, 12],
    [6, 4, 13],
  ];

  it('최단 경로를 반환한다', () => {
    const graph = new EdgeWeightedDigraph(8);
    edges.forEach(([v, w, weight]) => {
      graph.addEdge(new DirectedEdge(v, w, weight));
    });

    const dijkstra = new BellmanFordSP(graph, 0);

    dijkstra.search();

    const path = [];
    for (const i of dijkstra.pathTo(1)) {
      path.push([i.from(), i.to()]);
    }

    expect(path).toEqual([
      [0, 2],
      [2, 7],
      [7, 5],
      [5, 1],
    ]);
    expect(dijkstra.distTo(1)).toBe(12);
    expect(dijkstra.hasPathTo(1)).toBe(true);
  });
});
