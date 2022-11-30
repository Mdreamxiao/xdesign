import React from 'react';
import { Button } from 'xidesign';

export default function Demo1() {
  const buttonStyle = { marginRight: '20px' };
  return (
    <>
      <Button type="primary" style={buttonStyle} />
      <Button type="secondary" style={buttonStyle} />
      <Button type="outline" style={buttonStyle} />
    </>
  );
}
