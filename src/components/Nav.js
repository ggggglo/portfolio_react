import '../Portfolio.css'

export default function Nav (){
    const mailto = 'mailto:glorianagonzalez@rocketmail.com'
    return (
        <div>
            <span className="header">
            <h1>Glo's Portfolio</h1>
            </span>
            <span>
            <p className="contact">
            <a href= {mailto}>glorianagonzalez@rocketmail.com</a>
            </p>
            <p className="contact">+512.696.5501</p>
            <p className="contact">Austin, TX</p>
            <p id="bday" className="contact">03/10/94</p>
            </span>
        </div>
    )
}