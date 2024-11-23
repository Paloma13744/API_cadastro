import Fastify from 'fastify';
import { routes } from './routes';
import cors from '@fastify/cors';

const app = Fastify({ logger: true })

app.setErrorHandler((error,request,reply) => {
    reply.code(400).send({message: error.message})
}
)

const start = async () => {   // Função assíncrona

    await app.register(cors);
    await app.register(routes);  // Registra rotas

    try {
        await app.listen({ port: 3001 })  // Porta que o servidor roda
    } catch (err) {
        process.exit(1)
    }
}

start();
