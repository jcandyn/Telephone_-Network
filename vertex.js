class Vertex {
    constructor(adjacencyInfo = null, nextVertex = null, weight = null) {
      this.adjacencyInfo = adjacencyInfo;
      this.nextVertex = nextVertex;
      this.weight = weight;
    }
  }


  export default Vertex; // 👈 Export class