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
    }).done(function(responseData){
       $('section').append(responseData);
     }).fail(function(){      $('#step3456').append("sorry")
    }).always(function(){
      $('#step3456').append("So")
    });
  });

  $('#dd').click(function(){

    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/count/',
      method:'get',
      data:{},
      dataType:'text'
    }).done(function(responseData){
      $('#step7').append(responseData);
    })
  })
  $('#ee').click(function(){

    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/time/',
      method:'get',
      data:{timezone:'Europe/Sofia', timezone:'America/Mexico_City'},
      dataType:'text'
    }).done(function(responseData){
      $('#step8').append(responseData);
    })
  })
  $('#ff').click(function(){

    $.ajax({
    url:'http://first-ajax-api.herokuapp.com/a_car/',
    method:'get',
    data:{},
    dataType:'html'
  }).done(function(responseData){
    $('#list').append(responseData);
  })
  });
});
