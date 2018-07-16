const bookMapping = {
    1: 0062077015,
    2: 1101569182,
    3: 0547946961,
    4: 1101642610,
    5: 0062872346,
};

function getInfo(selectedBook) {
    var url =
        "https://www.googleapis.com/books/v1/volumes?q=isbn:" + bookMapping[selectedBook];


    $.get(url).done(function(response) {
        debugger
        var bookTitle = response.items[0].volumeInfo.title;
        var bookAuthor = response.items[0].volumeInfo.authors;
        var bookDescription = response.items[0].volumeInfo.description;

        $('.book-title').text(bookTitle);
        $('.book-author').text(bookAuthor);
        $('.book-description').text(bookDescription);

        // $('#weatherDisplay').show();


    });
};

$(document).ready(function() {
    debugger
    
    // var form = document.getElementById('weatherApp');    
    var form = document.getElementById('bookUpdates');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // var form = e.currentTarget;
        var selectedBook = $('#books').val();
        getInfo(selectedBook);
        debugger
    });

    // button.addEventListener('submit', processWeather)
    // var processWeather = function(e) {
    //     e.preventDefault();

    //     // var form = e.currentTarget;
    //     var selectedCity = $('#cities').val();
    //     getWeather(selectedCity);
    //     debugger
    // };
});