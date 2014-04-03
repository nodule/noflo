output = function() {

 var runtime = new flowhub_registry.Runtime({
   label: input.label,
   id: input.id,
   user: input.user,
   secret: input.secret,
   protocol: input.protocol,
   address: input.address,
   type: input.system
 });

 runtime.register(function(err) {
   cb({ runtime: runtime, error: err });
 });

};
