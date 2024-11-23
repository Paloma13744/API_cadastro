import prismaClient from "../prisma";

class ListCustomerService {
    async execute() {
        // busca todos os clientes
        const customers = await prismaClient.cliente.findMany()  // busca todos os clientes
        return customers;
    }
}

export { ListCustomerService }