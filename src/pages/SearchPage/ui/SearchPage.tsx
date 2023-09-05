import React, { FC } from 'react';

import { GenreList } from '@/entities/Genre';

import styles from './SearchPage.module.scss';

const SearchPage: FC = () => {
  return (
    <section className={styles.SearchPage}>
      <GenreList title={'Browse All'} />
    </section>
  );
};

export default SearchPage;
