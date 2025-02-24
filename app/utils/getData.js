
const getData = async (url) => {
    try {
        const res = await fetch(url, {
            next: { revalidate: 10 },
        });
        if (!res.ok) {
            throw new Error(`Ошибка HTTP: ${res.status}`);
        }
        const result = await res.json();
        return result;
    } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
        return [];
    }
};

export default getData;