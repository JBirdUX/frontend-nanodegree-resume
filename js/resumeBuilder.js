/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "fullname": "Jason Yu",
    "role": "UX Designer/Front-End Developer",
    "contact": {
        "email": "jason@jbirdux.com",
        "phone": "248-602-0917",
        "github": "jbirdux",
        "twitter": "@JBirdUX",
        "myLocation": "Michigan"
      },
    "welcomeMessage": "Welcome",
    "skills": ["UX Design", "Visual Design", "HTML", "CSS", "JavaScript"],
    "photo": "images/jasonyu.jpg"
};

var work = {
  "jobs": [{
    "employer": "XPO Logistics",
    "title": "UX Engineer II",
    "city": "Southfield, MI, US",
    "dates": "2014 to Present",
    "description": ""
  },
  {
    "employer": "Hunch Free",
    "title": "UX Designer",
    "city": "Mount Clemens, MI, US",
    "dates": "2012 to 2014",
    "description": ""
  },
  {
    "employer": "MRA Experiential Tours & Equipment",
    "title": "Junior Designer",
    "city": "Madison Heights, MI, US",
    "dates": "2010 to 2012",
    "description": ""
  }]
}

var projects = {
  "project": [{
    "title": "",
    "dates": "",
    "description": "",
    "images": [""]
  },
  {
    "title": "",
    "dates": "",
    "description": "",
    "images": [""]
  },
  {
    "title": "",
    "dates": "",
    "description": "",
    "images": [""]
  }]
}

var education = {
  "schools": [{
    "name": "Lawrence Technological University",
    "city": "Southfield, MI, US",
    "degree": "BFA",
    "major": ["Interaction Design"],
    "dates": 2010,
    "url": "http://www.ltu.edu/"
  }],
  "onlineCourses": [{
    "title": "Front-End Web Developer Nanodegree",
    "school": "Udacity",
    "dates": "2016",
    "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
  }]
}

var formattedName = HTMLheaderName.replace("%data%", bio.fullname);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedPhone = HTMLmobile.replace("%data%", bio.contact.phone);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contact.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact.myLocation);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedPhoto = HTMLbioPic.replace("%data%", bio.photo);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedPhoto);
$("#header").append(formattedEmail);
$("#header").append(formattedPhone);
$("#header").append(formattedGitHub);
$("#header").append(formattedTwitter);
$("#header").append(formattedLocation);
$("#header").append(formattedWelcome);

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  for (skillList in bio.skills){
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skillList]);
    $("#skills").append(formattedSkill);
  }
}

for (pastJobs in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[pastJobs].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[pastJobs].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);
}
