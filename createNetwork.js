module.exports = {
  name: "createNetwork",
  ns: "noflo",
  description: "Noflo Create Network",
  phrases: {
    active: "Creating Noflo Network"
  },
  ports: {
    input: {
      "in": {
        title: "Graph",
        type: "object"
      },
      noflo: {
        title: "Noflo",
        type: "function"
      }
    },
    output: {
      network: {
        title: "Network",
        type: "function"
      }
    }
  },
  fn: function createNetwork(input, $, output, state, done, cb, on) {
    var r = function() {
      output.out = [$.noflo, 'createNetwork', $.in]
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}