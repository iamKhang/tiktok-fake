import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ac0da6bd44945bd1ba62f05b6555e137~c5_100x100.jpeg?x-expires=1694872800&x-signature=sreeKGxAi2GbBL5CuLGuKlNkrjk%3D"
        alt="Hoaa"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Huỳnh Phạm Thủy Tiên</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>ahauthuytien</span>
      </div>
    </div>
  );
}

export default AccountItem;
