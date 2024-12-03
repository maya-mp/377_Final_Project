//messing around with supabase stuff just incase
// const supabaseClient = require('@supabase/supabase-js')

// const supabaseURL = 'https://denxydekwdlgodppwntn.supabase.co'
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlbnh5ZGVrd2RsZ29kcHB3bnRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMwODcxODMsImV4cCI6MjA0ODY2MzE4M30.RkqzvuBrlLHrBQPicvRSOl0znMeOQWxsUOzvw3fcwgc' 
// const supabase = supabaseClient.createClient(supabaseURL, supabaseKey)




//annyang code from asn 2 -- to be converted to code for this project
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


       //for selecting filters--this is pretty much good, just need to integrate with HTML (the ID's)
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
      
      //might need to have complimentary functions
      //search for term and county code
      //ignore for now -- will implement if it isn't too difficult/confusing
   //   'search :term': (term) => {
   //       },
   //    //select drop down for event and family friendly (could this also get complicated?)
   //    'select :item': (item) => {
   //       },
   //    //date for date -- do we need voice command for all (i feel like this might be complicated)

   //    'date :input': (input) => {
   //       }

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
 
//anyyang html for reference
//  <!--audio library section-->
      //def need the src here
//       <script src="//cdnjs.cloudflare.com/ajax/libs/annyang/2.6.1/annyang.min.js"></script>
      //this would go on about page and maybe on home page too for cleanliness?       
//       <div id = "audio">
//          <h2>Navigate the webpage using audio</h2>
//          <p>Ensure mic is on to use this feature</p>
//          <li>Say "hello" to get greeted back</li>
//          <li>Say "change the color to *color* to change page color"</li>
//          <li>Say "navigate to *page name* to naivgate to a different page"</li>
//          <li>Say "lookup *stock* to lookup a stock</li>
//          <button id = "turnOn">Turn On Listening</button>
//          <button id = "turnOff">Turn Off Listening</button>
//       </div>


//input validatpr JS code from lab 2 (integrated into html)
// <!--Box 2--validating text-->
//       <div class = "validate">
//          <h2 id = "validation">Validate Text</h2>
//          <form name = "verifyForm" onsubmit="return validateText();">
//             <label for = "textInput">Text Tester</label>
//             <input type = "text" placeholder = "Text" id = "textInput">
//             <button type = "submit" >TEST ME</button>
//          </form>
//          <script type = "text/javascript">
//             var validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
//             function validateText() {
//                   const text = document.verifyForm.textInput.value;
//                   if(text === "") {
//                      alert('Enter Text, please');
//                      return false;
//                   }
//                   if (validation.test(text)) {
//                      alert('This Text is Not Valid');
//                      return false;
//                   }
//                   alert('This Text is valid!');
//                   return true;
//                }
//          </script></script>


