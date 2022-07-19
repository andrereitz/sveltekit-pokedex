<script lang="typescript">
    import { pokemons } from "../stores/pokestore";
    import PokemonCard from '../components/pokemonCard.svelte';
    $: console.log($pokemons);

    let searchTerm = "";
    let filteredPokemon: Pokemon[] = [];

    $: {
        console.log(searchTerm)
        if(searchTerm) {
            filteredPokemon = $pokemons.filter((pokemon: Pokemon) => pokemon.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
        } else {
            filteredPokemon = [...$pokemons];
        }
    }
</script>
<svelte:head>
    <title>This is a test sveltekit app</title>
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">SvelteKit test project</h1>

<input class="w-full rounded-md text-lg p-4 border-2 border-gray-200" bind:value={searchTerm} type="text" placeholder="Search Polemon" />

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
    {#each filteredPokemon as pokemon}
        <PokemonCard pokemon={pokemon} />
    {/each}
</div>