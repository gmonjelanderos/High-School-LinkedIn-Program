window.onload = function() {
 
    var form = document.getElementById("favColor");
    
    form.addEventListener("submit", function(e) {
            e.preventDefault();
            var data = document.getElementById("input").value;
            if (data==="") {
                alert("this is invalid");
            } else {
                console.log({"favColor": data})
            } return false;
    });    
 }

    

