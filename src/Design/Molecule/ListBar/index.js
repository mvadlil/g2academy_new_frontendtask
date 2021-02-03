import React from 'react';
import Itembar from '../../Atom/Itembar'
import { Link } from 'react-router-dom'

export default function ListBar({ children }) {
    return (
        <>
            <Link to="/"><header>{children}</header></Link>
            <ul>
                <Itembar path="/diluc">Diluc</Itembar>
                <Itembar path="/albedo">Albedo</Itembar>
                <Itembar path="/fischl">Fischl</Itembar>
                <Itembar path="/qiqi">Qiqi</Itembar>
                <Itembar path="/venti">Venti</Itembar>
                <Itembar path="/ganyu">Ganyu</Itembar>
                <Itembar path="/zhongli">Zhongli</Itembar>
            </ul>
        </>
    )
}