function Banner(props) {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
            <h1 className="mx-auto max-w-5xl font-display font-bold text-5xl tracking-tight sm:text-7xl">
                {props.title} <p className="bg-gradient-to-r from-yellow-300 to-vesuvius-red inline-block text-transparent bg-clip-text">{props.highlight}</p> 
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg tracking-tight text-neutral-700">
                {props.line1}
                <br />
                {props.line2}
            </p>
            {props.buttonText ? <div className="mt-10 flex justify-center gap-x-6">
                <a href={props.link} className="group inline-flex items-center justify-center rounded-full bg-neutral-900 py-3 px-6 text-base font-semibold text-white hover:bg-neutral-700 hover:text-neutral-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 active:bg-neutral-800 active:text-neutral-300">
                    {props.buttonText}
                </a>
            </div> : null}
        </div>
    );
}

export default Banner