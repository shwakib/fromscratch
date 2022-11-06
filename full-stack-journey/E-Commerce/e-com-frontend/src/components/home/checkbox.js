import { useEffect, useState } from "react";

const Checkbox = ({ categories }) => {
    const [checked, setChecked] = useState([]);
    const checkedIds = [...checked];

    const handleToggle = id => () => {
        const foundId = checked.indexOf(id);
        if (foundId === -1) {
            checkedIds.push(id);
        } else {
            checkedIds.splice(foundId, 1);
        }
        setChecked(checkedIds);
    }

    useEffect(() => {
        alert(JSON.stringify(checked))
    }, [checked])

    return categories.map(category => (
        <li className="list-unstyled" key={category._id}>
            <input type="checkbox" className="form-check-input" onChange={handleToggle(category._id)} value={checked.indexOf(category._id === -1)} />
            <label className="form-check-label">{category.name}</label>
        </li>
    ))
}

export default Checkbox;