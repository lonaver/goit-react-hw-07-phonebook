import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import styles from './Filter.module.css';
import stylesApp from '../../components/App.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    const filter = e.currentTarget.value;
    dispatch(setFilter(filter));
  };

  return (
    <div className={styles.filter_wrapper}>
      <label className={stylesApp.label_input}>
        Filter
        <input className={stylesApp.field} type="text" onChange={onChange} />
      </label>
    </div>
  );
};
export default Filter;
