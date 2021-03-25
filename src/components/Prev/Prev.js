import React, { useContext } from 'react';
import styles from '../Player/player.module.scss';
import Context from '../../context/context';
import image from '../../icons/1.svg';

function Prev(props) {
  const { minusThirty } = useContext(Context);
  return (
    <>
      <button className={styles.btn} onClick={minusThirty}>
        <img src={image} alt='' />
      </button>
    </>
  );
}

export default Prev;
