import Graph from './graph.js';

 // Driver code
 let V = 5;
     
  // Using the above implemented graph class
var g = new Graph(V);

   let adj=new Array(V);
   for(let i=0;i<V;i++)
   {
       adj[i]=[];
   }
     
   // Vertex numbers should be from 0 to 4.
      // To add an edge
   adj = g.addEdge(adj, 0, 1, 10)
   adj = g.addEdge(adj, 0, 4, 20)
   adj = g.addEdge(adj, 1, 2, 30)
   adj = g.addEdge(adj, 1, 3, 40)
   adj = g.addEdge(adj, 1, 4, 50)
   adj = g.addEdge(adj, 2, 3, 60)
   adj = g.addEdge(adj, 3, 4, 70)
   //Print adjacency list representation of graph
   g.printGraph(V);

     
     
 



