import IlustrationImg from '../../assets/illustration.svg';
import LogoImg from '../../assets/logo.svg';
import {Link, useNavigate} from 'react-router-dom';
import {
Container,
LeftDiv,
Banner,
Title,
Subtitle,
Main,
LoginDiv,
Logo,
MainTitle,
Form,
FormInput,
Text,
} from './styles'
import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';
import { FormEvent, useState } from 'react';
import { database } from '../../services/firebase';

export function NewRoom() {
    const {user} = useAuth();
    const navigate = useNavigate();
    const [newRoom, setNewRoom] = useState('');
    async function handleCreateRoom(event: FormEvent){
        event.preventDefault();
        if(newRoom.trim() === ''){
            return;
        };
        const roomRef = database.ref('rooms');
        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        });
        navigate(`/rooms/${firebaseRoom.key}`)
    }
    return (
        <Container>
            <LeftDiv>
                    <Banner src={IlustrationImg} alt="Illustration"/>
                    <Title>Toda pergunta tem uma resposta.</Title>
                    <Subtitle>
                        Aprenda e compartilhe conhecimento
                        com outras pessoas
                    </Subtitle>
            </LeftDiv>
            <Main>
                    <LoginDiv>
                        <Logo  src={LogoImg} alt="Logomarca LetMeAsk"/>
                        <h1>{user?.name}</h1>
                        <MainTitle>Crie uma nova sala</MainTitle>
                        <Form onSubmit={handleCreateRoom}>
                            <FormInput
                            type="text"
                            placeholder="Nome da sala"
                            value={newRoom}
                            onChange={(event) => setNewRoom(event.target.value)}
                            />
                            <Button type="submit">
                            Criar sala
                            </Button>
                        </Form>
                        <Text>Quer entrar em uma sala já existente? 
                            <Link to="/">Clique aqui</Link>
                        </Text>
                    </LoginDiv>
            </Main>
        </Container>
    );
}