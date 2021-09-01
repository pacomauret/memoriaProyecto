import matplotlib.pyplot as plt
import networkx as nx
G = nx.Graph()
options = {

    'node_size': 100,

    'width': 3,

}


G = nx.dodecahedral_graph()

shells = [[2, 3, 4, 5, 6], [8, 1, 0, 19, 18, 17, 16, 15, 14, 7], [9, 10, 11, 12, 13]]

nx.draw_shell(G, nlist=shells, **options)
plt.show()
