export default function ConsultCard() {
    return (
        <div className="flex flex-col p-12 bg-darkblue text-center text-white rounded-2xl">
            <h2 className="text-4xl mb-8">Нужен совет?</h2>
            <img src="images/InvestPage/ShowcaseSection/elena.png" alt="elena" className="w-[200px] h-auto mx-auto mb-2" />
            <p className="text-2xl font-bold">Елена</p>
            <p className="text-lg font-bold mb-8">Ваш проводник в мире финансов.</p>
            <button className="h-[50px] bg-[#ebb40e] hover:bg-[#ffe97f] transition-colors 
            text-white flex items-center justify-center rounded-xl text-2xl font-bold cursor-pointer mb-4">СПРОСИТЬ</button>
            <a className="text-xl font-bold mb-4" href="">+49 1511 6042108</a>
            <div className="flex gap-4 items-center justify-center">
                <a href="">
                    <img src="icons/InvestPage/ShowcaseSection/email.png" alt="email" 
                    className="w-[32px] h-auto" />
                </a>
                <a href="">
                    <img src="icons/InvestPage/ShowcaseSection/telegram.png" alt="telegram" 
                    className="w-[32px] h-auto" />
                </a>
                <a href="">
                    <img src="icons/InvestPage/ShowcaseSection/instagram.png" alt="instagram" 
                    className="w-[32px] h-auto" />
                </a>
            </div>
        </div>
    )
}