import App from './components/app/app';
import './global.css';

const app = new App();
app.start().catch((err) => {
  console.error('Не удалось загрузить каталог:', err);
  document.body.insertAdjacentHTML(
    'afterbegin',
    '<p style="padding:1rem;background:#fff3cd;color:#856404;">Сервер недоступен. Запустите <code>npm run dev</code> (API на порту 3000).</p>'
  );
});
