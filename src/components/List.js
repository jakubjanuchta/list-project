import {useState } from 'react'
import Element from './Element'

const List = ({data, ifOpened}) => {
    const [oneOpened, setOneOpened] = useState(false)
    const {type, list} = data

    const listElements = list.map(singleElement =>{
        return(<Element key={singleElement.id} data={singleElement} multiple={type==="multiple"} 
        oneOpened={oneOpened} setOneOpened={setOneOpened}/>)
    })

    const listClassName = ifOpened ? 'listOpened': 'listClosed';
    
    return (
        <ul className={listClassName} >
            {listElements}
        </ul>
    );
}

export default List;
