import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatPage= (props) => {
   return(
    <div style={{height:'100vh'}}>
        <PrettyChatWindow
        projectId='ec7d915b-70f8-4970-85e8-a003f88cfb3b'
        username={props.user.username}
        secret={props.user.secret}
        style={{height:'100%'}}
        />
    </div>
   )
}

export default ChatPage;