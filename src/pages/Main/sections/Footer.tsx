export default function Footer() {
    return (
        <footer className="w-full h-full phone:h-[170px] bg-[#031633]">
            <div className="maincontainer mx-auto text-white pt-[25px] pb-[25px] phone:pb-0
            flex flex-col phone:flex-row justify-between bigphone:items-center">
                <div className="text-lg mb-3 phone:mb-0 phone:text-[16px]">
                    <h1>OS Finanzen Stepaniuk Olena</h1>
                    <address>01067 Dresden</address>
                    <address>Deutschland</address>
                    <div><a href="tel:+4915116042108">📞 Телефон: +49 1511 6042108</a></div>
                    <div><a href="mailto:osfinanzen@gmail.com">📧 E-Mail: osfinanzen@gmail.com</a></div>
                </div>
                <div className="hidden bigphone:flex gap-3 items-center">
                    <a href="https://www.instagram.com/stepaniuk_finanzen" target="_blank" rel="noopener noreferrer">
                        <img src="icons/Footer/instagram.svg" alt="instagram" />
                    </a>
                    <a href="https://t.me/step_fin" target="_blank">
                        <img src="icons/Footer/telegram.svg" alt="telegram" />
                    </a>
                </div>
                <div className="flex flex-col justify-between bigphone:justify-start items-center phone:items-end
                text-end bigphone:text-center text-xl phone:text-lg bigphone:text-xl">
                    <div className="flex gap-x-4 phone:gap-x-0 
                    phone:flex-col justify-between mb-3 phone:mb-0">
                        <a href="https://osfinanzen.wixsite.com/impressum" 
                        className="block bigphone:mb-3">Impressum</a>
                        <a href="https://osfinanzen.wixsite.com/datenschutzerklarung" 
                        className="block">Datenschutzerklärung</a>
                    </div>
                    <div className="flex bigphone:hidden gap-6 phone:gap-3 items-center">
                        <a href="https://t.me/step_fin" target="_blank">
                            <img src="icons/Footer/telegram.svg" alt="telegram"
                            className="w-[48px] h-[48px] phone:w-[42px] phone:h-[42px]" />
                        </a>
                        <a href="https://www.instagram.com/stepaniuk_finanzen" target="_blank" rel="noopener noreferrer">
                            <img src="icons/Footer/instagram.svg" alt="instagram" 
                            className="w-[48px] h-[48px] phone:w-[42px] phone:h-[42px]" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}