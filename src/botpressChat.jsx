import { Fab, Webchat } from '@botpress/webchat'
import { useState } from 'react'

function BotpressChat() {
  const [isWebchatOpen, setIsWebchatOpen] = useState(false)
  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState)
  }
  return (
    <>
      <Webchat
        
        style={{
          width: '200px',
          height: '200px',
          display: isWebchatOpen ? 'flex' : 'none',
          position: 'fixed',
          bottom: '90px',
          right: '20px',
        }}
      />
      <Fab onClick={() => toggleWebchat()} style={{ position: 'fixed', bottom: '20px', right: '20px' }} />
    </>
  )
}

export default BotpressChat