import React from 'react';
import Button from '../Button/Botton';

const Header = () => {
    const tg = window.Telegram.WebApp;

    //команда для кнопки закрытия
    const onClose = () => {
        tg.close()
    }

    return (
        <div className={'header'}>
            <Button onClose={onClose}>Закрыть</Button>
            <span className={'username'}> 
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
};


export default Header;