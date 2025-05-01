/**
 * @copyright 2025 JuanMartinez
 * @license apache-2.0
 * @inspired HENRY-CLARK
*/


const aboutItems = [
    {
        label: 'Proyectos realizados',
        number: 20
    },
    {
        label: 'Años de experiencia',
        number: 3
    }
];

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        ¡Hola! Soy Juan Martinez Ingeniero Industrial enfocado en análisis de datos y desarrollo de software. Transformo información en decisiones estratégicas y creo soluciones digitales que optimizan procesos y generan valor real.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({label, number},key) =>
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                        <span className="text-sky-400 font-bold md:text-3xl">+</span>
                                    </div>
                                    <p className="text-sm text-zinc-400">{label}</p>
                                </div>
                            )
                        }
                        <img className="ml-auto md:w-[40px] md:h-[40px]" src="../portafolio_juan/images/logo.svg" alt="Logo" width={30} height={30}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;