const { Graph } = require('./Graph');
const { DFS } = require('./DFS');

describe('DFS', () => {
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

  test('10번에서 6번 노드로 가는 경로를 반환한다', () => {
    const dfs = new DFS(graph, 10);

    const path = dfs.pathTo(6);

    const answer = [];
    for (const v of path) {
      answer.push(v);
    }

    expect(answer).toEqual([10, 5, 0, 2, 6]);
  });

  test('hasPathTo는 노드가 연결되어있으면 true, 연결되어 있지 않으면 false를 반환한다', () => {
    const dfs = new DFS(graph, 0);

    expect(dfs.hasPathTo(2)).toBe(true);
    expect(dfs.hasPathTo(3)).toBe(true);
    expect(dfs.hasPathTo(5)).toBe(true);
    expect(dfs.hasPathTo(6)).toBe(true);
    expect(dfs.hasPathTo(10)).toBe(true);

    expect(dfs.hasPathTo(1)).toBe(false);
    expect(dfs.hasPathTo(4)).toBe(false);
    expect(dfs.hasPathTo(7)).toBe(false);
    expect(dfs.hasPathTo(8)).toBe(false);
    expect(dfs.hasPathTo(9)).toBe(false);
    expect(dfs.hasPathTo(11)).toBe(false);
  });
});
