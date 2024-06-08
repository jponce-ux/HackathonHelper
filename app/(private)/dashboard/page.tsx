import Card from "@/app/components/Card";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Dashboard() {
  return (
    <main className="grid min-h-screen w-full grid-cols-6">
      <section className="col-span-1 flex min-h-screen flex-col items-center justify-start bg-slate-900">
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
                Hacker <em>nivel 1</em>
              </p>
            </div>
          </figure>
        </div>
        <div className="w-full py-4">
          <ul className="mt-4 w-full">
            <li className="w-full">
              <Link
                href="/dashboard/settings"
                className="block w-full px-4 text-white hover:bg-slate-800 hover:text-white dark:text-white dark:hover:text-white"
              >
                <span className="block py-4 w-full border-b border-gray-300">
                  Settings
                </span>
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/dashboard/reports"
                className="block w-full px-4 text-white hover:bg-slate-800 hover:text-white dark:text-white dark:hover:text-white"
              >
                <span className="block py-4 w-full border-b border-gray-300">Reports</span>
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/dashboard/analysis"
                className="block w-full px-4 text-white hover:bg-slate-800 hover:text-white dark:text-white dark:hover:text-white"
              >
                <span className="block py-4 w-full border-b border-gray-300">
                  Analysis
                </span>
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/dashboard/activity"
                className="block w-full px-4 text-white hover:bg-slate-800 hover:text-white dark:text-white dark:hover:text-white"
              >
                <span className="block py-4 w-full border-b border-gray-300">
                  Activity
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section
        className={`col-span-5 bg-gradient-to-t from-slate-100 from-10% via-blue-300 via-40% to-cyan-800 to-90% p-8 ${styles.wrapper}`}
      >
        <Card
          imageSrc="/iagenerated/roger.png"
          title="Proyecto Uno"
          description="Este proyecto de hackathon es el campion mundial"
        />
        
      </section>
    </main>
  );
}
