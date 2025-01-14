import { useState } from "react";

export default function AdicionarTarefas({tarefas, setTarefas}) {
    const [textoTarefa, setTextoTarefa] = useState("")
    
    function adicionarTarefa(){
        if (textoTarefa){
            const novasTarefas = [...tarefas, textoTarefa];
            setTarefas(novasTarefas);
            setTextoTarefa("")
        }
    } 

    function salvarTexto(event) {
        setTextoTarefa(event.target.value);
    }

    return (  
        <div className="adicionar-tarefa">
            <input 
                type="text" 
                placeholder="digite sua tarefa..." 
                onChange={salvarTexto} 
                value={textoTarefa}
            />
            <button onClick={adicionarTarefa} className="botao-adicionar">+</button>
        </div>
    );
}