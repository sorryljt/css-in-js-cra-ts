import { useState } from 'react';
import { darkTheme, lightTheme, essay } from './style.css'

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return (
    <>
      <div className={isDarkTheme ? darkTheme : lightTheme}>
        <p className={essay}>css in js</p>
      </div>
      <button
        type="button"
        onClick={() => setIsDarkTheme((currentValue) => !currentValue)}
       >
         切换 {isDarkTheme ? 'light' : 'dark'} 主题
       </button>
    </>
  );
};

export default App;
