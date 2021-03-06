import { useState } from 'react'
import { Icon } from '@iconify/react'
import formPrevious from '@iconify/icons-grommet-icons/form-previous'
import formNext from '@iconify/icons-grommet-icons/form-next'

export const CardHeader = ({ productName, productImages }) => {
  const [imageIndex, setImageIndex] = useState(0)

  const checkIndex = (index) => {
    if (index > productImages.length - 1) {
      return 0
    }
    if (index < 0) {
      return productImages.length - 1
    }
    return index
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
    <header className="card__header">
      <img
        className="card__image"
        src={productImages[imageIndex]}
        alt={productName}
      />
      <div className="card__icons">
        <button className="btn" onClick={prevPicture}>
          <Icon icon={formPrevious} style={{ color: '#fff' }} />
        </button>
        <button className="btn" onClick={nextPicture}>
          <Icon icon={formNext} style={{ color: '#fff' }} />
        </button>
      </div>
    </header>
  )
}
