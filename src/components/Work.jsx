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
    imgSrc: "public/images/netflixProyect.png",
    title: "Netflix dashboard analitics",
    tags: ["Tablero", "Estadisticas", "Graficas", "Power BI", "DAX","Netflix"],
    projectLink: "https://app.powerbi.com/reportEmbed?reportId=50f476cf-92a3-480a-85f7-f11e61b951cd&autoAuth=true&ctid=6ca34ae1-466f-44bc-a7aa-0ac5a78c61b1",
  },
  {
    imgSrc: "public/images/AmazonProyect.png",
    title: "Amazon dashboard analitics",
    tags: ["Tablero", "Estadisticas", "Graficas", "Power BI", "DAX","Amazon"],
    projectLink: "https://app.powerbi.com/reportEmbed?reportId=6eb726c2-43a5-44f0-81ee-8cd9cbbee26a&autoAuth=true&ctid=6ca34ae1-466f-44bc-a7aa-0ac5a78c61b1",
  },
  {
    imgSrc: "public/images/SpotifyProyect.png",
    title: "Spotify dashboard analitics",
    tags: ["Tablero", "Estadisticas", "Graficas", "Power BI", "DAX","Spotify"],
    projectLink: "https://app.powerbi.com/reportEmbed?reportId=87c14ec3-2faf-43c9-811d-0f614afaf2b2&autoAuth=true&ctid=6ca34ae1-466f-44bc-a7aa-0ac5a78c61b1",
  }
  /* {
    imgSrc: "/images/project-1.jpg",
    title: "Full stack music app",
    tags: ["API", "MVC", "Development"],
    projectLink: "https://musify-5al0.onrender.com/",
  },
  {
    imgSrc: "/images/project-2.jpg",
    title: "Free stock photo app",
    tags: ["API", "SPA"],
    projectLink: "https://pixstock-official.vercel.app/",
  },
  {
    imgSrc: "/images/project-3.jpg",
    title: "Recipe app",
    tags: ["Development", "API"],
    projectLink: "",
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "Real state website",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/codewithsadee-org/wealthome",
  },
  {
    imgSrc: "/images/project-5.jpg",
    title: "eCommerce website",
    tags: ["eCommerce", "Development"],
    projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
  },
  {
    imgSrc: "/images/project-6.jpg",
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
