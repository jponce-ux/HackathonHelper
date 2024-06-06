"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Register() {
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const [formState, setFormState] = useState({
    emailValue: "",
    passwordValue: "",
    confirmPasswordValue: "",
  });

  const onEmailChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    setFormState({
      emailValue: e.currentTarget.value,
      passwordValue: formState.passwordValue,
      confirmPasswordValue: formState.confirmPasswordValue,
    });
    setSubmitEnabled(
      e.currentTarget.value !== "" &&
        formState.passwordValue !== "" &&
        formState.confirmPasswordValue !== "" &&
        formState.passwordValue === formState.confirmPasswordValue,
    );
  };

  const onPasswordChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    setFormState({
      emailValue: formState.emailValue,
      passwordValue: e.currentTarget.value,
      confirmPasswordValue: formState.confirmPasswordValue,
    });
    setSubmitEnabled(
      formState.emailValue !== "" &&
        e.currentTarget.value !== "" &&
        formState.confirmPasswordValue !== "" &&
        e.currentTarget.value === formState.confirmPasswordValue,
    );
  };

  const onConfirmPasswordChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    setFormState({
      emailValue: formState.emailValue,
      passwordValue: formState.passwordValue,
      confirmPasswordValue: e.currentTarget.value,
    });
    setSubmitEnabled(
      formState.emailValue !== "" &&
        formState.passwordValue !== "" &&
        e.currentTarget.value !== "" &&
        formState.passwordValue === e.currentTarget.value,
    );
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e);
  };

  return (
    <main className="mx-auto grid min-h-screen w-full grid-cols-1 items-center justify-center bg-gradient-to-tr from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-4 lg:grid-cols-2 lg:justify-end">
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
          action="/signup"
          className="container box-border grid grid-cols-1 items-center justify-center gap-4 p-4 pb-0"
          onSubmit={submitHandler}
        >
          <div className="flex w-full flex-col items-start justify-start gap-1">
            <label className="text-stone-700" htmlFor="email">
              Email:
            </label>
            <input
              required
              id="email"
              name="email"
              type="email"
              className="w-full rounded border border-zinc-300 p-2 focus:outline-none focus:ring"
              value={formState.emailValue}
              onChange={onEmailChangeHandler}
            />
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-1">
            <label className="text-stone-700" htmlFor="password">
              Password:
            </label>
            <input
              required
              id="password"
              name="password"
              type="password"
              className="w-full rounded border border-zinc-300 p-2 focus:outline-none focus:ring"
              value={formState.passwordValue}
              onChange={onPasswordChangeHandler}
            />
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-1">
            <label className="text-stone-700" htmlFor="confirm-password">
              Confirm Password:
            </label>
            <input
              required
              id="confirm-password"
              name="confirm-password"
              type="password"
              className="w-full rounded border border-zinc-300 p-2 focus:outline-none focus:ring"
              value={formState.confirmPasswordValue}
              onChange={onConfirmPasswordChangeHandler}
            />
          </div>
          <div className="w-full pb-0 pt-6">
            <button
              disabled={!submitEnabled}
              type="submit"
              className="w-full rounded bg-blue-700 p-2 font-bold text-white focus:outline-none focus:ring focus:ring-offset-4 disabled:pointer-events-none disabled:bg-stone-500"
            >
              Sign Up
            </button>
            <div className="relative mt-6 flex w-full items-end justify-end pt-4 before:absolute before:left-1/4 before:top-0 before:w-2/4 before:content-center before:border-t before:border-stone-300">
              <Link
                className="rounded text-xs text-stone-700 focus:outline-none focus:ring focus:ring-fuchsia-500 focus:ring-offset-4"
                href="/signin"
              >
                {" "}
                Already a member?{" "}
                <em className="font-bold uppercase not-italic text-blue-700">
                  Sign in
                </em>
              </Link>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}
