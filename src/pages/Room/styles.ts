import styled from "styled-components";

export const Container = styled.div`

`;

export const Header = styled.header`
padding: 24px;
border-bottom: 1px solid ${({theme}) => theme.border};
`;
export const HeaderContent = styled.div`
max-width: 1120px;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
`;
export const HeaderImage = styled.img`
max-height: 45px;
`;

export const Main = styled.main`
max-width: 800px;
margin: 0 auto;
`;
export const RoomDiv = styled.div`
margin: 32px 0 24px;
display: flex;
align-items: center;
`;
export const RoomTitle = styled.h1`
font-family: 'Poppins', sans-serif;
font-size: 24px;
color: ${({theme}) => theme.black};
`;

export const RoomQuestions = styled.span`
margin-left: 16px;
background: ${({theme}) => theme.purple};
border-radius: 9999px;
padding: 8px 16px;
color: ${({theme}) => theme.white};
font-weight: 500;
font-size: 14px;
`;

export const Form = styled.form``;

export const Text = styled.textarea`
width: 100%;
border: 0;
padding: 16px;
border-radius: 8px;
background: ${({theme}) => theme.white_details};
box-shadow: 0 2px 12px rgba(0,0,0,0.4);
resize: vertical;
min-height: 130px;
`;

export const FormFooter = styled.footer`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 16px;
`;

export const InfoDiv = styled.div`
display: flex;
align-items: center;
`;
export const UserAvatar = styled.img`
border-radius: 50% ;
width: 32px;
height: 32px;
`;
export const UserName = styled.span`
margin-left: 8px;
color: ${({theme}) => theme.black};
font-weight: 500;
font-size: 14px;
`;


export const FooterSpan = styled.span`
font-size: 14px;
color: ${({theme}) => theme.gray_dark};
font-weight: 500;
`;
export const FooterButton = styled.button`
background: transparent;
border: 0;
color: ${({theme}) => theme.purple};
text-decoration: underline;
font-size: 14px;
font-weight: 500;
`;