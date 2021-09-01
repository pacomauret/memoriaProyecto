import matplotlib.pyplot as plt
import networkx as nx
G = nx.Graph()
G.add_node(1)
G.add_nodes_from([2, 3])
G.add_nodes_from([
    (4, {"color": "red"}),
    (5, {"color": "green"}),
])

G.add_edge(1, 2,color='red', weight=3,capacity=15,length=342.7)
e = (2, 3)
G.add_edge(*e)  # unpack edge tuple*
G.add_edges_from([(1, 2), (1, 3)])
G.add_edges_from([(2,4),(1,5)])


G1 = nx.Graph()
G1.add_node(1)
G1.add_nodes_from([2, 3])
G1.add_nodes_from([
    (4, {"color": "red"}),
    (5, {"color": "green"}),
])
G1.add_edges_from([(1,2),(2,3),(3,1),(5,1),(5,4)])

#G.add_edges_from(H.edges)
# G.clear()
# G.add_edges_from([(1, 2), (1, 3)])
# G.add_node(1)
# G.add_edge(1, 2)
# G.add_node("spam")        # adds node "spam"
# G.add_nodes_from("spam")  # adds 4 nodes: 's', 'p', 'a', 'm'
# G.add_edge(3, 'm')
# DG = nx.DiGraph()
# DG.add_edge(2, 1)   # adds the nodes in order 2, 1
# DG.add_edge(1, 3)
# DG.add_edge(2, 4)
# DG.add_edge(1, 2)
# assert list(DG.successors(2)) == [1, 4]
# assert list(DG.edges) == [(2, 1), (2, 4), (1, 3), (1, 2)]

nx.draw(G, node_color=['red','blue','green','green','green'],
        edge_color=['red','blue','green','green'],
        node_size=[200,100,50,10,5],
        width=[5,2,1,3])
#nx.draw(G1, node_color='blue')

plt.show()
