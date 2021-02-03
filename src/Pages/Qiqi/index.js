import React from 'react';
import Sidebar from '../../Design/Organism/Sidebar'
import Qiqigi from './qiqigi.jpg'

export default function Qiqi() {
  return (
    <>
      <Sidebar />
        <div id="home">
            <h1>Qiqi :  A zombie by the adepti</h1>
            <img src={Qiqigi} alt="Genshin" />
            <p>
                An apprentice and herb gatherer at Bubu Pharmacy. "Blessed" by the adepti with a body that cannot die, 
                this petite zombie cannot do anything without first giving herself orders to do it. Qiqi's memory is like a sieve. 
                Out of necessity, she always carries around a notebook in which she writes anything important that she is sure to forget later. 
                But on her worst days, she even forgets to look at her notebook.
            </p>
            <p>
               Qiqi has a quiet, yet polite demeanor when dealing with customers at the pharmacy. As a zombie, Qiqi has trouble remembering what she needs to do, 
               requiring orders to perform her tasks. She is shown to be quite intelligent in this regard, such as issuing orders to herself rather than having others do it for her, 
               having a notebook in which to remind herself if she forgets, and even strides to improve herself so she becomes less forgetful.
            </p>
        </div>
    </>
  )
}