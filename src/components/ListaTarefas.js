import { useState } from "react";
import Tarefa from "./Tarefa";

export default function ListaTarefas({tarefas}) {

    const [terminadas, setTerminadas] = useState([]);

    return (
        <ul className="lista-tarefas">
            {tarefas.map((tarefa, i) => (<Tarefa key={i} tarefas={tarefas} tarefa={tarefa} terminadas={terminadas} setTerminadas={setTerminadas} />))}
        </ul>
    );
}