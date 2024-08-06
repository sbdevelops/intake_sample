import React, { useState } from 'react';
import {
    TextField,
    Checkbox,
    FormControlLabel,
    Button,
    Stepper,
    Step,
    StepLabel,
    Typography,
    Box,
    IconButton, FormControl, InputLabel, Select, MenuItem
} from '@mui/material';
import {Add, CheckCircle, Remove} from '@mui/icons-material';
import Divider from "@mui/material/Divider";
import AgeStepper from './AgeStepper.tsx';
import PhoneKeypad from "./PhoneKeypad.tsx";
import CountySelector from "./CountySelector.tsx";
import {useTranslationContext} from "./TranslationContext.tsx"; // Adjust path as needed

const steps = ['Family Information', 'Household Ages', 'Additional Details', "Done"];

const FamilyForm: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [ethnicity, setEthnicity] = useState('');
    const [isVeteran, setIsVeteran] = useState(false);
    const [familyCount, setFamilyCount] = useState(0);
    const [menCount, setMenCount] = useState(0);
    const [womenCount, setWomenCount] = useState(0);
    const [age0To4, setAge0To4] = useState(0);
    const [age5To12, setAge5To12] = useState(0);
    const [age13To17, setAge13To17] = useState(0);
    const [age18To29, setAge18To29] = useState(0);
    const [age30To60, setAge30To60] = useState(0);
    const [age60Plus, setAge60Plus] = useState(0);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [county, setCounty] = useState('');
    const [isSubmitted, setSubmitted] = useState(false);

    const { t } = useTranslationContext();

    const totalAgeSelectionCount = () => {
        return age0To4 + age5To12 + age13To17 + age18To29 + age30To60 + age60Plus
    }

    const ageSelectionIsComplete = () => {
        return familyCount === totalAgeSelectionCount()
    }

    const handleNext = () => {
        if (activeStep === 0) {
            if (familyCount !== menCount + womenCount) {
                alert('The total number of people in the family must match the sum of men and women.');
                return;
            }
        } else if (activeStep === 1) {
            if (!ageSelectionIsComplete()) {
                alert("You didn't select the same number of people as you did on the first screen!");
                return;
            }
        }
        setActiveStep((prev) => prev + 1);
    };

    const handleBack = () => setActiveStep((prev) => prev - 1);

    const submitForm = () => {
        setSubmitted(true)
    }

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

    const getText = ()=> {
        const totalUnder17 = age0To4 + age5To12 + age13To17;

        // Format the CSV string
        return [
            `"${lastName}, ${firstName}"`, // Encapsulate name in double quotes to handle comma
            `"${ethnicity}"`,
            familyCount,
            `"${menCount}/${womenCount}"`,
            isVeteran ? 'Yes' : 'No',
            age0To4,
            age5To12,
            age13To17,
            age18To29,
            age30To60,
            age60Plus,
            `"${formatPhoneNumber(phoneNumber)}"`,
            `"${county}"`,
            totalUnder17
        ].join(', ');
    }

    const copyText = () => {
        navigator.clipboard.writeText(getText())
            .then(() => {
                alert('Text copied to clipboard!');
            })
            .catch((err) => {
                console.error('Failed to copy text: ', err);
            });
    }

    const renderContent = () => {
        switch (activeStep) {
            case 0:
                return <Box>

                    <Box sx={{ pt: 2, mb: 3 }}>
                        <Typography variant="h6">{t("yourName")}</Typography>
                        <TextField
                            label={t("firstName")}
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label={t("lastName")}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            fullWidth
                            margin="normal"
                            sx={{pb: 5}}
                        />

                        <FormControl fullWidth>
                            <InputLabel id="ethnicity-select-label">{t("ethnicity")}</InputLabel>
                            <Select
                                labelId="ethnicity-select-label"
                                value={ethnicity}
                                onChange={(e) => setEthnicity(e.target.value as string)}
                                label="Ethnicity"
                            >
                                <MenuItem value="White">White</MenuItem>
                                <MenuItem value="African-American">African-American</MenuItem>
                                <MenuItem value="Asian">Asian</MenuItem>
                                <MenuItem value="Hispanic/Latino">Hispanic/Latino</MenuItem>
                                <MenuItem value="Middle-Eastern">Middle-Eastern</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    <Box sx={{ pt: 2, mb: 3 }}>
                        <Typography variant="h6">{t("householdInfo")}</Typography>
                        <FormControlLabel sx={{pb: 2}}
                                          control={
                                              <Checkbox
                                                  checked={isVeteran}
                                                  onChange={(e) => setIsVeteran(e.target.checked)}
                                              />
                                          }
                                          label={t("isVeteran")}
                        />



                        <AgeStepper
                            label={t("familyCount")}
                            value={familyCount}
                            onIncrement={() => setFamilyCount((prev) => prev + 1)}
                            onDecrement={() => setFamilyCount((prev) => Math.max(0, prev - 1))}
                            big={true}
                        />


                        <Box sx={{pt: 5}}>
                            <AgeStepper
                                label={t("menAndBoys")}
                                value={menCount}
                                onIncrement={() => setMenCount((prev) => prev + 1)}
                                onDecrement={() => setMenCount((prev) => Math.max(0, prev - 1))}
                                big={true}
                            />

                            <AgeStepper
                                label={t("womenAndGirls")}
                                value={womenCount}
                                onIncrement={() => setWomenCount((prev) => prev + 1)}
                                onDecrement={() => setWomenCount((prev) => Math.max(0, prev - 1))}
                                big={true}
                            />
                        </Box>


                    </Box>

                </Box>
            case 1:
                return <Box>
                    <Typography variant="h6" sx={{ pb: 2}}>{t("agesOfEveryone")}</Typography>
                    <AgeStepper
                        label={t("age0To4")}
                        value={age0To4}
                        onIncrement={() => setAge0To4((prev) => prev + 1)}
                        onDecrement={() => setAge0To4((prev) => Math.max(0, prev - 1))}
                    />
                    <AgeStepper
                        label={t("age5To12")}
                        value={age5To12}
                        onIncrement={() => setAge5To12((prev) => prev + 1)}
                        onDecrement={() => setAge5To12((prev) => Math.max(0, prev - 1))}
                    />

                    <AgeStepper
                        label={t("age13To17")}
                        value={age13To17}
                        onIncrement={() => setAge13To17((prev) => prev + 1)}
                        onDecrement={() => setAge13To17((prev) => Math.max(0, prev - 1))}
                    />

                    <AgeStepper
                        label={t("age18To29")}
                        value={age18To29}
                        onIncrement={() => setAge18To29((prev) => prev + 1)}
                        onDecrement={() => setAge18To29((prev) => Math.max(0, prev - 1))}
                    />

                    <AgeStepper
                        label={t("age30To60")}
                        value={age30To60}
                        onIncrement={() => setAge30To60((prev) => prev + 1)}
                        onDecrement={() => setAge30To60((prev) => Math.max(0, prev - 1))}
                    />

                    <AgeStepper
                        label={t("age60Plus")}
                        value={age60Plus}
                        onIncrement={() => setAge60Plus((prev) => prev + 1)}
                        onDecrement={() => setAge60Plus((prev) => Math.max(0, prev - 1))}
                    />

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Typography variant="h6" sx={{ mr: 2 }}>
                            Added {totalAgeSelectionCount()} of {familyCount} family members
                        </Typography>
                        {ageSelectionIsComplete() && <CheckCircle color="success" />}
                    </Box>

                </Box>
            case 2:
                return <Box>
                    <Typography variant="h6">{t("cellPhoneNumber")}</Typography>

                    <PhoneKeypad phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}/>

                    <Typography variant="h6" sx={{pt: 5}}>{t("whereDoYouLive")}</Typography>
                    {/*<TextField*/}
                    {/*    label="County"*/}
                    {/*    value={county}*/}
                    {/*    onChange={(e) => setCounty(e.target.value)}*/}
                    {/*    fullWidth*/}
                    {/*    margin="normal"*/}
                    {/*/>*/}

                    <CountySelector county={county} setCounty={setCounty}/>
                </Box>
            case 3:
                return <div>
                    <Typography variant="h6">Family Information</Typography>
                    <p><strong>First Name:</strong> {firstName}</p>
                    <p><strong>Last Name:</strong> {lastName}</p>
                    <p><strong>Ethnicity:</strong> {ethnicity}</p>
                    <p><strong>Is Veteran:</strong> {isVeteran ? 'Yes' : 'No'}</p>
                    <p><strong>Family Count:</strong> {familyCount}</p>
                    <p><strong>Men Count:</strong> {menCount}</p>
                    <p><strong>Women Count:</strong> {womenCount}</p>
                    <p><strong>Age 0-4:</strong> {age0To4}</p>
                    <p><strong>Age 5-12:</strong> {age5To12}</p>
                    <p><strong>Age 13-17:</strong> {age13To17}</p>
                    <p><strong>Age 18-29:</strong> {age18To29}</p>
                    <p><strong>Age 30-60:</strong> {age30To60}</p>
                    <p><strong>Age 60+:</strong> {age60Plus}</p>
                    <p><strong>Phone Number:</strong> {phoneNumber}</p>
                    <p><strong>County:</strong> {county}</p>

                    <Button variant="contained" onClick={copyText}>
                        Copy text
                    </Button>

                    <p>{getText()}</p>
                </div>
        }
    }

    const clearCurrentContent = () => {
        switch (activeStep) {
            case 0:
                setFirstName("")
                setLastName("")
                setIsVeteran(false)
                setFamilyCount(0)
                setMenCount(0)
                setWomenCount(0)
                return
            case 1:
                setAge0To4(0)
                setAge5To12(0)
                setAge13To17(0)
                setAge18To29(0)
                setAge30To60(0)
                setAge60Plus(0)
                return
            case 2:
                setPhoneNumber("")
                setCounty("")
        }
    }

    return (
        <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', p: 2 }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <Box sx={{ mt: 2 }}>
                { isSubmitted ? (
                    <div>

                        <Button variant="contained" onClick={() => {setSubmitted(false)}}>
                            Go back
                        </Button>
                    </div>
                ) : (
                    <Box>
                        <Box sx={{pt: 5, pb: 5}}>
                            { renderContent() }
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                            <Button variant="outlined" color="error" onClick={clearCurrentContent}>
                                Clear Page
                            </Button>
                            {activeStep > 0 && (
                                <Button variant="contained" onClick={handleBack}>
                                    {t("back")}
                                </Button>
                            )}
                            {activeStep < steps.length - 1 ? (
                                <Button variant="contained" onClick={handleNext}>
                                    {t("next")}
                                </Button>
                            ) : (
                                <p></p>
                            )}
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
            );
};

export default FamilyForm;
