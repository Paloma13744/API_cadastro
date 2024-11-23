import prismaClient from "../prisma";

interface DeleteCustomerProps {
    id: string;
}

class DeleteCustomerServices {
    async execute({ id }: DeleteCustomerProps) {
        if (!id) {
            throw new Error("Sua solicitação é inválida !")
        }


        const findCustomer = await prismaClient.cliente.findFirst({
            where:{
                id: id
            }
        })

        if(!findCustomer){
            throw new Error("Usuário não existe!")
        }

        await prismaClient.cliente.delete({
            where:{
                id: findCustomer.id
            }
        })

        return{message: "Usuário deletado com sucesso !"}
    }
}
export { DeleteCustomerServices };