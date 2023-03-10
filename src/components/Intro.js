import '../Portfolio.css'
import gloPortrait from '../images/glo-portrait.jpg'
import kylo from '../images/kylo.jpg'

export default function Intro (){
    return (
        <div className="about"> 
        <section>

        <img id="glo" src={gloPortrait} alt=" Glo, white, 28 years old, black hair wearing leather jacket"/>
        <img id= "kylo" src={kylo} alt="Kylo, a black, long haired, sharpei"/>
        </section>

        <section className="about-text">
        <p id="textcenter"> ðð» This is me, Glo, and this is Kylo ðð»</p>
        <br/>
        <p id="textright">Kylo is a 2yo bear coat Shar Pei ðð» </p>
        <br/>
        <p className="textleft">ðð» I am from San JosÃ©, Costa Rica.</p>
        <p className="textleft">ðð» I went to school for production design.</p>
        <p className="textleft">ðð» Worked in different theaters and</p>
        <p className="textleft">ðð» very cool places like Universal and Disney.</p>
        <p className="textleft">ðð» As of the last couple of years I have been</p>
        <p className="textleft">ðð» more involved in administrative roles.</p>
        <p className="textleft">ðð» This year I enrolled in the UT Coding Bootcamp</p>
        <p className="textleft">ðð» and will be working towards a career in coding.</p>
        <br/>    
        <p id="textright"> Kylo hasn't done much, but he's great ðð» </p>    
        </section>

        <section>
        <img id= "kylo2" src={kylo} alt="Kylo, a black, long haired, sharpei"/>
        </section>
</div>
    
    )
}