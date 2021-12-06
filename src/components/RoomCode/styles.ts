import styled from "styled-components";

export const Button = styled.button`
height: 40px;
border-radius: 8px;
overflow: hidden;
background: ${({theme}) => theme.white};
border: 1px solid ${({theme}) => theme.purple};
display: flex ;
`;

export const CodeDiv = styled.div`
background: ${({theme}) => theme.purple};
height: 100%;
padding: 0 12px;
display: flex;
justify-content: center;
align-items: center;
`;

export const CodeImage = styled.img`

`;

export const RoomNumber = styled.span`
display: block;
align-self: center;
flex: 1;
padding: 0 16px 0 12px;
width: 240px;
font-size: 14px;
font-weight: 500;
`;