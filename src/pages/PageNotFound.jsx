import imgNotFound from '../assets/notFound.svg'

export default function PageNotFound(){
    return(
        <div className="main justify-evenly">
            <img
                src={imgNotFound}
                alt="Imagem de erro"
                className="w-96 "
            />
            <h1 className="text-4xl font-bold">Página Não Encontrada</h1>
        </div>
    )
}
