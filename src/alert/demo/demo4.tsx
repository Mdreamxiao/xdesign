import React from 'react';
import { Alert } from 'xidesign';
export default function Demo1() {
  const wrapStyle = { width: '50%' };

  return (
    <div style={wrapStyle}>
      <Alert className="red" message="i am a message" />
      <Alert
        className="red"
        type="info"
        message="i am a message"
        showIcon={false}
      />
      <Alert
        className="red"
        type="success"
        message="i am a message"
        showIcon={false}
      />
      <Alert
        className="red"
        type="warning"
        message="i am a message"
        showIcon={false}
      />
      <Alert
        className="red"
        type="error"
        message="i am a message"
        showIcon={false}
      />
    </div>
  );
}
