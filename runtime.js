module.exports = {
  name: "runtime",
  ns: "flowhub",
  description: "FlowHub Runtime",
  phrases: {
    active: "Creating Flowhub Runtime"
  },
  ports: {
    input: {
      label: {
        title: "Label",
        type: "string"
      },
      id: {
        title: "ID",
        type: "string"
      },
      user: {
        title: "User UUID",
        type: "string"
      },
      secret: {
        title: "Secret",
        type: "string"
      },
      protocol: {
        title: "Protocol",
        type: "string"
      },
      address: {
        title: "Address",
        type: "string"
      },
      system: {
        title: "System type",
        type: "string"
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      runtime: {
        title: "Flowhub Runtime",
        type: "function"
      }
    }
  },
  dependencies: {
    npm: {
      "flowhub-registry": require('flowhub-registry')
    }
  },
  fn: function runtime(input, $, output, state, done, cb, on, flowhub_registry) {
    var r = function() {
      var runtime = new flowhub_registry.Runtime({
        label: $.label,
        id: $.id,
        user: $.user,
        secret: $.secret,
        protocol: $.protocol,
        address: $.address,
        type: $.system
      });

      runtime.register(function(err) {
        //output({ runtime: runtime, error: err });
        output({
          runtime: $.create(runtime)
        });
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}