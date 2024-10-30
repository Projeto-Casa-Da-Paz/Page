"use client"
import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
export const Col4 = styled.div`
  width: 40%;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
export const Col6 = styled.div`
  width: 60%;
  padding: 10px;
  @media (max-width: 700px) {
    width: 100%;
    padding-top: 10px;
    padding: 0;
  }
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;

  border: 1px solid #ccc;
  border-radius: 3px;
  ::placeholder {
    color: #ccc;
  }
`;

export const Button = styled.button`
  border: 0;
  padding: 15px;
  border-radius: 8px;
  background-color: var(--green);
  :hover {
    filter: brightness(1.15);
  }
  margin-top: 10px;
`;

export const TextButton = styled.h3`
  color: var(--white);
`

