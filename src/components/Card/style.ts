'use client';
import styled from 'styled-components'

export const CardBody = styled.div`
  max-width: 18rem;
  margin: 18px;
  border: 1px solid #d2d2d2;
  text-align: center;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Title = styled.h3``

export const TitlePreco = styled.p`
  text-decoration: line-through;
`
export const TextPromo = styled.strong`
  color: var(--red);
`
export const Button = styled.button`
  border: 0;
  padding: 15px;
  border-radius: 8px;
  background-color: var(--red);
  :hover {
    filter: brightness(1.3);
  }
  margin-top: 10px;
`
export const TextButton = styled.h3`
  color: var(--white);
`
export const Image = styled.img`
  width: 100%;
`