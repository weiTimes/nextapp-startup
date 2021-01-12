import React from 'react';

import CharacterCount from './CharacterCount';
import TextInput from './TextInput';

export interface CharacterCounterProps {
  showTitle?: boolean;
}

export default function CharacterCounter({ showTitle = true }) {
  return (
    <div>
      {showTitle && <h3>recoil 示例</h3>}
      <TextInput />
      <CharacterCount />
    </div>
  );
}
