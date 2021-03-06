import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getUsersIds } from "../lib/users";

function Page({ data }) {
    return (
        <Layout>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h2 className={utilStyles.headingLg}>Users</h2>
                <ul className={utilStyles.list}>
                    {data.map(({ id }) => (
                        <li className={utilStyles.listItem} key={id}>
                            {id}
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}

// This gets called on every request
export async function getStaticProps() {
    // Fetch data from external API
    const data = await getUsersIds();

    // Pass data to the page via props
    return { props: { data } };
}

export default Page;
