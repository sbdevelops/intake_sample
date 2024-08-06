import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';

interface PhoneKeypadProps {
    phoneNumber: string
    setPhoneNumber: (number: string) => void;
}

const PhoneKeypad: React.FC<PhoneKeypadProps> = ({ phoneNumber, setPhoneNumber }) => {

    const handleButtonClick = (value: string) => {
        if (phoneNumber.length < 10) { // Limit to 10 digits for phone number
            const newNumber = phoneNumber + value;
            setPhoneNumber(newNumber);
        }
    };

    const handleClear = () => {
        const clearedNumber = '';
        setPhoneNumber(clearedNumber);
    };

    const handleBackspace = () => {
        const newNumber = phoneNumber.slice(0, -1);
        setPhoneNumber(newNumber);
    };

    const formatPhoneNumber = (number: string) => {
        // Remove non-digit characters
        const cleaned = ('' + number).replace(/\D/g, '');

        // Format number if it has more than 10 digits
        if (cleaned.length > 10) {
            return cleaned;
        }

        // Format phone number as (xxx) xxx-xxxx
        const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
        if (match) {
            return `${match[1]}${match[2] ? '-' : ''}${match[2]}${match[3] ? '-' : ''}${match[3]}`;
        }

        return cleaned;
    };

    const formattedPhoneNumber = formatPhoneNumber(phoneNumber);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
            <Typography variant="h4" sx={{ mb: 2, opacity: phoneNumber.length === 0 ? 0 : 1 }}>
                {formattedPhoneNumber || '0'}
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <Button
                        key={num}
                        variant="contained"
                        onClick={() => handleButtonClick(num.toString())}
                        sx={{ minWidth: '60px', height: '60px' }}
                    >
                        {num}
                    </Button>
                ))}
                <Button
                    variant="contained"
                    onClick={() => handleButtonClick('0')}
                    sx={{ minWidth: '60px', height: '60px' }}
                >
                    0
                </Button>
                <Button
                    variant="contained"
                    onClick={handleClear}
                    sx={{ minWidth: '60px', height: '60px' }}
                >
                    Clear
                </Button>
                <Button
                    variant="contained"
                    onClick={handleBackspace}
                    sx={{ minWidth: '60px', height: '60px' }}
                >
                    Back
                </Button>
            </Box>
        </Box>
    );
};

export default PhoneKeypad;
