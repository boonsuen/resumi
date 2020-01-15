import React, { useState } from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';

import img_account from '../../assets/img/app/icons/account.svg';
import img_setting from '../../assets/img/app/icons/setting.svg';
import img_signOut from '../../assets/img/app/icons/sign-out.svg';

const Button = styled.button`
  display: flex;
  align-items: center;
  width: 126px;
  height: 40px;
  padding: 0;
  border-radius: 22px;
  box-shadow: 0 0 4px rgba(198, 212, 234, .8);
  color: #26282D;
  font-size: 15px;
  transition: box-shadow 0.3s;

  img {
    width: 40px;
    margin-right: 7px;
  }

  &:hover {
    box-shadow: 0 0 4px rgb(198, 212, 234);
  }
`;

const DropdownListContainer = styled.div`
  margin-top: 11px;
`;

const DropdownList = styled.ul`
  position: absolute;
  width: 126px;
  margin: 0;
  padding: 0px;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0 0 4px rgba(198, 212, 234, .8);
  border-radius: 14px;
  font-size: 15px;
  transform: ${props => props.visible
    ? 'translateY(0)' 
    : 'translateY(8px)'};

  visibility: ${props => props.visible ? 'visible' : 'hidden' };
  opacity: ${props => props.visible ? '1' : '0' };
  transition: transform .2s ease-in-out, ${props => props.visible 
    ? 'opacity .3s'
    : 'visibility 0s .3s, opacity .3s'};
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  height: 40px;
  margin: 0;
  color: #26282D;
  cursor: ${props => props.visible 
    ? 'pointer'
    : 'default'};

  img {
    margin-right: 7px;
  }

  span {
    padding-top: 2px;
    transition: transform .2s ease-in-out;
  }

  &:hover span {
    transform: translateX(3px);
  }
`;

const AccountButton = ({ toggle }) => {
  return (
    <Button onClick={toggle}>
      <img src={img_account} alt="Account" />
      <span>Account</span>
    </Button>
  );
};

const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  AccountDropdown.handleClickOutside = () => setIsOpen(false);
  return (
    <div>
      <AccountButton toggle={toggle} />
      <DropdownListContainer>
        <DropdownList visible={isOpen ? 1 : 0} onClick={toggle}>
          <Link to="account">
            <ListItem visible={isOpen ? 1 : 0}>
              <img src={img_setting} alt="Setting" />
              <span>Setting</span>
            </ListItem>
          </Link>
          <ListItem visible={isOpen ? 1 : 0}>
            <img src={img_signOut} alt="Sign out" />
            <span>Sign out</span>
          </ListItem>
        </DropdownList>
      </DropdownListContainer>
    </div>
  );
};

AccountDropdown.prototype = {}

const clickOutsideConfig = {
  handleClickOutside: () => AccountDropdown.handleClickOutside
};

export default onClickOutside(AccountDropdown, clickOutsideConfig);