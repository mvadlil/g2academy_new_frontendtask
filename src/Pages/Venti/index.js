import React from 'react';
import Sidebar from '../../Design/Organism/Sidebar'
import Ventigi from './ventigi.jpg'

export default function Venti() {
  return (
    <>
      <Sidebar />
        <div id="home">
            <h1>Venti :  Anemo Archon</h1>
            <img src={Ventigi} alt="Genshin" />
            <p>
                Venti is one of many bards in Mondstadt and the Anemo Archon Barbatos. He is also a playable Anemo character in Genshin Impact. 
                Venti is the free-spirited, wine-loving bard in Mondstadt who will share you his stories and maybe even sing for you if you buy 
                him some wine. It appears there is more than meets the eye to the half-witted bard.
            </p>
            <p>
               Venti has a somewhat recalcitrant attitude and a liking to rhyming in his speech. He sees a particular worth in music to the 
               point where he names his lyre, saying, "every being deserves a name to be called upon, and woven into a song." He is also quite bold, 
               shown many times in both the manga and the game, not fearing to insult or ignore those who are supposedly powerful. In the game, he 
               responds to Paimon's comments and nicknaming by parroting her. Venti enjoys roaming around Mondstadt playing songs to his people, most of 
               whom are unaware of his true identity as the Wind Archon. Venti is also an avid drinker of alcoholic beverages, such as Dandelion Wine and 
               has a high tolerance to alcohol. Much to his disdain, the form he takes causes most bartenders to see him as a minor, but he gets around this 
               by telling people to get drinks for him in return for his performances. He is deathly allergic to cats and will not perform unless he is 
               certain there are no cats nearby.
            </p>
        </div>
    </>
  )
}