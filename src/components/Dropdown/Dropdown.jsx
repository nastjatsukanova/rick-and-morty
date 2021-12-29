import {useDispatch} from 'react-redux';
import { filter } from '../../store/actions/filter';
import './Dropdown.styles.css'

export const Dropdown = (props) => {
    const dispatch = useDispatch()
    const handleChange = (e) => {
        console.log(e.target.value)
        dispatch(filter(e.target.value))
    }
    return (
        <select className="dropdown" onChange={handleChange} >
            <option value="character" >characters</option>
            <option value="location">locations</option>
            <option value="episode">episodes</option>
        </select>
    )
}