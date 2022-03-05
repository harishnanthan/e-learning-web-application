import './_single_item.scss'
import Down from "@material-ui/icons/ExpandMore"

export default function SingleItem(props) {
    return (
        <div className='singleItem'>
            <div>
                <Down />
                {props.name}</div>
            <div className='flex_last'>
                <div>{props.lectures} Lectures</div>
                {props.time}mins
            </div>
        </div>
    )
}