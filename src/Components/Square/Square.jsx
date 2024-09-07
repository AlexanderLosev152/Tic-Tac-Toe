import styles from './Square.module.scss';

const Square = ({value , onSquareClick}) =>{
  return <button className={styles.square} onClick={onSquareClick}>{ value }</button>
}

export default Square;