import { put } from "@vercel/blob";

async function Home() {
    const { url } = await put('articles/blob.txt', 'Hello World!', { access: 'public' });
console.log('Blob URL:', url);
    return (
        <div>
            <h1>Home 5</h1>
            <p>Olá mundo</p>
        </div>
    )
}

export default Home
