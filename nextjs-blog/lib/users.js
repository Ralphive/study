export async function getUsers() {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    const res = await fetch("https://reqres.in/api/users?page=2");
    return res.json();
}
