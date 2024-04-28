import Image from "next/image";

export default function Home() {
  return (
    <main className="snap-mandatory h-screen w-screen overflow-y-scroll snap-y flex min-h-screen flex-col items-center justify-between">

      <button class="rounded-full w-7 h-7 flex items-center justify-center pl-0.5 ring-1 ring-black focus:outline-none">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
      </button>

      <button class="rounded-full w-7 h-7 flex items-center justify-center pl-0.5 ring-1 ring-black focus:outline-none">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="4" height="18"></rect><rect x="15" y="3" width="4" height="18"></rect></svg>
      </button>

      <div className="snap-center min-h-screen min-w-full flex justify-center items-center bg-gray">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-black">메인화면</h1>
        </div>
      </div>

      <div className="snap-center min-h-screen min-w-full flex justify-center items-center bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-black">결혼합니다 페이지</h1>
        </div>
      </div>

      <div className="snap-center min-h-screen min-w-full flex justify-center items-center bg-red-300">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-black">날짜 달력 남은시간 카운팅</h1>
        </div>
      </div>

      <div className="snap-center min-h-screen min-w-full flex justify-center items-center bg-red-300">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-black">갤러리, 사진 더보기</h1>
        </div>
      </div>

      <div className="snap-center min-h-screen min-w-full flex justify-center items-center bg-red-300">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-black">오시는 길, 지도</h1>
        </div>
      </div>

      <div className="snap-center min-h-screen min-w-full flex justify-center items-center bg-red-300">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-black">계좌번호</h1>
        </div>
      </div>

      <div className="snap-center min-h-screen min-w-full flex justify-center items-center bg-red-300">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-black">방명록</h1>
        </div>
      </div>

      <div className="snap-center marker:relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>     

    </main>
  );
}
