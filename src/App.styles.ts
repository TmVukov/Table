import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

export const section = css`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const grid = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const button = css`
  display: block;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
`;

export const div = css`
  padding: 10px 15px;
  border: 1px solid #ddd;
  cursor: pointer;
`;
