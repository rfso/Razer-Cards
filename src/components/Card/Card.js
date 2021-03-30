import { data } from '../../data'
import { CardInfo } from '../CardInfo/CardInfo'
import { CardImage } from '../CardImage/CardImage'
import { Button } from '../Button/Button'
import './Card.scss'
import { ReactComponent as Logo } from '../../assets/imgs/razer-logo-svg-vector.svg'

const Card = () => {
  return (
    <div className="container">
      <Logo className="logo-image" />
      <main className="product-card">
        {data.map((item) => {
          const { productInfo } = item
          return (
            <>
              <CardImage {...item} />
              <CardInfo productInfo={productInfo} />
              <Button />
            </>
          )
        })}
      </main>
    </div>
  )
}

export default Card