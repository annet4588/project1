import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import {useState} from 'react';

function App() {

  // Declare the state at the top level of the component
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "Item 1"
    },
    {
      id: 2,
      checked: false,
      item: "Item 2"
    },
    {
      id: 3,
      checked: false,
      item: "Item 3"
    }
  ]);

    // Function to handle checkbox toggling
    const handleCheck = (id) => {
      const listItems = items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
      setItems(listItems); // Update the state with the new list
      localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    };
  
    // Function to delete an item
    const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id);
      setItems(listItems); // Remove the item from the state
      localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    };

  return (
    <div className="App">
      <Header title="Todo List"/>
      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
