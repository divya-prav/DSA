class Graph {
  constructor() {
    this.adjacencyList = [];
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("C", "F");
graph.addEdge("E", "F");

//console.log(graph.adjacencyList);

function dfs(graph) {
  let nodes = [];
  let result = new Set();

  for (const v in graph) {
    graph[v].map((node) => nodes.push(v,node));
    
  }  
  for(const v in nodes) {
    if(!result.has(v)){
        result.add(nodes[v])
      }

  }
 //console.log(result);
}

let visitedSet = new Set()

function dfsRecursive(startNode) {
    if(visitedSet.has(startNode))
        return

    let adjNodes = graph.adjacencyList[startNode];
    visitedSet.add(startNode)
    console.log(startNode);
    for(let node in adjNodes) {
        dfsRecursive(adjNodes[node]);
    }
}

function bfs(startNode) {

    let queue = new Array()
    queue.push(startNode);

    while(queue.length > 0) {
        let node = queue.shift()
        if(visitedSet.has(node))
            continue;
        visitedSet.add(node);
        console.log(node);
        let adjNodes = graph.adjacencyList[node];
        for(let adjNode in adjNodes) {
            queue.push(adjNodes[adjNode])
        }
    }
    


}


//dfs(graph.adjacencyList);
//dfsRecursive("A")
bfs("A")
function bfsShortestPath(graph,source,target){
  

}

bfsShortestPath(graph.adjacencyList,'A','F');
