on.input.runtime = function() {
  input.runtime.ping(function(err) {
    if(err) {
      output({ error: err });
    } else {
      output({ runtime: input.runtime });
    }

  });
};
