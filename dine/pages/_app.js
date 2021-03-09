import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <footer style={{ backgroundColor: "black", color: "white" }}>
                <div>
                    <span>Marthwaite, Sedbergh Cumbria</span>
                    <br />
                    <span>+00 44 123 4567</span>
                </div>
                <div>
                    <span>Open Times</span>
                    <br />
                    <span>Mon - Fri: 09:00 AM - 10:00 PM</span>
                    <br />
                    <span>Sat - Sun: 09:00 AM - 11:30 PM</span>
                </div>
                <div>
                    <p>
                        Challenge by{" "}
                        <a
                            href="https://www.frontendmentor.io?ref=challenge"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Frontend Mentor
                        </a>
                        .
                    </p>
                    Coded by{" "}
                    <a href="https://github.com/ann-dev" target="_blank" rel="noopener noreferrer">
                        ann-dev
                    </a>
                    .
                </div>
            </footer>
        </>
    );
}

export default MyApp;
