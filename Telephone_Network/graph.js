  // create a graph class
  class Graph {
    // defining vertex array and
    // adjacent list
    constructor(noOfVertices)
    {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
        let adj=new Array(noOfVertices);
        for(let i=0;i<noOfVertices;i++)
        {
            adj[i]=[];
        }
  
  
    }
  
    // functions to be implemented
  // add vertex to the graph
  addVertex(v)
  {
      // initialize the adjacent list with a
      // null array
      this.AdjList.set(v, []);
  }
  
    // addEdge(v, w)
    // add edge to the graph
  addEdge(adj,u,v,wt)
  {
      adj[u].push([v,wt]);
      adj[v].push([u,wt]);
  
          // get the list for vertex v and put the
      // vertex u denoting edge between v and u
      this.AdjList.get(v).push(u);
   
      // Since graph is undirected,
      // add an edge from u to v also
      this.AdjList.get(u).push(v);
  
      return adj;
  }
  
    //Print adjacency list representation of graph
   printGraph(adj,V)
    {  let v=0,w=0;
      for(let u=0;u<V;u++)
      {
          console.log("Node "+u+ " makes an edge with:");
          for(let it=0;it<adj[u].length;it++)
          {
              v=adj[u][it][0];
              w=adj[u][it][1];
              console.log("        Node "+ v+ " with edge weight = "+ w)
          }
      }
    }
  
  
    // Prints the vertex and adjacency list
  printAdjGraph(adj,V)
  {
      // get all the vertices
      var get_keys = this.AdjList.keys();
   
      // iterate over the vertices
      for (var i of get_keys)
  {
          // creat the corresponding adjacency list
          // for the vertex
          var get_values = this.AdjList.get(i);
          var conc = "";
   
          // iterate over the adjacency list
          // concatenate the values into a string
          for (var j of get_values)
              conc += j + " ";
   
          // print the vertex and its adjacency list
          console.log(i + " -> " + conc);
      }
  }
  
  returnListOfAdjacency() {
    return this.AdjList;
  }
  
  }
  
  
    export default Graph; // 👈 Export class