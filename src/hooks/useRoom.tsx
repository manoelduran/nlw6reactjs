import { useEffect, useState } from "react";
import { database } from "../services/firebase";
import { useAuth } from "./useAuth";

export function useRoom(id: string) {
    const { user } = useAuth();
    const [questions, setQuestions] = useState<QuestionProps[]>([]);
    const [title, setTitle] = useState('');
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
                    likeCount: Object.values(value.likes ?? {}).length,
                    likeId: Object.entries(value.likes ?? {}).find(([key, like]) => like.authorId === user?.id)?.[0],
                    
                };
            });
            setTitle(databaseRoom.title)
            setQuestions(parsedQuestions);
        });
        return () => {
            roomRef.off('value');
        };
    }, [id, user?.id]);
    return { questions, title }
}