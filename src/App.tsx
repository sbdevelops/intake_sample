import React, { useState } from 'react'
import Divider from '@mui/material/Divider';


import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Header from "./Header.tsx";
import {Box, Container, Paper, Stack, Typography} from "@mui/material";
import { TranslationProvider, useTranslationContext } from './TranslationContext.tsx';
import Buttons from "./PrimaryButtons.tsx";
import FamilyForm from "./FamilyForm.tsx";

enum StatusEnum {
    HOME = 'home',
    RETURNING = 'returning',
    NEW = 'new'
}
function App() {
    return (
        <TranslationProvider>
            <AppContent/>
        </TranslationProvider>
    );
}

function AppContent() {
    const [state, setState] = useState(StatusEnum.HOME)

    const { t, language, setLanguage } = useTranslationContext();
    // Define the enum

    const handleLanguage = (event: React.MouseEvent<HTMLElement>, newLanguage: string) => {
        if (newLanguage !== null) {
            console.log(event)
            setLanguage(newLanguage);
        }
    };

    const handleNewClick = () => setState(StatusEnum.NEW);
    const handleReturningClick = () => setState(StatusEnum.RETURNING);


    const renderContent = () => {
        switch (state) {
            case StatusEnum.NEW:
                return (
                    <div>
                        <Typography variant="h4">
                            {t('newDescription')}
                        </Typography>
                        <FamilyForm/>
                    </div>
                );
            case StatusEnum.RETURNING:
                return (
                    <Typography variant="h4">
                        {t('returningDescription')}
                    </Typography>
                );
            case StatusEnum.HOME:
            default:
                return (
                    <Buttons onNewClick={handleNewClick} onReturningClick={handleReturningClick} />
                );
        }
    };

    return (
            <div>
                <Header
                    toggleButtonGroup={
                        <ToggleButtonGroup
                            value={language}
                            exclusive
                            onChange={handleLanguage}
                            aria-label="text alignment"
                            color="secondary"
                        >
                            <ToggleButton value={"en"} aria-label="left aligned">
                                English
                            </ToggleButton>
                            <ToggleButton value={"es"} aria-label="centered">
                                Español
                            </ToggleButton>
                            <ToggleButton value={"pt"} aria-label="right aligned">
                                Português
                            </ToggleButton>
                        </ToggleButtonGroup>
                    }
                    onHomeClick={() => setState(StatusEnum.HOME)}
                />

                <Divider/>

                <div style={{margin: 0, padding: 0, width: '100%', height: '100vh', overflowX: 'hidden'}}>
                    <Container
                        style={{
                            width: '100%',
                            padding: '16px',
                            boxSizing: 'border-box',
                            display: 'flex',
                            justifyContent: 'center', // Center content horizontally
                            alignItems: 'center', // Center content vertically
                            flexDirection: 'column' // Stack content vertically
                        }}
                    >
                        {/*<Typography variant="h5">{t("welcomeMessage")}</Typography>*/}
                        <Box mt={2}>
                            {/* Add more content here */}

                            {renderContent()}

                        </Box>
                    </Container>
                </div>
            </div>

    );
}

export default App
