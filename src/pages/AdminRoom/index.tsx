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
import checkImg from '../../assets/check.svg';
import answerImg from '../../assets/answer.svg';
import { Button } from '../../components/Button';
import deleteImg from '../../assets/delete.svg';
import { RoomCode } from '../../components/RoomCode';
// import { useAuth } from '../../hooks/useAuth';
import { useNavigate, useParams } from 'react-router-dom';
import { Question } from '../../components/Question';
import { useRoom } from '../../hooks/useRoom';
import { database } from '../../services/firebase';

export function AdminRoom() {
    const navigate = useNavigate();
    //  const { user } = useAuth();
    const { id } = useParams() as RoomParams;
    const { title, questions } = useRoom(id);
    async function handleEndRoom() {
        await database.ref(`/rooms/${id}`).update({
            endedAt: new Date(),
        });
        navigate('/');
    };
    async function handleDeleteQuestion(questionId: string) {
        if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
            await database.ref(`/rooms/${id}/questions/${questionId}`).remove()
        };
    };
    async function handleCheckQuestionAsAnswered(questionId: string) {
        await database.ref(`/rooms/${id}/questions/${questionId}`).update({
            isAnswered: true,
        })
    };
    async function handleHighlightQuestion(questionId: string) {
        await database.ref(`/rooms/${id}/questions/${questionId}`).update({
            isHighlighted: true,
        })
    };
    return (
        <Container>
            <Header>
                <HeaderContent>
                    <HeaderImage src={LogoImg} alt="Letmeask" />
                    <CodeDiv>
                        <RoomCode code={id} />
                        <Button
                            onClick={() => handleEndRoom()}
                            isOutlined>Encerrar sala</Button>
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
                                isAnswered={question.isAnswered}
                                isHighlighted={question.isHighlighted}
                            >
                                {!question.isAnswered && (
                                    <>
                                        <DeleteButton
                                            type="button"
                                            onClick={() => handleCheckQuestionAsAnswered(question.id)}
                                        >
                                            <DeleteImage src={checkImg} alt="Marcar pergunta como respondida" />
                                        </DeleteButton>
                                        <DeleteButton
                                            type="button"
                                            onClick={() => handleHighlightQuestion(question.id)}
                                        >
                                            <DeleteImage src={answerImg} alt="Dar destaque a pergunta" />
                                        </DeleteButton>
                                    </>
                                )
                                }
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