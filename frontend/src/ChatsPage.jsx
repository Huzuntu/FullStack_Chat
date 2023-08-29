import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
    return (
      <div style={{ height: "100vh", width: "100vw" }}>
        <PrettyChatWindow
          projectId={'c29e4d4f-f32a-4455-9bef-1913e5000627'}
          username={props.user.username} 
          secret={props.user.secret}
          style={{ height: "100%" }}
        />
      </div>
    );
  };

export default ChatsPage