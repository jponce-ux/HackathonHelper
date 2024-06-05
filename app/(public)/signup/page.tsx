import Image from "next/image";

export default function Register() {
  return (
    <main className="container mx-auto grid min-h-screen grid-cols-1 items-center justify-center px-4 lg:grid-cols-2 lg:justify-end">
      <section className="mx-auto box-border rounded-md border border-white bg-white px-10 py-4 shadow-2xl md:max-w-md lg:max-w-lg">
        <div className="m-0 flex w-full flex-col items-start justify-between gap-8 p-0">
          <h1 className="w-full py-4 text-center text-4xl font-bold leading-relaxed text-slate-700 antialiased">
            Hackathon Helper
          </h1>
          <h2 className="w-full py-4 pb-0 text-center text-base font-bold text-zinc-500 antialiased">
            Sign up to continue
          </h2>
        </div>
        <form
          action="/public/signup"
          className="container box-border grid grid-cols-1 items-center justify-center gap-4 p-4"
        >
          <div className="flex w-full flex-col items-start justify-start gap-1">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full rounded border border-slate-500 p-2"
            />
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-1">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full rounded border border-slate-500 p-2"
            />
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-1">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              className="w-full rounded border border-slate-500 p-2"
            />
          </div>
          <div className="w-full pb-8 pt-10">
            <button
              type="submit"
              className="w-full rounded bg-blue-700 p-2 font-bold text-white"
            >
              Sign Up
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
