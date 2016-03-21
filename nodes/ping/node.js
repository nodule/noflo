on.input.runtime = function() {
  $.runtime.ping(function(err) {
    if(err) {
      output({ error: err });
    } else {
      output({ runtime: $.runtime });
    }

  });
};
