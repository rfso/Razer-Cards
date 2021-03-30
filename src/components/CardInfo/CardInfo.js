export const CardInfo = ({ productInfo }) => {
  const [firstInfo, secondInfo, thirdInfo, fourthInfo] = productInfo
  return (
    <div className="product-card-info">
      <p className="product-info">{firstInfo}</p>
      <p className="product-info">{secondInfo}</p>
      <p className="product-info">{thirdInfo}</p>
      <p className="product-info">{fourthInfo}</p>
    </div>
  )
}
