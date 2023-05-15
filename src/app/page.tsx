import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4  py-12">
          <h1 className="text-5xl font-extrabold tracking-tight text-black/90 sm:text-[5rem]">
            Encuentra el horario perfecto con <span className="text-[hsl(280,100%,70%)]">Blocky</span>
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">

            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-gray-200 p-4 text-black hover:bg-gray-300"
              href="/"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Solicitar acceso →</h3>
              <div className="text-lg">
                Obtén acceso anticipado a Blocky.
              </div>
            </Link>

            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-gray-200 p-4 text-black hover:bg-gray-300"
              href="/"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">¿Tienes código? →</h3>
              <div className="text-lg">
                ¿Ya tienes tu codigo de acceso anticipado?, usalo aqui.
              </div>
            </Link>


          </div>
        </div>
      </main>
  )
}
