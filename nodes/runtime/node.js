output = function() {

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
   //cb({ runtime: runtime, error: err });
   cb({ runtime: runtime });
 });

};
