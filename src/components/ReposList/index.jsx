import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(resposta => resposta.json())
            .then(respostaJson => {
                setRepos(respostaJson);
            })
    }, [nomeUsuario]);

    return (
        <div className="container">
            <ul className={styles.list}>
                {/* {repos.map(repositorio => ( */}
                {repos.map(({ id, name, language, html_url }) =>
                    // Na API do GitHub existe o ID único de cada item, que deve ser usado como chave no LI
                    <li className={styles.listItem} key={id}>
                        <div className={styles.itemName}>
                            <b>Nome .:</b>
                            {name}
                        </div>
                        <div className={styles.itemLanguage}>
                            <b>Linguagem .:</b>
                            {language}
                        </div>
                        {/* TARGET="_BLANK" faz o link abrir em outra janela */}
                        <a className={styles.itemLink} target="_blank" href={html_url}>Visite no GitHub</a>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ReposList;