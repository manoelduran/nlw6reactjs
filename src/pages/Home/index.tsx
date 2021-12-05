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
import {firebase, auth} from '../../services/firebase';
import { useNavigate } from 'react-router-dom';


export function Home() {
    const navigate = useNavigate();
    function handleCreateRoom() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then(result => {
            console.log(result)
        })
        navigate('NewRoom');
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
                    <Form>
                        <FormInput
                            type="text"
                            placeholder="Digite o codigo da sala"
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