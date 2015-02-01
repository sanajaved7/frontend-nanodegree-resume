$("#main").append("Sana Javed");
var name = "Sana Javed"
var role = "Web Developer"

var email = "sanajaved7@gmail.com";

var formattedrole = HTMLheaderRole.replace("%data%", role)
$("#header").prepend(formattedrole)

var formattedName = HTMLheaderName.replace("%data%", name)
$("#header").prepend(formattedName)

var skills = ["Python, ", "Ruby, ", "Ruby on Rails, ", "Javascript" ];

$("#main").append(skills)

var bio = {
    "name": "Sana",
    "Role": "Web Developer",
    "Email": "sanajaved7@gmail.com",
    "picture": "http://photos4.meetupstatic.com/photos/member/4/b/f/c/member_239839452.jpeg",
    "Welcome Message": "Hi there! I'm Sana, an aspiring Python and Javascript developer",
    "Skills": skills,
    "Mobile": "1234",
};

var Phone = bio.Mobile
var formattedMobile = HTMLmobile.replace("%data%", Phone);
$("#topContacts").append(formattedMobile);

var em = bio.Email
var formattedEmail = HTMLemail.replace("%data%", em);
$("#topContacts").append(formattedEmail);

var photo = bio.picture
var formattedPhoto = HTMLbioPic.replace("%data%", photo);
$("#header").prepend(formattedPhoto)
