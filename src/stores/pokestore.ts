import { writable } from "svelte/store";

export let pokemons = writable([]);

const fetchPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=150&limit=150`;
    const res = await fetch(url);
    const data = await res.json();
    const loadedPokemons = data.results.map((data: any, index: number) => {
        return {
            name: data.name,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        }
    });

    pokemons.set(loadedPokemons)
}

fetchPokemon();