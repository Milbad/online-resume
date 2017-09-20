/*BIO*/
var bio = {
    "name": "Milene Badoux",
    "role": "Front-End Web Developer",
    "welcomeMessage": "Welcome to my resume!",
    "biopic": "images/Milene_pict.jpg",
    "contacts": {
        "mobile": "(650)-XXX-XXXX",
        "email": "badouxmilene@gmail.com",
        "github": "https://github.com/Milbad/",
        "twitter":"",
        "location": "Los Altos, CA"
    },
    "skills": ["HTML5", "CSS", "Javascript", "AJAX","Bootstrap", "JQuery", "React", "Redux", "Knockout","Git", "VBA", "QA testing (iOS and Android)"]
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
        "title": "Readable",
        "dates": "Sep 2017",
        "description": "This is a social content and discussion web app that allows users to submit content in addition to voting and commenting. \
        I leveraged React to build a dynamic user interface, as well as Redux to manage global application state.\
        I completed this project one month before the due date.",
        "images": ["images/readable.png"]
    }, {
        "title": "My Reads",
        "dates": "Aug 2017",
        "description": "This is a responsive web app that allows users to select and categorize books into a virtual bookshelf.\
        I leveraged React to support a dynamic user interface that interacts with an API server and client library.\
        Collaborated through Slack with other students and delivered this app one month before the projected completion date.",
        "images": ["images/my-reads.png"]
    }, {
        "title": "Classic Arcade Game Clone",
        "dates": "Oct 2016",
        "description": "An HTML5 Canvas powered video game, developed using the best practices in Object Oriented JavaScript.",
        "images": ["images/game.png"]
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
        "title": "Localization QA - French Linguist",
        "employer": "Menlo Technologies",
        "dates": "Feb 2015- May 2016",
        "location": "Cupertino",
        "description": "Performed iOS and Android testing to identify layout, linguistic or functional bugs on site at Fortune 100 Company.\
        Translated strings from English to French."
    }, {
        "title": "Analyst",
        "employer": "CGI",
        "dates": "Sep 2011 - Jan 2015",
        "location": "Pau (France)",
        "description": "Analyzed, maintained and developed six VBA Access and Excel apps for multinationals.\
        Supported and assisted users during upgrades and new functionality implementations."
    }, {
        "title": "Ads Quality Rater",
        "employer": "WORKFORCELOGIC",
        "dates": "Aug 2010- Feb 2011",
        "location": "Menlo Park",
        "description": " Qualitative evaluation of web pages based on Google’s criteria. "
    }, {
        "title": "Development engineer",
        "employer": "BULL SAS",
        "dates": "Jan 2008- Apr 2010",
        "location": "Toulouse (France)",
        "description": "Maintained and managed applications for nationwide call centers.\
        Participated in functional tests, user support and incident solving.\
        Successfully organized two operational upgrades for the telephony network and the IVR (Interactive Voice Response)system"
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
        "name": "Toulouse 2 University",
        "dates": "Jun 2007",
        "location": "Toulouse (France)",
        "majors": ["Cognitive ergonomics and linguistic engineering"],
        "degree": "MASTER",
        "url": "http://www.univ-tlse2.fr/accueil/formation-insertion/odf-2016-2020/master-ergonomie-cognitive-innovations-technologiques-et-facteurs-humains-ecit-fh--386412.kjsp"
    }, {
        "name": "Albi University",
        "dates": "Jun 2006",
        "location": "Albi (France)",
        "majors": ["Ergonomics"],
        "degree": "BACHELORS",
        "url": "https://www.univ-jfc.fr/"
    }, {
        "name": "Toulouse 3 University",
        "dates": "Jun 2003",
        "location": "Toulouse (France)",
        "majors": ["Management of companies and administrations"],
        "degree": "Associates degree",
        "url": "http://www.univ-tlse3.fr/dut-gestion-des-entreprises-et-des-administrations-sites-de-toulouse--801.kjsp"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "Jan 2017",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
        "lessons": ["Intro to HTML and CSS", "Sizing Elements", "HTMl Syntax", "CSS Syntax", "Responsive Web Design fundamentals", "Responsive Images", "Javascript Basics", "Intro to jQuery"]
    },
    {
      "title": "React Nanodegree",
      "school": "Udacity",
      "dates": "in progress",
      "url": "https://www.udacity.com/course/react-nanodegree--nd019",
      "lessons": ["React Fundamentals", "React & Redux", "React Native"]
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
            $(".education-entry:last").append(formattedSchoolTitle,HTMLonlineDates.replace("%data%", onlineCourse.dates),HTMLonlineURL.replace("%data%", onlineCourse.url).replace("%data1%", onlineCourse.url));
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
