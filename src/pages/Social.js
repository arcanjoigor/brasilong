import Article from "../components/Article";


function Social () {

    return (
        <section class="xl:mb-6">
            <h1 class="text-4xl mt-3 text-center text-blue-800">Ações Sociais</h1>
            <h2 class="text-sm text-center text-blue-800 
            p-2">Escolha qual programa social que mais combina com você, saiba mais sobre ele e como você poderá está contribuindo.</h2>
            <div class="xl:flex">
            
                <Article title="Programa A" imgsrc="https://fastly.picsum.photos/id/695/200/200.jpg?hmac=UJ4cowzXuCCU8226Q4uRM-Ahz6mj365L6nkT1QEBgR0" descriptions="Ele se concentra em fornecer acesso à educação para jovens carentes." link="/social/1"/>
                
                <Article title="Programa B" imgsrc="https://fastly.picsum.photos/id/441/200/200.jpg?hmac=ajdz2DirytbwfXS-S6OBlM6NaQALCD7Aajo8uQcJMV0" descriptions="Ele se concentra em fornecer alimentação para famílias carentes." link="/social/2"/>

                <Article title="Programa C" imgsrc="https://fastly.picsum.photos/id/112/200/200.jpg?hmac=a8Ve-HhSWAKC-SNBLKVosZ5gHmqMhgtNkPMYVMjEAbI" descriptions="Ele se concentra em fornecer cuidados médicos para idosos carentes." link="/social/3"/></div>
              
            <div class="xl:flex">
                <Article title="Programa D" imgsrc="https://fastly.picsum.photos/id/1018/200/200.jpg?hmac=uHjw5VeUXsbJBBE5Ywaumr-fxWyViVwI_GRwrA3AQ2Q" descriptions="Ele se concentra em fornecer apoio psicológico para pessoas em situação de vulnerabilidade." link="/social/4"/>
                <Article title="Programa E" imgsrc="https://fastly.picsum.photos/id/163/200/200.jpg?hmac=mEG0MVDQnbY2PIFVIxZKgINnXrapgb5G5S1QMtMTt98" descriptions="Ele se concentra em fornecer moradia para pessoas em situação de rua." link="/social/5"/>
                <Article title="Programa F" imgsrc="https://fastly.picsum.photos/id/477/200/200.jpg?hmac=pGA68LBET23UPGB7L8xL1pA7PYT_x7JazGX__CnlliU" descriptions="Ele se concentra em fornecer acesso à cultura e esportes para jovens carentes." link="/social/6"/>
            </div>
        </section>
    );
};
export default Social