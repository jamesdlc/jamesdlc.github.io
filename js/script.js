$(document).ready(function(){
  var homeClasses = ['adventuretime','arch','bridge','bush','clouds','dream','peak','pier'];

  callPage('templates/home.html');
  
  setInterval(function(){
    var value = homeClasses[Math.floor(Math.random() * homeClasses.length)];
    $("#random-img").removeClass();
    $("#random-img").addClass(value);
  }, 30000);

  $('.ajax-target').on('click', function (e) {
    e.preventDefault();
    var pageRef = $(this).attr('href');
    callPage(pageRef);
  });

  $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});




  function callPage ( pageRefInput ) {
    $.ajax({
      url: pageRefInput,
      type: "GET",
      dataType: "text",
      success: function (response) {
        $('.content').html(response);
      },
      error: function (error) {
        console.log("something went wrong. ", error);
      },
      complete: function (xhr,status) {
      }
    });
  }
});
