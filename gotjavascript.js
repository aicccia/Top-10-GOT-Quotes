/**
 * Created by Nicholas on 7/10/2016.
 */


var quotes  = [
    ["The man who passes the sentence should swing the sword.", "Eddard Stark"],
    ["The things I do for love.", "Jaime Lannister"],
    ["The next time you raise a hand to me will be the last time you have hands!", "The Khaleesi"],
    ["It's the family name that lives on. It's all that lives on.", "Tywin Lannister"],
    ["When you play the game of thrones, you win or die.", "Cersei Lannister"],
    ["A girl gives a man his own name?","Jaqen H'ghar"],
    ["Burn them all!", "The Mad King"],
    ["Chaos isn't a pit. Chaos is a ladder.", "Littlefinger"],
    ["You know nothing Jon Snow.", "Ygritte"],
];


$(document).ready(function() {
    var i = 0;
    $("#newQuote").on("click", function() {
        var $bodyGrab =  $("body");
        var $socialButtonGrab = $(".socialButtons");
        var $quoteButtonGrab = $(".newQuoteButton");
        $(".quoteBox").text(quotes[i][0]).fadeIn("slow");
        $(".authorBox").text(quotes[i][1]).fadeIn("slow");
        switch(i) {
            case 0:
                $bodyGrab.css("background-color", "Blue");
                $socialButtonGrab.css("background-color", "Blue");
                $quoteButtonGrab.css("background-color", "Blue");
                break;
            case 1:
                $bodyGrab.css("background-color", "Yellow");
                $socialButtonGrab.css("background-color", "Yellow");
                $quoteButtonGrab.css("background-color", "Yellow");
                break;
            case 2:
                $bodyGrab.css("background-color", "Red");
                $socialButtonGrab.css("background-color", "Red");
                $quoteButtonGrab.css("background-color", "Red");
                break;
            case 3:
                $bodyGrab.css("background-color", "BurlyWood");
                $socialButtonGrab.css("background-color", "BurlyWood");
                $quoteButtonGrab.css("background-color", "BurlyWood");
                break;
            case 4:
                $bodyGrab.css("background-color", "DarkTurquoise");
                $socialButtonGrab.css("background-color", "DarkTurquoise");
                $quoteButtonGrab.css("background-color", "DarkTurquoise");
                break;
            case 5:
                $bodyGrab.css("background-color", "Gold");
                $socialButtonGrab.css("background-color", "Gold");
                $quoteButtonGrab.css("background-color", "Gold");
                break;
            case 6:
                $bodyGrab.css("background-color", "Moccasin");
                $socialButtonGrab.css("background-color", "Moccasin");
                $quoteButtonGrab.css("background-color", "Moccasin");
                break;
            case 7:
                $bodyGrab.css("background-color", "Peru");
                $socialButtonGrab.css("background-color", "Peru");
                $quoteButtonGrab.css("background-color", "Peru");
                break;
            case 8:
                $bodyGrab.css("background-color", "SaddleBrown");
                $socialButtonGrab.css("background-color", "SaddleBrown");
                $quoteButtonGrab.css("background-color", "SaddleBrown");
                break;
        }
        if(i==8) { i = 0; } else { i++; }
    });
});