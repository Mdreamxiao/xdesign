import React from 'react';
import { Alert } from 'xidesign';
export default function Demo3() {
  const wrapStyle = { width: '50%' };

  return (
    <div style={wrapStyle}>
      <Alert className="red" message="i am a message" showIcon />
      <Alert
        className="red"
        type="info"
        title="here is title"
        message="i am a message"
      />
      <Alert
        className="red"
        type="success"
        title="here is title"
        message="i am a message"
      />
      <Alert
        className="red"
        type="warning"
        closeable={true}
        message="i am a message"
      />
      <Alert className="red" type="error" closeable message="i am a message" />
    </div>
  );
}
