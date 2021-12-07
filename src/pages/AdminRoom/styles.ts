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
export const QuestionsList = styled.div`
margin-top: 32px;
`;

export const CodeDiv = styled.div`
display: flex;
gap: 16px;
button{
    height: 40px;
}
`;

export const DeleteButton = styled.button`

`;
export const DeleteImage = styled.img`

`;