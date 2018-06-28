document.addEventListener('DOMContentLoaded', function(event) {
    let clicks = 0;
    const div1 = document.getElementById('div1');
    div1.addEventListener('click', function() {
        clicks++;
        div1.innerHTML = 'Clicked ' + clicks + ' times!';
    });
});