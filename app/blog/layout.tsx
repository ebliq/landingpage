export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="mt-8 max-w-6xl mx-auto"> {children}</div>;
}
