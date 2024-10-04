export default function Contact() {
    return (
        <div className="min-h-screen flex items-center justify-center flex-col">

            <div class="w-96 mb-4 border border-minha-cor-1 rounded-lg">
                
                <div className="flex items-center justify-center my-4 gap-6 w-full">
                    <textarea id="message" rows="1" class="p-3 w-3/12 text-sm text-gray-900 border border-minha-cor-1 rounded-md" placeholder="Nome" required></textarea>

                    <textarea id="message" rows="1" class="p-3 w-7/12 text-sm text-gray-900 border border-minha-cor-1 rounded-md" placeholder="Endereço de email" required></textarea>
                </div>

                <div class="px-4 my-2 rounded-t-lg">
                    <textarea id="comment" rows="4" class="w-full px-2 text-sm border border-minha-cor-1 focus:ring-0 rounded-md" placeholder="Conteúdo" required></textarea>
                </div>

                <div class="flex items-center justify-center px-3 py-2 border-t-2">
                    <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-minha-cor-1 rounded-lg hover:bg-minha-cor-1-light">
                        Enviar
                    </button>
                </div>
            </div>

        </div>
    )
}
