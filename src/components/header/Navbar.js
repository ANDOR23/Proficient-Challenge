import logo from '../../images/LOGO.png'
import menu from '../../images/menu.png'
import { useState } from 'react';

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className="
        relative
        text-white
        mobile:w-full
        tablet:w-full
        mobile:bg-[#FD9255]">
            <div className="
            flex
            items-center
            align-center
            justify-between
            mobile:p-[20px]
            tablet:p-[20px]
            desktop:p-[20px]">
                <img src={logo} alt="Logo" className="mobile:w-[40px] " />
                <div onClick={() => setOpen(!open)}>
                    <img src={menu} alt="Menu" className="invert mobile:w-[40px] tablet:hidden mobile:h-[40px]" />
                </div>
                <div className="
                tablet:flex
                tablet:flex-row
                tablet:underline
                mobile:hidden">
                    <a className='mobile:px-[15px]' href="/">How we work</a>
                    <a className='mobile:px-[15px]' href="/">Services</a>
                    <a className='mobile:px-[15px]' href="/">Free Quote</a>
                    <a className='mobile:px-[15px]' href="/">Contact</a>

                </div>
            </div>
            {open ? (
                <div className='bg-[#FD9255] w-full underline py-3'>
                    <ul >
                        <li><a className='mobile:px-[15px]' href="/">How we work</a></li>
                        <li><a className='mobile:px-[15px]' href="/">Services</a></li>
                        <li><a className='mobile:px-[15px]' href="/">Free Quote</a></li>
                        <li><a className='mobile:px-[15px]' href="/">Contact</a></li>
                    </ul>
                </div>
            ) : null}
        </div>
    )
}

export default Navbar;