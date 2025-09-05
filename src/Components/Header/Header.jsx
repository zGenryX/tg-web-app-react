import React from 'react';
import Button from '../Button/Botton';
import { useTelegram } from '../../hooks/useTelegtam';

const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <Button onClose={onClose}>Закрыть</Button>
            <span className={'username'}> 
                {user?.username}
            </span>
        </div>
    );
};


export default Header;