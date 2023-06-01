import { ThemeProvider  } from '@emotion/react';

const theme = {
    color: {
        white: '#ffffff',
        black: '#161616',
        details: '#E31837',
        grey: '#757575',
        beige: '#F0F0F0',
        neutral: '#E0E0DE',
        warning: '',
        success: '',
        focus: '',

        // primary: {
        //     a: '',
        //     b: '',
        //     c: '',
        // },
        // secondary: {
        //     a: '',
        //     b: '',
        //     c: '',
        // },
        // neutrals: {
        //     a: '',
        //     b: '',
        //     c: '',
        // },
        // dark: {
        //     a: '',
        //     b: '',
        //     c: '',
        // },
    },
    spacing: {
        xxs: '4px',
        xs: '8px',
        s: '16px',
        m: '24px',
        l: '32px',
        xl: '48px',
        xxl: '64px',
    }
}

export default function Theme({ children }) {
    return <ThemeProvider theme={theme}>
        { children }
        </ThemeProvider>
}