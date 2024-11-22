import Fastify from 'fastify';

const app = Fastify({ logger: true })

const start = async () => {   // Função assíncrona
    try {
        await app.listen({ port: 3001 })  // Porta que o servidor roda
    } catch (err) {
        process.exit(1)
    }
}

start();
