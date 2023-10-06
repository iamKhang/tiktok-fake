import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  small = false,
  large = false,
  disabled = false,
  rounded = false,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
  };

  // Không hiển thị => xóa sự kiện
  if (disabled) {
    // delete props.onClick;
    //Hoặc
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on' && typeof props[key] === 'function')) {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else {
    props.href = href;
    Comp = 'a';
  }

  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    text,
    small,
    large,
    disabled,
    rounded,
  });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('leftIcon')}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className={cx('rightIcon')}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
