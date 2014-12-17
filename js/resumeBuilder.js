// *******************
//        DATA
// *******************
var work = {
	"jobs": [
		{
			"employer":"Source Engineers GmbH",
			"title":"Software Engineer / CEO",
			"location":"Basel, Switzerland",
			"dates": '2013 - now',
			"description": "alkdjsfoj lajdlfj lkasdf ojlkajsdfl ojlkajdsl fjl jojljk lnllkjuoh nlnaldnf"
		},
		{
			"employer":"Endress+Hauser AG",
			"title":"Software Test Developer",
			"location":"Reinach BL, Switzerland",
			"dates": '2012 - 2013',
			"description": "alkdjsfoj lajdlfj lkasdf ojlkajsdfl ojlkajdsl fjl jojljk lnllkjuoh nlnaldnf"
		},
		{
			"employer":"Solarmax/Sputnik Engineering AG",
			"title":"Embedded Software Engineer",
			"location":"Biel, Switzerland",
			"dates": '2009 - 2012',
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
			"title":"Another Project",
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
	"skills": ["C/C++", "PHP", "Embedded Software", "Web Development"]
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
			"majors":["Computer Science", "Engineering"],
			"dates":"2002-2008",
			"url":"http://www.tuhh.de"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Basics",
			"school":"Udacity",
			"dates": "2014-now",
			"url":"http://www.udacity.com"
		}
	]
};

// *******************
//  DISPLAY FUNCTIONS
// *******************

// Displays the biography section
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", this.name);
	var formattedRole = HTMLheaderRole.replace("%data%", this.role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var contacts = this.contacts;
	Object.keys(contacts).forEach(function(key) {
	 	$("#topContacts").append(HTMLcontactGeneric.replace("%contact%", key).replace("%data%", contacts[key]));
	});

	$("#header").append(HTMLWelcomeMsg.replace("%data%", this.welcome));
	$("#header").append(HTMLbioPic.replace("%data%", this.bioPic));

	var skills = this.skills;

	if (skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		skills.forEach(function(skill) {
			$("#skills").append(HTMLskills.replace("%data%", skill));
		});
	}
}

// Displays the work experience section
work.display = function() {
	for (i in this.jobs) {
		var job = this.jobs[i];
		var employer = HTMLworkEmployer.replace("%data%", job.employer);
		var title = HTMLworkTitle.replace("%data%", job.title);

		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(employer + title);
		$(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
	}
}

// Displays the projects section
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

// Displays the education section
education.display = function() {
	this.schools.forEach(function(school) {
		$("#education").append(HTMLschoolStart);
		var schoolName = HTMLschoolName.replace("%data%", school.name);
		var degree = HTMLschoolDegree.replace("%data%", school.degree);

		$(".education-entry:last").append(schoolName + degree);
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));

		var majors = school.majors.join(', ');
		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", majors));
	});
		$("#education").append(HTMLonlineClasses);
	this.onlineCourses.forEach(function(course) {
		$("#education").append(HTMLschoolStart);

		var title = HTMLonlineTitle.replace("%data%", course.title);
		var school = HTMLonlineSchool.replace("%data%", course.school);

		$(".education-entry:last").append(title + school);
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%", course.dates));
		$(".education-entry:last").append(HTMLonlineURL.replace("%data%", course.url));
	});
}

// Displays the Google map
function showMap() {
	$("#mapDiv").append(googleMap);
}

// *******************
// FUNCTION EXECUTION
// *******************

// Display the resume
bio.display();
work.display();
projects.display();
education.display();
showMap();


// *******************
// ADDITONAL CODE
// *******************

// Don't use the internationalization button in the final version
// $("#main").append(internationalizeButton);

// This function has no effect as the internationalization button was commented out
// but leave it here for documentation purposes
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