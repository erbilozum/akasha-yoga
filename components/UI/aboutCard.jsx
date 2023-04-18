import React from 'react'
import Image from 'next/image';

const AboutCard = ({ data }) => {
    const style = {
        height: 300,
    };
    return (
        <div className={"flex flex-col w-full"}>
            <div className={"flex flex-col w-full"}>
                <div>
                    <h3 className={"uppercase text-gray-700"}>Akasha Yoga</h3>
                </div>
                <div className={"flex flex-row"}>
                    <div className={"bg-white w-2/6 sm:w-1/6 flex items-center justify-center"}>
                        <Image
                            className={"rounded-full"}
                            src={"/homepage/homepage_1.jpg"}
                            alt={"akasha_logo"}
                            width={200}
                            height={200} />
                    </div>
                    <div className={"w-4/6 sm:w-5/6 px-1 text-sm sm:text-xl"}>
                        <span className={"p-6 justify-between"}>Yoga ve kişisel gelişim konularıyla ilgili blog yazılarımızı okuyabilir, yoga pozlarını öğrenmek için videolarımızı izleyebilirsiniz.
                            Silivri&apos;deki stüdyomuzda, her seviyede yogiye uygun derslerimiz mevcuttur. Ayrıca, özel dersler de sunuyoruz ve bu dersler, özellikle bireysel ihtiyaçları olan kişiler için tasarlanmaktadır.
                            Bizimle birlikte yoga yaparak, bedeninizi ve zihninizi güçlendirebilir, stresi azaltabilir, daha esnek ve zinde bir vücuda sahip olabilirsiniz.
                        </span>
                    </div>
                </div>

            </div>
            <div className={"flex flex-col w-full mt-4"}>
                <div>
                    <h3 className={"uppercase text-gray-700"}>Stüdyomuz Hakkında</h3>
                </div>
                <div className={"flex flex-row"}>
                    <div className={"w-4/6 sm:w-5/6 px-1 text-sm sm:text-xl"}>
                        <span className={"p-6 justify-between"}>Salonlarımız düzenli olarak dezenfekte edilir ve hijyen kurallarına uyulur. Tüm ekipmanlarımız da düzenli olarak temizlenir ve dezenfekte edilir. Bu sayede, müşterilerimiz rahatlıkla yoga yapabilirler ve hijyenik bir ortamda egzersiz yapmanın keyfini çıkarabilirler. Ayrıca, işletmemizde sosyal mesafe kurallarına da uyulur ve müşterilerimizin güvenliği için gerekli önlemler alınır.</span>
                    </div>
                    <div className={"bg-white w-2/6 flex items-center justify-center"}>
                        <Image
                            className={"rounded-full"}
                            src={"/homepage/homepage_2.jpg"}
                            alt={"akasha_logo"}
                            width={200}
                            height={200} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AboutCard