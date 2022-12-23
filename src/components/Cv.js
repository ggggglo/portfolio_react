import '../Portfolio.css'
import cv from '../docs/CV_2022.pdf'

export default function Cv (){
    return (
        <div>
            <section id="cv">
            <h3 className="margin">CV</h3>
            <p className="margin">Here is a link to my CV</p>
            <a href={cv} rel="noreferrer" className="margin">Glo's 2022 CV</a>
            </section>
        </div>
    )
}