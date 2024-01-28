import { forwardRef, useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');


    // O conteúdo será executado sempre que houver uma mudança no estado
    // O [] é a lista de dependencias que limita a execução do conteúdo, 
    // onde, no caso, só será executado, quando houver uma alteração no nome.
    useEffect(() => {
        console.log('teste de mudança de estado')
    }, [nome]);

    // Mostra o conteúdo do campo que está sendo monitorado
    useEffect(() => {
        console.log('materiaA mudou para ' + materiaA)
    }, [materiaA]);

    // Mostra o conteúdo dos campos que estão sendo monitorados
    useEffect(() => {
        console.log('materiaB =' + materiaB + ' materiaC =' + materiaC)
    }, [materiaB, materiaC]);

    // [] executa apenas quando o componete for inicializado
    useEffect(() => {
        console.log('Valores iniciais =' + materiaA + ', ' + materiaB + ', ' + materiaC)

        // Executa quando o componente for encerrado/desmontado
        return () => {
            console.log('Componente finalizado');
        }
    }, []);

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            console.log(estadoAnterior);
            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>{nome}, Você foi aprovado</p>
            )
        } else {
            return (
                <p>{nome}, Você foi reprovado</p>
            )
        }
    }

    return (
        <form>
            {/* pode-se trocar o EVENTO por ({ TARGET }) e omitir o evento a seguir, fazendo assim a desestruturação */}
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({ target }) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            <br></br>
            {renderizaResultado()}

            {/* Listando array de números com MAP */}
            <ul>
                {[1, 2, 3, 5, 7, 11].map(it => (
                    // o KEY serve para possibilitar o tratamento individual pelo React, de cada elemento do array
                    <li key={it}>{it}</li>
                ))}
            </ul>
        </form>
    )
}

export default Formulario