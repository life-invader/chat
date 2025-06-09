import { Sidebar } from '@widgets/sidebar';
import { ChatScreen } from '@widgets/chatScreen';
import '../style.pcss';

export const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Sidebar />
      <ChatScreen />

      <div className="homeScreen__info">Информация о контакте</div>
    </div>
  );
};
