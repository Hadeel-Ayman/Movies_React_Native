import React, {useState, createContext, Children} from 'react';

const Context = createContext();
const ContextApp = () => {
  const [favorite, setFavorite] = useState(false);
  return (
    <Context.Provider value={{favorite, setFavorite}}>
      {Children}
    </Context.Provider>
  );
};

export default ContextApp;
