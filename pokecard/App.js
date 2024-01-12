const POKE_API = "https://raw.githubusercontent.com/" +
    "PokeAPI/sprites/master/sprites/pokemon/";

const pokemonData = [
  { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
  { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
  { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
  { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
  { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
  { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
  { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
  { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 },
];

const Pokecard = ({ id, name, type, base_experience }) => {
  const imgSrc = `${POKE_API}${id}.png`;

  return (
    <div className="Pokecard">
      <div className="Pokecard-title">{name}</div>
      <img className="Pokecard-image" src={imgSrc} alt={name} />
      <div className="Pokecard-data">Type: {type}</div>
      <div className="Pokecard-data">Base Experience: {base_experience}</div>
    </div>
  );
};

const Pokedex = ({ pokemon }) => (
  <div className="Pokedex">
    {pokemon.map(pokemon => (
      <Pokecard key={pokemon.id} {...pokemon} />
    ))}
  </div>
);

const App = () => (
  <div className="App">
    <Pokedex pokemon={pokemonData} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
