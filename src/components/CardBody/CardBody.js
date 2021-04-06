import { Button } from '../Button/Button'
import { Icon } from '@iconify/react'
import checkCircleOutlined from '@iconify/icons-ant-design/check-circle-outlined'

export const CardBody = ({ productInfo }) => {
  return (
    <div className="card__description">
      {productInfo.map((productText) => {
        return (
          <div className="card__text" key={productText}>
            <Icon icon={checkCircleOutlined} style={{ fontSize: '2rem' }} />
            <span>{productText}</span>
          </div>
        )
      })}
      <Button text={'LEARN MORE'} />
    </div>
  )
}
