//messing around with supabase stuff just incase
// const supabaseClient = require('@supabase/supabase-js')

// const supabaseURL = 'https://denxydekwdlgodppwntn.supabase.co'
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlbnh5ZGVrd2RsZ29kcHB3bnRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMwODcxODMsImV4cCI6MjA0ODY2MzE4M30.RkqzvuBrlLHrBQPicvRSOl0znMeOQWxsUOzvw3fcwgc' 
// const supabase = supabaseClient.createClient(supabaseURL, supabaseKey)




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


