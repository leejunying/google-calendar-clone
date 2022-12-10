import { useMemo } from 'react';
// material
import { CssBaseline } from '@mui/material';
import { createTheme, StyledEngineProvider, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
//
   
// ----------------------------------------------------------------------

export default function ThemeProvider({ children }: any) {
    const themeOptions: any = useMemo(
        () => ({
             shape: { borderRadius: 8 },
         }),
        [],
    );

    const theme = createTheme(themeOptions);
 
    return (
        <StyledEngineProvider injectFirst>
            <MUIThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </StyledEngineProvider>
    );
}
