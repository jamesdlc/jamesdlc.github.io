console.log("app.js is linked!");

var favoriteTech = ["/public/images/rubyonrails.png", "/public/images/javascript.png", "/public/images/c++.png", "/public/images/angular.png", "/public/images/github.png"];

var otherTech = ["/public/images/html5.png","/public/images/css3.png", "/public/images/jquery.png", "/public/images/mongodb.png", "/public/images/postgresql.png", "/public/images/expressjs.png", "/public/images/nodejs.png", '/public/images/heroku.png', "/public/images/trello.png", "/public/images/balsamiq.png", "/public/images/photoshop.png", "/public/images/illustrator.png", "/public/images/bootstrap.png", "/public/images/materialize.png"];

function Application (name, images , techList, description, gitHubLink, herokuLink) {
  this.name = name;
  this.images = images;
  this.techList = techList;
  this.description = description;
  this.gitHubLink = gitHubLink;
  this. herokuLink = herokuLink;
}

var Nomad = new Application ("Nomad", ["/public/images/nomadfront.png", "/public/images/nomadback.png"], "Ruby on Rails / HTML / CSS / PostgreSQL / Sass / Materialize  / bcrypt", "Nomad is a crowdsourced travel community app / travel guide where users can post advice and tips about their favorite cities.", "https://github.com/sophn11/nomad", "https://nomad30.herokuapp.com/");

var GeneralAssemblage = new Application ("General Assembláge", ["/public/images/gafront.png", "/public/images/gaback.png"], "Ruby on Rails / HTML / CSS / JavaScript / jQuery / PostgreSQL / Materialize / Ransack / will_paginate / bcrypt", "General Assembláge is a social networking tool that connects General Assembly alumni across all immersive courses and all General Assembly locations to facilitate learning and to foster collaboration.", "https://github.com/mattericbrown/general-assemblage", "https://general-assemblage.herokuapp.com/" );

var WhoWouldWin = new Application ("Who Would win?", ["/public/images/whowouldwinfront.png", "/public/images/whowouldwinback.png"], "Ruby on Rails / HTML / CSS / PostgreSQL / Bootstrap /  bCrypt / Ransack", 'A sports app that returns a simulated outcome between matchups and can potentially predict results for upcoming matchups. Built in forum-style discussion board, “Smack Talk”.', "https://github.com/jamesdlc/whowouldwin", "https://realwhowouldwin.herokuapp.com/");

var SoundFinder = new Application ("Sound Finder", ["/public/images/soundfinderfront.png", "/public/images/soundfinderback.png"], "AngularJS / HTML / CSS / NodeJS / ExpressJS / BootStrap / Spotify API", 'Search for you favorite artist and Sound Finder will suggest 20 different similar sounding artists.  Click on the "Listen On Spotify" button to listen to the recommendation on your Spotify App!', "https://github.com/jamesdlc/SoundFinder", "https://sound-finder.herokuapp.com/");


var applications = [GeneralAssemblage, WhoWouldWin, SoundFinder, Nomad];
