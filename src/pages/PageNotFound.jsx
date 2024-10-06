<<<<<<< HEAD
export default function PageNotFound(){
    return(
        <h1>Página não encontrada</h1>
=======
import imgNotFound from '../assets/notFound.svg'

export default function PageNotFound(){
    return(
        <>
        <div className="flex flex-col min-h-screen items-center justify-evenly">
            <img
                src={imgNotFound}
                alt="Imagem de erro"
                className="w-96 "
            />
            <h1 className="text-4xl font-bold">Página Não Encontrada</h1>
        </div>
        </>
>>>>>>> trabalhando-geral
    )
}
