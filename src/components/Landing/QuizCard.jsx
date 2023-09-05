import React from 'react'
import './QuizCard.css'

export default function QuizCard({title, imageUrl}) {
  return (
    <div className="card">
      <div className="purple-top"></div>
      <img src={imageUrl} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
    </div>
  )
}
