import React from 'react'
import useUpdateEffect, { useAppSelector } from '../hooks/customHook'
import Card from './Card'
import { selectGuessNumbers, selectUsername } from './gameStateSlice'

type props = {
    playerName: string,
    cards: Array<[string, number]>
}



const PlayerContainer = ({ playerName, cards }: props) => {
    // [['gre', 1],['gre', 1],['gre', 1]]
    return (
        <div className='playerContainer'>
            <div className='playerNameContainer'>
                <div className='playerName'>{playerName}</div>
                <div className='score'>3</div>
            </div>
            <Card value={cards[0]} />
            <Card value={cards[1]} />
            <Card value={cards[2]} />
        </div>
    )
}

export default PlayerContainer