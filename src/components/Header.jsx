const gamesDescriptions = ['Classic', 'Epic', 'Unforgettable'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const description = gamesDescriptions[genRandomInt(2)]
    return (
      <header>
          <img src="src/assets/title_image.jpeg" alt="Stylized atom" />
          <h1>Classic Games</h1>
          <p>
            {description} games you need to play if you want to understand the beginings of nowadays titles.
          </p>
        </header>
    );
}