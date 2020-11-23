var cards = $('.card');
var maxHeight = 0;

for(var i=0;i<cards.length;i++){
    if(maxHeight < $(cards[i]).outerHeight()){
        maxHeight = $(cards[i]).outerHeight();
    }
}

for(var i =0;i<cards.length;i++){
    $(cards[i]).height(maxHeight);
}
var cardi = $('.card-img-top');
var maxHeight = 0;

for(var i=0;i<cardi.length;i++){
    if(maxHeight < $(cardi[i]).outerHeight()){
        maxHeight = $(cardi[i]).outerHeight();
    }
}

for(var i =0;i<cardi.length;i++){
    $(cardi[i]).height(maxHeight);
}
AOS.init();