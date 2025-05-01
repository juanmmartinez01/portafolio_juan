/**
 * @copyright 2025 JuanMartinez
 * @license apache-2.0
*/

/**
 * Componentes
*/
import SkillCard from "./SkillCard";

const skillItem = [
  /* {
    imgSrc: "/images/figma.svg",
    label: "Figma",
    desc: "Design tool",
  }, */
  /* {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  }, */
  {
    imgSrc: "../portafolio_juan/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "../portafolio_juan/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "../portafolio_juan/images/php.png",
    label: "PHP",
    desc: "service",
  },
  {
    imgSrc: "../portafolio_juan/images/codeigniter.png",
    label: "CodeIgniter",
    desc: "PHP Framework",
  },
  {
    imgSrc: "../portafolio_juan/images/Python.png",
    label: "Python",
    desc: "Anlaytics",
  },
  {
    imgSrc: "../portafolio_juan/images/powerbi.png",
    label: "Power BI",
    desc: "User Interface",
  },
  {
    imgSrc: "../portafolio_juan/images/googlecolab.png",
    label: "Google Colab",
    desc: "Processing",
  },
  {
    imgSrc: "../portafolio_juan/images/lookerstudio.png",
    label: "Looker Studio",
    desc: "User Interface",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
          <h2 className="headline-2 reveal-up">
            Herramientas esenciales
          </h2>
          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
            Explora las tecnologías que uso para crear experiencias digitales útiles, estéticas y eficientes
          </p>
          <div className="grid gap-3 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]">
              {
                  skillItem.map(({imgSrc,label,desc}, key) =>
                      (
                          <SkillCard
                              key={key}
                              imgSrc={imgSrc}
                              label={label}
                              desc={desc}
                              classes="reveal-up"
                          />
                      )    
                  )
              }
          </div>
      </div>
    </section>
  )
};

export default Skill;
