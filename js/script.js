$(document).ready(function() { // start document ready
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
                    console.log("200 response for random word search");
                },
                503: function() {
                    alert("Service is unavailable");
                }
            },
            success: function(response) {
                console.log("success for wordnik for random word search");
                var word = response.word // get the random word
                console.log(word);
                $('#wordDump').html(word); // dump the random word on the page
                var definitionURL = "http://api.wordnik.com:80/v4/word.json/" + word + "/definitions?limit=1&includeRelated=true&useCanonical=true&includeTags=false&api_key=d4964566bbc960329e0080f95100263c0431ce19dd14d81a3"
                console.log(definitionURL);
                $.ajax({ // call for word definition
                        method: 'GET',
                        //A string containing the URL to which the request is sent.
                        url: definitionURL,
                        // the type of data we expect back
                        dataType: 'jsonp',
                        //An object of numeric HTTP codes and functions to be called when the response has the corresponding code.
                        statusCode: {
                            200: function() {
                                console.log("200 response for word definition");
                            },
                            503: function() {
                                alert("Service is unavailable");
                            }
                        },
                        success: function(response) {
                            console.log("success for word definition");
                            var wordDefinition = response[0].text; //this is the definition
                            console.log(wordDefinition);
                            $('#wordDefinition').html(wordDefinition); //place definition on page
                            setTimeout(function() { //timeout for unsplash starts
                                //Use encodeURIComponent when you want to encode the value of a URL parameter
                                var str = encodeURIComponent($("#wordDefinition").text());
                                console.log(str)
                                var imageUrl = "https://api.unsplash.com/search/photos/?client_id=8d5285f5ff3b967d3cf4f31b67b5b5134c8f76075f9f8a892d305024f43332fd&query=" + str + "&per_page=1&page=1";
                                console.log(imageUrl);
                                $.ajax({ // call for unsplash starts
                                        method: 'GET',
                                        //A string containing the URL to which the request is sent.
                                        url: imageUrl,
                                        //An object of numeric HTTP codes and functions to be called when the response has the corresponding code.
                                        statusCode: {
                                            200: function() {
                                                console.log("200 response. There is a picture.");
                                            },
                                            503: function() {
                                                alert("Service is unavailable. No picture are returned");
                                            }
                                        },
                                        success: function(status) {
                                            console.log("success picture");
                                        },
                                        // code to run regardless of success or failure
                                        complete: function() {
                                            console.log('The request for picture is complete!');
                                        }
                                    })
                                    .done(function(response, data) {
                                        console.log(response.total);
                                        if (response.total != 0) {
                                            console.log(response.results[0].urls.small);
                                            var imageLink = response.results[0].urls.small;
                                            //console.log(imageLink.length);
                                            // console.log(imageLink);
                                            var resultD = document.getElementById("result"); //display the result in div
                                            var rImg = document.createElement("img"); // create the image
                                            rImg.src = imageLink;
                                            rImg.setAttribute("crossOrigin", "Anonymous"); //needed so I can actually copy the image for later use
                                            resultD.appendChild(rImg); // append image to link
                                            //console.log(rImg);
                                        } else {
                                            alert("no pictures");
                                        } //end else
                                    }); // call for unsplash ends
                            }, 2000); //timeout for unsplash end

                        },
                        // code to run regardless of success or failure
                        complete: function() {
                            console.log('The request is complete for wordnik!');
                        }
                    })
                    .done(function(response, data) {
                        console.log(response);
                        // var word = response.word
                        // console.log(word);
                        // $('#wordDump').html(word);
                    }); //end of call for word definition
            },
            // code to run regardless of success or failure
            complete: function() {
                console.log('The request is complete for wordnik!');
            }
        })
        .done(function(response, data) {
            console.log(response);
            // var word = response.word
            // console.log(word);
            // $('#wordDump').html(word);
        });
}); // end of document ready