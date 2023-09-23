AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/html.png",
    langName: "HyperText Markup Language",
    langDesc: "<li>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser</li>",
  },
  {
    langImage: "assets/images/techstack-page/css.png",
    langName: "Cascading Style Sheets",
    langDesc: "<li>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML</li>",
  },
  {
    langImage: "assets/images/techstack-page/bootstrap.png",
    langName: "Bootstrap",
    langDesc: "<li>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development</li>",
  },
  {
    langImage: "assets/images/techstack-page/javascript.png",
    langName: "JavaScript",
    langDesc: "<li>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS</li>",
  },
  {
    langImage: "assets/images/techstack-page/react.png",
    langName: "React",
    langDesc: "<li>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components</li>",
  },
  {
    langImage: "assets/images/techstack-page/node.png",
    langName: "Node",
    langDesc: "<li>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser</li>",
  },
  {
    langImage:"assets/images/techstack-page/php.png",
    langName:"PHP",
    langDesc:"<li>PHP, or \"Hypertext Preprocessor\", is a core scripting language in web development. It handles dynamic content, form processing, and database integration, powering interactivity and functionality on websites and applications.</li>"
  },
  {
    langImage: "assets/images/techstack-page/wordpress.png",
    langName: "WordPress",
    langDesc: "<li>WordPress is a popular content management system (CMS) known for its user-friendly interface, extensive theme and plugin options, and suitability for various website types, from personal blogs to e-commerce sites.</li>",
  },
  {
    langImage: "assets/images/techstack-page/elementor-icon.jpg",
    langName: "Elementor",
    langDesc: "<li>Elementor is a popular WordPress page builder plugin that enables users to create and customize web pages visually, without coding.</li>",
  },
 
  {
    langImage:"assets/icons/mysql.png",
    langName:"MySQL",
    langDesc:"<li>MySQL is an open-source relational database management system renowned for its speed, reliability, and versatility in web applications and software projects. Developers often prefer it for efficient data management.</li>"
  },
  {
    langImage: "assets/icons/java.png",
    langName: "Java",
    langDesc: "<li>Java is a versatile, widely-used programming language known for its portability, robustness, and extensive library support. It's popular for building applications, thanks to its \"zwrite once, run anywhere\" capability and strong community backing.</li>",
  },
  {
    langImage: "assets/icons/photoshop.webp",
    langName: "Adobe Photoshop",
    langDesc: "<li>Adobe Photoshop, the industry standard in image editing, empowers designers and photographers with powerful tools for retouching, compositing, and creative graphic design. Its intuitive interface and extensive feature set make it a must-have for professionals in various creative fields.</li>",
  },
  
 

 
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
