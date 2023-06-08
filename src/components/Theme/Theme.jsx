import { ThemeProvider } from '@emotion/react';

const theme = {
    color: {
        white: '#ffffff',
        black: '#161616',
        details: '#E31837',
        grey: '#757575',
        greyLight: '#89939E',
        beige: '#F0F0F0',
        neutral: '#E0E0DE',
        inputHover: '#F5F7FA',
    },
    spacing: {
        xxs: '4px',
        xs: '8px',
        s: '16px',
        m: '24px',
        l: '32px',
        xl: '48px',
        xxl: '64px',
    },
    height: {
        s: '24px',
        m: '40px',
        l: '56px',
    },
    width: {
        l: '100%',
    },
    fontFamily: "Inter, sans-serif",
}

export default function Theme({ children }) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}