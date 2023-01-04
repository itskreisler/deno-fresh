import { useContext, useState } from "preact/hooks";
import { createContext, ComponentChildren } from "preact";

export const AppContext = createContext({});



const TagAppContext = (props) => {
  const [myAnimes, setMyAnimes] = useState([]);
  return (
    <AppContext.Provider
      value={{ myApp: { myAnimes, setMyAnimes }, someValue: "hello" }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
export default TagAppContext