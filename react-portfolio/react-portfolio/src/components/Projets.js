import CertCard from "./CertCard.js"

import hr from "../assets/curve-hr.svg"
import DimensionalRunner from "../assets/certs/DimensionalRunner.png"
import Darkins from "../assets/certs/Darkins.jpg"
import Lightbringer from "../assets/certs/LightBringer.png"
import ElementalKnight from "../assets/certs/ElementalKnight.png"

// import 

export default function Certs(){
    function importAll(r) {
        return r.keys().map(r);
    }
      
   
    const DimensionalRunner_interfaces = importAll(require.context('../assets/certs/DimensionalRunner/', false, /\.(png|jpe?g|svg)$/));
    const Darkins_interfaces = importAll(require.context('../assets/certs/Darkins/', false, /\.(png|jpe?g|svg)$/));
    const LightBringer_interfaces = importAll(require.context('../assets/certs/LightBringer/', false, /\.(png|jpe?g|svg)$/));
    const ElementalKnight_interfaces = importAll(require.context('../assets/certs/ElementalKnight/', false, /\.(png|jpe?g|svg)$/));

    const githubLinks = [
        
        "https://github.com/Ayoub-Assioui/Games/tree/main/Darkins",
        "https://github.com/Ayoub-Assioui/Games/tree/main/Light%20Bringer",
        "https://github.com/Ayoub-Assioui/Games/tree/main/Dimensional%20Runner",
        "https://github.com/Ayoub-Assioui/Games/tree/main/ElementalKnight"
    ]

    const desc = [
        "In this 2D platformer game, the main character, Shadow, has the ability to transform into any enemy he defeats. Each enemy possesses unique special abilities (zombies have poison resistance, ghosts can move through objects, and the shinigami can instantly eliminate you upon sight) " ,
        "2D platformer game where the main character solves puzzles to obtain abilities (double jump, dash, wall jump, etc.) necessary to complete each level.",
        "2D runner game ranked 83rd in the top chart, garnered over 2K downloads in 3 days, accompanied by 643 reviews (4.938 rating). It's a really challenging game with amazing level design and numerous abilities."  ,
        
        "Top-down 2D pixel game where I explored pixel art due to constant struggles with animations."
        
        
    ];

      
    return (
        <div id="projets" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Personal projects </h1>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                
                <CertCard name="DimensionalRunner" img={DimensionalRunner} desc = {desc[2]}  interfaces ={DimensionalRunner_interfaces} github={githubLinks[2]} />
                <CertCard name="Darkins" img={Darkins} desc = {desc[0]} interfaces ={Darkins_interfaces} github={githubLinks[0]} />
                <CertCard name="LightBringer" img={Lightbringer} desc = {desc[1]} interfaces ={LightBringer_interfaces} github={githubLinks[1]} />
                <CertCard name="ElementalKnight" img={ElementalKnight} desc = {desc[3]} interfaces ={ElementalKnight_interfaces} github={githubLinks[3]} />

            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
