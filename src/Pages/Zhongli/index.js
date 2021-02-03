import React from 'react';
import Sidebar from '../../Design/Organism/Sidebar'
import Zhongligi from './zhongligi.jpg'

export default function Zhongli() {
  return (
    <>
      <Sidebar />
        <div id="home">
            <h1>Zhongli : The Lord Geo</h1>
            <img src={Zhongligi} alt="Genshin" />
            <p>
                He is later revealed to be the current vessel of the Geo Archon, Morax, who has decided to experience the world from the perspective of a mortal.
                Zhongli is a calm, reserved, and polite man who knows much about Liyue's history and culture in part due to his time as the Geo Archon. 
                He holds very philosophical ideas towards money and has great respect for Liyue's traditions, including those that have been forgotten or 
                warped during the passage of time. Despite his wealth of information, Zhongli tends to be humble and even seems somewhat insecure about being a, 
                as he puts it, "bourgeois parasite."
            </p>
            <p>
                One of Zhongli's most defining characteristics is his tendency to forget about Mora in transactions, agreeing to spend large sums of it without 
                having any Mora on hand and even taking "discounts" as granted despite being an obvious scam.[4] He often ends up relying on others or the 
                Wangsheng Funeral Parlor as financial support. It is later revealed that Zhongli's carelessness stems from the fact as he was the sole creator 
                of Mora as the Geo Archon by using his Gnosis, so he never had to worry about running low on his personal finances as a god. Unfortunately, 
                when he chose to live among mortals, he lacked the foresight to find an alternative for mortals to continue minting Mora in his absence, along 
                with creating a retirement fund for himself.
            </p>
        </div>
    </>
  )
}