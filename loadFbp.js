module.exports = {
  name: "graph",
  ns: "noflo",
  description: "Noflo Graph",
  phrases: {
    active: "Creating Noflo graph"
  },
  ports: {
    input: {
      noflo: {
        title: "Noflo",
        type: "object"
      },
      "in": {
        title: "Data",
        type: "object"
      }
    },
    output: {
      out: {
        title: "Graph",
        type: "object"
      }
    }
  },
  fn: function graph(input, $, output, state, done, cb, on) {
    var r = function() {
      output.out = [$.noflo.graph, 'loadFbp', $.in]
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}