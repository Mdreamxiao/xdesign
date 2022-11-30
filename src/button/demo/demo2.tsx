import React from 'react';
import { Button } from 'xidesign';

export default function Demo1() {
  const buttonStyle = { marginRight: '20px' };
  return (
    <>
      <Button shape="circle" style={buttonStyle} />
      <Button shape="round" style={buttonStyle} />
      <Button shape="square" style={buttonStyle} />
      <Button shape="rectangle" style={buttonStyle} />
    </>
  );
}
