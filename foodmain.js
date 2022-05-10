function createImages(number) {
    document.getElementById("inner").innerHTML = '';
    div = document.createElement('div');
    div.classList.add('carousel-item');
    div.classList.add('active');
    let img = "<img src='' id='image0'>";

    div.innerHTML = img;
    var inner = document.getElementById('inner');

    inner.appendChild(div);

    for(let i = 1; i < number; i++) {
        img = "<img src='' id='image" + i + "'></div>";
        div = document.createElement('div');
        div.classList.add('carousel-item');

        div.innerHTML = img;

        inner.appendChild(div);
    }
}

function randImg(number, folder) {
    let x = 0;
    let i = 0;
    let l = [];
    while (i < number) {
        do {
        x = Math.floor(Math.random() * number);
        }
        while (l.indexOf(x) != -1);

        l.push(x);
        x = ("media/" + folder + '/' + x + ".jpg");
        document.getElementById("image" + i).src = x;
        i++;
    }
}

// Code Adapted From https://www.geeksforgeeks.org/how-to-display-bootstrap-carousel-with-three-post-in-each-slide/
// To make multiple images at once in carousel
function multiImg() {
    $(".carousel .carousel-item").each(function() {
        var i = $(this).next();
        i.length || (i = $(this).siblings(":first")),
          i.children(":first-child").clone().appendTo($(this));
          for (var n = 0; n < 1; n++)(i = i.next()).length ||
            (i = $(this).siblings(":first")),
            i.children(":first-child").clone().appendTo($(this));
    });
}

function folderSelector() {

}

