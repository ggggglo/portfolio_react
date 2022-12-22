import '../Portfolio.css'
import mario from '../images/super-mario-64.gif'
import lovers from '../images/lovers.gif'
import rocket from '../images/rocketleague.gif'
import fortnite from '../images/fortnite.gif'
import luigi from '../images/luigi.gif'
import zombies from '../images/zombies.gif'

export default function VideoGames (){
    return (
        <div id="games">
            <h2>Video Game Reviews</h2>
            <p>Love some, love some not</p>
            <div className="reviews">

                <section>
                <h3>Super Mario 64</h3>
                    <img src={mario} alt="gif of Mario sliding on a turtle shell"/>
                    <p>Greatest game ever. No more needed.</p>
                    <p>10/10</p>
                </section>

                <section>
                <h3>Lovers in a Dangerous Spacetime</h3>
                    <img src={lovers} alt="gif of spaceship fighting off mini bosses"/>
                    <p>Unbelievably good game. Crazy hard. </p>
                    <p>Beautiful graphics. If playing solo,</p>
                    <p>be ready to go a little crazy.</p> 
                    <p>8.5/10</p>
                </section>

                <section>
                <h3>Rocket League</h3>
                    <img src={rocket} alt="gif of a race car hitting a ball and scoring a goal"/>
                    <p>Did not like. At all.</p>
                    <p>Don't want to say I hate it, but I do.</p>
                    <p>0/10</p>
                </section>   

                <section>
                <h3>Fortnite</h3>
                    <img src={fortnite} alt="gif of player shooting another player"/>
                    <p>I don't trust people</p>
                    <p>that say this is a bad game.</p>
                    <p>Really entertaining, fun, clever game.</p>
                    <p>Got even better with no build mode.</p>
                    <p>7.5/10</p>
                </section> 
                
                <section>
                <h3>Luigis Dark Moon Mansion</h3>
                    <img src={luigi} alt="gif of Luigi vacuuming a ghost"/>
                    <p>One of my favorite games ever.</p>
                    <p>Super fun to play, all ages.</p>
                    <p>9/10</p>
                </section>

                <section>
                <h3>COD Black Ops 2</h3>
                    <img src={zombies} alt="gif of player shooting down a zombie"/>
                    <p>Only COD I've liked, because of zombies mode.</p>
                    <p>I've yet to find weapons as good as these.</p>
                    <p>8.5/10</p>
                </section>   
                </div>
        </div>
    )
}