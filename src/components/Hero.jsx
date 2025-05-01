/**
 * @copyright 2025 JuanMartinez
 * @license apache-2.0
 * @inspired HENRY-CLARK
*/

/**
 * Componentes
*/
import {ButtonPrimary,ButtonOutline} from "./Button";


const Hero = () => {
    return (
        <section id="home" className="pt-28 lg:pt-36">
            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img className="img-cover" src="public/images/Juan.png" width={40} height={40} alt="Juan Martinez Portafolio" />
                        </figure>
                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>
                            Disponible
                        </div>
                    </div>
                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                        Convirtiendo datos en decisiones y software en soluciones reales
                    </h2>
                    <div className="flex items-center gap-3">
                        <ButtonPrimary
                            label="Descargar CV"
                            icon="download"
                        />

                        <ButtonOutline 
                            href="#about"
                            label="Bajar"
                            icon="arrow_downward"
                        />
                    </div>
                </div>

                <div className="hidden lg:block">
                    <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% to-65% rounded-[60px] overflow-hidden">
                        <img className="w-full" src="public/images/Juan.png" width={656} height={800} alt="Juan Martinez" />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Hero;