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

   function w(adj,u, z, V) {
      console.log("current u: " + u);
      console.log("current z: " + z);
        
                 w=adj[u][z-1][1]; //subtract 1 from z since we start with node 0?
                 console.log(" Weight of edge "+ u + "- " + z+ " = "+ w);
                 return w;
       
   }

   function getByValue(map, searchValue) {
    for (let [key, value] of map.entries()) {
      if (value === searchValue)
        return key;
    }
  }
   //returns min val
   function findMinVal(D, vertex) {
       let result = -1;
       const min = Math.min(...D.values());
       const key = getByValue(D,min);
    console.log(`Lowest value is ${min}, with a key of ${key}`);
    if(key == vertex) {
        result = key;
    }
    return result;
   }

   //once graph is created, implement prim's algorithm
   function MST(adj, a, b,listOfAdjency) {
       // create a set that keeps track of vertices already in MST
       let mstSet = [];

    const D = new Map();
    D.set(vertices[0], 0); // starting vertex being 0 is set equal to 0

      //  for each vertex u != a do D[u,val] = (vertex, infinity)
     for (let i = 1 ; i < vertices.length; i++) {
         D.set(vertices[i],Number.MAX_VALUE);
        }


        // while mstSet does not include all vertices

        let k = 0;
        
        while (mstSet.length != vertices.length) {
            if (mstSet.length == 0) {
                let minKey = findMinVal(D, vertices[k]);
    if (minKey != -1) {
        mstSet.push(minKey); // given map, find min val

        // update all values of adjacent vertices
       let values = listOfAdjency.get(minKey);
        for (let i =0 ; i< values.length; i++) {
            D.set(values[i], adj[minKey][i][1]); // set key of adjacent vertext equal to weight it makes with minKey
        }
    }
}
else if (mstSet.length != 0) {
    if (mstSet.indexOf(vertices[k]) == -1) {
        let minKey = findMinVal(D, vertices[k]);
        if (minKey != -1) {
            mstSet.push(minKey); // given map, find min val
              // update all values of adjacent vertices
       let values = listOfAdjency.get(minKey);
       for (let i =0 ; i< values.length; i++) {
           D.set(values[i], adj[minKey][i][1]); // set key of adjacent vertext equal to weight it makes with minKey
       }
        }
}
}
k++;
        }
    











//  // Initialize priority Queue Q  // it contains paris (u, e) where u is a vertex and e is an edge
// let Q = [];
// for (let i = 0; i < adj.length; i++) {
//    Q[i] = [(adj[i], null), D[adj[i]]];
// }
// //while Q is not empty
// while (Q.length != 0) {
// // Q.removeMin();  (u, e)

// var currVertexEdgePair = Q.pop(); //deque, get first element in 

// // passing the current vertex to callback function
//     console.log(currVertexEdgePair);

//    // Add removed pair of vertex and edge to T
//    T.push(currVertexEdgePair);
  

//    // if u == b, stop D[u]

//    if (currVertexEdgePair[0] == b) {
//       return D[currVertexEdgePair[0]];
//    }
   
//    else {
//         // creat the corresponding adjacency list
//         // for the vertex
//         var get_values = listOfAdjency.get(currVertexEdgePair[0]);
//         for (var z of get_values)
//       console.log("mapped value: " + z);
//       if (Q.indexOf(z) != -1 ) {
//          if (w((u,z)) < D[z]) {
//             D[z] = w((u,z));
//             let  d = Math.min(D[u], w((u, z)));

//              if (d>D[z]) {
//                D[z] = d;
//                 } 
//    // change the key value of z in Q to D[z]
//    //MAYBE
//              Q[z] = D[z];
//          }
  
//       }
//      }
/**
 * for each vertex z adjacent to u such that z is in Q do
 
  
/**
 * // perform relaxation on edge (u,z)
	if w((u,z)) < D[z] then
	D[z] = w((u,z))
	Change to (z,(u,z)) the element of vertex z in Q
	Change to D[z] the key of vertex z in Q
 */
// relaxation(u,z);
// let u = adj[i][0];
//   let  d = Math.min(D[u], w((u, z)));

// if (d>D[z]) {
//    D[z] = d;
// } 
// change the key value of z in Q to D[z]
//MAYBE
// Q[z] = D[z];
   // }
   console.log(mstSet);
return mstSet;
}

function relaxation(u,z) {
   /**
    * if w((u,z)) < D[z] then
	D[z] = w((u,z))
	Change to (z,(u,z)) the element of vertex z in Q
	Change to D[z] the key of vertex z in Q
    */

}

  
   // let result = MST(g, 1, 2);
   // console.log(result);
   g.printGraph(adj,V);
  

   g.printAdjGraph(adj,V);
   w(adj,3,2, V);
   MST(adj, 1, 2, g.AdjList);
   
   
 



