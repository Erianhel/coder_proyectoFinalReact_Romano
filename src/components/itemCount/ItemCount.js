import { useState, useEffect } from "react";

function ItemCount({ stock, initial=1, onAdd }) {
  const [counter, setCounter] = useState(initial);

  useEffect(() => {
    setCounter(initial);
  }, [initial]);

  const sumar = () => {
    counter < stock && setCounter(counter + 1);
  };

  const restar = () => {
    counter > 1 && setCounter(counter - 1);
  };

  if (stock < 1) {
    return (
      <div className="text-center">
        <span>Sin stock</span>
      </div>
    );
  }

  return (
    <div>
      <button className="btn btn-success m-2" onClick={sumar}>
        Agregar
      </button>
      <span>{counter}</span>
      <button className="btn btn-danger m-2" onClick={restar}>
        Quitar
      </button>
      <button className="btn btn-primary m-2" onClick={() => onAdd(counter)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
