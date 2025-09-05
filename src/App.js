

import './App.css';
import {useEffect} from 'react';
import {useTelegram} from './hooks/useTelegram';


 
//кнопка закрытия приложения
function App() {
  const {onToggleButton, tg} = useTelegram();
  //метод инициализакии приложения
  useEffect( () => {
    tg.ready();
  },  [])
 
  //визуализация кнопки
  return (
    <div className="App">
      <button onClick={onToggleButton}>toggle</button>

    </div>
  );
}

export default App;
