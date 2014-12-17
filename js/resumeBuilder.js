var work = {
	"jobs": [
		{
			"employer":"Source Engineers GmbH",
			"title":"CEO",
			"location":"Basel, Switzerland",
			"dates": '2013 - now',
			"description": "alkdjsfoj lajdlfj lkasdf ojlkajsdfl ojlkajdsl fjl jojljk lnllkjuoh nlnaldnf"
		},
		{
			"employer":"Endress+Hauser AG",
			"title":"Software Tester",
			"location":"Reinach BL, Switzerland",
			"dates": '2012 - 2013',
			"description": "alkdjsfoj lajdlfj lkasdf ojlkajsdfl ojlkajdsl fjl jojljk lnllkjuoh nlnaldnf"
		}
	]
}

var projects = {
	"projects": [
		{
			"title":"One Project",
			"dates":"2012-2013",
			"description": "blablaa daf asdf asdf asdf adsgafhjg asasdf as",
			"images": [
				"images/197x148.gif",
				"images/197x148.gif"
			]
		},
		{
			"title":"Some Project",
			"dates":"2013-2014",
			"description": "blabla adsgt h adfa sgetzardfsas asdfasdf ",
			"images": [
				"images/197x148.gif",
				"images/197x148.gif",
				"images/197x148.gif"
			]
		}
	]
}

var bio = {
	"name": "Jakob Wanner",
	"role": "Software Engineer",
	"contacts": {
		"mobile": "012347",
		"email": "jakob.wanner@sourceengineers.com",
		"github": "Jawan81",
		"location": "Basel"
	},
	"bioPic": "images/fry.jpg",
	"welcome": "Hi there!",
	"skills": ["PHP", "JS", "HTML"]
}

var education = {
	"schools": [
		{
			"name":"Helene-Lange Gymnasium",
			"location":"Hamburg, Germany",
			"degree":"Abitur",
			"majors":["Geography", "Biology"],
			"dates":"1991-2001",
			"url":"http://www.google.de"
		},
		{
			"name":"TUHH",
			"location":"Hamburg, Germany",
			"degree":"Dipl.-Ing.",
			"majors":["Informatics", "Engineering"],
			"dates":"2002-2008",
			"url":"http://www.tuhh.de"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript",
			"school":"Udacity",
			"dates": "2014-now",
			"url":"http://www.udacity.com"
		}
	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").append(formattedName);
$("#header").append(formattedRole);


Object.keys(bio.contacts).forEach(function(key) {
 	$("#header").append(HTMLcontactGeneric.replace("%contact%", key).replace("%data%", bio.contacts[key]));
});

 $("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
 $("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcome));


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	bio.skills.forEach(function(skill) {
		$("#header").append(HTMLskills.replace("%data%", skill));
	});
}

work.display = function() {
	for (i in this.jobs) {
		var job = this.jobs[i];
		$("#workExperience").append(HTMLworkStart);
		var employer = HTMLworkEmployer.replace("%data%", job.employer);
		var title = HTMLworkTitle.replace("%data%", job.title);

		$(".work-entry:last").append(employer + title);
		$(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
	}
}

work.display();

$("#main").append(internationalizeButton);

function inName(name) {
	var splitted = name.split(' ');
	var length = splitted.length;

	if (length < 1) return '';

	var lastName = splitted[length - 1].toUpperCase();
	var firstNames = '';

	for (var i = 0; i < length - 1; i++) {
		var firstName = splitted[i][0].toUpperCase() + splitted[i].slice(1).toLowerCase();
		firstNames = firstName + ' ' + firstNames;
	}

	return firstNames + ' ' + lastName;
}

projects.display = function() {
	for (var projectId in this.projects) {
		var project = this.projects[projectId];
		$("#projects").append(HTMLprojectStart);

		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));	
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));

		project.images.forEach(function(image) {
			$(".project-entry:last").append(HTMLprojectImage.replace("%data%", image));
		});
	}
}

projects.display();

education.display = function() {
	this.schools.forEach(function(school) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name));	
		$(".education-entry:last").append(HTMLschoolDegree.replace("%data%", school.degree));	
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));	
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));

		var majors = school.majors.join(', ');
		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", majors));	
	});
		$("#education").append(HTMLonlineClasses);
	this.onlineCourses.forEach(function(course) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", course.title));	
		$(".education-entry:last").append(HTMLonlineSchool.replace("%data%", course.school));
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%", course.dates));
		$(".education-entry:last").append(HTMLonlineURL.replace("%data%", course.url));
	});
}

education.display();

$("#mapDiv").append(googleMap);
