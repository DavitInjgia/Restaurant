import React from "react";
import minus from './../../../assets/icon-minus.svg'
import plus from './../../../assets/icon-plus.svg'
import './AmountBtn.css'
function AmountBtn({counter, setCounter}) {
  return (
    <div className="amount-btns">
      <img
        src={minus}
        alt="minus"
        onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}
        className="quantity-btn"
      />
      <p className="quantity">{counter}</p>
      <img
        src={plus}
        alt="plus"
        onClick={() => setCounter(counter + 1)}
        className="quantity-btn"
      />
    </div>
  );
}

export default AmountBtn;
