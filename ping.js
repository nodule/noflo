module.exports = {
  name: "ping",
  ns: "flowhub",
  async: true,
  description: "Ping FlowHub",
  phrases: {
    active: "Pinging to Flowhub"
  },
  ports: {
    input: {
      runtime: {
        title: "Flowhub Runtime",
        type: "function",
        async: true,
        fn: function __RUNTIME__(data, x, source, state, input, output) {
          var r = function() {
            $.runtime.ping(function(err) {
              if (err) {
                output({
                  error: $.create(err)
                });
              } else {
                output({
                  runtime: $.get('runtime')
                });
              }

            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
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
  state: {}
}