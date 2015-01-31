// $("#main").append("Sana Javed");
name = "Sana Javed"
role = "Web Developer"

var email = "sanajaved7@gmail.com";

var formattedName = HTMLheaderName.replace("%data%", name)
$("#header").append(formattedName)

var formattedrole = HTMLheaderRole.replace("%data%", role)
$("#header").append(formattedrole)
