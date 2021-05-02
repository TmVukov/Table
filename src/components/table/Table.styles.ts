import styled from 'styled-components';
import { section, grid, div } from '../../App.styles';

export const TableSection = styled.section`
  ${section}
`;

export const TableTitle = styled.div`
  ${div}
  padding: 10px 15px;
  border: 1px solid #ddd;
  font-weight: bold;
  cursor: pointer;
`;

export const TableHeader = styled.header`
  ${grid}  
`;

export const TableBody = styled.main`
  ${grid}
`;

export const TableDiv = styled.div`
  ${div}
`;
