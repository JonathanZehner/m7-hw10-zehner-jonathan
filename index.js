// acquire references to page elements
var nameSpan = document.querySelector('span')
var formEl = document.querySelector('form')
var clear = document.querySelector('#clear')
var textarea = document.querySelector('textarea')

// Retrieve name and note content from cookies and localstorage
// Then apply them to elements on the page

formEl.onsubmit = function(e) {
  // prevents form submission
  e.preventDefault()
  // save name element's content to cookies
  var nameEl = nameSpan.textContent;
  document.cookie = "name=" + nameEl;
  console.log(nameEl);
  cookieStore.get('span')
    .then(function(cookieObj) {
      console.log(cookieObj);
      if (cookieObj) {
        nameEl = cookieObj.value;
      }
    })
    nameSpan.textContent = nameEl;

  // save textarea's content to localstorage
  console.log('submitted')
  var textArea = textarea.value;
  console.log({textArea});
  localStorage.setItem('text', textArea);
  textarea.textContent = textArea;

  // triggers thumbs up animation
  this.elements.save.classList.add('emoji')
}

clear.onclick = function() {
  // Clear textarea's value
  // Clear localstorage's content
  // YOUR CODE HERE

  // triggers thumbs up animation
  this.classList.add('emoji')
}

// this code allows repeated thumbs up animations
function endThumbsUp() {
  this.classList.remove('emoji')
}

formEl.elements.save.onanimationend = endThumbsUp
clear.onanimationend = endThumbsUp