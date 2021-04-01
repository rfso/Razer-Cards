import '../Button/Button.scss'

export const Button = ({ text }) => {
  return (
    <>
      <a href="https://github.com/rfso/Razer-Cards" className="card__button"  target="_blank" rel="noreferrer">
        {text}
      </a>
    </>
  )
}
