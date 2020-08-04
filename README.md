# Milestone 2 Project - Mykonos Recommended

Mykonos Recommended is an interactive front end website, built from my learnings of all the Code Institute Full Stack Developer Course modules learnt so far, including HTML, CSS and JavaScript.

The website is a fully responsive, custom-built website, design and built with the users needs first.

The purpose of this website is to provide the user with a list of organised, tried and highly recommended places to visit in Mykonos, rather than an overwhelming list of all the places there are to go and see on the Island.

You can view the live website here: [Mykonos Recommended](https://michellelclement.github.io/mykonos-recommended-MS2/)

![Mykonos Recommended mockups on various devices](assets/readme_docs/mockups.jpg)

## UX
The site owner has visited Mykonos many times over the years and is regularly asked for their recommendations. The idea for Mykonos Recommended was born from the ability to provide those island recommendations in a clear and easy way, rather than repeating the details over and over each time. Mykonos Recommended also provides the site owner with an outlet to a wider audience than just friends and family, with the ability to monetise recommendations in the future.

Mykonos Recommended is a website which provides visitors to the site information about recommended places to visit, restaurants to eat in, and areas of the island to anyone wanting to visit Mykonos, or already on the island. 
* As a user who is looking to visit, or currently visiting Mykonos, I want to learn more about the best things to see on Mykonos, recommended restaurants on Mykonos, and learn about the different areas of Mykonos.
* As a user, I want to be able to contact the admin of the website to be able to ask for more information.
* As a user, I want to be able to locate the recommended places shown to me on the website on a map.

Site Owner Stories: The site owner is looking to pass their knowledge of the island into users and provide them with the ability to book the recommended restaurants.

* As the site owner, I want to be able to pass on my knowledge of the island to those wishing to visit in a clear and simple way.
* As the site owner, I want visitors to click through to recommended restaurants and sponsor sites.

## Wireframes
Using the above user stories, I put together some simple wireframes using [Balsamiq](https://balsamiq.com/). Using this software I laid out all the main sections the website required and organised them into a simple layout.

I decided that adding the full description of each recommendation would make pages too long, and take away from the clean, image lead design for the site I was after. Instead, I opted to include the jQuery ‘.toggle()’ function I had learnt in a previous module to trigger the full description to be displayed upon a button click.

I also decided there was no need to create a multi-page website, so kept the website to one lovely clean page.

I created wireframes to show the website layout on varying screen sizes, and with the toggle text both displaying and hidden.

Below are the top half of the wireframes for each screen size with the toggle buttons off/closed. [You can view all of the wireframes here](assets/readme_docs/wireframes.pdf)

![Homepage wireframes](assets/readme_docs/wireframes.png)


## Scope
* Users can find the location of recommended attractions, restaurants or areas on a map.
* Users can read more about each of the recommended attractions, restaurants or areas.
* Show the users current location on the island and their position near recommended areas
* Email the site owner for more information


## Existing Website Features
Navigation: The main navigation includes a link to each of the main sections of the site, which answer each of the user questions, and is styled clear, simple and modern.

Google Maps API – Using the Google Maps API, all recommendations will be added as custom markers to an inbuilt map.

Search Google Maps Places – Allowing the ability for the user to search for other places of interest outside those recommended, including restaurants, attractions, beaches and more. This will allow the user to be able to find all they need in the one website rather than using multiple.

Contact Form – The contact form is an easy and direct way for the user to ask a question to the site owner. [EmailJS](https://www.emailjs.com/) sends the email directly from the website to the website owner.

## Features to implement in the future


## Technologies Used
I used a number of languages, frameworks and tools to construct my website. These include;
* [HTML](https://html.com/)
* [CSS](https://www.w3.org/Style/CSS/Overview.en.html) 
* [JavaScript](https://www.javascript.com/) 
* [JavaQuery](https://jquery.com/)
* [Bootstrap](https://getbootstrap.com/)
* [GitHub](https://github.com/)
* [GitPod](https://www.gitpod.io/)
* [Google Maps API](https://developers.google.com/maps/documentation)
* [EmailJS](https://www.emailjs.com/)


## Tools Used
* [Balsamiq](https://balsamiq.com/) - Used to create my wireframes, showing the positioning of elements on varying screen sizes.
* [Adobe Photoshop](https://www.adobe.com/uk/products/photoshop.html) - Photoshop was used to create the website logo.
* [W3C HTML Validator](https://validator.w3.org/) - I used this tool to check the validity of my HTML code.
* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) - I used this tool to check the validity of my CSS code.
* [Autoprefixed](https://autoprefixer.github.io/) - I used this tool to check the prefixes of my CSS code.


## Testing

**W3C HTML Validator**

**W3C CSS Validator**

**User stories**

**Further testing**

## Design

**Logo:** 
I decided to stick with a traditional Greek design for the logo with a Greek-style font and bright blue colour. The font is called Adonais and is 100% free to use from the website [DaFont](https://www.dafont.com/) 

**Fonts**  
I wanted to keep the rest of the site nice, clear and simple. Therefore, I decided to pair the Google fonts Raleway Light for the headers with Opens Sans Regular for the body text. Both fonts were assigned the backup front of sans-serif.

**Colours:** 
In keeping with a clean and clear website, I opted to use just one main accent colour to complement the lovely colours of the photos. Greece, and the Greek Islands, are known for this bright blue, so I chose one which I felt was a nice modern blue, and once which would be great for text to set out on. This was coupled with a light grey for hover state on the navbar, as well as a dark grey and off white for the copy.

* Blue accent colour: #0086FF
* Hover grey nav bar: #d0d0d5
* Off White: #F8F8FF
* Grey: #222222

## Deployment
I deployed Mykonos Recommended GitHub pages using the following steps:
1. Logging into my GitHub account and locating my repository
1. Clicking on the Settings icon (near the top right of the page)
1. Scrolling down the page to locate the 'GitHub Pages' section
1. I selected 'Master branch' in the dropdown
1. This deployed my project to the URL: https://michellelclement.github.io/mykonos-recommended-MS2/

[Click here to view the live Mykonos Recommended website](https://michellelclement.github.io/mykonos-recommended-MS2/) 

## Credits

**Content**
Website Text: All the text for the website was written by myself.

**Media**
All images used on the website were a mix of my own photographs, Google Images or images from Restaurant social channels.
* Restaurants – Images from their social media pages or website
* Ornos & Platis Gialos – Google Images (labelled for reuse with modification)
* All other photos are my own

## Acknowledgements
Google Maps Custom Icons: I used [Maps Icons Collection](https://mapicons.mapsmarker.com) for the custom markers on the map. The website allowed me to customise the markers to my own colourway before implementing on the website.

In addition to assistance from my mentor and the slack community, I also found answers to some of my questions and troubleshooting errors by searching previously answered questions on the [Stack Overflow](https://stackoverflow.com/) website.

Special Thank you to my fantastic mentor ADEGBENGA ADEYE for helping me with my ideas and directing me on how to fix errors and bugs.

**Additional Support**
Due to the complex nature of Google APIs, I followed a couple of tutorials to help implement adding multiple custom markers with custom icons, plus installing the Google Places with a search bar. Both tutorials were fantastic and really helped to cement how to do this with more explanation on the why, and how, compared to Google’s documentation. I have marked with comments on the map.js file the code which was assisted by both tutorials. In both cases, I implemented as much of the code myself as possible using my knowledge from the course material and Google’s Documentation, and then the tutorials helped implement the exact features and functionality I desired.

* [Google Maps Tutorial](https://www.youtube.com/watch?v=Zxf1mnP5zcw)
* [Google Maps Places Tutorial](https://www.youtube.com/watch?v=oVr6unKZbg4)

