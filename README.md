<img style="float: right;" src="images/logo.png">

m7-hw10-zehner-jonathan

# Note Taking App

This project is to assist another developer store content of the app to the server instead of locally on the device: project to save note content to the browser's storage using _localstorage_ and _cookies_

## Coded by: Jonathan A. Zehner

---

### **Outside Resources Credited:**

- Adam Pritchard. (May 29, 2017). _Markdown Cheatsheet_. GitHub. https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

- John Duckett. (2014). _JavaScript & JQuery: interactive front-end web development_. John Wiley & Sons, Inc.

---

---

### **Issues Experienced:**

1. Cannot pull cookie information into the span

- #### **Resolution:** Re-watched lecture videos several more times; performed trial and error until I got a working version of the code. The issue was that the line of code _`nameSpan.textContent = note;`_ was not nested properly within the _`cookieStore.get('name')`_ block of code.

---

2. Cannot pull local storage information into the form's text area

- #### **Resolution:** I changed the variable name from _textArea_ to _note_. I also pulled the code block _`javascript var note = localStorage.getItem('note'); textarea.textContent = note;`_ out of the nested _`formEl.onsubmit =`_ function so that it is read before the user clicks the submit button.

---
