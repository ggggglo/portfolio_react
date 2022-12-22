import '../Portfolio.css'

export default function Nav (){
    const mailto = 'mailto:glorianagonzalez@rocketmail.com'
    return (
        <div>
            <span class="header">
            <h1>Glo's Portfolio</h1>
            <h2>Test</h2>
            </span>
            <span>
            <p class="contact">
            <a href= {mailto}>glorianagonzalez@rocketmail.com</a>
            </p>
            <p class="contact">+512.696.5501</p>
            <p class="contact">Austin, TX</p>
            <p id="bday" class="contact">03/10/94</p>
            </span>
        </div>
    )
}