$(document).ready(function(){

$.ajax({
    type: "GET",
    url: 'http://94.177.230.203:8080/sport/rest/season/namedescription/all',

    dataType: "json",
    success: function (data) {
  $.each(data,function(d,results){
  // ben is the id of the HTML table
 $("#seriastable").append(
                        "<tr>"
                          +"<td>"+results.name+"</td>"
                          +"<td>"+results.description+"</td>"
                        +"</tr>" )
                    })
 }

});


var forename = $("input[name=\"name\"]").val();
var surname = $("input[name=\"desc\"]").val();

$.ajax({
    url: "http://94.177.230.203:8080/sport/rest/sport/save",
    type: "POST",
    async: true, // set to false if you don't mind the page pausing while waiting for response
    cache: false,
    dataType: "json",
    data: "{ 'name': '" + name + "', 'desc': '" + desc + "' }",
    contentType: "application/json; charset=utf-8",
    success: function(data) {
        // handle your successful response here
    },
    error: function(xhr, ajaxOptions, thrownError) {
        // handle your fail response here
    }
});

})