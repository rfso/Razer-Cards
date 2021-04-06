import { data } from '../../data'
import React from 'react'
import { CardBody } from '../CardBody/CardBody'
import { CardHeader } from '../CardHeader/CardHeader'
import './Card.scss'

const Card = () => {
  return (
    <div className="container">
      <main className="card">
        {data.map((item) => {
          const { productInfo} = item
          return (
            <React.Fragment key={productInfo}>
              <CardHeader {...item} />
              <CardBody productInfo={productInfo} />
            </React.Fragment>
          )
        })}
      </main>
    </div>
  )
}

export default Card
