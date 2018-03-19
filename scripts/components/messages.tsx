
import * as React from "react"


interface MessageProps {
  _id?: string,
  body: string,
  created_at?: string
}

interface Props {}
interface State {
  sender_id: string,
  messages: MessageProps[]
}

export const Message: React.SFC<MessageProps> = (props) => {
  return <li className="message"><span className="message__content">{props.body}</span></li>
}

export default class Messages extends React.Component<Props, State> {

  private socket : WebSocket
  private element : HTMLElement

  constructor(props: {}) {
    super(props)
    this.state = {
      sender_id: undefined,
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

    this.scrollToBottom()
  }

  componentWillUnmount() {
    this.socket.close()
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  private sendMessage(e: React.FormEvent<HTMLFormElement>) : void {
    e.preventDefault()
    this.socket.send(e.currentTarget.body.value)
  }

  private scrollToBottom() : void {
    console.log(this.element.clientHeight)
    this.element.scrollTop = this.element.scrollHeight
  }

  public render() {
    return [
      <ol ref={(element) => this.element = element} className="messages" key='messages'>
        {this.state.messages.map(message => <Message key={message._id} body={message.body} />)}
      </ol>,
      <form key='form' onSubmit={(e)=> this.sendMessage(e)}>
        <input type='text' name='body' placeholder="Say hi!" />
        <button type="submit">Send</button>
      </form>
    ]
  }
}