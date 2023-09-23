AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Founder at Dritondesign",
    cardImage: "assets/icons/logo.jpg",
    place: "Dritondesign",
    time: "(Sep, 2023 - present)",
    desp: "<li>As the Founder of Dritondesign, I lead a creative team dedicated to crafting stunning websites, including captivating landing pages and e-commerce solutions. We also specialize in graphic design, creating logos, banners, and engaging social media posts.</li><li>Our commitment extends beyond just design; we offer services to enhance social media interactivity, driving meaningful engagement for various platforms. Additionally, we thrive on collaboration, working closely with other companies to deliver exceptional digital experiences. Dritondesign is all about innovation, creativity, and impactful partnerships.</li>",
  },
  {
    title: "Web Developer",
    cardImage: "assets/images/project-page/it2pi.png",
    place: "IT2pi LLC",
    time: "(Sep, 2022 - Present)",
    desp: "<li>Designing, creating, and maintaining websites for clients around the world is the core responsibility of my role as a WordPress developer.</li><li>Collaborating with designers to ensure design consistency and implementing their creative vision is an essential aspect of my work.</li><li>I collaborate with designers to create responsive courses using Adobe Captivate, ensuring smooth LMS integration to meet the needs of prestigious clients worldwide.</li>",
  },
  {
    title: "Freelancer",
    cardImage: "assets/icons/freelancer2.jpg",
    place: "Frontend Developer ",
    time: "(Jan, 2022 - Sep, 2022)",
    desp: "<li>I've held the position of a freelance frontend developer, specializing in crafting captivating websites..</li><li>I leveraged my skills in web design, utilizing tools like Photoshop for stunning visuals. My proficiency in HTML, Elementor, and WordPress allowed me to build user-friendly websites. Additionally, I employed CSS3 to enhance site aesthetics and React.js and JavaScript for dynamic functionality, resulting in seamless and engaging user experiences.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Nothing to show here",
    cardImage: "assets/icons/freelancer2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quae velit esse aperiam.",
  },
  
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Social Media Graphic Design",
    subtitle: "Photoshop, ChatGPT ㋡",
    image: "assets/icons/post1.jpg",
    desp: "I find immense joy in using Photoshop to create social media posts. It's my creative outlet, where I blend art and technology to craft visually captivating stories. Whether it's designing graphics or enhancing photos, Photoshop empowers me to share my passions and spark conversations through captivating content.",
    href: "https://www.instagram.com/p/Cv2foRGNVVc/",
  },
  {
    title: "Web Design",
    subtitle: "Figma, Photoshop, Dribbble ㋡",
    image: "assets/icons/design.jpg",
    desp: "Creating website designs with Figma and Photoshop is my passion. These tools allow me to blend creativity and precision, transforming concepts into visually captivating and user-friendly websites, all while expressing a brand's identity. It's a fulfilling endeavor that fuels my love for design.",
    href: "",
  },
  {
    title: "Web Development",
    subtitle: "HTML, CSS, JS, React JS, Wordpress, Php, MySQL",
    image: "assets/icons/development2.jpg",
    desp: "My passion for website design knows no bounds, spanning HTML, CSS, JS, React.js, WordPress, PHP, and MySQL. These tools allow me to craft dynamic, visually appealing, and functional web experiences that constantly fuel my creative drive.",
    href: "./projects.html",
  },
  {
    title: "Social Media Engagement Increase",
    subtitle: "Sprout Social, BuzzSumo, HootSuite",
    image: "assets/icons/social-media-boost.jpg",
    desp: "I excel at enhancing social media engagement on platforms like Instagram, TikTok, and Facebook. Whether you need more likes, comments, or interaction, I tailor strategies to boost your online presence and connect with your audience effectively. My expertise in platform algorithms and user behavior ensures authentic and impactful results.",
    href: "",

  },
  {
    title: "Logo Creating",
    subtitle: "Photoshop, illustrator",
    image: "assets/icons/LogoCreate.jpg",
    desp: "I have a knack for designing eye-catching logos that perfectly represent new businesses. A logo is a vital part of your brand identity, and my designs are tailored to make a lasting impact, helping your business stand out and convey its essence effectively, whether you're launching a startup or rebranding.",
    href: "",

  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
