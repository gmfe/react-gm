import React from 'react'
import RecordRTC from 'recordrtc'

class Record extends React.Component {
  handleRecord = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      this.recorder = new RecordRTC(stream, {
        type: 'audio'
      })
      this.recorder.startRecording()

      this.recorder.microphone = stream
    })
  }

  handleStop = () => {
    this.recorder.stopRecording(() => {
      this.recorder.microphone.stop()
    })
  }

  handlePlay = () => {
    const audio = new window.Audio()
    const blob = this.recorder.getBlob()
    audio.src = URL.createObjectURL(blob)
    audio.play()
  }

  render () {
    return (
      <div>
        <button onClick={this.handleRecord}>录音
        </button>
        <button onClick={this.handleStop}>停止</button>
        <button onClick={this.handlePlay}>播放</button>
      </div>
    )
  }
}

export default Record
