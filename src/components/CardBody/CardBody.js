import { Button } from '../Button/Button'
import { Icon } from '@iconify/react'
import checkCircleOutlined from '@iconify/icons-ant-design/check-circle-outlined'

export const CardBody = ({ productInfo, productName }) => {
  return (
    <div className="card__description">
      <span className="card__title">{productName}</span>
      {productInfo.map((productText, index) => {
        return (
          <div className="card__text" key={productText}>
            <Icon icon={checkCircleOutlined} style={{ fontSize: '2rem' }} />
            <div className={`card__text__${index}`}>
              <span>{productText}</span>
            </div>
          </div>
        )
      })}
      <Button text={'learn more'} />
    </div>
  )
}
