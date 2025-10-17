import Image from "next/image";
import Link from "next/link";

export default function PrivatePages({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid min-h-screen w-full grid-cols-6 overflow-hidden">
      <aside className="col-span-1 flex min-h-screen flex-col items-center justify-start bg-slate-900 dark:bg-slate-800">
        <div className="flex w-full flex-col gap-10 p-4">
          <h1 className="text-center text-2xl font-bold text-stone-50">
            Hackathon Helper
          </h1>

          <figure className="flex w-full items-center gap-4">
            <Image
              className="h-15 w-15 rounded-full"
              src="/iagenerated/avatar.png"
              width="50"
              height="50"
              alt=""
            />
            <div className="flex-col items-start justify-start">
              <p className="text-stone-50"> Juan Pablo</p>
              <p className="text-sm text-stone-400">
                Hacker <em className="text-fuchsia-300">rookie level</em>
              </p>
            </div>
          </figure>
        </div>
        <div className="w-full py-4">
          <ul className="mt-4 w-full">
            <li className="w-full">
              <Link
                href="/dashboard"
                className="block w-full px-4 text-white hover:bg-slate-800 hover:text-white dark:text-slate-50 dark:hover:text-white dark:hover:bg-slate-700"
              >
                <span className="block w-full border-b border-gray-300 py-4">
                  Dashboard
                </span>
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/projects"
                className="block w-full px-4 text-white hover:bg-slate-800 hover:text-white dark:text-slate-50 dark:hover:text-white dark:hover:bg-slate-700"
              >
                <span className="block w-full border-b border-gray-300 py-4">
                  Projects
                </span>
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/teams"
                className="block w-full px-4 text-white hover:bg-slate-800 hover:text-white dark:text-slate-50 dark:hover:text-white dark:hover:bg-slate-700"
              >
                <span className="block w-full border-b border-gray-300 py-4">
                  Teams
                </span>
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/analysis"
                className="block w-full px-4 text-white hover:bg-slate-800 hover:text-white dark:text-slate-50 dark:hover:text-white dark:hover:bg-slate-700"
              >
                <span className="block w-full border-b border-gray-300 py-4">
                  Analysis
                </span>
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/settings"
                className="block w-full px-4 text-white hover:bg-slate-800 hover:text-white dark:text-slate-50 dark:hover:text-white dark:hover:bg-slate-700"
              >
                <span className="block w-full border-b border-gray-300 py-4">
                  Settings
                </span>
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/logout"
                className="block w-full px-4 text-white hover:bg-slate-800 hover:text-white dark:text-slate-50 dark:hover:text-white dark:hover:bg-slate-700"
              >
                <span className="block w-full border-b border-gray-300 py-4">
                  Logout
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <section
        className={`col-span-5 flex w-full h-screen flex-col items-start justify-stretch bg-white dark:bg-slate-950 px-8 py-4 overflow-auto`}
      >
        {children}
      </section>
    </main>
  );
}
