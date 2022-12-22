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
        <p id="textcenter">  This is me, Glo, and this is Kylo </p>
        <br/>
        <p id="textright">Kylo is a 2yo bear coat Shar Pei </p>
        <br/>
        <p className="textleft"> I am from San José, Costa Rica.</p>
        <p className="textleft">I went to school for production design.</p>
        <p className="textleft">Worked in different theaters and</p>
        <p className="textleft">very cool places like Universal and Disney.</p>
        <p className="textleft">As of the last couple of years I have been</p>
        <p className="textleft">more involved in administrative roles.</p>
        <p className="textleft">This year I enrolled in the UT Coding Bootcamp</p>
        <p className="textleft">and will be working towards a career in coding.</p>
        <br/>    
        <p id="textright"> Kylo hasn't done much, but he's great</p>    
        </section>

        <section>
        <img id= "kylo2" src={kylo} alt="Kylo, a black, long haired, sharpei"/>
        </section>
</div>
    
    )
}