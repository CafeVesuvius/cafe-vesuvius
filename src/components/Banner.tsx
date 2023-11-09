function Banner() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
            <h1 className="mx-auto max-w-5xl font-display font-bold text-5xl tracking-tight sm:text-7xl">
                Lækker mad, god stemning og hyggelig <p className="bg-gradient-to-r from-yellow-400 to-vesuvius-red inline-block text-transparent bg-clip-text">atmosfære</p> 
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg tracking-tight text-neutral-700">
                Vi har et bredt udvalg af lækre retter, der passer til enhver smag. 
                <br />
                Vi glæder os til at se dig!
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
                <a className="group inline-flex items-center justify-center rounded-full bg-neutral-900 py-3 px-6 text-base font-semibold text-white hover:bg-neutral-700 hover:text-neutral-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 active:bg-neutral-800 active:text-neutral-300">
                    Bestil bord
                </a>
            </div>
        </div>
    );
}

export default Banner