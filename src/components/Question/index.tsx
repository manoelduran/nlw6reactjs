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
    isAnswered?: boolean;
    isHighlighted?: boolean;
}
export function Question({ author, content, children = false, isAnswered = false, isHighlighted = false }: QuestionProps) {
    return (
        <Container className={`${isAnswered ? 'asnwered' : ''} ${isHighlighted && !isAnswered ? 'highlighted' : ''} `}>
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