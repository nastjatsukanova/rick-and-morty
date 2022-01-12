import '../Item/Item.styles.css'
import { Link } from 'react-router-dom'
import { About } from '../About/About'
import { ROUTES } from '../routes/constants'

export const Item = (props) => {
    console.log(props)
    return (
        <div className='item'>
            {props.image && <img className='itemImage' src={props.image} alt='' width={220} height={220} />}
            <p className='header'>{props.name}</p>

            <Link
                to={{
                    pathname: ROUTES.About,
                    propsSearch: About,

                }}
                state={{
                    item: {
                        name: props.name,
                        status: props.status || props.air_date || props.type,
                        species: props.species || props.episode || props.dimension,
                        image: props.image,
                        origin: props.origin,
                        gender: props.gender,
                        created: props.created,
                    }
                }}
            >
                About
            </Link>
        </div>
    )
}