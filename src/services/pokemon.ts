import { useEffect, useState } from "react";
import axios from "axios";

export default function PokemonApi() {
    console.log("Entró")
  const [num, setNum] = useState<number>(1);
  const [moves, setMoves] = useState();
  const [name, setName] = useState();

    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      setName(res.data.forms[0].name);
      setMoves(res.data.moves.length);
    }
    getData();

  console.log(moves)

}
