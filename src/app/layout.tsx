import Box from '@mui/material/Box';
import Header from '@/components/Header/Header'
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';

export const metadata = {
  title: 'МедЭксперт',
  description: 'Главная страница',
};

const LINKS = [
  { text: 'Home', href: '/' },
  { text: 'Starred', href: '/'  },
  { text: 'Tasks', href: '/' },
];


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body>
    <ThemeRegistry>
      <Header />
      <Box component="main">
        {children}
      </Box>
    </ThemeRegistry>
    </body>
    </html>
  );
}
