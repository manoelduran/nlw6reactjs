import IlustrationImg from '../../assets/illustration.svg';
import LogoImg from '../../assets/logo.svg';
import googleIconImg from '../../assets/google-icon.svg';
import {
    Container,
    LeftDiv,
    Banner,
    Title,
    Subtitle,
    Main,
    LoginDiv,
    Logo,
    CreateChatButton,
    LineDiv,
    Line,
    LineText,
    Form,
    FormInput,
} from './styles'
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { FormEvent, useState } from 'react';
import { database } from '../../services/firebase';




export function Home() {
    const { signInWithGoogle, user } = useAuth();
    const [roomCode, setRoomCode] = useState('')
    const navigate = useNavigate();
    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle();
        };
        navigate('/rooms/new');
    }
    async function handleJoinRoom(event: FormEvent){
event.preventDefault();
if(roomCode.trim() === ''){
    return
}
const roomRef = await database.ref(`/rooms/${roomCode}`).get()
if(!roomRef.exists()){
    alert('Room does not exists.')
    return;
}
navigate(`/rooms/${roomCode}`)
    }
    return (
        <Container>
            <LeftDiv>
                <Banner src={IlustrationImg} alt="Illustration" />
                <Title>Toda pergunta tem uma resposta.</Title>
                <Subtitle>
                    Aprenda e compartilhe conhecimento
                    com outras pessoas
                </Subtitle>
            </LeftDiv>
            <Main>
                <LoginDiv>
                    <Logo src={LogoImg} alt="Logomarca LetMeAsk" />
                    <CreateChatButton onClick={handleCreateRoom}>
                        <img src={googleIconImg} width="24" height="24" alt="Google Icon" />
                        Crie sua sala com o Google
                    </CreateChatButton>
                    <LineDiv>
                        <Line />
                        <LineText>ou entre em uma sala</LineText>
                        <Line />
                    </LineDiv>
                    <Form onSubmit={handleJoinRoom}>
                        <FormInput
                            type="text"
                            placeholder="Digite o codigo da sala"
                            value={roomCode}
                            onChange={(event) => setRoomCode(event.target.value)}
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </Form>
                </LoginDiv>
            </Main>
        </Container>
    );
}