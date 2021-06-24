/* $("#search").change(function() {
    var arrival = $(this).val();

    $.getJSON( "https://my-json-server.typicode.com/AraiSeisenbek/mockjson")
        .done(function(data) {
            // update your ui here
            console.dir(data.pages);
            var dataArr = data.pages;

            // Iterate over each element in the array
            for (var i = 0; i < dataArr.length; i++){
                // look for the entry with a matching `code` value
                if (dataArr[i].genre== arrival){
                    // we found it
                    console.log(dataArr[i].genre);
                } else {
                    console.log('Houston, we have a problem');
                }
            }

        }).fail(function(data) {
        // handle error here
        console.log('no results found');
    });

}); */

/*
// Variable to hold the locations
var dataArr = {};
// Load the locations once, on page-load.
$(function() {
    $.getJSON( "https://my-json-server.typicode.com/AraiSeisenbek/mockjson").done(function(data) {
        window.dataArr = data.pages;
    }).fail(function(data) {
        console.log('no results found');
        window.dataArr = testData; // remove this line in non-demo mode
    });
});
// Respond to any input change, and show first few matches
$("#search").on('keypress keyup change input', function() {
    var arrival = $(this).val().toLowerCase();
    $('#matches').text(!arrival.length ? '' :
        dataArr.filter(function(place) {
            // look for the entry with a matching `code` value
            return (place.art.toLowerCase().indexOf(arrival) !== -1);
        }).map(function(place) {
            // get titles of matches
            return place.art;
        }).join('\n')); // create one text with a line per matched title
});
// submit button is not needed really
*/

let dropdown = $('#genre-dropdown');

dropdown.empty();

dropdown.append('<option selected="true" disabled>Gallery</option>');
dropdown.prop('selectedIndex', 0);

const url = 'https://my-json-server.typicode.com/AraiSeisenbek/mockjson';

// Populate dropdown with list of provinces
$.getJSON(url, function (data) {
    $.each(data, function (key, entry) {
        dropdown.append($('<option></option>').attr('value', entry.url).text(entry.city));
    })
})

