on.input.runtime = function() {

  data.ping(function(err) {
    if(err) {
      output({ error: err });
    } else {
      output({ runtime: data });
    }

  });

};
