import './Button.styles.css'

export const Button = ({text,handleClick}) =>{
    return (
        <button className='button' onClick={handleClick} >{text}</button>
    )
}