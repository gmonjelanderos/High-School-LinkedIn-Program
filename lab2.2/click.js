document.addEventListener('DOMContentLoaded', function(event) {
    var theNumber = document.getElementById('theNumber');
    var buttonAdd = document.getElementById('buttonAdd');
    var buttonMinus = document.getElementById('buttonMinus');
    
    /* when a user clicks on the add button, the number shown on
    the page should increase by 1 */
    buttonAdd.addEventListener('click', function() {
        // theNumber.innerHTML = parseInt(theNumber.innerHTML) +1;
        theNumber.textContent = parseInt(theNumber.textContent) +1;
    });

    /* when user clicks on the minus button, the number shown on
    the page should decrease by 1 */
    buttonMinus.addEventListener('click', function() {
        theNumber.innerHTML = parseInt(theNumber.innerHTML) -1;
        
    });
   
   });