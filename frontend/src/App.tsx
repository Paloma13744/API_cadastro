import { FiTrash } from 'react-icons/fi'

export default function App() {
  return (
    <div className="w-full min-h-screen bg-gray-900 flex justify-center px-4">
      <div className="my-10 w-full md:max-w-2xl">
        <h1 className="text-2xl font-medium text-white text-center">Cadastro de clientes</h1>

        <form className="flex flex-col my-4">
          <div className="w-full flex flex-col items-start">
            <label className="font-medium text-white">Nome:</label>
            <input
              className="w-full my-3 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              type="text"
              placeholder="Digite seu nome completo"
            />
          </div>


          <div className="w-full flex flex-col items-start">
            <label className="font-medium text-white">Email:</label>
            <input
              className="w-full my-3 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              type="email"
              placeholder="Digite seu email"
            />
          </div>


          <div className="w-full flex justify-center">
            <input
              type="submit"
              value="Cadastrar"
              className=" font-semibold cursor-pointer w-full p-2 my-3 rounded bg-green-400 hover:bg-green-500 transition-colors"
            />
          </div>
        </form>

        <section className="flex flex col">
          <article className=" w-full bg-white rounded p-2">
            <p><span className="font-medium">Nome:</span></p>
            <p><span className="font-medium">Email:</span></p>
            <p><span className="font-medium">Status:</span></p>



          </article>
        </section>


      </div>
    </div>
  );
}
