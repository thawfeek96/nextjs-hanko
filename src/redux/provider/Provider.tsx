'use client'

import React, { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import reduxStore from '../store';

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = (props) => {
  return <Provider store={reduxStore}>{props.children}</Provider>;
}

export default Providers;