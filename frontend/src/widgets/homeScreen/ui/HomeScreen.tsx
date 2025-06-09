import { Sidebar } from '@widgets/sidebar';
import { ChatScreen } from '@widgets/chatScreen';
import { ChatInfo } from '@widgets/chatInfo';
import '../style.pcss';

export const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Sidebar />
      <ChatScreen />
      <ChatInfo />
    </div>
  );
};
