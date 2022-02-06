import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getUsers } from "../lib/users";

function Page({ data }) {
    return (
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Users</h2>
            <ul className={utilStyles.list}>
                {data.data.map(({ id, first_name, last_name }) => (
                    <li className={utilStyles.listItem} key={id}>
                        {first_name}
                        <br />
                        {last_name}
                        <br />
                        {id}
                    </li>
                ))}
            </ul>
        </section>
    );
}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const data = await getUsers();

    // Pass data to the page via props
    return { props: { data } };
}

export default Page;
