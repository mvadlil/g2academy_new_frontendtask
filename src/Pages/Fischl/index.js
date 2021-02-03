import React from 'react';
import Sidebar from '../../Design/Organism/Sidebar'
import Fischlgi from './fischlgi.jpg'

export default function Fischl() {
  return (
    <>
      <Sidebar />
        <div id="home">
            <h1>Fischl</h1>
            <img src={Fischlgi} alt="Genshin" />
            <p>
                Fischl is an investigator for Mondstadt's Adventurers' Guild, accompanied by the night raven Oz. 
                Fischl claims to hail from a world beyond Teyvat. She is a daring adventurer with seemly outlandish 
                theories that happen to turn out to be true.
            </p>
            <p>
                Due to her upbringing as a child, Fischl is obsessed with fantasy stories and roleplays as a benevolent princess. 
                Her speaking manner can confuse those unfamiliar with her, which results in Oz having to translate to whoever she is 
                speaking with to understand what she means. She is used to talking this way that even casual conversations confuses them just as much. 
                Most people generally shun her for her childish behavior, making Fischl upset, but it does not dismay her. 
                She really appreciates company that is willing to go along with her roleplaying, as she has very few friends.
            </p>
        </div>
    </>
  )
}