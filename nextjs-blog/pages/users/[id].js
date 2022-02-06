import Layout from "../../components/layout";
import { getUsers, getUserData } from "../../lib/users.js";
import Image from "next/image";
import utilStyles from "../../styles/utils.module.css";

export default function User({ userData }) {
    return (
        <Layout>
            <Image
                priority
                src={userData.avatar}
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={userData.first_name}
            />
            <br />
            {userData.first_name} {userData.last_name}
            <br />
            {userData.email}
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = await getUsers();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const userData = await getUserData(params.id);
    return {
        props: {
            userData,
        },
    };
}
