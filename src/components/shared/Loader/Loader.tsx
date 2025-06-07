import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const StyledAutocompleteWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Loader = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background: var(--bg--color);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  z-index: 10;

  &::after {
    content: "";
    width: 20px;
    height: 20px;
    border: 3px solid var(--accent-color);
    border-top-color: transparent;
    border-radius: 50%;
    animation: ${rotate} 0.8s linear infinite;
  }
`;

export const LoadingMessage = styled.div`
  padding: 12px;
  text-align: center;
  color: var(--accent-color);
`;