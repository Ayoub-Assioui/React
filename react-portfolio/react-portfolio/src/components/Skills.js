import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import javascript from "../assets/skills/javascript.svg"
import CSharp from "../assets/skills/CSharp.svg"
import python from "../assets/skills/python.svg"
import flutter from "../assets/skills/flutter.svg"
import react from "../assets/skills/react.svg"
import mysql from "../assets/skills/mysql.svg"
import html from "../assets/skills/html.svg"
import hr from "../assets/curve-hr.svg"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1
      };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>

            <div className="mt-4">
                <Slider {...settings}> 
                <SkillCard name="C-Sharp" img={CSharp} />
                <SkillCard name="javascript" img={javascript} />
                <SkillCard name="html" img={html} />
                <SkillCard name="react" img={react} />
                <SkillCard name="python" img={python} />
                <SkillCard name="flutter" img={flutter} /> 
                <SkillCard name="mysql" img={mysql} />
                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}