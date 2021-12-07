import styled from 'styled-components';

export const Container = styled.button`
max-width: 320px;
height: 50px;
border-radius: 8px;
padding: 0 32px;
display: flex;
justify-content: center;
align-items: center;
border: 0;
font-weight: 500;
background: ${({ theme }) => theme.purple};
color: ${({ theme }) => theme.white_details};
transition: filter 0.2s;
img{
    margin-right: 8px;
}
&.outlined{
    background: ${({ theme }) => theme.white};
    border: 1px solid ${({ theme }) => theme.purple};
    color: ${({ theme }) => theme.purple};
}
&:not(:disabled):hover{
    filter: brightness(0.9);
}
&:disabled{
    opacity: 0.6;
    cursor: not-allowed;
}
`;