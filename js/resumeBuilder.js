/*BIO*/
var bio = {
    "name": "Milene Badoux",
    "role": "Front-End Web Developer",
    "welcomeMessage": "Welcome to my resume!",
    "biopic": "images/Milene_pict.jpg",
    "contacts": {
        "mobile": "(650)-XXX-XXXX",
        "email": "badouxmilene@gmail.com",
        "github": "",
        "twitter":"",
        "location": "Los Altos, CA"
    },
    "skills": ["HTML", "Javascript", "CSS", "VBA Developemt", "QA testing (iOS and Android)"]
};
bio.display = function() {
        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage),HTMLbioPic.replace("%data%", bio.biopic));
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.name), HTMLheaderRole.replace("%data%", bio.role));
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            var len = bio.skills.length;
            for (var i = 0; i < len ; i++) {
                var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills:last").append(formattedSkills);
            } //end for
        } //end if
        $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email),HTMLlocation.replace("%data%", bio.contacts.location),HTMLmobile.replace("%data%", bio.contacts.mobile));
    }; //endfunction

/*PROJECTS*/
var projectclick = 0;
var projects = {
    "projects": [{
        "title": "Portfolio",
        "dates": "09/2016",
        "description": "This was my final project for the HTML, CSS and responsive design lessons.",
        "images": ["images/portfolio.jpg"]
    }, {
        "title": "Responsive design",
        "dates": "09/2016",
        "description": "This was my third project. I learned a lot about responsive design.",
        "images": ["images/responsive.jpg"]
    }, {
        "title": "Animal Trading card",
        "dates": "09/2016",
        "description": "This was my first project. I learned a lot about CSS and HTML.",
        "images": ["images/animal.jpg"]
    }]

};
projects.display =function() {
      if (projects.projects.length > 0) {
          $("#projects").append(HTMLprojectStart);
          $(".project-entry:last").prepend(HTMLprojectText);
          $(".left:last").append(HTMLprojectTitle.replace("%data%", projects.projects[projectclick].title),HTMLprojectDates.replace("%data%", projects.projects[projectclick].dates),HTMLprojectDescription.replace("%data%", projects.projects[projectclick].description));
          if (projects.projects[projectclick].images.length > 0) {
              var len = projects.projects[projectclick].images.length;
              for (var i = 0; i < len ; i++) {
                  $(".project-entry:last").append(HTMLprojectImagediv);
                  $(".right:last").append(HTMLprojectImage.replace("%data%", projects.projects[projectclick].images[i]));
              }
          }
      }
  };

/*WORK EXPERIENCE*/
var work = {
    "jobs": [{
        "title": "French Linguist",
        "employer": "Menlo Technologies",
        "dates": "01/2014-05/2016",
        "location": "Cupertino",
        "description": "QA TESTING. On site at Fortune 100 Company in Cupertino,CA. Performing iOs and Android testing in order to identify layout, linguistic or functional bugs. Bugs reported, tracked and verified. <br> FRENCH TRANSLATION. Strings translated from English to French."
    }, {
        "title": "Analyst",
        "employer": "CGI",
        "dates": "2011-2014",
        "location": "Pau",
        "description": "THIRD PARTY APPLICATION MAINTENANCE, TOTAL S.A. and EADS. Participation in the analysis and development (VBA Access and Excel ) of several applications. <br> IT APPLICATION MANAGER ASSISTANT, TOTAL SA. System administrator of GISEH software (Total S.A. access control): user support and assistance for upgrades and new functionalities implementations"
    }, {
        "title": "Ads Quality Rater",
        "employer": "WORKFORCELOGIC",
        "dates": "08/2010-02/2011",
        "location": "Menlo Park",
        "description": " Qualitative evaluation of web pages based on Google’s criteria. "
    }, {
        "title": "Development engineer",
        "employer": "BULL SAS",
        "dates": "2008-2010",
        "location": "Toulouse",
        "description": "Management of applications for EDF (French electricity company) call centers. In charge of operational maintenance and software upgrades, telephone network and IVR (Interactive Voice Response), functional tests, user support and incident solving. "
    }],
};

work.display = function() {
        if (work.jobs.length > 0) {
            work.jobs.forEach(function(job) {
                $("#workExperience").append(HTMLworkStart);
                var formattedEmployerTitle = HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title);
                $(".work-entry:last").append(formattedEmployerTitle, HTMLworkLocation.replace("%data%", job.location),HTMLworkDates.replace("%data%", job.dates), HTMLworkDescription.replace("%data%", job.description));
            });
        }
    };

/*EDUCATION*/
var education = {
    "schools": [{
        "name": "University Toulouse 2",
        "dates": "2007",
        "location": "Toulouse",
        "majors": ["Cognitive ergonomics and linguistic engineering"],
        "degree": "MASTER",
        "url": "http://www.univ-tlse2.fr/accueil/formation-insertion/odf-2016-2020/master-ergonomie-cognitive-innovations-technologiques-et-facteurs-humains-ecit-fh--386412.kjsp"
    }, {
        "name": "University JFC Champollion",
        "dates": "2006",
        "location": "Albi",
        "majors": ["Ergonomics"],
        "degree": "BACHELORS",
        "url": "https://www.univ-jfc.fr/"
    }, {
        "name": "University Toulouse 3",
        "dates": "2003",
        "location": "Toulouse",
        "majors": ["Management of companies and administrations"],
        "degree": "DUT (A two-year technical degree)",
        "url": "http://www.univ-tlse3.fr/dut-gestion-des-entreprises-et-des-administrations-sites-de-toulouse--801.kjsp"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "september 2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
        "lessons": ["Intro to HTML and CSS", "Sizing Elements", "HTMl Syntax", "CSS Syntax", "Responsive Web Design fundamentals", "Responsive Images", "Javascript Basics", "Intro to jQuery"]
    }
    ]
};

education.display = function() {
    if (education.schools.length > 0) {
        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolDegree = HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree);
            $(".education-entry:last").append(formattedSchoolDegree, HTMLschoolDates.replace("%data%", school.dates),HTMLschoolLocation.replace("%data%", school.location));
            if (school.majors.length > 0) {
                for(var i = 0; i < (school.majors.length) ; i++) {
                    $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", school.majors[i]));
                }
            }
        });
    }//end first if
    if (education.onlineCourses.length > 0) {
        $(".education-entry:last").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(onlineCourse) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title) + HTMLonlineSchool.replace("%data%", onlineCourse.school);
            $(".education-entry:last").append(formattedSchoolTitle,HTMLonlineDates.replace("%data%", onlineCourse.dates),HTMLonlineURL.replace("%data%", onlineCourse.url));
        });
    }
};
//end function
/*call functions*/
bio.display();
projects.display();
education.display();
work.display();

/*Internationalize name function*/
function inName(name) {
    name = name.trim().split(" ");
    return name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase() + " " + name[1].toUpperCase();
}

/*Map*/
$("#mapDiv").append(googleMap);

//Adding the footer circles
var len = projects.projects.length;
for (var i = 0; i < len; i++) {
    $("#footerproject").append('<a class="fa fa-circle-o" aria-hidden="true"> </a>');
}
$("#footerproject").children('a:nth(0)').toggleClass("fa-circle");

//displaying the right project and make the circle respond correctly.
$(".fa-arrow-right").on("click", function() {
    if (projectclick < (projects.projects.length) - 1) {
        projectclick = projectclick + 1;
        $("#footerproject").children('a').removeClass("fa-circle");
        $("#footerproject").children("a:nth(" + projectclick + ")").toggleClass("fa-circle");
    } else {
        projectclick = 0;
        $("#footerproject").children('a').removeClass("fa-circle");
        $("#footerproject").children("a:nth(" + projectclick + ")").toggleClass("fa-circle");
    }
    projects.display();
    $(".project-entry").first().remove();
});

$(".fa-arrow-left").on("click", function() {
    if (projectclick > 0) {
        projectclick = projectclick - 1;
        $("#footerproject").children('a').removeClass("fa-circle");
        $("#footerproject").children("a:nth(" + projectclick + ")").toggleClass("fa-circle");
    } else {
        projectclick = 2;
        $("#footerproject").children('a').removeClass("fa-circle");
        $("#footerproject").children("a:nth(" + projectclick + ")").toggleClass("fa-circle");
    }
    projects.display();
    $(".project-entry").first().remove();
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function mydrpdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('#dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var len = dropdowns.length;
        for (var i = 0; i < len ; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
