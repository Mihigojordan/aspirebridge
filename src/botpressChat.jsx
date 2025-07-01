// BotpressChat.jsx or .tsx if using TypeScript
import { useState } from 'react';
import {
  Webchat,
  WebchatProvider,
  Fab,
  getClient,
  Configuration,
} from '@botpress/webchat';

const clientId = "2096bb7b-f331-4a0b-a523-9ffe500cc42a";

const configuration = {
  color: '#000', // customize the color of the chatbot
};

export default function BotpressChat() {
  const client = getClient({ clientId });
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 9999 }}>
      <WebchatProvider client={client} configuration={configuration}>
        <Fab onClick={toggleWebchat} />
        <div
          style={{
            display: isWebchatOpen ? 'block' : 'none',
            height: 500,
            width: 400,
          }}
        >
          <Webchat />
        </div>
      </WebchatProvider>
    </div>
  );
}
