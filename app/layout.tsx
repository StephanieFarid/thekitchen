import './globals.css'; // Import global styles;
import Navbar from './components/navbar';


export const metadata: Metadata = {
  title: 'The Kitchen',
  description: 'Where Women Belong',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
