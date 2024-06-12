"use client";

import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, useState } from "react";

export default function Register() {
  const [readMore, setReadMore] = useState(false);
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const [formState, setFormState] = useState({
    emailValue: "",
    passwordValue: "",
    confirmPasswordValue: "",
  });

  const readMoreHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setReadMore(!readMore);
  };

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
    <main className="mx-auto grid min-h-screen w-full grid-cols-1 items-center justify-center bg-gradient-to-tr from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-4 xl:grid-cols-6">
      <section className="container hidden xl:col-span-4 xl:col-start-1 xl:grid xl:place-items-center">
        <figure className="relative block w-11/12 overflow-hidden rounded-xl bg-slate-50/50 p-8 shadow-lg shadow-blue-900/35 backdrop-blur-xl 2xl:w-8/12 dark:bg-slate-800">
          <div className="image-container relative float-left mr-4 overflow-hidden rounded-xl">
            <Image
              className="xl:h-max xl:w-56"
              src="/testimonios/SebaPeladios.png"
              alt=""
              width="384"
              height="512"
            />
            <figcaption className="absolute bottom-0 left-0 box-border w-full rounded-bl-xl rounded-br-xl border-none bg-slate-950/30 px-2 py-1 font-medium backdrop-blur-xl">
              <div className="font-bold text-sky-400 dark:text-sky-400">
                Seba Peladios
              </div>
              <div className="text-slate-50 dark:text-slate-50">CEO, Umbra</div>
            </figcaption>
          </div>

          <div className={`text-left ${!readMore ? "flex flex-col" : "block"}`}>
            <blockquote>
              <p
                className={`whitespace-pre-line text-balance text-left text-base font-medium leading-relaxed text-gray-900 antialiased ${!readMore && "line-clamp-6"}`}
              >
                “Quer&iacute;a crear una herramienta nueva y la app nos
                abri&oacute; un nuevo universo: primero me sugiri&oacute; la
                opci&oacute;n de crear una red social donde las personas
                matcheen cuando coinciden con lo que sue&ntilde;an mientras
                duermen. <br /> Si hay m&aacute;s de cuatro personas con un
                mismo sue&ntilde;o, sugiri&oacute; rooms tem&aacute;ticos sobre
                sueños específicos o que se parezcan entre un 50/75%
                (calcul&oacute; que es el porcentaje mínimo para que varias
                personas charlen sobre sue&ntilde;os sin distraerse).
                <br /> Incluso sugiri&oacute; una room para quienes no recuerdan
                lo que sue&ntilde;an! Para hablar sobre c&oacute;mo duermen
                (aire acondicionado encendido o apagado; mascotas en la cama sí
                o no…).
                <br /> <br />
                En la semana 1 se suscribieron 666.969 usuarios! Creciendo
                exponencialmente desde entonces. Gracias a eso creamos nuestra
                propia cirptomoneda: dreamcoin. Realmente lo recomiendo!”
              </p>
            </blockquote>
            <button
              onClick={readMoreHandler}
              className={`mt-4 h-12 w-12 animate-bounce flex-col items-center justify-center self-end rounded-full border-2 border-gray-700 bg-transparent text-center font-bold ${!readMore ? "flex" : "hidden"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                height="24"
              >
                <path
                  fill="#374151"
                  stroke-width="1"
                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                />
              </svg>
            </button>
          </div>
        </figure>
      </section>

      <section className="col-span-1 mx-auto box-border rounded-md border border-white bg-white px-10 py-4 shadow-2xl xl:col-span-2 xl:col-start-5">
        <div className="m-0 flex w-full flex-col items-start justify-between gap-8 p-0">
          <h1 className="w-full py-4 text-center text-2xl font-bold leading-relaxed text-slate-700 antialiased sm:text-3xl md:text-4xl">
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
