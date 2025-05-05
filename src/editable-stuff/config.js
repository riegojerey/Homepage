// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#BF616A, #5E81AC, #81A1C1, #D08770, #EBCB8B, #88C0D0,#8FBCBB,#A3BE8C,#B48EAD",
  firstName: "Riego Jeremy",
  middleName: "",
  lastName: "Terte",
  message: " Not your average Electronics Engineer | Self-learning programmer ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/riegojerey",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/RiegoJere",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/riego-terte-210164173/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/RiegoJere",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/16apx8s6zlVwCu7Aea6jdJtXOnAb6GsNP8QAsTv7gWZo/edit",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/avatar.jpg"),
  imageSize: 375,
  message:
    "My name is Riego Jeremy Terte. I’m a fresh college graduate at National University, Manila (PH) with a Bachelor's degree in Electronics Engineering. I'm passionate about Electronics, Automation, 3D Printing, Programming and my goal is to pursue this passion within the field of Engineering. In my free time I 3D print useless things.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "riegojerey",
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Achievements",
  message:
    "Research Presenter, The 34th ITC-CSCC , Jeju shinhwa world, Republic of Korea",
  images: [
    { 
      img: require("../editable-stuff/korea1.jpg"), 
    },
    { 
      img: require("../editable-stuff/korea0.jpg"), 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
  
};


// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 75 },
    { name: "MATLAB", value: 70 },
    { name: "C/C++", value: 80 },
    { name: "Arduino", value: 90 },
    { name: "GNU/Linux", value: 85 },
    { name: "Raspberry Pi", value: 75 },
    { name: "CAD Softwares", value: 85 },
    { name: "3D Printing", value: 90 },
    { name: "3D Printing Softwares", value: 90 },
    { name: "NI Multisim Circuit Simulation Software", value: 80 },
    { name: "Delta, Siemens and Mitsubishi Programmable Logic Control", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90},
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value:100},
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 85},
    { name: "Empathy", value: 80},
    { name: "Organization", value: 95},
    { name: "Creativity", value: 80},
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Electronics or Associate Software Engineering position! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "riegojere@gmail.com",
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch };
