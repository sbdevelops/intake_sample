import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

interface AgeStepperProps {
    label: string;
    value: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

const AgeStepper: React.FC<AgeStepperProps> = ({ label, value, onIncrement, onDecrement, big = false}) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mb: 2 }}>
            <Typography sx={{ width: big ? '250px' : '150px' }}>{label}</Typography>
            <Button
                variant="contained"
                onClick={onDecrement}
                sx={{ minWidth: '30px', height: '30px', padding: '4px' }}
            >
                <Remove />
            </Button>
            <Typography
                sx={{
                    mx: 2,
                    fontSize: '1.25rem',
                    fontWeight: 'bold'
                }}
            >
                {value}
            </Typography>
            <Button
                variant="contained"
                onClick={onIncrement}
                sx={{ minWidth: '30px', height: '30px', padding: '4px' }}
            >
                <Add />
            </Button>
        </Box>
    );
};

export default AgeStepper;
