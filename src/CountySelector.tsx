import React from 'react';
import { Button, Box, Typography, TextField } from '@mui/material';

interface CountySelectorProps {
    county: string;
    setCounty: (county: string) => void;
}

const CountySelector: React.FC<CountySelectorProps> = ({ county, setCounty }) => {
    // Define counties and their cities
    const counties = {
        'Cobb County': ['Marietta', 'Smyrna', 'Kennesaw'],
        'Cherokee County': ['Canton', 'Woodstock', 'Holly Springs'],
        'Fulton County': ['Atlanta', 'Roswell', 'Sandy Springs'],
        'Paulding County': ['Dallas', 'Hiram', 'Temple'],
        'Gwinnett County': ['Lawrenceville', 'Duluth', 'Snellville']
    };

    const handleCountyClick = (selectedCounty: string) => {
        setCounty(selectedCounty);
    };

    const handleManualEntryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCounty(event.target.value);
    };

    return (
        <Box sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {Object.keys(counties).map((countyOption) => (
                    <Box key={countyOption} sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Button
                            variant="contained"
                            onClick={() => handleCountyClick(countyOption)}
                            sx={{ minWidth: '150px', mb: 1 }}
                        >
                            <Typography sx={{minWidth: '200px', color: 'white'}}>
                                {countyOption}
                            </Typography>
                            <p>
                                {counties[countyOption].map((city) => (
                                    <Typography key={city} variant="body2">
                                        {city}
                                    </Typography>
                                ))}
                            </p>
                        </Button>
                    </Box>
                ))}
                <TextField
                    label="Enter County"
                    variant="outlined"
                    value={county}
                    onChange={handleManualEntryChange}
                    sx={{ mt: 2 }}
                />
            </Box>
        </Box>
    );
};

export default CountySelector;
