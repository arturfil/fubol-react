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
              <div key={i} className="col-12 col-sm-6 col-md-6 col-lg-4 card-col" >
                <div className="card">
                  <h2 className="title">
                    {game.Place}
                  </h2>
                  <p className="date">
                    {(new Date(game.DateTime).toLocaleDateString())}
                  </p>
                  <p className="text">
                    Number of PLayers: {game.Players}
                    <br/>
                    Game Mode: {game.Mode}
                  </p>
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