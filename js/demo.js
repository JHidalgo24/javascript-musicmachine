let organ = Synth.createInstrument("piano");

let allNotes = ["C", "D", "E", "F", "G", "A", "B"]
let allColors = ["#99CC00","#0099FF","#9933CC","#CC0066", "#CC0033","#FF3300","#FF6600"];

const MIN_OCTAVE = 3, MAX_OCTAVE = 6;

$(document).ready(function() {
    for(let octave = MIN_OCTAVE; octave<MAX_OCTAVE; octave++){
        //loop through notes
        for(let i = 0; i < allNotes.length; i++){
        //for each note
            let theNote = allNotes[i]; //"C"
        // make a <span>
            let theSpan = $("<span>");
        //add it to the page
                $("div#keyboard").append(theSpan);
        //find its color
            let theColor = allColors[i];
        //set its background background
            theSpan.css("background-color",theColor)
        //give it text tht says "NOTE OCTAVE" ("E3","G4")
            theSpan.text(theNote + octave)
            //add the class "key"
            theSpan.addClass("key");
            //give the span data-note="C" or data-note="G"
            theSpan.data("note", theNote);
            //give the span data-octave="3" or data-octave="5"
            theSpan.data("octave",octave)
        }

        $("div#keyboard").append("<br>");
    }

    $("span.key").on("click",playNote)
});

function playNote() {
    //which span was clicked
    let clickedSpan = $(this);
    //what is its note?("C" or "B")
    let itsNote = clickedSpan.data("note");
    //what is its octave? (3 or 5)
    let itsOctave = clickedSpan.data("octave")
    //call organ.play for 1.5 seconds
    organ.play(itsNote,itsOctave,1.5);


}