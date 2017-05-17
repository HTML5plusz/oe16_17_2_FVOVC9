   $(document).ready(function(){

$.ajax({
    type: "GET",
    url: 'http://94.177.230.203:8080/sport/rest/sport/namedescription/all',

    dataType: "json",
    success: function (data) {
  $.each(data,function(d,results){
 $("#seriastable").append(
                        "<tr>"
                          +"<td>"+results.name+"</td>"
                          +"<td>"+results.description+"</td>"
                        +"</tr>" )
                    })
 }

});

var postSport = function () {

var name = $("input[name=\"name\"]").val();
var desc = $("input[name=\"desc\"]").val();

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
}

    $.ajax({
    	type: "GET",
        url: "http://94.177.230.203:8080/sport/rest/sport/idname/all",
        success: function(data)
        {
        	helpers.buildDropdown(
        		data,
        		$('#dropdown'),
        		'Válassz sportágat...'
        		);
        }
    });

 var helpers =
{
    buildDropdown: function(result, dropdown, emptyMessage)
    {
        // Remove current options
        dropdown.html('');
        // Add the empty option with the empty message
        dropdown.append('<option value="">' + emptyMessage + '</option>');
        // Check result isnt empty
        if(result != '')
        {
            // Loop through each of the results and append the option to the dropdown
            $.each(result, function(k, v) {
                dropdown.append('<option value="' + v.id + '">' + v.name + '</option>');
            });
        }
    }
}

})