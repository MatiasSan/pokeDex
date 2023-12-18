import badgesKanto from '../assets/img/badgesKanto.png';

const Home = () => {
  return (
    <>
      <section className="homeTainer">
        <h2>Bievenidos a la PokePedia</h2>
        <img className="pokemon_logo" src={badgesKanto} alt="medallas" />
      </section>
    </>
  );
};
export default Home;
