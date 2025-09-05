

import './App.css';
import { useEffect } from 'react';

 
//кнопка закрытия приложения
function App() {
  //метод инициализакии приложения
  useEffect( () => {
    tg.ready();
  },  [])
 
  //визуализация кнопки
  return (
    <div className="App">
      Работает?

    </div>
  );
}

export default App;
