$(document).ready(function () {

  $('#bb').click(function(){

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'get',
      data: {},
      dataType:'text'
    });
  });

  $('#cc').click(function() {

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping/',
      method: 'get',
      data: {},
      dataType:'text'
    })
  })
});
