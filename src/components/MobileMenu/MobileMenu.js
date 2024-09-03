/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
const MobileMenu = ({ isOpen, onDismiss }) => {
  const { backdropStyles, modalStyles } = getTransitionStyles(isOpen);
  return (
    <Overlay isOpen={true} onDismiss={onDismiss} style={{
      opacity: isOpen ? 1 : 0,
      pointerEvents: isOpen ? 'auto' : 'none',
      ...backdropStyles
    }}>
      <Content aria-label="Menu" style={{
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        ...modalStyles
      }}>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink style={navStyles(0, isOpen)} href="/sale">Sale</NavLink>
          <NavLink style={navStyles(1, isOpen)} href="/new">New&nbsp;Releases</NavLink>
          <NavLink style={navStyles(2, isOpen)} href="/men">Men</NavLink>
          <NavLink style={navStyles(3, isOpen)} href="/women">Women</NavLink>
          <NavLink style={navStyles(4, isOpen)} href="/kids">Kids</NavLink>
          <NavLink style={navStyles(5, isOpen)} href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <SubLink style={navStyles(6, isOpen)} href="/terms">Terms and Conditions</SubLink>
          <SubLink style={navStyles(7, isOpen)} href="/privacy">Privacy Policy</SubLink>
          <SubLink style={navStyles(8, isOpen)} href="/contact">Contact Us</SubLink>
        </Footer>
      </Content>
    </Overlay >
  );
};

function getTransitionStyles(isOpen) {
  return {
    backdropStyles: {
      transition: 'opacity',
      transitionDuration: isOpen ? '250ms' : '200ms',
      transitionDelay: isOpen ? '0ms' : '100ms',
    },
    modalStyles: {
      transition: 'transform',
      transitionDuration: isOpen
        ? '300ms'
        : '250ms',
      transitionDelay: isOpen
        ? '50ms'
        : '0ms',
      transitionTimingFunction: isOpen
        ? 'ease-out'
        : 'ease-in',
    },
  };
}

const navStyles = (index, isOpen) => {
  return {
    opacity: isOpen ? 1 : 0,
    transition: 'opacity, transform',
    transitionDuration: '200ms',
    transitionDelay: isOpen ? 350 + (index * 20) + 'ms' : '0ms',
  }
}

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
