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
} from './styles';
import LogoImg from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { useAuth } from '../../hooks/useAuth';
import { useParams } from 'react-router-dom';
import { FormEvent, useEffect, useState } from 'react';
import { database } from '../../services/firebase';

interface FirebaseQuestions {
    [key: string]: {
        author: {
            name: string;
            avatar: string;
        };
        content: string;
        isAnswered: boolean;
        isHighlighted: boolean;
    }
}
interface RoomParams {
    id: string;
}
type Question = {
    id: string;
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
}

export function Room() {
    const { user } = useAuth();
    const [newQuestion, setNewQuestion] = useState('');
    const [questions, setQuestions] = useState<Question[]>([]);
    const [title, setTitle] = useState('');
    const { id } = useParams() as RoomParams;
    useEffect(() => {
        const roomRef = database.ref(`/rooms/${id}`);
        roomRef.on('value', room => {
            const databaseRoom = room.val();
            const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};
            const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
                return {
                    id: key,
                    content: value.content,
                    author: value.author,
                    isHighlighted: value.isHighlighted,
                    isAnswered: value.isAnswered,
                };
            });
            setTitle(databaseRoom.title)
            setQuestions(parsedQuestions);
        });
    }, [id]);
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
    }
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
                        <RoomQuestions>{questions.length === 1 ? "pergunta" : "perguntas"} </RoomQuestions>
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
                                <UserAvatar />
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
                {!!questions &&
                    JSON.stringify(questions)
                }
            </Main>
        </Container>
    )
}