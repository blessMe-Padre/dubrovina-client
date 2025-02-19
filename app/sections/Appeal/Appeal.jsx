import { AppealComponents } from './AppealComponents';
import getData from '../../utils/getData';

export default async function Appeal() {
    let data = null;
    try {
        const response = await getData(`${process.env.NEXT_PUBLIC_DOMAIN}/api/sekcziya-obrashhenie?populate=*`);
        data = response || null;

    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }

    return (
        <AppealComponents data={data} />
    )
}
