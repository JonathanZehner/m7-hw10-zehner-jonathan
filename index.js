// acquire references to page elements
var nameSpan = document.querySelector('span')
var formEl = document.querySelector('form')
var clear = document.querySelector('#clear')
var textarea = document.querySelector('textarea')

// Retrieve name and note content from cookies and localstorage
// Then apply them to elements on the page

//Retrieve name from cookies
var nameEl = nameSpan.textContent;
cookieStore.get('name')
  .then(function(cookieObj) {
    console.log(cookieObj);
    if (cookieObj) {
      nameEl = cookieObj.value;
      nameSpan.textContent = nameEl;
    }
  })

//Retrieve note from local storage
var note = localStorage.getItem('note');
textarea.textContent = note;


formEl.onsubmit = function(e) {
  // prevents form submission
  e.preventDefault()
  // save name element's content to cookies
  var userName = nameSpan.textContent;
  document.cookie = "name=" + userName;
  console.log(userName);
  nameSpan.textContent = userName;

  // save textarea's content to localstorage
  console.log('submitted')
  var textAreaContent = textarea.value;
  console.log({textAreaContent});
  localStorage.setItem('note', textAreaContent);

  // triggers thumbs up animation
  this.elements.save.classList.add('emoji')
}

clear.onclick = function() {
  // Clear textarea's value
  textarea.textContent = "";
  // Clear localstorage's content
  localStorage.clear();

  // triggers thumbs up animation
  this.classList.add('emoji')
}

// this code allows repeated thumbs up animations
function endThumbsUp() {
  this.classList.remove('emoji')
}

formEl.elements.save.onanimationend = endThumbsUp
clear.onanimationend = endThumbsUp