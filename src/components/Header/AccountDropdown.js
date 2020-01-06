import React from 'react';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';

import img_account from '../../assets/img/app/icons/account.svg';

const Button = styled.button`
  display: flex;
  align-items: center;
  width: 125px;
  height: 40px;
  padding: 0;
  border-radius: 22px;
  box-shadow: 0 0 4px rgba(198, 212, 234, .8);
  color: #26282D;
  font-size: 16px;
  transition: box-shadow 0.3s;

  img {
    width: 40px;
    margin-right: 8px;
  }

  &:hover {
    box-shadow: 0 0 4px rgb(198, 212, 234);
  }
`;

const AccountButton = () => {
  return (
    <Button>
      <img src={img_account} alt="Account" />
      <span>Account</span>
    </Button>
  );
};

const AccountDropdown = () => {
  return (
    <AccountButton />
  );
};

export default AccountDropdown;