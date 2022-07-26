export async function GET({params}: any) {
    const id = params.id;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();

    return {
        status: 200,
        body: pokemon
    }
}