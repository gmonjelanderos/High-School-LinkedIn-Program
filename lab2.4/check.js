window.onload = function() {

    var form = $("#favColor");
    
    form.submit(function(e) {
        const url = "https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202487889&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

            e.preventDefault();
            var data = $("#input").val();
            if (data==="") {
                alert("this is invalid");
            } else {
                console.log({"favColor": data});
                $.get(url, function(data) {
                    console.log(data);
                })

            } return false;
    });    
 }