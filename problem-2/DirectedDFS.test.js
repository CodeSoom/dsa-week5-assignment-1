const { Diagraph } = require('./Diagraph');
const { DirectedDFS } = require('./DirectedDFS');

describe('DirectedDFS', () => {
  const edges = [
    [8, 4],
    [2, 3],
    [1, 11],
    [0, 6],
    [3, 6],
    [10, 3],
    [7, 11],
    [7, 8],
    [11, 8],
    [2, 0],
    [6, 2],
    [5, 2],
    [5, 10],
    [3, 10],
    [8, 1],
    [4, 1],
  ];

  const diagraph = new Diagraph(12);
  edges.forEach(([v, w]) => {
    diagraph.addEdge(v, w);
  });

  test('reachable은 도달 가능하면 true, 도달할 수 없으면 false를 반환한다', () => {
    const directedDfs = new DirectedDFS(diagraph, 0);

    expect(directedDfs.reachable(2)).toBe(true);
    expect(directedDfs.reachable(3)).toBe(true);
    expect(directedDfs.reachable(6)).toBe(true);
    expect(directedDfs.reachable(10)).toBe(true);

    expect(directedDfs.reachable(1)).toBe(false);
    expect(directedDfs.reachable(4)).toBe(false);
    expect(directedDfs.reachable(5)).toBe(false);
    expect(directedDfs.reachable(7)).toBe(false);
    expect(directedDfs.reachable(8)).toBe(false);
    expect(directedDfs.reachable(9)).toBe(false);
    expect(directedDfs.reachable(11)).toBe(false);
  });
});
