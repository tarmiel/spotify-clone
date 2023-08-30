import React, { FC } from 'react';

import { GenreList } from '@/entities/Genre';

const SearchPage: FC = () => {
  return (
    <section style={{ minHeight: '300px' }}>
      <GenreList title={'Browse All'} />
    </section>
  );
};

export default SearchPage;
