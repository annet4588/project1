import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import {useState} from 'react';

function App() {

  // Declare the state at the top level of the component
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('');


  const setAndSaveItem = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item};
    const listItems = [...items, myNewItem];
    setAndSaveItem(listItems);
  }

    // Function to handle checkbox toggling
    const handleCheck = (id) => {
      const listItems = items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
      setAndSaveItem(listItems); // Update the state with the new list
      
    };
  
    // Function to delete an item
    const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id);
      setAndSaveItem(listItems); // Remove the item from the state
      
    };

    const handleSubmit = (e) => {
       e.preventDefault();
       if(!newItem)return;
       addItem(newItem);
       setNewItem('');
    }

  return (
    <div className="App">
      <Header title="Todo List"/>
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem 
        search={search}
        setSearch={setSearch}
      />
      <Content 
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
