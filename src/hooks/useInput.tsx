import React, { useState } from 'react';

interface IProps {
  initValue: any;
  validator: (value: string) => boolean;
  handleEvent: () => void;
}

function useInput({ initValue = '', validator, handleEvent }: IProps) {
  const [value, setValue] = useState(initValue);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target.dataset;

    if (typeof validator === 'function' && validator(value as string)) {
      setValue(value);
      handleEvent();
    }
  };

  return { value, onChange };
}
export default useInput;
