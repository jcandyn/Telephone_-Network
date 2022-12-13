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

   var vertices = [ 0, 1, 2, 3, 4];
 
// adding vertices
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
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



   // function w(adj,u, z, V) {
   //     let v=0,w=0;
   //       for(let i=0;i<V;i++)
   //       {
   //           console.log("Node "+u+ " makes an edge with:");
   //           for(let it=0;it<this.AdjList[i].length;it++)
   //           {
   //               uw=this.AdjList[u][it][1];
   //               zw=this.AdjList[z][it][1];
   //               console.log("        Node "+ v+ " with edge weight = "+ w)
   //           }
   //       }
       
   // }


   //once graph is created, implement prim's algorithm
   function MST(g, a, b) {
      let D = [];
      D[a] = 0; // starting vertex

      //  for each vertex u != a do D[u] = infinity or D[adj[i][0]] = infinity
     for (let i = 0 ; i < adj.length; i++) {
        if (adj[i][0] != a) {
         D[adj[i][0]] = Number.MAX_VALUE;
        }
    
     }

     // Initialize T and set initially to empty
 let T = []; // this will be our tree

 // Initialize priority Queue Q  // it contains paris (u, e) where u is a vertex and e is an edge
let Q = [];
for (let i = 0; i < adj.length; i++) {
   Q[i] = ((adj[i][0], null), D[adj[i][0]]);
}
//while Q is not empty
while (Q.length != 0) {
// Q.removeMin();  (u, e)
var currVertexEdgePair = Q.shift(); //deque, get first element in 

// passing the current vertex to callback function
    console.log(currVertexEdgePair);

   // Add removed pair of vertex and edge to T
   T.push(currVertexEdgePair);
  

   // if u == b, stop D[u]

   if (currVertexEdgePair[0] == b) {
      return D[currVertexEdgePair[0]];
   }
   else {
/**
 * for each vertex z adjacent to u such that z is in Q do
 */
for (let i = 0; i < adj.length; i++) {
   if (Q.indexOf(D[adj[i][0]]) != -1 ) {
      let z = Q.indexOf(D[adj[i][0]]);
/**
 * // perform relaxation on edge (u,z)
	if w((u,z)) < D[z] then
	D[z] = w((u,z))
	Change to (z,(u,z)) the element of vertex z in Q
	Change to D[z] the key of vertex z in Q
 */
// let u = adj[i][0];
//   let  d = Math.min(D[u], w((u, z)));

// if (d>D[z]) {
//    D[z] = d;
// } 
// change the key value of z in Q to D[z]
//MAYBE
// Q[z] = D[z];
}
   }
}
}
return T;
}

  
   // let result = MST(g, 1, 2);
   // console.log(result);
   g.printGraph(adj,V);

   g.printAdjGraph(adj,V);
 



