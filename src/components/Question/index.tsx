import {
    Container,
    Content,
    FooterDiv,
    UserInfo,
    Avatar,
    UserName,
} from './styles';
import { ReactNode } from 'react';
interface QuestionProps {
    author: {
        avatar: string;
        name: string;
    };
    content: string;
    children?: ReactNode;
}
export function Question({ author, content, children = false }: QuestionProps) {
    return (
        <Container>
            <Content>{content} </Content>
            <FooterDiv>
                <UserInfo>
                    <Avatar src={author.avatar} alt={author.name} />
                    <UserName>{author.name} </UserName>
                </UserInfo>
                <div>
                    {children}
                </div>
            </FooterDiv>
        </Container>
    );
}