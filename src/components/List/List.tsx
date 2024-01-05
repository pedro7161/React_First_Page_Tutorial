import React, { useState } from 'react';
import './List.css';
type ListProps = {
    items?: {
        text: string;
        checked: boolean;
        action: () => void;
    }[];
};

const List = ({ items }: ListProps) => {
    const [listItems, setListItems] = useState(items || []);

    const addItem = () => {
        const inputValue = (document.getElementById("list_item") as HTMLInputElement)?.value;
        if (inputValue) {
            const newItem = { text: inputValue, checked: false, action: () => {} };
            setListItems([...listItems, newItem]);
            console.log(listItems);
        }
    };

    const updateItem = (index: number) => {
        const newItems = [...listItems];
        newItems[index].checked = !newItems[index].checked;
        setListItems(newItems);
    };

    return (
        <nav className="list_background background-blue">
            <div style={{ display: "flex", paddingTop: 20, paddingBottom: 20, flexDirection: "column" }}>
                <fieldset>
                    <input id="list_item" type="text" placeholder="Write to add to the list"></input>
                    <button id="add_button" type="button" onClick={addItem}>
                        Add
                    </button>
                </fieldset>
            </div>

            <div className="navbar-content">
                <div style={{ display: "flex", paddingTop: 20, paddingBottom: 20, flexDirection: "row" }}>
                    {listItems.map((item, index) =>
                        item.checked === true ? (
                            <li style={{ backgroundColor: "green" }} onClick={item.action}>
                                {item.text}
                                <input
                                    type="checkbox"
                                    id="horns"
                                    name="horns"
                                    checked={item.checked}
                                    onChange={() => updateItem(index)}
                                ></input>
                            </li>
                        ) : (
                            <li style={{ backgroundColor: "red" }} onClick={item.action}>
                                {item.text}
                                <input
                                    type="checkbox"
                                    id="horns"
                                    name="horns"
                                    checked={item.checked}
                                    onChange={() => updateItem(index)}
                                ></input>
                            </li>
                        )
                    )}
                </div>
            </div>
        </nav>
    );
};

export default List;