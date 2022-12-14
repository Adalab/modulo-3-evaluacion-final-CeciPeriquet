import CharacterCard from './CharacterCard';
import NotFound from './NotFound';
import PropTypes from 'prop-types';
import '../styles/components/CharacterList.scss';

function CharacterList({ characterData }) {
  const anyCharacter = () => {
    const characterElement = characterData.map((character) => (
      <li className="card-container" key={character.id}>
        <CharacterCard character={character} />
      </li>
    ));

    if (characterData.length === 0) {
      return (
        <NotFound errorMessage={'It seems no character matches your search.'} />
      );
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
CharacterList.propTypes = {
  characterData: PropTypes.array.isRequired,
};

export default CharacterList;
