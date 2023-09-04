const { PrimMST } = require('./PrimMST');
const { EdgeWeightedGraph } = require('./EdgeWeightedGraph');
const { Edge } = require('./Edge');

describe('PrimMST', () => {
  const edges = [
    [4, 5, 9],
    [4, 7, 11],
    [5, 7, 5],
    [0, 7, 1],
    [1, 5, 7],
    [0, 4, 12],
    [2, 3, 2],
    [1, 7, 3],
    [0, 2, 4],
    [1, 2, 10],
    [1, 3, 6],
    [2, 7, 8],
    [6, 2, 13],
    [3, 6, 14],
    [6, 0, 15],
    [6, 4, 16],
  ];

  test('최소 신장 트리를 반환한다', () => {
    const graph = new EdgeWeightedGraph(8);
    edges.forEach(([v, w, weight]) => {
      graph.addEdge(new Edge(v, w, weight));
    });

    const answer = [];
    const mst = new PrimMST(graph);
    for (const i of mst.edges()) {
      answer.push(i);
    }

    const r = answer
      .sort((a, b) => a.weight() - b.weight())
      .map((edge) => [edge.either(), edge.other(edge.either())]);

    expect(r).toEqual([
      [0, 7], [2, 3], [1, 7], [0, 2], [5, 7], [4, 5], [6, 2],
    ]);
  });
});
