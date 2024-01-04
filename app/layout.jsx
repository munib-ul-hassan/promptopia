import "@styles/globals.css" // it is same as import "../styles/global.css"
export const metadata = {
    title: "promptopia",
    desceiption: "Discover & share AI prompt"
}

const RootLayout = ({children}) => {
    return (
        <html lang="en">
            <body>
                <div className="main">
                    <div className="gradient" />

                </div>
                <main className="app">
                    {children}
                </main>
            </body>

        </html>
    )
}

export default RootLayout