on.input.runtime = function() {

 input.runtime.ping(function(err) {
   cb({ runtime: input.runtime, error: err });
 });

};
