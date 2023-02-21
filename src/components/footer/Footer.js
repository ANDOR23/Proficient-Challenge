import tw from '../../images/twitter.png'
import ig from '../../images/instagram.png'
import fb from '../../images/fb.png'
import logo from '../../images/LOGO.png'
import wa from '../../images/wa.png'

const Footer = () => {

    return (
        <div className="relative
        text-white	
        flex
        justify-center
        mobile:w-auto
        mobile:bg-[#FD9255]
        mobile:h-[870px]
        mobile:w-full
        tablet:h-[260px]">
            <div className="mobile:flex
            mobile:flex-col
            tablet:flex-row
            mobile:p-[20px]
            tablet:p-[10px]
            tablet:flex
            tablet:justify-center
            desktop:flex
            desktop:justify-start">
                <div className="mobile:w-[200px]
                mobile:mr-[50px]
                mobile:mb-[20px]
                tablet:w-[200px] 
                tablet:mr-[15px]
                desktop:mr-[100px]">
                    <img src={logo} alt='Logo' />
                    <p className="tablet:text-sm
                    tablet:my-[20px] mobile:text-sm mobile:my-[20px]">It is a long established fact that a reader will be distracted by the readable content of a page whenters.</p>
                    <div className="
                    mobile:flex
                    mobile:flex-row
                    mobile:justify-start">
                        <img className="mobile:pr-[10px] " src={tw} alt='Twitter' />
                        <img className="mobile:pr-[10px] " src={fb} alt='Facebook' />
                        <img className="mobile:pr-[10px] " src={ig} alt='Instagram' />
                    </div>
                </div>
                <div className="mobile:flex 
                mobile:flex-wrap 
                tablet:align-baseline 
                tablet:flex 
                tablet:pt-4 
                tablet:flex-row">
                    <div className="mobile:mr-[50px] 
                    mobile:mb-[20px] 
                    mobile:mr-[20px]
                    tablet:mr-[15px]   
                    desktop:mr-[100px]">
                        <h1 className=" text-xl font-bold mb-[25px]">About Us</h1>
                        <h5>About</h5>
                        <h5>Privacy & Policy</h5>
                        <h5>Terms & Conditions</h5>
                        <h5>Faq</h5>
                    </div>
                    <div className="
                    tablet:mr-[15px]
                    mobile:mr-[20px]
                    mobile:mb-[20px]
                    desktop:mr-[100px]">
                        <h2 className="text-xl font-bold mb-[25px]">Navigate</h2>
                        <h5>How We Work</h5>
                        <h5>Services</h5>
                        <h5>Faq</h5>
                        <h5>Contact</h5>
                        <h5>Free Quote</h5>
                    </div>
                    <div className="
                    mobile:flex
                    mobile:flex-col
                    mobile:mb-[20px]">
                        <h2 className="text-xl font-bold mb-[25px]">Contact Us</h2>
                        <h5>Ricardo Margain 444</h5>
                        <h5>Call: +52 81 1234 5678</h5>
                        <h5>Email: info@challenge.com</h5>
                        <img src={wa} alt="WhatsApp" className="h-[50px] mt-[15px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;