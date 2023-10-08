import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.css';
import classNames from 'classnames/bind';

// const cx = classNames.bind(styles);

const Image = forwardRef(({ src, alt, fallback: customFallback = images.noImage, ...props }, ref) => {
  const [fallback, setFallback] = useState('');

  const handleError = () => {
    setFallback(customFallback);
  };

  return (
    <img
      className={(styles.wrapper, classNames)}
      ref={ref}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
});

export default Image;
