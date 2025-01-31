export const metadata = {
    title: "Дубровина | Услуги Саб Категория",
    description: "Клиника Дубровина",
}

export default async function Page({ params }) {
    const { id } = params;

    return (
        <>
            Конкретная страница подкатегории с id = {id}
        </>
    )

}
