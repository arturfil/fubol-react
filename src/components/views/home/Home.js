import React, {useEffect, useState} from 'react';
import Navigation from '../../functional/navigation/Navigation';
import {getGames} from '../../../services/apiGames';

import './Home.css';

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames();
  },[])

  const fetchGames = () => {
    getGames().then(json => {
      if (json.error) {
        console.log("error");
      } else {
        setGames(json.data);
      }
    })
  }

  return (
    <>
      <Navigation/>
      <h1 style={{textAlign: "center"}} className="my-5">Home</h1>
      <div className="container">
        <div className="row cards-cont">
          { games && games.map((game, i) => (
              <div key={i} className="col-4  card-col" >
                <div className="card">
                  {game.Place}
                  {game.DateTime}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Home;