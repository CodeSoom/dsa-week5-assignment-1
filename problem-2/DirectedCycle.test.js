const { Diagraph } = require('./Diagraph');
const { DirectedCycle } = require('./DirectedCycle');

describe('DirectedCycle', () => {
  test('hasCycle은 순환 경로가 있으면 true를 반환한다', () => {
    const edges = [
      [0, 1],
      [0, 5],
      [2, 0],
      [2, 3],
      [3, 2],
      [3, 5],
      [4, 3],
      [4, 2],
      [5, 4],
    ];

    const diagraph = new Diagraph(6);
    edges.forEach(([v, w]) => {
      diagraph.addEdge(v, w);
    });

    const directedCycle = new DirectedCycle(diagraph, 0);

    expect(directedCycle.hasCycle()).toBe(true);

    const cycleVertexes = [];

    for (const v of directedCycle.cycle()) {
      cycleVertexes.push(v);
    }

    expect(cycleVertexes).toEqual([3, 5, 4, 2, 3]);
  });

  test('hasCycle은 순환 경로가 없으면 false를 반환한다', () => {
    const edges = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
    ];

    const diagraph = new Diagraph(5);
    edges.forEach(([v, w]) => {
      diagraph.addEdge(v, w);
    });

    const directedCycle = new DirectedCycle(diagraph, 0);

    expect(directedCycle.hasCycle()).toBe(false);
  });
});
