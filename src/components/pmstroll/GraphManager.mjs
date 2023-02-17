export default class GraphManager
{
    static addNode(node, graph)
    {
        graph.set(node, new Map());

        // return node
    }

    static edgesContainerOf(node, graph)
    {
        return graph.get(node);
    }

    static edgeAlreadyExists(node, neighbor, graph)
    {
        return graph.has(node) && this.edgesContainerOf(node, graph).has(neighbor);
    }

    static addEdge(node, neighbor, dist, graph)
    {
        if (!this.edgeAlreadyExists(node, neighbor, graph))
        {
            this.edgesContainerOf(node, graph).set(neighbor, dist);

            this.edgesContainerOf(neighbor, graph).set(node, dist);
        }
    }

    static cloneGraph(graph)
    {
        const cloneGraph = new Map();

        for (const [orig, container] of graph)
        {

            const cloneCont = new Map();

            cloneGraph.set(orig, cloneCont);

            for (const [neigh, dist] of container)
            {
                cloneCont.set(neigh, dist);
            }

        }

        return cloneGraph
    }

    static destroyGraph(graph)
    {
        for (const [orig, container] of graph)
        {
            graph.get(orig).clear();
        }

        graph.clear();

        // for (const [orig, container] of graph)
        // {
        //     console.log("(After) %o -> %o", orig, graph.get(orig));
        // }
        
        // return graph
    }
}
