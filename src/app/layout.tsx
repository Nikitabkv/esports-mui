import Box from '@mui/material/Box'
import Header from '@/components/Header/Header'
import ThemeRegistry from '@/lib/ThemeRegistry/ThemeRegistry'
import Footer from "@/components/Footer/Footer"

export const metadata = {
  title: 'Esports-24.ru – киберспортивный онлайн-журнал: новости, прогнозы, турниры, CS:GO, DOTA 2',
  description: 'Самые актуальные новости киберспорта, прогнозы на матчи, аналитика, составы, турниры, трансферы. Будь всегда в курсе главных событий киберспорта.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <link rel="icon" href="/test/favicon.png" type="image/png" sizes="any"/>
    <body>
    <ThemeRegistry>
      <Header/>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <Box pl={3} pr={3} sx={{flexBasis: '1440px'}}>
          {children}
        </Box>
      </Box>
      <Footer/>
    </ThemeRegistry>
    </body>
    </html>
  );
}
