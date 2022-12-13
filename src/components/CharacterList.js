import CharacterCard from './CharacterCard';
import '../styles/components/CharacterList.scss';

function CharacterList({ characterData }) {
  const anyCharacter = () => {
    const characterElement = characterData.map((character) => (
      <li className="card" key={character.id}>
        <CharacterCard character={character} />
      </li>
    ));

    if (characterData.length === 0) {
      return 'Sorry, no matching character.';
    } else {
      return characterElement;
    }
  };

  return (
    <section className="list">
      <ul className="cards">{anyCharacter()}</ul>
    </section>
  );
}

export default CharacterList;