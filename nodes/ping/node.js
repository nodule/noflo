on.input.runtime = function() {
  $.runtime.ping(function(err) {
    if(err) {
      output({ error: $.create(err) });
    } else {
      output({ runtime: $.get('runtime') });
    }

  });
};
