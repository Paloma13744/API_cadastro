import prismaClient from "../prisma";

interface CreateCustomerProps {
    name: string;
    email: string;
}

class CreateCustomerServices {
    async execute({ name, email }: CreateCustomerProps) {
        console.log("Rota foi chamada");
        if (!name || !email) {
            throw new Error("Por favor, preencha todos os campos")
        }

        // cadastrando no banco

        const customer = await prismaClient.cliente.create({
            data: {
                name,
                email,
                stattus: true
            }
        })

        return customer
    }
}

export { CreateCustomerServices }
