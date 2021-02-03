import React from 'react';
import Sidebar from '../../../Design/Organism/Sidebar'
import Dilucttalentgi from './diluctalents.png'

export default function DilucTalent() {
  return (
    <>
      <Sidebar />
        <div id="home">
            <h1>Diluc Talents</h1>
            <img src={Dilucttalentgi} alt="Genshin" id="diluctalent" />
            <p>
                Diluc Ragnvindr is a playable Pyro character in Genshin Impact.
                Born into the affluent Ragnvindr Family, Diluc is the current owner of the Dawn Winery and a nobleman of 
                high esteem in Mondstadt society. While a past incident caused him to split ways with the Knights of Favonius, 
                he continues to protect Mondstadt in his own way.
            </p>
            <p>
                Kaeya calls himself and Diluc "anti-heroes with attitude problems." Diluc was once a confident and passionate young man, 
                dedicated to his work with the Knights of Favonius. But after his father's untimely death, Diluc grew aloof, bitter, and distant. 
                He dislikes wasting time on idle talk and can easily grow impatient.
                Diluc holds a particular resentment towards the Knights of Favonius, 
                whom he calls "inefficient" and snubs at every opportunity. This bitterness stems from Inspector Eroch's handling of 
                his father's death, and Diluc has not lessened his bitterness even after Eroch was discharged from the Knights as a traitor. 
                He believes that the Knights' ineptitude means poses a danger to the city, and therefore decided to defend the city himself as a vigilante. 
                Despite his animosity towards most of the knights, he believes that a few show potential.
                He dislikes alcohol, claiming that the taste doesn't suit him.
            </p>
        </div>
    </>
  )
}