
const getData = async (url) => {
    try {
        const res = await fetch(url, {
            next: { revalidate: 10 }, // 10 секунд кеширования
        });
        if (!res.ok) {
            throw new Error(`Ошибка HTTP: ${res.status}`);
        }
        const result = await res.json();
        return result;
    } catch (error) {
        console.error("Ошибка при загрузке меню:", error);
        return [];
    }
};

export default getData;