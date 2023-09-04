const { Graph } = require('./Graph');
const { ConnectedComponents } = require('./ConnectedComponents');

describe('ConnectedComponents', () => {
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
    [5, 0],
    [8, 1],
    [4, 1],
  ];

  const graph = new Graph(12);
  edges.forEach(([v, w]) => {
    graph.addEdge(v, w);
  });

  test('connected는 두 노드가 노드가 연결되어있으면 true, 연결되어 있지 않으면 false를 반환한다', () => {
    const components = new ConnectedComponents(graph);

    const first = [0, 2, 3, 5, 6, 10];

    for (let i = 0; i < first.length; i++) {
      for (let j = 1; j < first.length; j++) {
        expect(components.connected(first[i], first[j])).toBe(true);
      }
    }

    const second = [1, 4, 7, 8, 11];

    for (let i = 0; i < second.length; i++) {
      for (let j = 1; j < second.length; j++) {
        expect(components.connected(second[i], second[j])).toBe(true);
      }
    }

    for (let i = 0; i < first.length; i++) {
      for (let j = 0; j < second.length; j++) {
        expect(components.connected(first[i], second[j])).toBe(false);
      }
    }

    [...first, ...second].forEach((it) => {
      expect(components.connected(it, 9)).toBe(false);
    });
  });
});
