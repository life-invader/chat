import { Sidebar } from '@widgets/sidebar';
import { Button } from '@shared/ui/button';
import '../style.pcss';

export const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Sidebar />

      <div>
        <div>Чат</div>

        <p>Тесты</p>
        <Button label="Settings" iconLeft={{ icon: 'settings', size: 'small' }} />
        <Button
          label="Settings"
          iconLeft={{ icon: 'settings', size: 'small' }}
          iconRight={{ icon: 'arrow-right', size: 'small' }}
        />
        <Button label="Settings" iconLeft={{ icon: 'settings', size: 'small' }}>
          Settings
        </Button>
      </div>

      <div className="homeScreen__info">Информация о контакте</div>
    </div>
  );
};
