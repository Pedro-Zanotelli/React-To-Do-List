import { useState } from "react";
import logo from "../images/logo.png";
import ListaTarefas from "./ListaTarefas";
import AdicionarTarefas from "./AdicionarTarefas";

export default function ToDoMain() {
    const [tarefas, setTarefas] = useState(["1 - Escreva a tarefa", "2 - Marque ou desmarque como concluída"]);

    return (
        <div className="conteudo">
            <img src={logo} alt="logo" />
            
            <AdicionarTarefas tarefas={tarefas} setTarefas={setTarefas}/>
            
            <ListaTarefas tarefas={tarefas}/>
        </div>
    )
}
