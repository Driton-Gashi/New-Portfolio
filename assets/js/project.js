AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "WWW.ASANISAGENCY.COM",
    cardImage: "assets/images/project-page/Asanis_Agency.jpg",
    description: "A Website created for the ASANISAGENCY company.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://asanisagency.com",
    Githublink: "",
  },
  {
    title: "WWW.BANESAJUAJ.COM",
    cardImage: "assets/images/project-page/banesajuaj.jpg",
    description: "A Website created for the BANESAJUAJ company.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://banesajuaj.com",
    Githublink: "",
  },
  {
    title: "WWW.IT2PI.COM",
    cardImage: "assets/images/project-page/it2pi_square.jpg",
    description: "A Website created for IT2PI Company.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://it2pi.ditar-compliance.de/",
    Githublink: "",
  },
  {
    title: "KANZLEI-AM-KURECK",
    cardImage: "assets/images/project-page/kanzlei-am-kureck.jpg",
    description: "A Website created for KANZLEI-AM-KURECK Company.",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "https://kanzlei-am-kureck.de/",
    Githublink: "",
  },
  {
    title: "WWW.CONRERI.DE",
    cardImage: "assets/images/project-page/Conreri.jpg",
    description: "A Website created for CONRERI Company.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://conreri.de/",
    Githublink: "",
  },
  {
    title: "WWW.EMBEL-HOME.DE",
    cardImage: "assets/images/project-page/Embel Home.jpg",
    description: "A Website created for EMBEL-HOME Company.",
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Previewlink: "https://embel-home.de/",
    Githublink: "",
  },
  {
    title: "Full Stack Application With PERN",
    cardImage: "assets/images/project-page/gym-application.png",
    description: "Full Stack application about GYM using PostgresSQL, Express JS, React, Node",
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Previewlink: "",
    Githublink: "https://github.com/Driton-Gashi/LAB1-GYM-Web-Application",
  },
  {
    title: "School Project Full Stack with Php and MySQL",
    cardImage: "assets/icons/freelancer2.jpg",
    description: "Poker game built using typescript.",
    tagimg: "https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png",
    Previewlink: "",
    Githublink: "https://github.com/Driton-Gashi/Minecraft-Project",
  },
  {
    title: "EURO DEKOR",
    cardImage: "assets/images/project-page/euro-dekor.png",
    description:
      "Tested a React Tic Tac Toe Game using Jest and React Testing Library.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://euro-dekor.netlify.app/",
    Githublink: "https://github.com/Driton-Gashi/Euro-Dekor--Design-2-",
  },
  {
    title: "Wordpress Theme - University Website",
    cardImage: "assets/images/project-page/wordpress.jpg",
    description: "WordPress Theme created with Php, HTML, CSS, JS, and Jquery",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/Driton-Gashi/University-Website-Wordpress-",
  },
  {
    title: "Random Team Generator",
    cardImage: "assets/images/project-page/naruto-arena.png",
    description:
      "Web Application that generates random teams with 200+ characters, created with javascript.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "",
    Githublink: "https://github.com/Driton-Gashi/N-A-Team-generator",
  },
  {
    title: "Movie Streaming Website",
    cardImage: "assets/images/project-page/movie-streaming.png",
    description: "Movie Streaming Website with HTML, CSS and Javascript.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "",
    Githublink: "https://github.com/Driton-Gashi/Movie-streaming-site",
  },
  

];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink, description }) => {
    output += `       
        <div title="${description}" class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url('${cardImage}') center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a target="_blank" href="${Previewlink}">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
            
                  <li ><a target="_blank" href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a target="_blank" href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
