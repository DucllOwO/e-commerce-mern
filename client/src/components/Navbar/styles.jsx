import styled  from 'styled-components';
import Button from '@mui/material/Button';
import { styled as styledUI } from '@mui/material/styles';


export const ButtonCustom = styledUI(Button)`
  margin-left: 25px;
`;

export const Container = styled.div`
  height: 60px;
  background-color: white;
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const CenterContainer = styled.div`
  flex: 1;
  text-align: center;
`;

export const Language = styled.span`
`;

export const Search = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  border-radius: 10px;
`;

export const Input = styled.input`
  border: none;
    background-color: transparent;
    resize: none;
    outline: none;
`;

export const Logo = styled.h1`
  font-weight: bold;
`;