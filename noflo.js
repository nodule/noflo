module.exports = {
  name: "noflo",
  ns: "noflo",
  description: "Noflo Graph",
  phrases: {
    active: "Creating Noflo graph"
  },
  ports: {
    input: {},
    output: {
      noflo: {
        title: "Noflo",
        type: "function"
      }
    }
  },
  dependencies: {
    npm: {
      noflo: require('noflo')
    }
  },
  fn: function noflo(input, $, output, state, done, cb, on, noflo) {
    var r = function() {
      output.noflo = $.create(noflo)
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}