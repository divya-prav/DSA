class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push(vertex2, weight);
    this.adjacencyList[vertex2].push(vertex1, weight);
  }
}

const graph = new Graph();
for (let i = 0; i < 9; i++) {
  graph.addVertex(i);
}

graph.addEdge(0,1,4);
graph.addEdge(0, 7, 8);
graph.addEdge(1, 2, 8);
graph.addEdge(1, 7, 11);
graph.addEdge(2, 3, 7);
graph.addEdge(2, 8, 2);
graph.addEdge(2, 5, 4);
graph.addEdge(3, 4, 9);
graph.addEdge(3, 5, 14);
graph.addEdge(4, 5, 10);
graph.addEdge(5, 6, 2);
graph.addEdge(6, 7, 1);
graph.addEdge(6, 8, 6);
graph.addEdge(7, 8, 7);


function primsAlgo(){
    let graph = graph.adjacencyList;
    let set = new Set();
    let mst =0;
    for(let v in graph){
      set.add(v);
    
      console.log(`${v}:${graph[v]}`);
    }
console.log(set)

}
primsAlgo()