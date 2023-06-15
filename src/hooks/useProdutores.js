import { useState, useEffect } from "react";

import { carregaProdutores } from "../servicos/carregaDados";

export default function useProdutores() {

    const [titulo, setTitulo] = useState("");
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const retorno = carregaProdutores();

        // ordena lista por distancia
        retorno.lista.sort(
          (produtor1, produtor2) => produtor1.distancia - produtor2.distancia,
      );

        setTitulo(retorno.titulo);
        setLista(retorno.lista);
      }, []);

    return [titulo, lista];
}