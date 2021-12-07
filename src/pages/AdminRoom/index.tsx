import {
    Container,
    Header,
    HeaderContent,
    HeaderImage,
    Main,
    RoomDiv,
    RoomTitle,
    RoomQuestions,
    QuestionsList,
    CodeDiv,
    DeleteButton,
    DeleteImage,
} from './styles';
import LogoImg from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import deleteImg from '../../assets/delete.svg';
import { RoomCode } from '../../components/RoomCode';
// import { useAuth } from '../../hooks/useAuth';
import { useParams } from 'react-router-dom';
import { Question } from '../../components/Question';
import { useRoom } from '../../hooks/useRoom';
import { database } from '../../services/firebase';

export function AdminRoom() {
    //  const { user } = useAuth();
    const { id } = useParams() as RoomParams;
    const { title, questions } = useRoom(id);
    async function handleDeleteQuestion(questionId: string) {
        if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
            await database.ref(`/rooms/${id}/questions/${questionId}`).remove()
        }
    }
    return (
        <Container>
            <Header>
                <HeaderContent>
                    <HeaderImage src={LogoImg} alt="Letmeask" />
                    <CodeDiv>
                        <RoomCode code={id} />
                        <Button isOutlined>Encerrar sala</Button>
                    </CodeDiv>
                </HeaderContent>
            </Header>
            <Main>
                <RoomDiv>
                    <RoomTitle>Sala {title}</RoomTitle>
                    {questions.length > 0 &&
                        <RoomQuestions>{questions.length} pergunta(s) </RoomQuestions>
                    }
                </RoomDiv>
                <QuestionsList>
                    {questions.map((question) => {
                        return (
                            <Question
                                key={question.id}
                                content={question.content}
                                author={question.author}
                            >
                                <DeleteButton
                                    type="button"
                                    onClick={() => handleDeleteQuestion(question.id)}
                                >
                                    <DeleteImage src={deleteImg} alt="Remover pergunta" />
                                </DeleteButton>
                            </Question>
                        );
                    })
                    }
                </QuestionsList>
            </Main>
        </Container>
    )
}