import React from 'react';
import ListBar from '../../Molecule/ListBar'

export default function Sidebar() {
  return (
    <div>
      <input type="checkbox" id="check" />
      <label for="check">
        <i className="fas fa-bars" id="btn"></i>
        <i className="fas fa-times" id="cancel"></i>
      </label>
      <div className="sidebar">
        <ListBar>My Genshin</ListBar>
      </div>
    </div>
  )
}