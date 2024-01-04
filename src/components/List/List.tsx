import React from "react";
import "./List.css";

type ListProps = {
    items?: {
        text: string;
        checked: boolean;
        action: () =>void; 
    }[]
    
}
const List = ({items}: ListProps) => {

return (
<nav className="background background-blue">
        <div style={{display:"flex",paddingTop:20,paddingBottom: 20, flexDirection:"column",}}>
            <fieldset>
                <input id="list_item" type="text" placeholder="Write to add to the list"></input>
            </fieldset>
        </div>
    <div className="navbar-content">
   <div style={{display:"flex",paddingTop:20,paddingBottom: 20, flexDirection:"row",}}>
        {items?.map(item => 
            item.checked === true ?
            <li style={{backgroundColor:"green"}} onClick={item.action}>
                {item.text}
                <input type="checkbox" id="horns" name="horns"></input>
            </li>
            :
            <li style={{backgroundColor:"red"}} onClick={item.action}>
                {item.text}
                <input type="checkbox" id="horns" name="horns"></input>
            </li>
        )}
     
    </div>
    </div>
</nav>
)

}

export default List;