import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton } from '@mui/material';
import { ReactElement } from "react"
import * as S from './styles';

type VoteCardProps = {
    title: string;
    onAddClick: () => void;
    children?: ReactElement | ReactElement[];
}

export const VoteCard = ({ onAddClick, title, children }: VoteCardProps): ReactElement => {
    return (
        <S.Card item xs={12} md={6}>
            <S.CardHeader>
                <S.Title variant="h5">{ title }</S.Title>
                <IconButton color="primary" onClick={() => onAddClick()}>
                    <AddCircleIcon />
                </IconButton>
            </S.CardHeader>
                { children }
        </S.Card>
    )
}