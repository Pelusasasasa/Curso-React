import React from 'react'
import { getHerosByPublisher } from '../helpers'

export const HeroList = ({publisher}) => {

    const heroes = getHerosByPublisher(publisher);

  return (
    <ul>
        {heroes.map( hero => (
            <li key={heroes.id}>{hero.superhero}</li>
        ))}
    </ul>
  )
}
