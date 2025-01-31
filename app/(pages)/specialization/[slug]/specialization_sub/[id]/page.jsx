import getData from "@/app/utils/getData";

const domain = process.env.NEXT_PUBLIC_DOMAIN;


// export async function generateMetadata({ params }) {
//     const { id } = params;
//     let page = null;
//     const response = await getData(`${domain}/api/speczializaczii-podkategoriya?populate[speczializacziya_cat][filters][slug][$eq]=lecheniye_zubov&populate[speczializacziya_cat][populate]=*`);
//     page = response?.data?.[0] || null;
//     // console.log(page)

//     return {
//         title: page.meta_title,
//         description: page.meta_description,
//     }
// }


export default async function Page({ params }) {
    const { id } = params;

    return (
        <>
            Конкретная страница подкатегории с id = {id}
        </>
    )

}



// export async function generateStaticParams() {

//     try {
//         const response = await fetch(`${domain}/api/speczialisties`);
//         const data = await response.json();

//         return data.data.map((specialist) => ({
//             id: specialist.id.toString(), // Должен быть `string`
//         }));
//     } catch (error) {
//         console.error('Ошибка загрузки параметров:', error);
//         return []; // В случае ошибки вернем пустой массив
//     }
// }
