export const CardImage = ({ productName, productImages }) => {
  return (
    <div>
      <h2 className="product-title">{productName}</h2>
      <img className="product-image" src={productImages[0]} alt="Razer Viper Mini" />
    </div>
  )
}
