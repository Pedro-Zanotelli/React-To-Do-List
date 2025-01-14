export default function Tarefa({tarefas, tarefa, terminadas, setTerminadas}) {

    function terminarTarefa(tarefa){
        const novoArray = [...terminadas, tarefa];
        setTerminadas(novoArray);

        if (tarefas.length - novoArray.length > 0) {
            alert(`Agora só faltam ${tarefas.length - novoArray.length} tarefas`)
        } else {
            alert("Você terminou tudo")
        }

        if (terminadas.includes(tarefa)){
            setTerminadas(terminadas.filter(terminada => terminada !== tarefa))
        } else {
            setTerminadas([...terminadas, tarefa]);
        }
    }

    return (
        <li className={`tarefa ${terminadas.includes(tarefa) ? "finalizada" : ""}`} onClick={() => terminarTarefa(tarefa)}>
            <ion-icon name={terminadas.includes(tarefa) ? "checkmark-circle" : "ellipse-outline"}></ion-icon>
            {tarefa}
        </li>
    );
}