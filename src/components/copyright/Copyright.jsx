import React from 'react';
import styles from './Copyright.module.css';

function Copyright() {
  return (
    <div className={styles['copyright-container']}>
      © 2025 Dunixab. All rights reserved. 
      <br />
      {/* <a href="https://dunixab.com">dunixab.com</a> */}
    </div>
  );
}

export default Copyright;
