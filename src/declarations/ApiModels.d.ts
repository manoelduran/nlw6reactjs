interface User {
    id: string;
    name: string;
    avatar: string;
};

interface QuestionProps {
    id: string;
    author: {
        name: string;
        avatar: string;
    };
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
    likeCount: number;
    likeId: string | undefined;
};

interface RoomParams {
    id: string;
};

interface FirebaseQuestions {
    [key: string]: {
        author: {
            name: string;
            avatar: string;
        };
        content: string;
        isAnswered: boolean;
        isHighlighted: boolean;
        likes: Record<string, {
            authorId: string;
        }>
    };
};