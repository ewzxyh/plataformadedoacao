import React from 'react';
import styles from './Input.module.css';

interface InputProps {
    type?: string;
    text?: string;
    name?: string;
    placeholder?: string;
    handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}

const Input: React.FC<InputProps> = ({
    type,
    text,
    name,
    placeholder,
    handleOnChange,
    value,
  }) => {
    return (
      <div className={styles.form_control}>
        <label className={styles.checkbox_label}>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={handleOnChange}
            className={styles.checkbox}
          />
          {text}
        </label>
      </div>
    );
  };
  

export default Input;
