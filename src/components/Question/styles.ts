import styled from "styled-components";

export const Container = styled.div`
background: ${({ theme }) => theme.white_details};
border-radius: 8px;
box-shadow: 0 2px 12px rgba(0,0,0,0.4);
padding: 24px;
& + div{
    margin-top: 12px;
}
`;

export const Content = styled.p`
color: ${({ theme }) => theme.black};
`;
export const FooterDiv = styled.footer`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 24px;
button {
      border: 0;
      background: transparent;
      cursor: pointer;
      transition: filter 0.2s;

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: ${({ theme }) => theme.gray_dark};
        gap: 8px;

        &.liked {
          color: ${({ theme }) => theme.purple};

          svg path {
            stroke: ${({ theme }) => theme.purple};
          }
        }
      }

      &:hover {
        filter: brightness(0.7);
      }
    }
`;
export const UserInfo = styled.div`
display: flex;
align-items: center;
`;
export const Avatar = styled.img`
width: 32px;
height: 32px;
border-radius: 50%;
`;
export const UserName = styled.span`
margin-left: 8px;
color: ${({ theme }) => theme.gray_dark};
font-size: 14px;
`;