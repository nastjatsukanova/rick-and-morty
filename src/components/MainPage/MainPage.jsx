import { Button } from '../Button/Button'
import { Input } from '../Input/Input';
import { Dropdown } from '../Dropdown/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { changeInputValue } from '../../store/actions/changeInputValue';
import { saveData } from '../../store/actions/saveData'
import { DataList } from '../DataList/DataList';
import { url } from '../api/urls'
import './MainPage.styles.css'

export const MainPage = (props) => {
  const dispatch = useDispatch()
  const inputValue = useSelector(state => state.inputValue)
  const filter = useSelector(state => state.filter)


  const handleChange = (e) => {
    dispatch(changeInputValue(e.target.value))
  }


  const handleClick = () => {
    (async () => {
      try {
        let response = await fetch(`${url}/api/${filter}/?name=${inputValue}`)
        let { results } = await response.json();
        dispatch(saveData(results))
      }
      catch {
        alert('Error')
      }

    })()
  }

  return (
    <div className='main'>
      <Input value={inputValue} handleChange={handleChange} />
      <Dropdown />
      <Button text={'find'} handleClick={handleClick} />
      <DataList itemsPerPage={3} />

    </div>
  )
}