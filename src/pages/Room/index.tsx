import {
    Container,
    Header,
    HeaderContent,
    HeaderImage,
    Main,
    RoomDiv,
    RoomTitle,
    RoomQuestions,
    Form,
    Text,
    FormFooter,
    FooterSpan,
    FooterButton,
    InfoDiv,
    UserAvatar,
    UserName,
    QuestionsList,
    LikeButton,
    Likes,
} from './styles';
import LogoImg from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { useAuth } from '../../hooks/useAuth';
import { useParams } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { database } from '../../services/firebase';
import { Question } from '../../components/Question';
import { useRoom } from '../../hooks/useRoom';

export function Room() {
    const { user } = useAuth();
    const [newQuestion, setNewQuestion] = useState('');
    const { id } = useParams() as RoomParams;
    const { title, questions } = useRoom(id);

    async function handleSendQuestion(event: FormEvent) {
        event.preventDefault();
        if (newQuestion.trim() === '') {
            return
        };
        if (!user) {
            throw new Error('You must be logged in');
        };
        const question = {
            content: newQuestion,
            author: {
                name: user.name,
                avatar: user.avatar,
            },
            isHighlighted: false,
            isAnswered: false,
        };
        await database.ref(`rooms/${id}/questions`).push(question);
        setNewQuestion('');
    };
    async function handleLikeQuestion(questionId: string, likeId: string | undefined) {
        if (likeId) {
            await database.ref(`/rooms/${id}/questions/${questionId}/likes/${likeId}`).remove()
        } else {
            await database.ref(`/rooms/${id}/questions/${questionId}/likes`).push({
                authorId: user?.id,
            })
        }
    };
    return (
        <Container>
            <Header>
                <HeaderContent>
                    <HeaderImage src={LogoImg} alt="Letmeask" />
                    <RoomCode code={id} />
                </HeaderContent>
            </Header>
            <Main>
                <RoomDiv>
                    <RoomTitle>Sala {title}</RoomTitle>
                    {questions.length > 0 &&
                        <RoomQuestions>{questions.length} pergunta(s) </RoomQuestions>
                    }
                </RoomDiv>
                <Form onSubmit={handleSendQuestion} >
                    <Text placeholder="O que você quer perguntar?"
                        value={newQuestion}
                        onChange={event => setNewQuestion(event.target.value)}
                    />
                    <FormFooter>
                        {user ?
                            <InfoDiv>
                                <UserAvatar src={user.avatar} alt={user.name} />
                                <UserName>{user.name}</UserName>
                            </InfoDiv>
                            :
                            <FooterSpan>
                                Para enviar uma pergunta, <FooterButton>faça seu login</FooterButton>
                            </FooterSpan>
                        }
                        <Button type="submit" disabled={!user} >Enviar pergunta</Button>
                    </FormFooter>
                </Form>
                <QuestionsList>
                    {questions.map((question) => {
                        return (
                            <Question
                                key={question.id}
                                content={question.content}
                                author={question.author}
                                isAnswered={question.isAnswered}
                                isHighlighted={question.isHighlighted}
                            >
                                {!question.isAnswered && (
                                    <LikeButton
                                        className={`like-button ${question.likeId ? 'liked' : ''}`}
                                        type="button"
                                        aria-label="Marcar como gostei"
                                        onClick={() => handleLikeQuestion(question.id, question.likeId)}
                                    >
                                        {question.likeCount > 0 && <Likes>{question.likeCount}</Likes>}
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </LikeButton>
                                )}
                            </Question>
                        );
                    })
                    }
                </QuestionsList>
            </Main>
        </Container>
    )
}