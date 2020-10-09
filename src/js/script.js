'use strict';

// Add transition when section enters viewport
const sections = document.querySelectorAll('section.fade-in');

window.onscroll = function () {
  if (!document.querySelectorAll('section.fade-in:not(.visible)')) return;

  for (const section of sections) {
    if (
      section.getBoundingClientRect().top <= window.innerHeight * 0.75 &&
      section.getBoundingClientRect().top > 0
    ) {
      section.classList.add('visible');
    }
  }
};

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyBLj8NrQjZ53L-zIWxpQDTYp_N9-tjJm0A',
  authDomain: 'seaborne-fe71e.firebaseapp.com',
  databaseURL: 'https://seaborne-fe71e.firebaseio.com',
  projectId: 'seaborne-fe71e',
  storageBucket: 'seaborne-fe71e.appspot.com',
  messagingSenderId: '223770258736',
  appId: '1:223770258736:web:da8dde3edf54cdb3076cf5',
  measurementId: 'G-26G04LFYDR',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Setup Analytics
var analytics = firebase.analytics();
var elements = document.getElementsByClassName('event-contact-us');
console.log(elements, elements.length);
var didClickContactUs = function () {
  analytics.logEvent('click_contact_us');
};
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', didClickContactUs, false);
}
