// var list ="
// .244.250.325.298.311.253.269.257.335.266.268.256.272.300.295.231.232.320.311.265
// .277.268.315.279.303.275.287.306.294.254.262.281.309.310.295.262.288.263.232.298
// .280.289.283.299.280.270.258.255.308.278.281.273.253.322.276.311.271.290.287.275
// .266.268.249.292.289.281.308.306.254.288.293.286.234.251.298.272.270.325.303.258
// .294.302.298.252.266.257.260.264.260.343.265.302.298.280.309.259.261.308.297.313
// .278.264.279.250.254.296.300.264.291.277.280.285.262.314.277.256.264";

list.split("#").forEach(function(g){
    var sum = 0;
    (g.split(".").slice(1,4)).forEach(function(e){
     sum += parseInt(e); 
    })
     console.log(sum);
  });


//index of last count is the Encrypted Space Ascii value
console.log(count.indexOf(Math.max(...count)));

//encryption pass was added to the ascii value, so we need to find the difference of the 'theoretical' encrypted space and the ascii space which will be our password
var password = parseInt(SpaceIndex - ' '.charCodeAt(0));
console.log("Password = " + password)


var secret = '';
//decrypt the message using the pass
list.split("#").forEach(function(g){
  var sum = 0;
  (g.split(".").slice(1,4)).forEach(function(e){
   sum += parseInt(e); 
  })
  secret += ''+ String.fromCharCode(parseInt(sum - password));
});