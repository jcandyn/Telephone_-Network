  // create a graph class
class Graph {
  // defining vertex array and
  // adjacent list
  constructor(noOfVertices)
  {
      this.noOfVertices = noOfVertices;
      // this.AdjList = new Map();
      let adj=new Array(noOfVertices);
      for(let i=0;i<noOfVertices;i++)
      {
          adj[i]=[];
      }

       this.AdjList = adj;
  }

  // functions to be implemented


  // addEdge(v, w)
  // add edge to the graph
addEdge(adj,u,v,wt)
{
    adj[u].push([v,wt]);
    adj[v].push([u,wt]);

    this.AdjList = adj;

    return adj;
}

  //Print adjacency list representation of graph
 printGraph(V)
  {  let v=0,w=0;
    for(let u=0;u<V;u++)
    {
        console.log("Node "+u+ " makes an edge with:");
        for(let it=0;it<this.AdjList[u].length;it++)
        {
            v=this.AdjList[u][it][0];
            w=this.AdjList[u][it][1];
            console.log("        Node "+ v+ " with edge weight = "+ w)
        }
    }
  }

 // bfs(v)
//  bfs(startingNode)
//  {
  
//      // create a visited object
//      var visited = {};
  
//      // Create an object for queue
//     //  var q = new Queue();
//      var q = [];
//      // add the starting node to the queue
//      visited[startingNode] = true;
//      q.push(startingNode); //enque
  
//      // loop until queue is empty
//      while (q.length != 0) {
//          // get the element from the queue
//          var getQueueElement = q.shift(); //deque
  
//          // passing the current vertex to callback function
//          console.log(getQueueElement);
  
//          // get the adjacent list for current vertex
//          var get_List = this.AdjList[getQueueElement];
  
//          // loop through the list and add the element to the
//          // queue if it is not processed yet
//          for (var i in get_List) {
//              var neigh = get_List[i];
  
//              if (!visited[neigh]) {
//                  visited[neigh] = true;
//                  q.push(neigh);
//              }
//          }
//      }
//  }
  // dfs(v)
}


  export default Graph; // 👈 Export class