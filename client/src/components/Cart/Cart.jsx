import cart from '../../img/cart.svg';
import style from './cart.module.css';

export default function Cart() {
  const rent = JSON.parse(localStorage.getItem("rent")) ?? [];
  const plan = localStorage.getItem("plan");
  const contador = plan ? 1 : rent.length;

  return (
    <div className={style.container}>
      <img className={style.img} src={cart} alt="cart" />
      <span className={style.counter}>{contador}</span>
    </div>
  );
}
