$(".btn-left").click(function() {
    $("#MyCarousel").carousel("prev");
});

$(".btn-right").click(function() {
    $("#MyCarousel").carousel("next");
});

$(".btn-beer").click(function() {
    document.getElementById("shadow").style.visibility = "visible";
});

$(document).ready(function() {
    var div = document.getElementById("shadow");
    div.onclick = function (e) {
        div.style.visibility = "hidden";
    }
});

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.674231, 37.922370],
            zoom: 10,
            controls: ['zoomControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),

    placemark = new ymaps.Placemark([55.636242, 37.702182], {iconContent: '"Паб пивас!"'}, {preset: 'islands#orangeStretchyIcon'});

    myMap.geoObjects.add(placemark);
});

