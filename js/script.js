$(document).ready(function(){
  
  callPage('templates/home.html');

  $('.ajax-target').on('click', function (e) {
    e.preventDefault();
    var pageRef = $(this).attr('href');
    callPage(pageRef);
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
