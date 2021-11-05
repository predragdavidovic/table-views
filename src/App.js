import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import ContentBox from './components/ContentBox';
import ModalDialog from './components/Modal';
import Loader from './components/Loader';
import './App.scss';

function App() {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch('https://6033c4d8843b15001793194e.mockapi.io/api/locations')
    .then(response => response.json())
    .then(items => {
      const updatedItems = items.map(item => ({...item, view: 0}));
      setItems(updatedItems);
    })
    .catch(err => console.error('Error occured: ', err));
    }, []);
  

  return (
    <div className="App">
      <Header/>
      <div className="App_content">
        <ModalDialog isOpen={isOpen} setIsOpen={setIsOpen} currentItem={currentItem}/>
      {
        !items.length ?
          <Loader/> : 
          items.map(item => 
            <ContentBox
              key={item.id}
              id={item.id}
              name={item.name}
              view={item.view}
              userCount={item.userCount}
              createdAt={item.createdAt}
              items={items}
              setIsOpen={setIsOpen}
              setCurrentItem={setCurrentItem}
              currentItem={currentItem}
              isOpen={isOpen}
              setItems={setItems}
            />)
      }
      </div>
    </div>
  );
}

export default App;
