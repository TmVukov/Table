import styled from 'styled-components';
import { section, button } from '../../App.styles';

export const FormSection = styled.form`
  margin: 20px 0 30px;
  ${section}
`;

export const FormInput = styled.input`
  display: block;
  width: 100%;
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

interface FormButtonProps {
  edit: boolean;
}

export const FormButton = styled.button<FormButtonProps>`
  ${button}
  background-color: ${(props) => props.edit ? 'lightseagreen' : 'lightskyblue'};
  &:disabled{
    background-color: lightgray;
    color: darkgray;
    cursor: not-allowed;
  }
`;

export const DeleteButton = styled.button`
  ${button}
  background-color: lightcoral;
  margin-left: 10px;
`;

// export const FormError = styled.p`
//   font-size: 14px;
//   color: crimson;
// `;
