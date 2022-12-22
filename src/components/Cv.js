import '../Portfolio.css'
import cv from '../docs/CV_2022.pdf'

export default function Cv (){
    return (
        <div>
            <section id="cv">
            <h2>CV</h2>
            <p>Here is a link to my CV</p>
            <a href={cv} rel="noreferrer">Glo's 2022 CV</a>
            </section>
        </div>
    )
}