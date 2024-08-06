// src/Buttons.tsx
import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { useTranslationContext } from './TranslationContext.tsx';

interface ButtonsProps {
    onNewClick: () => void;
    onReturningClick: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({ onNewClick, onReturningClick }) => {
    const { t } = useTranslationContext();

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap={2}
            style={{ width: '100%', padding: '16px', boxSizing: 'border-box' }}
        >

                <Button
                    variant="contained"
                    onClick={onNewClick}
                    style={{
                        width: '100%',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '16px' // Optional: adjust padding as needed
                    }}
                >
                    <Typography variant="h3">{t('new')}</Typography>

                    <Typography variant="body2">{t('newDescription')}</Typography>
                </Button>
                <Button
                    variant="contained"
                    style={{
                        width: '100%',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '16px' // Optional: adjust padding as needed
                    }}
                    onClick={onReturningClick}
                >
                    <Typography variant="h3">{t('returning')}</Typography>
                    <Typography variant="body2">{t('returningDescription')}</Typography>
                </Button>
        </Box>
    );
};

export default Buttons;
