import { Button } from '../Button/Button'
import { Icon } from '@iconify/react'
import checkCircleOutlined from '@iconify/icons-ant-design/check-circle-outlined'

export const CardBody = ({ productInfo }) => {
  return (
    <div className="card__description">
      {productInfo.map((product, index) => {
        return (
          <>
            <div className="card__text">
              <Icon icon={checkCircleOutlined} style={{ fontSize: '2rem' }} />
              <span>{product}</span>
            </div>
          </>
        )
      })}
      <Button text={'LEARN MORE'} />
    </div>
  )
}
