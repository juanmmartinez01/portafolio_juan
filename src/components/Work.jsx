/**
 * @copyright 2025 JuanMartinez
 * @license apache-2.0
 */

/**
 * Componentes
*/
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "../portafolio_juan/images/netflixProyect.png",
    title: "Netflix dashboard analitics",
    tags: ["Tablero", "Estadisticas", "Graficas", "Power BI", "DAX","Netflix"],
    projectLink: "../portafolio_juan/Archivos/Amazon.Proyect.pdf",
  },
  {
    imgSrc: "../portafolio_juan/images/AmazonProyect.png",
    title: "Amazon dashboard analitics",
    tags: ["Tablero", "Estadisticas", "Graficas", "Power BI", "DAX","Amazon"],
    projectLink: "../portafolio_juan/Archivos/Netflix_Proyect.pdf",
  },
  {
    imgSrc: "../portafolio_juan/images/SpotifyProyect.png",
    title: "Spotify dashboard analitics",
    tags: ["Tablero", "Estadisticas", "Graficas", "Power BI", "DAX","Spotify"],
    projectLink: "../portafolio_juan/Archivos/Spotify_Proyect.pdf",
  }
  /* {
    imgSrc: "../portafolio_juan/images/project-1.jpg",
    title: "Full stack music app",
    tags: ["API", "MVC", "Development"],
    projectLink: "https://musify-5al0.onrender.com/",
  },
  {
    imgSrc: "../portafolio_juan/images/project-2.jpg",
    title: "Free stock photo app",
    tags: ["API", "SPA"],
    projectLink: "https://pixstock-official.vercel.app/",
  },
  {
    imgSrc: "../portafolio_juan/images/project-3.jpg",
    title: "Recipe app",
    tags: ["Development", "API"],
    projectLink: "",
  },
  {
    imgSrc: "../portafolio_juan/images/project-4.jpg",
    title: "Real state website",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/codewithsadee-org/wealthome",
  },
  {
    imgSrc: "../portafolio_juan/images/project-5.jpg",
    title: "eCommerce website",
    tags: ["eCommerce", "Development"],
    projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
  },
  {
    imgSrc: "../portafolio_juan/images/project-6.jpg",
    title: "vCard Personal portfolio",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/codewithsadee/vcard-personal-portfolio",
  }, */
];

const Work = () => {
  return (
    <section id="work" className="section">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                My portfolio highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {
                    works.map(({imgSrc, title, tags, projectLink}, key) => (
                          <ProjectCard 
                              key={key}
                              imgSrc={imgSrc}
                              title={title}
                              tags={tags}
                              projectLink={projectLink}
                              classes="reveal-up"
                          />
                        )
                    )
                }
            </div>

        </div>

    </section>
  )
}

export default Work;
