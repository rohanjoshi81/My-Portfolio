AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Technical Development Lead",
    cardImage: "assets/images/experience-page/tcs.png",
    place: "Tata Consultancy Services",
    time: "(2021 - present)",
    desp: "Working on education solutions as a developer, lead and mentor.",
  },
  {
    title: "Modernization Developer",
    cardImage: "assets/images/experience-page/fresche.png",
    place: "Fresche Solutions",
    time: "(2019 - 2021)",
    desp: "Worked on modernization of legacy applications.",
  },
  {
    title: "Agile Microservices Developer",
    cardImage: "assets/images/experience-page/capg.png",
    place: "Capgemini",
    time: "(2018 - 2019)",	
    desp: "Worked on developing microservices for a financial institution.",
  },
  {
    title: "Programmer Analyst",
    cardImage: "assets/images/experience-page/cts.png",
    place: "Cognizant",
    time: "(2016 - 2018)",
    desp: "Worked on application developemnt and cloud configuration for a banking client.",
  },{
    title: "Intern",
    cardImage: "assets/images/experience-page/cris.png",
    place: "CRIS ( Ministry of Indian Railways )",
    time: "(2014)",	
    desp: "Developed a web application for file tracking.",
  },{
    title: "Trainee",
    cardImage: "assets/images/experience-page/cdac.png",
    place: "CDAC",
    time: "(2013)",	
    desp: "Participated in Network Security and Pentesting training program.",
  }
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
