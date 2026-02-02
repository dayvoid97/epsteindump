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
          <h2 className="font-bold text-xl  mb-3">The Epstein Files</h2>
          <p className="text-gray-700 leading-relaxed">
            Everybody knows about the Epstein Files. A lot of names are associated, there is so many
            documents.
          </p>

          <p className="text-gray-700 leading-relaxed">
            We want to go beyond AI and Computing to old-fashioned journalistic approach to looking
            at released Epstein Files and more to come releases to give a better perspective on the
            state of affairs.
          </p>
        </section>

        {/* What to Expect */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-3">How this works</h2>
          <ul className="space-y-3 text-gray-700 list-disc list-inside">
            <li>Launched a token Epstein Dump to fund the project</li>
            <li>Revenue will hire global journalistic talent to uncover the mysteries. </li>
            <li>Everything will be published in the website, free for everyone to view. </li>
            <li>Public will be bettter served</li>
          </ul>
        </section>

        {/* Status */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-3">Current status</h2>
          <p className="text-gray-700 leading-relaxed">Domain Registered, Token Launched.</p>
          <p className=" font-bold text-xl  leading-relaxed">
            Token Information:
            <a
              href="https://pump.fun/coin/AjRmSm4ZyLYUZ9ftCfi5yzLexpvPSRJtbccKJ99Dpump"
              className="text-blue-600"
            >
              Epstein Dump Launched on Pump.fun
            </a>
          </p>
          <p className="text-gray-700 leading-relaxed">
            We do not hold any token because this is not a capital accumulation endeavors. The plan
            is to get the project viral so trading volume increases and fees can be collected.
          </p>
        </section>

        <section>
          <h2> Fund the project via tips</h2>

          <p>
            <span className="font-bold">Solana Wallet Address:</span>{' '}
            <span>FKjtSKgp5vngiTjr3TR9ouRSNix7qHDjVmn79Zm2h34a</span>{' '}
          </p>
          <p>
            <span className="font-bold">Ethereum Wallet Address:</span>
            <span>0x534b768b78A1466041dDeA34a1e3E2fA27e61B76</span>{' '}
          </p>
        </section>

        {/* Footer */}
        <footer className="border-t pt-6 text-sm text-gray-500">
          <p>
            This site presents analysis of publicly available records. It does not assert guilt,
            innocence, or legal conclusions beyond what is stated in source documents.
          </p>
          <p>Site Launched: Feb 1, 2026</p>
        </footer>
      </div>
    </main>
  )
}
