
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white sm:p-10">
      <header>
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Weather Intelligence Platform
        </p>

        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
          DataPulse AI
        </h1>

        <p className="mt-2 text-slate-400">
          Monitor weather data and detect unusual patterns.
        </p>
      </header>

      <section className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <article className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-sm text-slate-400">Temperature</p>
          <p className="mt-3 text-3xl font-bold">24°C</p>
          <p className="mt-2 text-xs text-slate-500">Sample data</p>
        </article>

        <article className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-sm text-slate-400">Humidity</p>
          <p className="mt-3 text-3xl font-bold">65%</p>
          <p className="mt-2 text-xs text-slate-500">Sample data</p>
        </article>

        <article className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-sm text-slate-400">Detected Anomalies</p>
          <p className="mt-3 text-3xl font-bold text-amber-400">3</p>
          <p className="mt-2 text-xs text-slate-500">Sample data</p>
        </article>

        <article className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-sm text-slate-400">Pipeline Status</p>
          <p className="mt-3 text-3xl font-bold text-emerald-400">
            Healthy
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Demonstration status
          </p>
        </article>
      </section>

      <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-semibold">Weather Overview</h2>

        <p className="mt-2 text-sm text-slate-400">
          Your temperature, humidity, and historical charts will appear here.
        </p>
      </section>

      <footer className="mt-8 text-xs text-slate-500">
        Demo dashboard · Not connected to the backend
      </footer>
    </main>
  );
}
