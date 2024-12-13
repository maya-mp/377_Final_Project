//this require is causing errors in the console for not being defined 
const express = require('express')

const app = express()
const port = 3000
app.use(express.static(__dirname + '/public'))

app.get('/Datasets', (req, res) => {
   console.log('Attempting to get all customers.')
})

app.post('/Dataset', (req, res) => {
   console.log('Attempting to add another dataset.')
})
  
app.listen(port, () => {
   console.log('App works')
})

//annyang code 
if (annyang) {
   const commands = {
     'navigate to :page' : (page) => {
       const pageChoice = page.toLowerCase();
       const pages = {
         'home': "homeFormPage.html",
         'about': 'about.html'
       };
       if (pages[pageChoice]) {
         window.location.href = pages[pageChoice];};},

      'select :filter': (filter) => {
         const filterChoice = filter.toLowerCase();
         const filters = {
            //value (right) is the id in HTML
            'keyword': 'keyword',
            'event': 'classificationName',
            'family': 'includeFamily',
            'location': 'preferredCountry',
            'date': 'startEndDateTime'
         }
         if (filters[filterChoice]) {
            const checkboxId = filters[filterChoice];
            const checkbox = document.getElementById(checkboxId);
            
            if (checkbox) {
               checkbox.checked = !checkbox.checked;
         }} 
      },

      'done' : () =>{
         document.getElementById('submit').click();
      }
   };
 
   annyang.addCommands(commands);
 
   const start = () => {
     annyang.start();
     document.getElementById("turnOn").disabled = true;
     document.getElementById("turnOff").disabled = false;
   };
 
   const stop = () => {
     annyang.abort();
     document.getElementById("turnOn").disabled = false;
     document.getElementById("turnOff").disabled = true;
   };
 
   document.getElementById('turnOn').addEventListener('click', start);
   document.getElementById('turnOff').addEventListener('click', stop);
 }


