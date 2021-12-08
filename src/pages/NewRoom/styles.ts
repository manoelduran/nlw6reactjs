import styled from "styled-components"

export const Container = styled.div`
display: flex;
align-items: stretch;
height: 100vh;
background: ${({ theme }) => theme.white_background};
`;
export const LeftDiv = styled.aside`
flex: 7;
display: flex;
flex-direction: column;
justify-content: center;
height: 100%;
background: ${({ theme }) => theme.purple};
padding: 120px 80px;
`;

export const Banner = styled.img`
max-width: 320px;
`;
export const Title = styled.strong`
font: 700 36px 'Poppins', sans-serif;
margin-top: 16px;
line-height: 42px;
color: ${({ theme }) => theme.white};
`;
export const Subtitle = styled.p`
margin-top: 16px;
color: ${({ theme }) => theme.white_background};
font-size: 24px;
line-height: 32px;
`;

export const Main = styled.main`
flex: 8;
padding: 0 32px;
display: flex;
align-items: center;
justify-content: center;
`;
export const LoginDiv = styled.div`
width: 100%;
max-width: 320px;
display: flex;
flex-direction: column;
align-items: stretch;
text-align: center;
`;
export const Logo = styled.img`
align-self: center;
`;

export const MainTitle = styled.h2`
font-size: 24px;
margin: 64px 0 24px;
font-family: 'Poppins', sans-serif;
`;

export const Form = styled.form`
button{
    margin-top: 16px;
    width: 100%;
}
`;

export const FormInput = styled.input`

height: 50px;
border: 1px solid ${({ theme }) => theme.gray_medium};
background: ${({ theme }) => theme.white};
border-radius: 8px;
width: 100%;
padding: 0 16px;
`;

export const Text = styled.p`
font-size: 14px;
color: ${({ theme }) => theme.gray_dark};
margin-top: 16px;
a{
    color: ${({ theme }) => theme.purple};
}
`;


