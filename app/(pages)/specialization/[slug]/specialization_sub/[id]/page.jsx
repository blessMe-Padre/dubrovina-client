import getData from "@/app/utils/getData";
import ContentPage from "./ContentPage";


export async function generateMetadata({ params }) {
    const { id } = params;
    let page = null;
    // const response = await getData(`${domain}/api/speczializaczii-podkategoriya?populate[speczializacziya_cat][filters][slug][$eq]=lecheniye_zubov&populate[speczializacziya_cat][populate][speczializacziya_sub][populate]=*`);
    const response = await getData(`${process.env.NEXT_PUBLIC_DOMAIN}/api/speczializaczii-podkategoriya?
populate[speczializacziya_cat][filters][slug][$eq]=lecheniye_zubov&
populate[speczializacziya_cat][populate][speczializacziya_sub][filters][id][$eq]=${id}&
populate[speczializacziya_cat][populate][speczializacziya_sub][populate][speczializacziya_sub_page][populate]=*`)
    page = response?.data?.speczializacziya_cat[0].speczializacziya_sub[0].speczializacziya_sub_page || null;

    return {
        title: page.meta_title,
        description: page.meta_description,
    }
}


export default async function Page({ params }) {
    const { id } = params;
   
    return (
        <>    
            <ContentPage id={id} />
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
