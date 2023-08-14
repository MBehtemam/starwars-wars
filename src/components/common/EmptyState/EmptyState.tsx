import { Stack, Typography } from '@mui/material';
interface IEmptyStateProps {
    Icon: React.ReactNode;
    title: string;
    description: string;
}
export function EmptyState(props: IEmptyStateProps) {
    return <Stack justifyContent='center'  spacing={2} alignItems='center'>
        {props.Icon}
        <Typography component='h4' variant='h4'>
           {props.title}
        </Typography>
        <Typography component='p'>
            {props.description}
        </Typography>
    </Stack>
}