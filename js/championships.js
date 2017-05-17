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

