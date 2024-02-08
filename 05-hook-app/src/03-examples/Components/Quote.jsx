import React, { useLayoutEffect, useRef, useState } from 'react'

export const Quote = ({author,quote}) => {

  const pRef = useRef()
  const [boxSize, setBoxSize] = useState({width: 0, heigth: 0})

  useLayoutEffect(() => {

    const {width,heigth} = pRef.current.getBoundingClientReact();

    setBoxSize({width, heigth})
    
  }, [quote])

  return (
    <blockquote 
      className="blockquote text-end"
      style={{ display: 'flex'}}
    >
        <p ref = {pRef} className="mb-1">{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
    </blockquote>
  )
}
