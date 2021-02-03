import React from 'react';
import Sidebar from '../../Design/Organism/Sidebar'
import Ganyugi from './ganyugi.jpg'

export default function Ganyu() {
  return (
    <>
      <Sidebar />
        <div id="home">
            <h1>Ganyu : Half Adeptus</h1>
            <img src={Ganyugi} alt="Genshin" />
            <p>
                In part due to her half-qilin heritage, Ganyu is usually very quiet and reserved. Both Xiangling and her father 
                note that whenever she visits Wanmin Restaurant, she always eats vegetarian dishes by herself and in small quantities.
                She also completes whatever is given to her, whether it be tasks or food, even if she is reluctant to do so.
            </p>
            <p>
                Ganyu's duties with the Qixing often have her do considerable work compared to other members, but the load does not faze her. 
                She gets along well with her fellow co-workers, who look up to her; likewise, she cares for her juniors and offers her knowledge 
                to help them with any problem they might have. The massive amount of work Ganyu deals with often leaves her very little free time, 
                and she has very few friends outside of work.
            </p>
        </div>
    </>
  )
}