import './Input.styles.css'

export const Input = ({value, handleChange}) => {
    return (
        <input className='input' value={value} onChange={handleChange} />
    )
}