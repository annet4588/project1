import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
    <li className="item" key={item.id}>
        <input 
            type="checkbox"
            onChange ={() => handleCheck(item.id)} // Corrected the event name to onChange
            checked={item.checked}
        />
        <label
            style={(item.checked) ? {textDecoration:
            'line-through'} : null}
            onDoubleClick = {() => handleCheck(item.id)}
        >  
        {item.item}</label>
        <FaTrashAlt 
            role="button" 
            tabIndex="0"
            onClick={() => handleDelete(item.id)} // Added event handler to delete item
            aria-label ={`Delete ${item.item}`}
        />
</li>
  )
}

export default LineItem