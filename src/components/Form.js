function Form (){
    return (
            <div class="mx-5">
                <div class="sm:w-96 md:w-1/2 p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl m-auto bg-slate-200">
                <div class="flex">
                <h1 class="font-bold uppercase text-xl m-auto">Voluntaria-se</h1>
                </div>
                <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" placeholder="Primeiro Nome*" required/>
                <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" placeholder="Ultimo Nome*" required/>
                <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email" placeholder="Email*" required/>
                <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number" placeholder="Telefone*" required/>
                </div>
                <div class="my-4">
                    <textarea placeholder="Fale um pouco sobre você, como nos conheceu e o que te motiva a ingressar nessa jornada*" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" required></textarea>
                </div>
                <div class="my-2 w-1/2 lg:w-1/4 m-auto">
                    <button class="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline" onclick="enviar()">Enviar</button>
                </div>
                </div>
            </div>
    )
}

export default Form