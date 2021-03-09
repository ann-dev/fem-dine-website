import Head from "next/head";
import Link from "next/link";

const Home = () => (
    <div>
        <Head>
            <title>Frontend Mentor | Dine Website Challenge</title>
            <link rel="icon" href="/favicon-32x32.png" />
        </Head>

        <main>
            <header
                style={{
                    backgroundColor: "black",
                    color: "white",
                    backgroundImage: "url('./images/homepage/hero-bg-mobile.jpg')",
                    backgroundRepeat: "no-repeat",
                    paddingBottom: "50px",
                    paddingTop: "200px",
                }}
            >
                <Link href="/">
                    <img src="./logo.svg" alt="dine logo" />
                </Link>
                <h1>Exquisite dining since 1989</h1>
                <p>
                    Experience our seasonal menu in beautiful country surroundings.
                    <br /> Eat the freshest produce from the comfort of our farmhouse.
                </p>
                <Link href="/booking">
                    <a style={{ border: "1px solid white" }}>Book a table</a>
                </Link>
            </header>

            <div>
                <img
                    src="./images/homepage/enjoyable-place-mobile.jpg"
                    alt="rural village landscape"
                />
                <h3>Enjoyable place for all the family</h3>
                <p>
                    Our relaxed surroundings make dining with us a great experience for everyone. We
                    can even arrange a tour of the farm before your meal.
                </p>
            </div>

            <div>
                <img src="./images/homepage/locally-sourced-mobile.jpg" />
                <h3>The most locally sourced food</h3>
                <p>
                    All our ingredients come directly from our farm or local fishery. So you can be
                    sure that you’re eating the freshest, most sustainable food.
                </p>
            </div>

            <div
                style={{
                    backgroundColor: "black",
                    color: "white",
                    paddingBottom: "50px",
                    paddingTop: "80px",
                }}
            >
                <h3>A few highlights from our menu</h3>
                <p>
                    We cater for all dietary requirements, but here’s a glimpse at some of our
                    diner’s favourites. Our menu is revamped every season.
                </p>
                <ul>
                    <li>
                        <img src="./images/homepage/salmon-mobile.jpg" />
                        <h3>Seared Salmon</h3>
                        <p>
                            Fillet Our locally sourced salmon served with a refreshing buckwheat
                            summer salad.
                        </p>
                    </li>
                    <li>
                        <img src="./images/homepage/beef-mobile.jpg" />
                        <h3>Rosemary Filet Mignon</h3>
                        <p>
                            Our prime beef served to your taste with a delicious choice of seasonal
                            sides.
                        </p>
                    </li>
                    <li>
                        <img src="./images/homepage/chocolate-mobile.jpg" />
                        <h3>Summer Fruit Chocolate Mousse</h3>
                        <p>
                            Creamy mousse combined with summer fruits and dark chocolate shavings.
                        </p>
                    </li>
                </ul>
            </div>

            <div>
                <div>
                    <img src="./images/homepage/family-gathering-mobile.jpg" />
                    <h3>Family Gathering</h3>
                    <p>
                        We love catering for entire families. So please bring everyone along for a
                        special meal with your loved ones. We’ll provide a memorable experience for
                        all.
                    </p>
                </div>
                <div>
                    <img src="./images/homepage/special-events-mobile.jpg" />
                    <h3>Special Events</h3>
                    <p>
                        Whether it’s a romantic dinner or special date you’re celebrating with
                        others we’ll look after you. We’ll be sure to mark your special date with an
                        unforgettable meal.
                    </p>
                </div>
                <div>
                    <img src="./images/homepage/social-events-mobile.jpg" />
                    <h3>Social Events</h3>
                    <p>
                        Are you looking to have a larger social event? No problem! We’re more than
                        happy to cater for big parties. We’ll work with you to make your event a hit
                        with everyone.
                    </p>
                </div>
                <Link href="/booking">
                    <a>Book a table</a>
                </Link>
                <ul>
                    <li>Family Gathering</li>
                    <li>Special Events</li>
                    <li>Social Events</li>
                </ul>
            </div>
            <div
                style={{
                    backgroundImage: "url('./images/homepage/hero-bg-mobile.jpg')",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <h2>Ready to make a reservation?</h2>
                <Link href="/booking">
                    <a>Book a table</a>
                </Link>
            </div>
        </main>
    </div>
);

export default Home;
