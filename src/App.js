import React, { useState, useEffect } from 'react';
import ActorSearch from './actor-search';
import FilmographyList from './filmography-list-view';

function useActorApi () {
    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [criteria, setCriteria] = useState(null);

    useEffect(() => {
        (async () => {
            if (criteria === null) return;

            setLoading(true);

            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/albums');
                const filmography = await response.json();

                const random = Math.floor(Math.random() * 15);
                let randomizedMovies = filmography.slice(0, random);
                setMovies(randomizedMovies);

                setLoading(false);
            } catch (e) {
                console.log('An error occurred ', e);
            }

        })();
    }, [criteria]);

    return [{isLoading, movies}, setCriteria];
}

function App () {
    const [{isLoading, movies}, fetchFilmography] = useActorApi();

    return (
      <div className="flex h-screen">
          <div className="m-auto w-11/12">
              <header>
                  <h1 className="text-center text-6xl p-4 text-white">Filmographer</h1>
              </header>

              <ActorSearch onSearch={fetchFilmography}/>
              {isLoading && <div>Loading...</div>}

              <FilmographyList movies={movies}/>
          </div>
      </div>
    );
}

export default App;
