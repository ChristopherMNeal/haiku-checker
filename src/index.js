import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { haikuChecker, lineChecker } from "./js/haiku.js";

$(document).ready(function() {
  $("#haiku").submit(function(event){
    event.preventDefault();
    const text = $('#haiku-text').val();
    const syllables = haikuChecker(text);
    const lines = lineChecker(text);
    const isHaiku = (syllables, lines) => {
      if (syllables === "5, 7, 5" && lines === 3) {
        return "It's a haiku!";
      } else {
        return "Oopsie. Not a haiku :(";
      }
    };
    $('#result').show();
    $('#result').html(`<p>${isHaiku(syllables, lines)}<br>Syllable count: ${syllables} <br> Number of lines: ${lines}</p>`);
  });
});