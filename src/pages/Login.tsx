import ImgLogo from "../assets/Icon.svg"

export default function Login() {
  return (
    <div className="min-h-screen min-w-full flex items-center justify-center">
      <div className="flex flex-col justify-center items-center w-[28rem] h-[30rem] bg-slate-300 border- border-slate-500 rounded-3xl">
        <h1 className="p-5 font-bold text-[1.5rem] leading-tight text-cyan-500">
          e<strong className="text-gray-700">Receituario</strong>
        </h1>
        <img className="h-[120px] w-[120px] rounded-full border-2 border-blue-500" src={ImgLogo}/>
        <form className="flex flex-col p-5 items-center">
          <input 
            className="bg-gray-900 rounded px-5 h-10 m-4" 
            type="text" 
            placeholder="Email" 
          />
          <input 
            className="bg-gray-900 rounded px-5 h-10 m-4" 
            type="password" 
            placeholder="Password" 
          />
          <button 
            className="mt-4 bg-green-500 uppercase px-5 h-10 w-[288px] rounded font-bold text-sm hover:bg-green-700 hover:text-gray-700 transition-colors disabled:opacity-50"
          >
            Login
          </button>
        </form>
        <span className="mb-3 text-gray-700">Não possui conta? <a>Criar conta</a></span>
      </div>
    </div>
  )
}
