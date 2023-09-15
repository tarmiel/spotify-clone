import React, { FC } from 'react';

import { GenreList } from '@/entities/Genre';

import styles from './SearchPage.module.scss';

const SearchPage: FC = () => {
  // const { isLoading, refetch } = useTestQuery('');
  return (
    <section className={styles.SearchPage}>
      {/* <button onClick={refetch}>refetch</button> */}
      <GenreList title={'Browse All'} />
    </section>
  );
};

export default SearchPage;
