import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Todolist from './Todolist';
import Addtask from './Addtask';
import Todoitem from './Todoitem';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import taskReducer from './taskReducer';
import {persistStore , persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  //const store = createStore(taskReducer)  

  const persistConfig ={
    key : 'root',
    storage
  }


  const persistedReducer = persistReducer(persistConfig , taskReducer)
  const store = createStore(persistedReducer)
  const persistor = persistStore(store)

    return (
        <div className="App">

        
          
          <Provider store = {store} >

                <PersistGate persistor= {persistor}>

                          <Navbar/>

                          <Addtask/>

                          <Todolist/>
                
                </PersistGate>

          </Provider>

        </div>
  );
}

export default App;
