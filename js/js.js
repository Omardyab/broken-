'use strict';
let counter=0;
let username=prompt('Hello and welcome to my website, what\'s your name ? ');
alert('Welcome ' +username+ ',  I know you are curious about me and would like to have a game with you, so you get to know me better :)');
let gn=prompt('how many characters you think my name have, hint choose a number between 3 and 10 ');
gn=parseInt(gn);
console.log(gn);
if (gn===4){counter++;}
while(gn!==4)
{
  if(gn>=6)
  {
    gn=prompt('Try again the number is lower ');
    gn=parseInt(gn);
    // console.log(gn);
  }
  else if(gn<=5)
  {
    gn=prompt('Try again you are too close :)');
    gn=parseInt(gn);
    // console.log(gn);
  }
  else
  {
    alert('They are 4 :) ');
    break;
  }
}
alert('Well done '+ username+ '!, so let me introduce myself my name is Omar, and its nice to meet you :)');
let age=prompt('I am guess you are younger but lets see, do you think I am older than 35 ? ');
age=age.toLowerCase();
//console.log(age);
switch(age)
{
case 'yes':
case 'y':
  {
    age=confirm('I am not that old :(, I am actually 29 :)');
    // console.log(age);
  }
  break;
case 'no':
case 'n':
  {
    age=confirm('I do like you think I am younger and yes you are right i am 29 :) ');
    // console.log(age);
    counter++;
  }
  break;
default:
  {
    age=confirm('Anyways I am 29 :) ');
    // console.log(age);
  }
  break;
}
let answer=prompt('What type of music you think I like "classic, jazz or pop" ');
answer=answer.toLowerCase();
console.log(answer);
switch (answer)
{
case'classic':
  alert('Yes you are right :) ');
  //console.log(answer);
  counter++;
  break;
case 'pop':
  alert('No i dont, I prefer classic');
  //console.log(answer);
  break;
case'jaz':
  alert('No i dont, I prefer classic');
  //console.log(answer);
  break;
default:
  alert('I like classic one\'s ');
  //console.log(answer);
}
alert('omarirlaopoerappaerpalomartujehnabgerwnmasdoityawerpoaertawwbebrhwasdafrepizzaoueraerpalomar');
answer=prompt(username+', there was a one word of my faviorte food, if you notice please type it');
answer=answer.toLowerCase();
console.log(answer);
switch (answer)
{
case'pizza':
  alert('Yes you are right :) ');
  //console.log(answer);
  counter++;
  break;
case 'no':
case 'n':
default:
  alert('It was pizza here the message again: omarirlaopoerappaerpalomartujehnabgerwnmasdoityawerpoaertawwbebrhwasdafrepizzaoueraerpalomar');
  //console.log(answer);
  break;
}
answer=prompt(username+', Now which month you think I was born I "Hunt: the first quarter of the year and with a horoscope of Aquarius"');
answer=answer.toLowerCase();
console.log(answer);
switch (answer)
{
case'february':
  alert('Yes you are right :) ');
  //console.log(answer);
  counter++;
  break;
default:
  alert('It is February :)');
  //console.log(answer);
  break;
}
if (counter>0)
{
  alert('You have '+counter+ ' answers you guseed at first, well done '+ username+ ', Now enjoy my website ' + username+ ' :)');
  //console.log(counter);
}
else
{
  answer=confirm('Now enjoy my website ' + username+ ' :)');
  //console.log(counter);
}
