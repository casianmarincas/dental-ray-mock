export async function getResult(image) {
    try {
        console.log(image.data_url);
        const response = await fetch('http://localhost:5000/api/test', {
            method: 'POST',
            headers: {'Content-Type': 'image/jpeg'},
            body: JSON.stringify(
                {
                    data: image.data_url
                }
            )
        });
        return await response.json();
    } catch (error) {
        return [];
    }
}