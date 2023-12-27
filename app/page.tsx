import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center ">
  

<div className="flex flex-col max-w-xs w-full bg-slate-50 p-5 gap-4 rounded-lg">
  <div className=" text-center my-3">
    <h2>QuickTalk</h2>
  </div>
  <div>
    <Link href='/signin' className=" bg-slate-600 p-2 block rounded-lg">
    Sign In
    </Link>
  </div>
  <div>
  <Link href='signup' className=" bg-slate-600 p-2 block rounded-lg">
    Sign Up
    </Link>
  </div>
</div>
    

    </main>
  )
}
