import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { haikuChecker } from "./js/haiku.js";

$(document).ready(function() {
  $("#haiku").submit(function(event){
    event.preventDefault();
    const result = haikuChecker($("#haiku-text"));
    $('#result').text(`Result: ${result}`);
  });
});