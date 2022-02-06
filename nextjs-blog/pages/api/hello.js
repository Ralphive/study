export default function handler(req, res) {
    console.log(req);
    const { name } = req.query;
    res.status(200).json({ text: `Hello, ${name}!👋` });
}
