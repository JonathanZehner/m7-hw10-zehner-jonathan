// acquire references to page elements
var nameSpan = document.querySelector('span')
var formEl = document.querySelector('form')
var clear = document.querySelector('#clear')
var textarea = document.querySelector('textarea')

// Retrieve name and note content from cookies and localstorage
// Then apply them to elements on the page

// var nameEl = nameSpan.textContent;  //var created to capture name
// var nameCookie = document.cookie;  //var created to refer to and create cookie (document.cookie: targets the "cookie" API)
// console.log(nameCookie);  //verifies that cookie was created
// if (nameCookie) {  
//     nameEl = nameCookie; //Once cookie is created, this if statement prevents count from resetting to undefined
// }


formEl.onsubmit = function(e) {
  // prevents form submission
  e.preventDefault()
  // save name element's content to cookies
  var nameEl = nameSpan.textContent;
  document.cookie = "name=" + nameEl;
  console.log(document.cookie);
  cookieStore.get('span')
    .then(function(cookieObj) {
      console.log(cookieObj)
      if (cookieObj) {
        nameEl = cookieObj.value;
      }
      nameSpan.textContent = nameEl;
    })
    
  // nameEl.textContent = nameEl;  //Sets content of the span element to match the cookie name upon refresh

  // save textarea's content to localstorage
  console.log('submitted')
  var textArea = textarea.value;
  console.log({textArea});
  localStorage.setItem('text', textArea);
  textArea.textContent = textArea;

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