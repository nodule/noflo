on.input.runtime = function() {

 data.ping(function(err) {
   if(err) {
     cb({ error: err });
   } else {
     cb({ runtime: data });
   }
 });

};
