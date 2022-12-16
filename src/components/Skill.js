import "./Skill.css";
import { FaCss3Alt, FaHtml5, FaPhp } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

function Skill(){
    return(
        <div className="Skill" id="skill">
            <h1>My Skill</h1>
            <div className="my-skills">
                <section>
                    <FaCss3Alt />
                    <span>PHOTOSHOP</span>
                </section>
                <section>
                    <FaHtml5 />
                    <span>CORELDRAW</span>
                </section>
                <section>
                    <SiJavascript />
                    <span>MUSIC EDITING</span>
                </section>
                <section>
                    <FaPhp />
                    <span>TROUBLE SHOOTING</span>
                </section>
            </div>
        </div>
    )
}

export default Skill;