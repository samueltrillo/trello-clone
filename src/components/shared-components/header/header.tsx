import React from 'react';
import * as Styled from './styled';
import logo from '../../../assets/trello-logo.png';

const Header: React.FC = () => {

    return (
        <div>
            <Styled.Header>
                <Styled.Image src={logo} alt="" />
            </Styled.Header>
        </div>
    );

};

export default Header;