$(document).ready(function() { // start document ready

    $('#startAjax').click(function() {
        //clicking on the 'update' button starts the ajax calls
<<<<<<< HEAD
        myCalls();
    });

    function myCalls() { //start ajax calls

        // Wordnik API and URL
        var URL = "http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=d4964566bbc960329e0080f95100263c0431ce19dd14d81a3"
        //var URL = "https://httpstat.us/421?sleep=3000/"
        //var URL = "https://www.w3schools.com/xml/note_error.xml"
        //var URL = "http://elwebman.io/test/"
=======
        myCall();
    });

    function myCall() { //start ajax calls
        // Wordnik API and URL
        var URL = "http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=d4964566bbc960329e0080f95100263c0431ce19dd14d81a3"
        //var URL = "http://elwebman.io/test"
>>>>>>> b8d758319189d8f745eca6f9884bea6445492e3b
        // GET request to Wordnik API
        //Perform an asynchronous HTTP (Ajax) request.
        $.ajax({
                method: 'GET',
                //A string containing the URL to which the request is sent.
                url: URL,
                // the type of data we expect back
<<<<<<< HEAD
                dataType: 'json',
=======
                dataType: 'jsonp',
>>>>>>> b8d758319189d8f745eca6f9884bea6445492e3b
                //An object of numeric HTTP codes and functions to be called when the response has the corresponding code.
                statusCode: {
                    200: function() {
                        console.log("200 response for random word search");
                    },
                    503: function() {
                        alert("Service is unavailable");
                    },
                    401: function() {
<<<<<<< HEAD
                        alert("401 Unauthorized");
                    },
                    404: function() {
                        alert("404 page not found");
                    },
                    421: function() {
                        alert("421 page not found");
                    }

                },
                // error: function(jqXHR) {
                //     //When you are requesting a certain datatype in this case dataType: 'json' you are requesting a specific type of data. 
                //     //If that specific dataType is not returned it will pass to the error function.
                //     console.log(jqXHR.status);

                // },
                // success: function(response, textStatus) {
                //     //The function gets passed two arguments: 
                //     //The data returned from the server, formatted according to the 'dataType' parameter.
                //     //and a string describing the status.
                //     console.log("success for wordnik for random word search");
                //     console.log(textStatus);
                // },
                // // code to run regardless of success or failure
                // complete: function(jqXHR, textStatus) {
                //     //The function gets passed two arguments: 
                //     //The XMLHttpRequest object 
                //     //and a string describing the type of success of the request.
                //     console.log('The request is complete for wordnik!');
                //     console.log(jqXHR);
                //     console.log(textStatus);
                // }
=======
                        return alert("401 Unauthorized");
                    },
                    404: function() {
                        return alert("404 page not found");
                    }
                },
                error: function(jqXHR) {
                    //When you are requesting a certain datatype in this case dataType: 'json' you are requesting a specific type of data. 
                    //If that specific dataType is not returned it will pass to the error function.
                    console.log(jqXHR.status);
                },
                success: function(response, textStatus) {
                    //The function gets passed two arguments: 
                    //The data returned from the server, formatted according to the 'dataType' parameter.
                    //and a string describing the status.
                    console.log("success for wordnik for random word search");
                    console.log(textStatus);
                },
                // code to run regardless of success or failure
                complete: function(jqXHR, textStatus) {
                    //The function gets passed two arguments: 
                    //The XMLHttpRequest object 
                    //and a string describing the type of success of the request.
                    console.log('The request is complete for wordnik!');
                    console.log(jqXHR);
                    console.log(textStatus);
                }
>>>>>>> b8d758319189d8f745eca6f9884bea6445492e3b
            })
            .done(function(response, data, jqXHR) {
                // This function will executes if response is success
                console.log(jqXHR.status);
<<<<<<< HEAD
                var word = response.word // get the random word
                // console.log(word);
                $('#wordDump').html(word); // dump the random word on the page

                setTimeout(function() { //timeout  starts
                    // var searchWord = document.getElementById("wordDump").innerHTML; // dump the random word on the page
                    // console.log(searchWord);

                    var definitionURL = "http://api.wordnik.com:80/v4/word.json/" + word + "/definitions?limit=1&includeRelated=true&useCanonical=true&includeTags=false&api_key=d4964566bbc960329e0080f95100263c0431ce19dd14d81a3"
                    //var definitionURL = "http://elwebman.io/test"
                    //var definitionURL = "https://httpstat.us/404?sleep=3000/"
                    console.log(definitionURL);
                    $.ajax({ // call for word definition
                            method: 'GET',
                            //A string containing the URL to which the request is sent.
                            url: definitionURL,
                            // the type of data we expect back
                            dataType: 'json',
                            //An object of numeric HTTP codes and functions to be called when the response has the corresponding code.
                            statusCode: {
                                200: function() {
                                    console.log("200 response for word definition");
                                },
                                503: function() {
                                    alert("Service is unavailable");
                                },
                                401: function() {
                                    alert("401 Unauthorized");
                                },
                                404: function() {
                                    alert("404 page not found");
                                }

                            },
                            // error: function(jqXHR) {
                            //     console.log(jqXHR.status);
                            // },
                            // success: function(response, textStatus) {
                            //     console.log(textStatus);

                            //     //     console.log("success for word definition");



                            // },
                            // // code to run regardless of success or failure
                            // complete: function() {
                            //     //  console.log('The request is complete for wordnik!');
                            // }
                        })
                        .done(function(response, data, jqXHR) {
                            console.log(response);
                            console.log(jqXHR.status);
                            console.log(jqXHR);
                            var wordDefinition = response[0].text; //this is the definition
                            console.log(wordDefinition.length);
                            if (wordDefinition.length != 0) {
                                $('#wordDefinition').html(wordDefinition); //place definition on page
                            } else {
                                alert("no word definition")
                            };
                            setTimeout(function() { //timeout for unsplash starts
                                //Use encodeURIComponent when you want to encode the value of a URL parameter
                                var str = encodeURIComponent(document.getElementById("wordDefinition").innerHTML);
                                console.log(str)
                                //var imageUrl = "http://elwebman.io/test"
                                //var imageUrl = "https://httpstat.us/404?sleep=3000/"
                                var imageUrl = "https://api.unsplash.com/search/photos/?client_id=8d5285f5ff3b967d3cf4f31b67b5b5134c8f76075f9f8a892d305024f43332fd&query=" + str + "&per_page=1&page=1";
                                console.log(imageUrl);
                                $.ajax({ // call for unsplash starts
                                        method: 'GET',
                                        //A string containing the URL to which the request is sent.
                                        url: imageUrl,
                                        // the type of data we expect back
                                        dataType: 'json',
                                        //An object of numeric HTTP codes and functions to be called when the response has the corresponding code.
                                        statusCode: {
                                            200: function() {
                                                console.log("200 response. There is a picture.");
                                            },
                                            503: function() {
                                                alert("503 Service is unavailable. No picture are returned");
                                            },
                                            401: function() {
                                                alert("401 Unauthorized");
                                            },
                                            404: function() {
                                                alert("404 page not found");
                                            }
                                        },
                                        // error: function(jqXHR) {
                                        //     console.log(jqXHR);
                                        //     return alert("broken on word unsplash random picture call");
                                        // },
                                        // success: function(status, textStatus) {
                                        //     console.log("success picture");
                                        //     console.log(textStatus);
                                        // },
                                        // // code to run regardless of success or failure
                                        // complete: function() {
                                        //     console.log('The request for picture is complete!');
                                        // }
                                    })
                                    .done(function(response, data, jqXHR) {
                                        console.log(jqXHR.status);
                                        console.log(jqXHR);
                                        console.log(response.total);
                                        if (response.total != 0) {
                                            console.log(response.results[0].user.name);
                                            var imageLink = response.results[0].urls.small;
                                            var artistName = response.results[0].user.name;
                                            var artistLink = response.results[0].user.links.html;
                                            //console.log(imageLink.length);
                                            var resultD = document.getElementById("result"); //display the result in div
                                            var rImg = document.createElement("img"); // create the image
                                            rImg.src = imageLink;
                                            rImg.setAttribute("crossOrigin", "Anonymous"); //needed so I can actually copy the image for later use
                                            resultD.appendChild(rImg); // append image to link
                                            var caption = document.getElementById("caption"); //display the result in div
                                            resultD.appendChild(caption); // append image to link
                                            var artistAttribution = document.createElement("a"); // create the link
                                            var text = document.createTextNode('Photos by ');
                                            artistAttribution.setAttribute("href", artistLink + "?utm_source=your_app_name&utm_medium=referral");
                                            artistAttribution.innerHTML = artistName;
                                            caption.appendChild(text); // append link to div
                                            caption.appendChild(artistAttribution); // append link to div
                                            var textOn = document.createTextNode(' on ');
                                            caption.appendChild(textOn); // append link to div
                                            var unsplashAttribution = document.createElement("a"); // create the link
                                            unsplashAttribution.setAttribute("href", "https://unsplash.com/?utm_source=your_app_name&utm_medium=referral");
                                            unsplashAttribution.setAttribute("id", "caption");
                                            unsplashAttribution.innerHTML = "Unsplash"
                                            caption.appendChild(unsplashAttribution); // append link to div
                                            //console.log(rImg);
                                        } else { //sometimes the result will be ok but no pictures will be returned
                                            //no-image placeholder
                                            var img = document.createElement("IMG");
                                            img.src = "http://api.elwebman.io/images/no-image.png";
                                            $('#result').html(img); // dump the random word on the page
                                            //  alert("no pictures");
                                        } //end else
                                    })
                                    .fail(function() {
                                        // This function will executes if response is failure
                                        // jqXHR is the object describing error's detailed information
                                        // textStatus can be null, "timeout", "error", "abort", and "parsererror"
                                        // When an HTTP error occurs, errorThrown receives the textual portion of the HTTP status, such as "Not Found" or "Internal Server Error."
                                        // Handle error scenario of ajax request here
                                        var img = document.createElement("IMG");
                                        img.src = "http://api.elwebman.io/images/no-image.png";
                                        $('#result').html(img); // dump the random word on the page
                                    }); // call for unsplash ends
                            }, 1000); //timeout for unsplash end

                        })
                        .fail(function() {
                            // This function will executes if response is failure
                            // jqXHR is the object describing error's detailed information
                            // textStatus can be null, "timeout", "error", "abort", and "parsererror"
                            // When an HTTP error occurs, errorThrown receives the textual portion of the HTTP status, such as "Not Found" or "Internal Server Error."
                            // Handle error scenario of ajax request here
                        }); //end of call for word definition
                }, 1000); //timeout stop
            })
            .fail(function() {
=======
                console.log(jqXHR);
                var word = response.word // get the random word
                // console.log(word);
                $('#wordDump').html(word); // dump the random word on the page
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
>>>>>>> b8d758319189d8f745eca6f9884bea6445492e3b
                // This function will executes if response is failure
                // jqXHR is the object describing error's detailed information
                // textStatus can be null, "timeout", "error", "abort", and "parsererror"
                // When an HTTP error occurs, errorThrown receives the textual portion of the HTTP status, such as "Not Found" or "Internal Server Error."
                // Handle error scenario of ajax request here
<<<<<<< HEAD
            });


    }; //end of ajax calls


    //jQuery has a handy method called $.ajaxSetup() which allows you to set options 
    //that apply to all jQuery based AJAX requests that come after it. 
    //By placing this method in your main document ready function, 
    //all of the settings will be applied to the rest of your functions automatically and in one location.
    //as per jquery doc its use is not recommened.
    $(function() {
        //setup ajax error handling
        $.ajaxSetup({
            error: function(jqXHR, textStatus, errorThrown) {
=======
>>>>>>> b8d758319189d8f745eca6f9884bea6445492e3b
                console.log(jqXHR.status);
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
<<<<<<< HEAD
                var statusCode = jqXHR.status
                var errorMessageRandom = "Please try again." + " " + "Error code:" + " " + statusCode;
                if (jqXHR.status === 0) {
                    $('#wordDump').html(errorMessageRandom); // dump error in div
                } else if (jqXHR.status == 404) {
                    $('#wordDump').html(errorMessageRandom);
                } else if (jqXHR.status == 500) {
                    $('#wordDump').html(errorMessageRandom);
                } else if (textStatus === 'parsererror') {
                    $('#wordDump').html(errorMessageRandom);
                } else if (textStatus === 'timeout') {
                    $('#wordDump').html(errorMessageRandom);
                } else if (textStatus === 'abort') {
                    $('#wordDump').html(errorMessageRandom);
                } else {
                    alert('Uncaught Error.n' + jqXHR.responseText);
                }
            }
        });
    });


=======
                alert("We are sorry, there seems to be a problem with this request. Please try again later.");
            });

        setTimeout(function() { //timeout  starts
            var searchWord = document.getElementById("wordDump").innerHTML; // dump the random word on the page
            console.log(searchWord);

            var definitionURL = "http://api.wordnik.com:80/v4/word.json/" + searchWord + "/definitions?limit=1&includeRelated=true&useCanonical=true&includeTags=false&api_key=d4964566bbc960329e0080f95100263c0431ce19dd14d81a3"
            //var definitionURL = "http://elwebman.io/test"
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
                        },
                        401: function() {
                            return alert("401 Unauthorized");
                        },
                        404: function() {
                            return alert("404 page not found");
                        }

                    },
                    error: function(jqXHR) {
                        console.log(jqXHR.status);
                    },
                    success: function(response, textStatus) {
                        console.log(textStatus);

                        //     console.log("success for word definition");
                        setTimeout(function() { //timeout for unsplash starts
                            //Use encodeURIComponent when you want to encode the value of a URL parameter
                            var str = encodeURIComponent(document.getElementById("wordDefinition").innerHTML);
                            console.log(str)
                            //var imageUrl = "http://elwebman.io/test"
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
                                            alert("503 Service is unavailable. No picture are returned");
                                        },
                                        401: function() {
                                            return alert("401 Unauthorized");
                                        },
                                        404: function() {
                                            return alert("404 page not found");
                                        }
                                    },
                                    error: function(jqXHR) {
                                        console.log(jqXHR);
                                        return alert("broken on word unsplash random picture call");
                                    },
                                    success: function(status, textStatus) {
                                        console.log("success picture");
                                        console.log(textStatus);
                                    },
                                    // code to run regardless of success or failure
                                    complete: function() {
                                        console.log('The request for picture is complete!');
                                    }
                                })
                                .done(function(response, data, jqXHR) {
                                    console.log(jqXHR.status);
                                    console.log(jqXHR);
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
                                        //no-image lacholder
                                        var img = document.createElement("IMG");
                                        img.src = "http://api.elwebman.io/images/no-image.png";
                                        $('#result').html(img); // dump the random word on the page
                                        alert("no pictures");
                                    } //end else
                                })
                                .fail(function(jqXHR, textStatus, errorThrown) {
                                    // This function will executes if response is failure
                                    // jqXHR is the object describing error's detailed information
                                    // textStatus can be null, "timeout", "error", "abort", and "parsererror"
                                    // When an HTTP error occurs, errorThrown receives the textual portion of the HTTP status, such as "Not Found" or "Internal Server Error."
                                    // Handle error scenario of ajax request here
                                    console.log(jqXHR.status);
                                    console.log(jqXHR);
                                    console.log(textStatus);
                                    console.log(errorThrown);

                                }); // call for unsplash ends
                        }, 1000); //timeout for unsplash end


                    },
                    // code to run regardless of success or failure
                    complete: function() {
                        //  console.log('The request is complete for wordnik!');
                    }
                })
                .done(function(response, data, jqXHR) {
                    console.log(response);
                    console.log(jqXHR.status);
                    console.log(jqXHR);
                    var wordDefinition = response[0].text; //this is the definition
                    console.log(wordDefinition);
                    $('#wordDefinition').html(wordDefinition); //place definition on page

                })
                .fail(function(jqXHR, textStatus, errorThrown) {
                    // This function will executes if response is failure
                    // jqXHR is the object describing error's detailed information
                    // textStatus can be null, "timeout", "error", "abort", and "parsererror"
                    // When an HTTP error occurs, errorThrown receives the textual portion of the HTTP status, such as "Not Found" or "Internal Server Error."
                    // Handle error scenario of ajax request here
                    console.log(jqXHR.status);
                    console.log(jqXHR);
                    console.log(textStatus);
                    console.log(errorThrown);
                    alert("Error: broken on word definition call");
                    break;

                }); //end of call for word definition
        }, 1000); //timeout stop

    }; //end of ajax calls
>>>>>>> b8d758319189d8f745eca6f9884bea6445492e3b
}); // end of document ready