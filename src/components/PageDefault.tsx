import React from 'react';
import HeaderDefault from './header/HeaderDefault';
import MainDefaultStyled from './MainDefaultStyled';
import PageDefaultStyled from './PageDefaultStyled';

interface PageDefaultProps {
  children: React.ReactNode;
}

function PageDefault({ children }: PageDefaultProps) {
  return (
    <>
      <PageDefaultStyled>
        <HeaderDefault />
        <MainDefaultStyled>{children}</MainDefaultStyled>
      </PageDefaultStyled>
    </>
  );
}

export default PageDefault;
