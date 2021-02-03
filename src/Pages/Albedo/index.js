import React from 'react';
import Sidebar from '../../Design/Organism/Sidebar'
import Albedogi from './albedogi.jpg'

export default function Albedo() {
  return (
    <>
      <Sidebar />
        <div id="home">
            <h1>Albedo :  The Kreideprinz</h1>
            <img src={Albedogi} alt="Genshin" />
            <p>
                Albedo, also known as the Kreideprinz, is a playable Geo character in Genshin Impact. 
                The mysterious Albedo is the Chief Alchemist and Captain of the Investigation Team of the Knights of Favonius, 
                with Sucrose as his assistant. He holds an infinite desire to learn about the world of Teyvat, carefully studying every object around him.
            </p>
            <p>
                Albedo is described as an amiable and popular figure in Mondstadt, as well as an alchemical genius. He pursues the “truth” of the world of Teyvat 
                and seems to be able to create living organisms through his alchemical talents. Albedo is also apparently good with children, and even the rambunctious Klee listens to him.
                Albedo is a talented artist and illustrates Xingqiu’s novels. He researches and studies whatever he is interested in, and his quickly 
                changing interests have given Albedo a habit of leaving his paintings unfinished.
            </p>
        </div>
    </>
  )
}