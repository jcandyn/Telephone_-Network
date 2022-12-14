import Graph from './graph.js';
 
     

   var vertices = [ 0, 1, 2, 3, 4 , 5 , 6, 7 , 8];
   let V = vertices.length;

  // Using the above imported graph class
  var g = new Graph(V);

  let adj=new Array(V);
  for(let i=0;i<V;i++)
  {
      adj[i]=[];
  }

   // adding vertices
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}  
     
   // Vertex numbers should be from 0 to 4.
      // To add an edge
//    adj = g.addEdge(adj, 0, 1, 10)
//    adj = g.addEdge(adj, 0, 4, 20)
//    adj = g.addEdge(adj, 1, 2, 30)
//    adj = g.addEdge(adj, 1, 3, 40)
//    adj = g.addEdge(adj, 1, 4, 50)
//    adj = g.addEdge(adj, 2, 3, 60)
//    adj = g.addEdge(adj, 3, 4, 70)

adj = g.addEdge(adj, 0, 1, 4);
adj = g.addEdge(adj, 0, 7, 8);
adj = g.addEdge(adj, 1, 2, 8);
adj = g.addEdge(adj, 1, 7, 11);
adj = g.addEdge(adj, 2, 3, 7);
adj = g.addEdge(adj, 2, 8, 2);
adj = g.addEdge(adj, 2, 5, 4);
adj = g.addEdge(adj, 3, 4, 9);
adj = g.addEdge(adj, 3, 5, 14);
adj = g.addEdge(adj, 4, 5, 10);
adj = g.addEdge(adj, 5, 6, 2);
adj = g.addEdge(adj, 6, 7, 1);
adj = g.addEdge(adj, 6, 8, 6);
adj = g.addEdge(adj,7, 8, 7);
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
   function findMinVal(D, vertex, mstSet, V) {
    let oldParent = vertex;
    let copyD = D;
    //    let result = -1;
    if (mstSet.size != 0) {
    for (let i =0 ; i < V; i++) {
        if (mstSet.has(vertices[i])) {
            D.set(vertices[i], Number.MAX_VALUE);
        }
       
    }
}

    let result = vertex;
       const min = Math.min(...D.values());
       const key = getByValue(D,min);
    console.log(`Lowest value is ${min}, with a key of ${key}`);
  
        result = key;
    
         D = copyD;
    return [result, oldParent];
   }

   //once graph is created, implement prim's algorithm
   function MST(adj, a, b,listOfAdjency) {
       // create a set that keeps track of vertices already in MST
       let mstSet = new Set();

    const D = new Map();
    D.set(vertices[0], 0); // starting vertex being 0 is set equal to 0

      //  for each vertex u != a do D[u,val] = (vertex, infinity)
     for (let i = 1 ; i < vertices.length; i++) {
         D.set(vertices[i],Number.MAX_VALUE);
        }
       
        let k = 0;
        let minKey = 0;
        let oldParent = 0;
       
         // while mstSet does not include all vertices
        while (mstSet.size != vertices.length) {
          

                 // update all values of adjacent vertices
       let values = listOfAdjency.get(minKey);
            for (let i =0 ; i< values.length; i++) {
                D.set(values[i], adj[minKey][i][1]); // set key of adjacent vertext equal to weight it makes with minKey
            }
   
       let minKeyArr = findMinVal(D, minKey, mstSet,V);
       minKey = minKeyArr[0];
      

       if (mstSet.has(minKey) == false) {
        mstSet.add(oldParent,minKey);
        }
        oldParent = minKeyArr[1];
k++;
        }
    
   console.log(mstSet);
return mstSet;
}

function relaxation(u,z) {
   
}

   g.printGraph(adj,V);
  

   g.printAdjGraph(adj,V);
   w(adj,3,2, V);
   let mstSet = MST(adj, 1, 2, g.AdjList);


   
   
   
 



