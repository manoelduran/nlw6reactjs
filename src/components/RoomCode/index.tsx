import {
    Button,
    CodeDiv,
    CodeImage,
    RoomNumber,
} from './styles';
import copyImg from '../../assets/copy.svg';

interface RoomCodeProps {
    code: string;
}

export function RoomCode({ code }: RoomCodeProps) {
    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(code)
    }
    return (
        <Button onClick={copyRoomCodeToClipboard} >
            <CodeDiv>
                <CodeImage src={copyImg} alt="Copy room code" />
            </CodeDiv>
            <RoomNumber>Sala #{code}</RoomNumber>
        </Button>
    );
}