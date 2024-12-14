const express = require('express');
const supabaseClient = require('@supabase/supabase-js');

const app = express();
const port = 3000
app.use(express.static(__dirname + '/public'));

const supabaseUrl = 'https://emkbpdderydevcxyxymg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVta2JwZGRlcnlkZXZjeHl4eW1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM5NTYwMjQsImV4cCI6MjA0OTUzMjAyNH0.x9WLVa9pbYNpkZpkbHj-bnMOnYWFcy7Gl3_JUqBuNjY';
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);


app.get('/datasets', (req, res) => {
   console.log('Attempting to get all datasets.')
   res.send('blah')
});

app.post('/dnataset', (req, res) => {
   console.log('Attempting to add another dataset.')
});
  
app.listen(port, () => {
   console.log('App works')
});