import React from 'react'

export const HeadingLittleLemon = ({message}) => {
  return (
    <>
        <div>Heading Little Lemon</div>
        <h3>{message ? 'Drink' : 'Eat'} at Little Lemon 🍋</h3>
    </>
  )
}
