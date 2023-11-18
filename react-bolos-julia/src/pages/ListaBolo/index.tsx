//estilização
import "./style.css";

//componentes
import CardBolo from "../../components/CardBolo";

//api
import api from "../../utils/api";

//hooks
import { useEffect, useState } from "react";

function ListaBolo() {

    const [bolos, setBolos] = useState<any[]>([]);

    function listarBolos() {

        //http://localhost:3000/bolos

        api.get("bolos")
            .then((response) => {

                setBolos(response.data);

                console.log(response.data);

            })
            .catch((error) => {

                console.log(error);
            }
            )
    }

    // useEffect e acionado quando o componente e iniciado e modificacao

    useEffect(() => {
        listarBolos();
    }, [
        /* monitora*/

    ]);

    return (
        <main>
            <section className="lista container">
                <h1>Lista de Bolos</h1>

                {/* CARDBOLO */}
                {
                    bolos.map((bolo:any,index:number)=>{
                        return <CardBolo
                        key={index}
                        nome={bolo.nome}
                        foto ={bolo.user_img}
                        ingrediente={bolo.ingrediente}
                        cobertura={bolo.cobertura}
                        valor={bolo.valor}
                        />

                    })
                }

            </section>
        </main>
    );
};

export default ListaBolo;