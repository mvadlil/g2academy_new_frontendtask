import React from 'react'
import Sidebar from '../../Design/Organism/Sidebar'
import Genshin from './gi.jpg';
import "../index.css"

export default function Home() {
  return (
    <>
        <Sidebar />
        <div id="home">
            <h1>Home : Genshin Impact</h1>
            <img src={Genshin} alt="Genshin" />
            <p>
                Genshin Impact is an open-world action role-playing game developed and published by miHoYo. 
                The game features a fantasy open-world environment and action-based battle system using elemental 
                magic and character-switching, and uses gacha game monetization for players to obtain new characters, 
                weapons, and other resources. The game is online-only and features a limited multiplayer mode allowing 
                up to four players to play together. It was released for Microsoft Windows, PlayStation 4, Android and iOS on 
                September 28, 2020. Genshin Impact is also planned to release on Nintendo Switch and PlayStation 5; PlayStation 
                5 backward compatibility with the PlayStation 4 version was added on November 11, 2020. Genshin Impact takes place 
                in the fantasy world of Teyvat, which is home to seven distinct nations, each of which is tied to an element and ruled 
                by a god associated with it. The story follows a twin, referred to as the Traveler, who has traveled across many worlds 
                with their twin but has become separated from them by an unknown god in Teyvat. The Traveler travels across Teyvat in 
                search of the lost sibling with their companion Paimon and becomes involved in the affairs of the other nations, gods, 
                and the world. The game received a generally positive reception, with critics praising the combat and open-world freedom, 
                while some criticism was raised at its endgame content and monetization. The game grossed over $393 million on mobile devices within two months.
            </p>
        </div>
    </>
  )
}