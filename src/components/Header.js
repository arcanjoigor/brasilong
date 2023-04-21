import { Link } from "react-router-dom"

function Header (){
    return (
        <header class="bg-green-600">
        <nav class="flex justify-between items-center px-2 py-4">
          <Link to="/"><img src="logo.png" class="w-20" alt="logomarca" /></Link>
          <ul class="flex">
            <li><Link to="/" class="mx-2 text-white font-black text-base hover:text-yellow-200" >Home</Link></li>
            <span class="text-white
            ">|</span>
            <li>
            <Link to="/social" class="mx-2 text-white font-black text-base hover:text-yellow-200" >Ações Sociais</Link>
            </li>
            <span class="text-white
            ">|</span><li><Link to="/sobre" class="mx-2 text-white font-black text-base hover:text-yellow-200" >Sobre nós</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default Header