# 377_Final_Project

## Names: Maya Patel, Jordan Pinkava, Angad Sharma

## Title of our project
Ticketmaster Event Finder
## Description of our project
The Ticketmaster Event Finder allows user to find and save events of interest on Ticketmaster. 
The website allows users to search for events based on specific criteria, which leads to a list of all events that match your search. 
If you are interested in an event, you can look into the event on our website, and you will be given all relevant information and data about the event. 
If you are interested in the event, you can add it to your saved events list and check out all your saved events later. 
## Description of target browsers (iOS? Android? Which ones?)
The website is available for anyone to use on any device or browser.

# Developer Manual 

### How to install our application and all dependencies
To install our application, ...

Dependencies: 
Install node.js


Install supabase


Install nodemon


Install express


Install body-parser


Install country-code-lookup
   $ npm install country-code-lookup
### How to run your application on a server


### How to run any tests we have written for our software
To test our voice command feature, try the page navigation feature. Simplly say "navigate to _" and the page you'd like to redirect to from the homepage.

To test searching for an event, select any of the five critera choices listed and an additional form will pop up. On this form, you can use your selected criteria to search for an event. For example, if you chose "Location Preference", you can test our country code lookup by putting in a valid two digit iso code.

Once you have searched for an event and looked at the details of a specfic event, you will find that there is a "Save Event" button in the bottom right corner. Test our saved events page by saving a couple of events and checking to see how the Saved Events page updates based on your additions.

### The API for our server application - all GET, POST, PATCH, etc endpoints, and what they each do
Tickermaster Discovery API https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/#overview 

GET Event Search: /discovery/v2/events for finding events and filtering your search by location, date, availability, etc.

## A clear set of expectations around known bugs and a road-map for future development.
For future development, we want to refine the front end with implementation of more custom CSS and transitions. Implementing more API calls to the Ticketmaster API could also be helpful to get more specific information on the page of all of the event information for a specific event. For example, by making an additional call to the venue API with the venue ID in our current API call, the venue location and photos could be accessible to our users. Implementing geoSearch and autocorrect were also options we did not have time to implement but plan to in the future. 

