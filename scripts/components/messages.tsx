
import * as React from "react"


interface Message {
  _id: string,
  body: string,
  created_at: string
}

interface Props {}
interface State {
  messages: Array<Message>,
}

export default class Messages extends React.Component<Props, State> {

  private socket : WebSocket; 

  constructor(props: {}) {
    super(props)
    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    this.socket = new WebSocket("ws://localhost:8666")

    this.socket.onmessage = (e)=> {
      let data = JSON.parse(e.data)
      this.setState({
        messages: [...this.state.messages, ...(data.messages ? data.messages : [data.message])]
      })
    }
  }

  componentWillUnmount() {
    this.socket.close()
  }

  private sendMessage(e: React.FormEvent<HTMLFormElement>) : void {
    e.preventDefault()
    this.socket.send(e.currentTarget.body.value)
  }


  public render() {
    return [
      <h1 key='title'>Messages</h1>,
      <ol key='messages'>
        {this.state.messages.map(message => <li key={message._id}>{message.body}</li>)}
      </ol>,
      <form key='form' onSubmit={this.sendMessage}>
        <input type='text' name='body' />
      </form>
    ]
  }
}