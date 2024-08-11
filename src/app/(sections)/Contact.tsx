export default function Contact() {
  return (
    <div className="p-10">
      <div className="mx-auto text-center">
        <p className="mt-2 text-4xl font-bold tracking-tight text-orange-500 sm:text-5xl">
          Contact
        </p>
        <p className="mt-2 text-lg text-white">
          <span className="text-orange-500 font-semibold">Zephyr</span>는 새로운
          인연을 기다립니다.
        </p>
      </div>
      <div className="w-3/4 mx-auto mt-5">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Title
          </label>
        </div>
        <label
          htmlFor="message"
          className="block mt-2 mb-3 text-sm font-medium text-white"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={15}
          className="mb-5 block p-2.5 w-full text-lg text-white bg-slate-900 rounded-lg border border-gray-300"
          placeholder="당신의 의견을 기다립니다."
        />
        <div className="flex justify-end">
          <a className="text-gray-900 cursor-pointer rounded-md bg-orange-500 p-3 hover:bg-orange-300 font-semibold">
            보내기
          </a>
        </div>
      </div>
    </div>
  );
}
