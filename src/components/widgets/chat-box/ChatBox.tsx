import React from 'react';

export default function ChatBox() {
  return (
    <>
      <div
        id="rasa-chat-widget"
        // data-avatar-url="https://i.pravatar.cc/300"
        // data-primary="#c10000"
        data-websocket-url="http://192.168.0.188:5005"
        data-font="Poppins"
        data-height="475"
        style={{
          position: 'static',
        }}
      ></div>
    </>
  );
}
