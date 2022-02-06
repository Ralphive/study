export async function getUsersIds() {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    const res = await fetch(`https://reqres.in/api/users`);
    const jsonRes = await res.json();
    const ArrayUsers = jsonRes.data.map((user) => {
        return {
            params: {
                id: `${user.id}`,
            },
        };
    });

    console.log(ArrayUsers);

    return ArrayUsers;
}

export async function getUserData(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`);
    const jsonRes = await res.json();
    return { ...jsonRes.data };
}

export async function getSortedUsers() {
    const res = await fetch(`https://reqres.in/api/users/`);
    const jsonRes = await res.json();
    let users = jsonRes.data;

    // Sort posts by date
    return users.sort((a, b) => {
        if (a.first_name < b.first_name) {
            return 1;
        } else {
            return -1;
        }
    });
}
