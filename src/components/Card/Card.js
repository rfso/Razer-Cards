import { data } from '../../data'
import { CardBody } from '../CardBody/CardBody'
import { CardHeader } from '../CardHeader/CardHeader'
import './Card.scss'

const Card = () => {
  return (
    <div className="container">
      <main className="card">
        {data.map((item) => {
          const { productInfo } = item
          return (
            <>
              <CardHeader {...item} />
              <CardBody productInfo={productInfo} />
            </>
          )
        })}
      </main>
    </div>
  )
}

export default Card
