//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;

/*Create a function that accepts one parameter.  Let's call it "getAuthorAndYearString".
In this function you should accept one data item from the array and return a string that
looks like this: This speech was written by [author name] in [speech year].

When you've made your function, set innerHTML equal to the value it returns in the first
line of each nav button handler by passing in the data item from the speechesArray that
corresponds to that button.*/

function getAuthorAndYearString(speechInfo) {
  return 'This speech was written by ' + 
  speechesArray[speechInfo].author + ' in ' + 
  speechesArray[speechInfo].year + '.' + '</br>';
}

/*Create a function called "displayBCEString" that accepts one parameter. We will pass 
into the function the boolean value for whether each data object in the speechesArray is
BCE or not.  Inside the function, check if the value of the parameter that pass in is true 
or not.  Then write a string detailing the result to the #ConsoleDisplay element's innerHTML
property, just as you did in the conditional inside of each nav button handler.

Replace the conditional code block in your nav button handler with a call to our new function,
passing in the BCE value for the appropriate data object from speechesArray.*/

function displayBCEString (speechInfo) {
  if (speechesArray[speechInfo].yearIsBCE === true) {
    return 'This speech took place before the common era. </br>';
  }else{
    return 'This speech took place during the common era. </br>';
  }
}

/*Create a fubction called "getOldestOrYoungestString" that accepts a data object. 
Use the code from your nav button handlers that sets up oldest and newest varaibles,
runs through the speechesArray fwith a FOR loop, and then checks oldest or newest 
against the year property of a data object. Make sure you are checking the year
property of the data object that was passed in as a parameter of the function.

Your function should return a string that either says the data object is the oldest 
or the most recent.  Be careful to return a string valye for every potential case - 
the data object passed in to the fucntion may not be either oldest or the youngest.

When your function is ready, use the same approach yoiu did for the author and year 
to display the resulting string to the user in the innerHTML attribute of the 
#ConsoleDisplay element.8*/

function getOldestOrYoungestString (speechInfo) {
  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;


  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[speechInfo].year === oldest){
    return 'This is the oldest speech on the page.<br>';
  }
  if(speechesArray[speechInfo].year === newest){
    return 'This is the most recent speech on the page.<br>';
  }else{
    return 'This is neither the oldest nor the most recent speech. </br>';
  }
}

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  var donationDisplay = document.createElement('h3'),
      donationText,
      articleElements;

  donatePrompt = window.prompt('How much would you like to donate?');

  if(donatePrompt >= 100){
    donationText = document.createTextNode('Thank you for your very generous donation!');
    donationDisplay.setAttribute('style', 'color: #DB152C;');

    articleElements = document.getElementsByTagName('article');
    for(var i = 0; i < articleElements.length; i++){
      articleElements[i].className = 'generous-donation';
    }
  }else{
    donationText = document.createTextNode('Thank you for your donation of $' + donatePrompt);
  }

  donationDisplay.appendChild(donationText);
  document.getElementById('SideNav').appendChild(donationDisplay);
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  document.getElementById('ConsoleDisplay').innerHTML = getAuthorAndYearString(0);
  document.getElementById('ConsoleDisplay').innerHTML += displayBCEString(0);
  document.getElementById('ConsoleDisplay').innerHTML += getOldestOrYoungestString(0);
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  document.getElementById('ConsoleDisplay').innerHTML = getAuthorAndYearString(1);
  document.getElementById('ConsoleDisplay').innerHTML += displayBCEString(1);
  document.getElementById('ConsoleDisplay').innerHTML += getOldestOrYoungestString(1);
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  document.getElementById('ConsoleDisplay').innerHTML = getAuthorAndYearString(2);
  document.getElementById('ConsoleDisplay').innerHTML += displayBCEString(2);
  document.getElementById('ConsoleDisplay').innerHTML += getOldestOrYoungestString(2);
});