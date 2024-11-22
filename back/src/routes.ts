// Responsável por rotas 

import { FastifyInstance,FastifyPluginOptions,FastifyRequest,FastifyReply } from "fastify";
import { request } from "http";


export async function routes(fastify : FastifyInstance, options: FastifyPluginOptions){

    fastify.get("/teste",async(request: FastifyRequest, reply: FastifyReply) => {  // criando rota

    })
}