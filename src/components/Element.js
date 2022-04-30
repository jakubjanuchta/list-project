import {useState } from 'react'
import List from './List'

const Element = ({data, multiple, oneOpened, setOneOpened}) => {
    const [isOpen, setIsOpen] = useState(false)
    const {name, description,subunits} = data

    const changeElementState = ()=>{
        if(oneOpened && !isOpen && !multiple){
            alert("Wybrana lista jest jednokrotnego wyboru.\nZwiń poprzednią gałąź aby rozwinąć kolejną.")
        }else if(!oneOpened || isOpen || multiple){
            setIsOpen(prev=>!prev)
            setOneOpened(prev => !prev)
        }
    }

    const iconTypeClass = multiple ? "multiple" : "single";
    const iconOpenClass = isOpen ? "opened" : "closed";

    const iconClasses = `elementIcon ${iconTypeClass} ${iconOpenClass}`;


    return (
        <li className="item">
            <div className="item__wrapper" onClick={()=>{changeElementState()}}>
                {subunits? <span className={iconClasses}></span> : null} 
                <div className="item__wrapper__content">
                    <h4>{name}</h4> 
                    {description? <p>{description}</p>: null}
                </div>
            </div>
    
            {subunits ? <List data={subunits} ifOpened={isOpen}/> : null}
        </li> 
    );
}

export default Element;
