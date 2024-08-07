import React from 'react';
import { Button, Box, Typography, TextField } from '@mui/material';
import {useTranslationContext} from "./TranslationContext";

interface CountySelectorProps {
    county: string;
    setCounty: (county: string) => void;
}

interface CountyCities {
    [key: string]: string[];
}

const CountySelector: React.FC<CountySelectorProps> = ({ county, setCounty }) => {
    const { t } = useTranslationContext();

    // Define counties and their cities
    const counties : CountyCities = {
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

                        <Button
                            variant={county === countyOption ? 'outlined' : 'contained'}
                            onClick={() => handleCountyClick(countyOption)}
                            sx={{
                                minWidth: '150px',
                                mb: 1,
                            }}
                        >
                            <Box key={countyOption}>
                                <Typography variant="body1">
                                    {countyOption}
                                </Typography>
                                <Typography variant="caption">
                                    {counties[countyOption].map((city, index, array) => (
                                        <>
                                            {/*<Typography key={city} variant="body2" component="span">*/}
                                                {city}
                                            {/*</Typography>*/}
                                            {index < array.length - 1 && ', '}
                                        </>
                                    ))}
                                </Typography>

                            </Box>
                        </Button>
                ))}
                <TextField
                    label={t("countyField")}
                    variant="outlined"
                    value={county}
                    onChange={handleManualEntryChange}
                    sx={{mt: 2}}
                />
            </Box>
        </Box>
    );
};

export default CountySelector;
