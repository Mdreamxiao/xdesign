import React from 'react';
import { Button } from 'xidesign';

export default function Demo1() {
  const buttonStyle = { marginRight: '10px' };
  return (
    <>
      <Button size="small" style={buttonStyle} />
      <Button size="normal" style={buttonStyle} />
      <Button size="large" disabled />
    </>
  );
}
