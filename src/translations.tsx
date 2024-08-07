export type Language = 'en' | 'es' | 'pt';

interface Translations {
    [key: string]: {
        en: string;
        es: string;
        pt: string;
    };
}

// Example translations object
const translations: Translations = {
    new: {
        en: 'New',
        es: 'Nuevo',
        pt: 'Novo',
    },
    newDescription: {
        en: 'I am new here',
        es: 'Soy nuevo aquí',
        pt: 'Sou novo aqui',
    },
    returning: {
        en: 'Returning',
        es: 'Regresando',
        pt: 'Retornando',
    },
    returningDescription: {
        en: 'I have been here before',
        es: 'Ya he estado aquí antes',
        pt: 'Eu já estive aqui antes',
    },
    welcomeMessage: {
        en: 'Welcome! Select your language above.',
        es: '¡Bienvenido! Seleccione su idioma arriba.',
        pt: 'Bem-vindo! Selecione seu idioma acima.',
    },
    firstName: {
        en: 'First Name',
        es: 'Nombre',
        pt: 'Primeiro Nome',
    },
    lastName: {
        en: 'Last Name',
        es: 'Apellido',
        pt: 'Sobrenome',
    },
    ethnicity: {
        en: 'Ethnicity',
        es: 'Etnicidad',
        pt: 'Etnia',
    },
    householdInfo: {
        en: 'Household Info',
        es: 'Información del hogar',
        pt: 'Informações da Família',
    },
    isVeteran: {
        en: 'Is anyone in the family a veteran?',
        es: '¿Hay algún veterano en la familia?',
        pt: 'Há algum veterano na família?',
    },
    familyCount: {
        en: 'How many family members?',
        es: '¿Cuántos miembros de la familia?',
        pt: 'Quantos membros da família?',
    },
    menAndBoys: {
        en: 'How many men and boys?',
        es: '¿Cuántos hombres e niños?',
        pt: 'Quantos homens e meninos?',
    },
    womenAndGirls: {
        en: 'How many women and girls?',
        es: '¿Cuántas mujeres y niñas?',
        pt: 'Quantas mulheres e meninas?',
    },
    age0To4: {
        en: '0-4 Years',
        es: '0-4 Años',
        pt: '0-4 Anos',
    },
    age5To12: {
        en: '5-12 Years',
        es: '5-12 Años',
        pt: '5-12 Anos',
    },
    age13To17: {
        en: '13-17 Years',
        es: '13-17 Años',
        pt: '13-17 Anos',
    },
    age18To29: {
        en: '18-29 Years',
        es: '18-29 Años',
        pt: '18-29 Anos',
    },
    age30To60: {
        en: '30-60 Years',
        es: '30-60 Años',
        pt: '30-60 Anos',
    },
    age60Plus: {
        en: '60+ Years',
        es: '60+ Años',
        pt: '60+ Anos',
    },
    cellPhoneNumber: {
        en: 'Cell Phone Number',
        es: 'Número de teléfono celular',
        pt: 'Número de celular',
    },
    whereDoYouLive: {
        en: 'Where do you live?',
        es: '¿Dónde vives?',
        pt: 'Onde você mora?',
    },
    back: {
        en: 'Back',
        es: 'Atrás',
        pt: 'Voltar',
    },
    next: {
        en: 'Next',
        es: 'Siguiente',
        pt: 'Próximo',
    },
    yourName: {
        en: 'Your Name',
        es: 'Tu Nombre',
        pt: 'Seu Nome',
    },
    agesOfEveryone: {
        en: 'What are the ages of everyone in the household?',
        es: '¿Cuáles son las edades de todos en el hogar?',
        pt: 'Quais são as idades de todos na casa?',
    },
    stepFamilyInformation: {
        en: 'Family Information',
        es: 'Información Familiar',
        pt: 'Informações da Família',
    },
    stepHouseholdAges: {
        en: 'Household Ages',
        es: 'Edades da Família',
        pt: 'Idades da Família',
    },
    stepAdditionalDetails: {
        en: 'Additional Details',
        es: 'Detalles Adicionales',
        pt: 'Detalhes Adicionais',
    },
    stepDone: {
        en: 'Done',
        es: 'Concluido',
        pt: 'Concluído',
    },
    countyField: {
        en: 'Enter your county',
        es: 'Ingrese su condado',
        pt: 'Digite seu condado'
    }

// Add more keys and translations as needed
};

export default translations;
