import React, { useState } from 'react';

const ProfilePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ScriptQuote = () => alert('СЕГОДНЯ БЫЛО ЗАВТРА ВЧЕРА');
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen p-8">
      <h1 style={{fontFamily:'arial', textAlign:'center'}}>Есимбеков Чингис</h1>
      <p style={{fontFamily:'courier', fontSize:'200%'}}>4 Курс | 8121-22</p>
      <p style={{fontFamily:'courier', fontSize:'200%'}}>Бюджет, 22 года (31.08.2003), Пересдаю вождение</p>
      <p style={{fontFamily:'arial', textAlign:'center'}}>
        Social Links: <a href="https://vk.com/witch_pa1ace">VK</a>, <a href="https://github.com/WitchPa1ace">Github</a>, Steam, Discord, <a href="https://www.reddit.com/user/WitchPa1ace/">Reddit</a>
      </p>
      
      <button onClick={ScriptQuote}>Кнопка с Цитатой</button>
      <button onClick={openModal}>Вызвать модальное окно</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modalwrap">
            <div className="modalwindow">
              <button onClick={closeModal} className="crossbutton">✕</button>
              <h1>Невероятно!</h1>
              <p>По вторникам сайт не работает</p>
              <p>Кто бы мог подумать!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;