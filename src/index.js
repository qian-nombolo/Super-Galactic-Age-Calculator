import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Age from './js/galatic-age.js';

function handleGalaticForm(event) {
  event.preventDefault();
  document.querySelector('#response').innerText = null;
  const earth = parseInt(document.querySelector('#age1').value);
  const futureB = parseInt(document.querySelector('#age2').value);
  const pastB= parseInt(document.querySelector('#age3').value);
  const galaxy = new Age(earth, pastB, futureB);
  const response = galaxy.getPastYears().jupiterYears;
  const pTag = document.createElement("p");
  pTag.append(`The past Jupiter years is: ${response}`);

  const response2 = galaxy.getFutureYears().marsYears;
  document.querySelector('#response').append(pTag);
  const pTag2 = document.createElement("p");
  pTag2.append(`The future Mars years is: ${response2}`);
  document.querySelector('#response2').append(pTag2);
}

window.addEventListener("load", function() {
  document.querySelector("#galatic-form").addEventListener("submit", handleGalaticForm);
});
