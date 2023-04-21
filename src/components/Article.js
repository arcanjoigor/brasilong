import Buttong from "./Buttong"
import { Link } from "react-router-dom"

function Article (props){
    return(
        <article class="p-3 text-center text-blue-800 shadow-lg m-4 bg-yellow-50 rounded-xl mb-6 xl:w-3/12 md:max-w-lg md:m-auto md:mb-6 xl:m-5 xl:mx-auto">
            <h2 class="font-black text-xl">{props.title}</h2>
            <img src={props.imgsrc} alt={props.descimg} class="mx-auto mb-4 rounded-md w-30"/>
            <p class="text-lg m-3" >{props.descriptions}</p>
            <Link to={props.link}><Buttong text="Saiba mais"/></Link>
        </article>
    )
}

export default Article