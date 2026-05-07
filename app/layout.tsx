export const metadata = {
  title: 'DriveEase CRM System',
  description: 'Manage your car rental business with ease.'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head />
      <body className="antialiased bg-gray-50 min-h-screen flex flex-col">{children}</body>
    </html>
  );
};

export default RootLayout;
