import styled from "styled-components";
import { mobile } from "../../Utils/styles/responsive";

export const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

export const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}

`;

export const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

export const Input = styled.input`
  flex: 8;
  padding-left: 20px;
  border: none;
    background-color: transparent;
    resize: none;
    outline: none;
`;

export const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;