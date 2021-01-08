import React from 'react';
import { useRecoilValue } from 'recoil';

import { charCountState } from '../../../model/home';

export default function CharacterCounter() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}
