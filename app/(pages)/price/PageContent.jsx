import getData from "@/app/utils/getData";


export default async function PageContent() {
    let data = '';

     try {
        // Тут я получаю весь объект 
        const response = await getData(`${process.env.NEXT_PUBLIC_DOMAIN}/api/speczializaczii-czena?populate[speczializacziya_sub_price][populate][speczializacziya_sub_price_item]=*`);
        data = response?.data?.speczializacziya_sub_price || null;

        // console.log(data)

    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }
   

    return (
        <section className="section">
            <div className="container">
                <div>
                    <h2 className="title title--black">
                        стоимость лечения
                        
                    </h2>

                    <div>
                        <div>

                            <p> 
                                Стоимость лечения в каждом конкретном клиническом случае можно определить только после осмотра, анализа и диагностики проблемы. 
                                Каждый случай — уникален. У всех пацинтов различаются как начальные ситуации, так и пожелания по конечному результату.
                            </p>

                            <p>
                                Перед началом лечения докторами составляется план, который полностью прозрачен. В нем подробно указаны цены на все предстоящие манипуляции — таким рбразом Вы видите и знаете еще до начала лечения, на что будет потрачен каждый рубль.
                            </p>

                            <p>
                                Общее представление об уровне цен в клинике можно получить, ознакомившись с базовыми позициями представленными ниже.
                            </p>
                        </div>

                        <div>
                            <p>
                                Слова "цена" и "ценность" хоть и однокоренные, но очень различны по смыслу. Так вот ценность наших работ и результатов в лечении во много раз превышает их цену.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    {data.map((item, idx) => (

                    
                        <div key={idx}>
                        
                            <p>
                                {item.title}
                            </p>

                            <div>
                                {item?.speczializacziya_sub_price_item.map((price, price_index) => (
                                    <div key={price_index}>
                                        <p>
                                            {price.Name}
                                        </p>

                                        <p>
                                            {price.Price}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}