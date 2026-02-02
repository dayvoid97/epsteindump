export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Epstein Dump</h1>
          <p className="mt-4 text-lg text-gray-600">
            We are on a mission to go over all of Epstein Files and make them accessible for
            everyone to see.
          </p>
        </header>

        {/* Mission */}
        <section className="mb-12">
          <h2 className="text-xl font-medium mb-3">What this site is</h2>
          <p className="text-gray-700 leading-relaxed">
            This project exists to analyze, organize, and explain publicly released Epstein-related
            documents. The goal is not speculation or sensationalism, but clarity — presenting
            primary sources alongside careful analysis so people can understand what is actually in
            the records.
          </p>
        </section>

        {/* What to Expect */}
        <section className="mb-12">
          <h2 className="text-xl font-medium mb-3">How this works</h2>
          <ul className="space-y-3 text-gray-700 list-disc list-inside">
            <li>Documents are reviewed and broken down section by section.</li>
            <li>Key names, timelines, and relationships are contextualized.</li>
            <li>Original sources are preserved and referenced.</li>
            <li>Analysis is updated as new files are released.</li>
          </ul>
        </section>

        {/* Status */}
        <section className="mb-16">
          <h2 className="text-xl font-medium mb-3">Current status</h2>
          <p className="text-gray-700 leading-relaxed">
            This archive is being built incrementally. Initial document reviews and summaries will
            appear here first, followed by deeper analysis and cross-referencing as the dataset
            grows.
          </p>
        </section>

        {/* Footer */}
        <footer className="border-t pt-6 text-sm text-gray-500">
          <p>
            This site presents analysis of publicly available records. It does not assert guilt,
            innocence, or legal conclusions beyond what is stated in source documents.
          </p>
        </footer>
      </div>
    </main>
  )
}
