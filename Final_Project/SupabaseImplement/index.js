const express = require('express');
const supabaseClient = require('@supabase/supabase-js');
const bodyParser = require('body-parser')

const app = express();
const port = 3000
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

const supabaseUrl = 'https://emkbpdderydevcxyxymg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVta2JwZGRlcnlkZXZjeHl4eW1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM5NTYwMjQsImV4cCI6MjA0OTUzMjAyNH0.x9WLVa9pbYNpkZpkbHj-bnMOnYWFcy7Gl3_JUqBuNjY';
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);


app.get('/datasets', async (req, res) => {
   console.log('Attempting to get all datasets.')
   
   const {data,error} = await supabase.from('datasets').select()
   
   if(error){
      console.log('Error:', error);
      res.send(error)
   } else{
      console.log("Successfully Retrieved Data")
   res.send(data);
   }
});

app.post('/dnataset', async (req, res) => {
   console.log('Attempting to add another dataset.')

   console.log('Request,', req.body)

   const name = req.body.name;
   const url = req.body.url;
   const type = req.body.type;
   const test = req.body.test;
   const timezone = req.body.timezone;


   const {data, error} = await supabase
   .from('datasets')
   .insert({
      'datasets_name': name, 
      'datasets_url': url, 
      'datasets_type': type, 
      'datasets_test': test, 
      'datasets_timezone': timezone
   })
   .select();
   
   if(error){
      console.log('Error:', error);
      res.send(error)
   } else{
      console.log("Successfully Retrieved Data")
   res.send(data);
   }
   
});
  
app.listen(port, () => {
   console.log('App works')
});