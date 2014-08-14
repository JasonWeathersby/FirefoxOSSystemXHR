(function() {
    // Cross domain XHR
    var crossDomainXHR = document.querySelector("#cross-domain-xhr");
    if (crossDomainXHR) {
        crossDomainXHR.onclick = function() {
            $.ajaxPrefilter(function(options) {
                if (options.xhrConstructParam) {
                    options.xhr = function() {
                        return new window.XMLHttpRequest(options.xhrConstructParam);
                    }
                }
            });
            // for FirefoxOS (require "mozSystem" param in AJAX calls)
            var xhrConstructParam = null;
            xhrConstructParam = {
                mozSystem: true
            };

            //default settings for AJAX methods
            $.ajaxSetup({
                xhrConstructParam: xhrConstructParam
            });


            $.ajax({
                type: 'GET',
                url: 'http://www.html5rocks.com/en/tutorials/file/xhr2/',
                success: function(response) {
                    var article = $(response).find('article').html();
                    $('body').html(article);
                }
            });

        };
    }

})();