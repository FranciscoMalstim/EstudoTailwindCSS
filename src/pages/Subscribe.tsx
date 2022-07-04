import ImgLogo from "../assets/Icon.svg"
import LogoGmail from "../assets/google-plus.svg"

export function Subscribe() {
  return (
    <div className="min-h-screen min-w-full flex items-center justify-center">
      <div className="flex flex-col justify-center items-center w-[28rem] h-[40rem] bg-slate-300 border- border-slate-500 rounded-3xl">
        <h1 className="p-5 font-bold text-[1.5rem] leading-tight text-cyan-500">
          e<strong className="text-gray-700">Receituario</strong>
        </h1>
        <img className="h-[100px] w-[100px] rounded-full border-2 border-blue-500" src={ImgLogo}/>
        <form className="flex flex-col p-5 items-center">
          <input 
            className="bg-gray-900 rounded px-5 h-10 m-2" 
            type="text" 
            placeholder="Seu nome completo" 
          />
          <input 
            className="bg-gray-900 rounded px-5 h-10 m-2" 
            type="text" 
            placeholder="Digite seu e-mail" 
          />
          <input 
            className="bg-gray-900 rounded px-5 h-10 m-2" 
            type="password" 
            placeholder="Digite seu Password" 
          />
          <button 
            className="mt-4 bg-green-500 uppercase px-5 h-10 w-[288px] rounded font-bold text-sm hover:bg-green-700 hover:text-gray-700 transition-colors disabled:opacity-50"
          >
            Cadastrar
          </button>
          <button className="flex flex-col-reverse items-center justify-center">
            <span className="flex mb-3 text-gray-700 justify-center content-end">Logar com Gmail</span>
            <img className="h-[50px] w-[50px] rounded-full border-1 ml-2 mt-3" src={LogoGmail} alt="" />
          </button>
        </form>
      </div>
    </div>
  )
}
