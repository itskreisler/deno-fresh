import { useState } from "preact/hooks";
/**
 * Un hook que se utiliza para almacenar datos en el almacenamiento local del navegador.
 * @param [key] - Clave.
 * @param [initialValue] - Valor (puede ser un String, Number, Boolean, Object, Array).
 * @returns Devuelve una matrix con dos elementos. El primer elemento es el valor de estado, el segundo elemento es una funcion
 * para actualizar el estado.
 * */
const useLocalStorage = (key, initialValue) => {
  // Estado para almacenar nuestro valor
  // Pasar la función de estado inicial a useState para que la lógica solo se ejecute una vez
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      // Obtenga el almacenamiento local por clave
      const item = window.localStorage.getItem(key);
      // Parceando JSON o si no devuelve InitialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Si hay una exepcion también devuelve InitialValue
      console.log(error);
      return initialValue;
    }
  });
  // Devuelve una versión envuelta de la función setter de useSestate que ...
  // ... persiste el nuevo valor a LocalStorage.
  const setValue = (value) => {
    try {
      // Permitir que el valor sea una función para que tengamos la misma API que USestate
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Guardar Estado
      setStoredValue(valueToStore);
      // Guardar en el almacenamiento local
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // Una implementación más avanzada manejaría el caso de error
      console.log(error);
    }
  };
  return [storedValue, setValue];
};

export { useLocalStorage };
