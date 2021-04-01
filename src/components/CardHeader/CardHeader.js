//Title and image(s)
import { useState } from 'react'
import { Icon } from '@iconify/react'
import formPrevious from '@iconify/icons-grommet-icons/form-previous'
import formNext from '@iconify/icons-grommet-icons/form-next'

export const CardHeader = ({ productName, productImages }) => {
  const [imageIndex, setImageIndex] = useState(0)

  const checkIndex = (number) => {
    if (number > productImages.length - 1) {
      return 0
    }
    if (number < 0) {
      return productImages.length - 1
    }
    return number
  }

  const prevPicture = () => {
    setImageIndex((imageIndex) => {
      let newIndex = imageIndex - 1
      return checkIndex(newIndex)
    })
  }

  const nextPicture = () => {
    setImageIndex((imageIndex) => {
      let newIndex = imageIndex + 1
      return checkIndex(newIndex)
    })
  }

  return (
    <div className="card__header">
      <img
        className="card__image"
        src={productImages[imageIndex]}
        alt="Razer Viper Mini"
      />
      <div className="card__icons">
        <button className="btn" onClick={prevPicture}>
          <Icon icon={formPrevious} style={{ color: '#fff' }} />
        </button>
        <button className="btn" onClick={nextPicture}>
          <Icon icon={formNext} style={{ color: '#fff' }} />
        </button>
      </div>
      <h2 className="card__title">{productName}</h2>
    </div>
  )
}
