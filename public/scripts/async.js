window.onload = function() {
  var http = new XMLHttpRequest();

  http.onreadystatechange = function(){
    if (http.readyState == 4 && http.status == 200){
      console.log(JSON.parse(http.response));
    }else {
      console.log(http.status);
    }
  };

  http.open("GET", "/data/aboutcontent.json", true);
  http.send();
  console.log("test");
};




// READY STATES
// 0 - request not initialized
// 1 - request has been set up
// 2 - request has been sent
// 3 - request is in process
// 4 - request is complete
