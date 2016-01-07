/*
This is empty on purpose! Your code to build the resume will go here.
 */

$("#main").append("Jason Yu");

var formattedName = HTMLheaderName.replace("%data%", "Jason Yu");
var formattedRole = HTMLheaderRole.replace("%data%", "UX Designer/Front-End Developer")

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
