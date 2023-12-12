import React from 'react';
import styles from './SubmitButton.module.css';

interface SubmitButtonProps {
  text: string;
  className?: string; 
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text, className }) => {
  return (
    <div>
      <button className={`${styles.btn} ${className || ''}`}>{text}</button>
    </div>
  );
};

export default SubmitButton;
