// Wordnik API and URL
var URL = "http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=d4964566bbc960329e0080f95100263c0431ce19dd14d81a3"


// GET request to Wordnik API
//Perform an asynchronous HTTP (Ajax) request.
$.ajax({
        method: 'GET',
        //A string containing the URL to which the request is sent.
        url: URL,
        // the type of data we expect back
        dataType: 'jsonp',
        //An object of numeric HTTP codes and functions to be called when the response has the corresponding code.
        statusCode: {
            200: function() {
                console.log("200 response");
            },
            503: function() {
                alert("Service is unavailable");
            }
        },
        success: function(status) {
            console.log("success");
        },
        // code to run regardless of success or failure
        complete: function() {
            console.log('The request is complete!');
        }
    })
    .done(function(response, data) {
        console.log(data);
        var word = response.word
        console.log(word);
        $('#wordDump').html(word);
    });


setTimeout(function() {
    var str = $("#wordDump").text();
    console.log(str)
}, 1000);