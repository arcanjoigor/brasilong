import Videop from "../components/Videop";
import Buttong from "../components/Buttong";
import { Link } from "react-router-dom"

function Home () {
    return (
        <section class="h-screen md:h-full">
            <article class="p-3 text-center text-blue-800">
                <h1 class="text-4xl">Bem vindo a Brasil Acolhedor</h1>
                <Videop />       
                <p class="text-lg m-3">Somos uma organização dedicada a fazer a diferença na vida das pessoas. Acreditamos que juntos podemos criar um <strong class="text-xl text-yellow-400">Brasil</strong> melhor e mais justo.</p>

                <p class="text-lg m-3">Convidamos você a se envolver com a nossa causa e ser parte da mudança que queremos ver no mundo. <strong>Junte-se a nós e faça a diferença!</strong></p>
                <div class="m-5">
                    <Link to="/social" class="m-2">
                        <Buttong text="Voluntariar-se"/>
                    </Link>
                    <Link to="/doar" class="m-2">
                        <Buttong text="Doar agora"/>
                    </Link>
                </div>
            </article>
        </section>
    );
};

export default Home