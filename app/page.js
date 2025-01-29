export default function HomePage() {
  return (
    <div className="p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Quotes App</h1>
      <p className="text-xl">Explore inspiring quotes from various categories.</p>
      <a
        href="/quotes"
        className="mt-4 inline-block text-blue-600 underline"
      >
        See Quotes
      </a>
    </div>
  );
}
