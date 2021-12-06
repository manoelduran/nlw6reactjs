import IlustrationImg from '../../assets/illustration.svg';
import LogoImg from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
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

export function NewRoom() {
    const {user} = useAuth();
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
                        <Form>
                            <FormInput
                            type="text"
                            placeholder="Nome da sala"
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