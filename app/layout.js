export default function Layout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white text-gray-800 font-sans">
        <header className="bg-blue-600 text-white p-4 text-center">
          <h1 className="text-2xl font-bold">Quotes App</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}