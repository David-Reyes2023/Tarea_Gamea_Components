import Header from './components/Header.jsx';
import CoreGames from './components/CoreGames.jsx';
import { CORE_GAMES } from './data';

function App() {
  return (
    <div>
      <Header />
      
      <main>
        
        <h2>Time to get Started!</h2>
        
        <section id="core-concepts">

          <h2>Core Games</h2>

          <ul>
            
            <CoreGames
            image={CORE_GAMES[0].image}
            title={CORE_GAMES[0].title}
            descrition={CORE_GAMES[0].description}
            />
            
            <CoreGames 
            {... CORE_GAMES[1]}
            />
            
            <CoreGames 
            {... CORE_GAMES[2]}
            />
            
            <CoreGames
            image={CORE_GAMES[3].image}
            title={CORE_GAMES[3].title}
            description={GAMES[3].description}
            />
          
          </ul>

        </section>

      </main>

    </div>
  );
}

export default App;