import { FC } from 'react';
import { Link } from 'react-router-dom';

import { APP_ROUTES } from '@/shared/const/router';

import { useSideBarNavItems } from '../model/lib/getNavItems';

import styles from './SideBarNav.module.scss';

interface ISideBarNavProps {
  className?: string;
}

const SideBarNav: FC<ISideBarNavProps> = ({ className }) => {
  const navItems = useSideBarNavItems();

  return (
    <nav className={styles.SideBarNav}>
      <Link to={APP_ROUTES.home}>Home</Link>
      <Link to={APP_ROUTES.search}>Search</Link>
      <Link to={APP_ROUTES.artist('1')}>Artist</Link>
      <Link to={APP_ROUTES.playlist('1')}>Playlist</Link>
      <Link to={APP_ROUTES.user('1')}>User</Link>
      <Link to={APP_ROUTES.auth.login}>Login</Link>
      <Link to={APP_ROUTES.auth.register}>Register</Link>
      <Link to={APP_ROUTES.collection}>Collection</Link>
      <Link to={APP_ROUTES.preferences}>Preferences</Link>
    </nav>
  );
};

export default SideBarNav;
