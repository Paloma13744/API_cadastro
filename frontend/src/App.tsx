import { FiTrash, FiUserPlus } from 'react-icons/fi';
import { api } from './services/api';
import { useEffect, useState, useRef, FormEvent } from 'react';

interface CustomersProps {
  id: string;
  name: string;
  email: string;
  status: boolean;
  created_at: string;
}

export default function App() {
  const [customers, setCustomers] = useState<CustomersProps[]>([]);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    loadCustomers();
  }, []);

  async function loadCustomers() {
    const response = await api.get('/customers');
    setCustomers(response.data);
  }

  async function handleSumit(event: FormEvent) {
    event.preventDefault();

    // Verifique se os campos estão preenchidos
    if (!nameRef.current?.value || !emailRef.current?.value) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Envia os dados para a API
    const response = await api.post('/customer', {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      status: true,
    });

    console.log(response.data);

    // Atualize a lista de clientes
    setCustomers((prevCustomers) => [...prevCustomers, response.data]);

    // Limpe os campos após o envio
    if (nameRef.current) nameRef.current.value = '';
    if (emailRef.current) emailRef.current.value = '';
  }

  async function handleDelete(id: string) {
    try {
      await api.delete('/customer', {
        params: {
          id: id,
        },
      });

      const prevCustomers = customers.filter((customer) => customer.id !== id);

      setCustomers(prevCustomers);

      if (nameRef.current) nameRef.current.value = '';
      if (emailRef.current) emailRef.current.value = '';
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-300 to-blue-500 p-4">
      <div className="bg-gray-900 rounded-lg shadow-xl p-6 md:max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-center text-white mb-6 flex items-center justify-center space-x-2">
          <FiUserPlus size={32} />
          <span></span>
          <span>Cadastro de Clientes</span>
        </h1>
       
        <form className="flex flex-col mt-2" onSubmit={handleSumit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-white">Nome:</label>
            <input
              id="name" // Adicionando o id para associar o label
              type="text"
              placeholder="Digite seu nome completo"
              ref={nameRef}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white">Email:</label>
            <input
              id="email" // Adicionando o id para associar o label
              type="email"
              placeholder="Digite seu email"
              ref={emailRef}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Cadastrar
          </button>
        </form>

        <section className="mt-6">
          {customers.map((customer) => (
            <article key={customer.id} className="bg-gray-100 rounded-lg p-4 mb-4 shadow-md relative">
              <p>
                <span className="font-semibold ">Nome:</span> {customer.name}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {customer.email}
              </p>
              <p>
                <span className="font-semibold">Status:</span> {customer.status ? 'Ativo' : 'Inativo'}
              </p>
              <button
                className="bg-red-600 w-8 h-8 flex items-center justify-center rounded-full absolute top-2 right-2"
                onClick={() => handleDelete(customer.id)}
              >
                <FiTrash size={16} color="#FFF" />
              </button>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
