import Card from "./Card";
import { amountAtom } from '../atoms';
import { useAtom } from 'jotai';
import Summary from './Summary';

const Content = () => {

    const [data, setData] = useAtom(amountAtom)

    const resetData = () => {
        const tempArr = [...data]
        tempArr.forEach(x => {
            x.quantity = 0
        })
        setData(tempArr)
    }

    return (
        <div >
            <div className="
            mobile:pt-[40px]
            mobile:px-[30px]
            mobile:pb-[40px]
            mobile:text-center
            desktop:pt-[40px]
            desktop:px-[100px]
            desktop:pb-[40px]
            font-poppins
            ">
                <h1 className="text-3xl font-bold text-center">What items to store?</h1>
                <h5 className='mt-4 text-gray-400' >Select which items you wish to store before moving to your new home. We'll keep 'em safe!</h5>
                <div className=" mt-8 flex flex-wrap justify-around align-baseline content-around">
                    {data.map(item => {
                        return (
                            <Card item={item} key={item.name} />
                        );
                    })}
                </div>
                <button className="mt-4
                w-[100px] 
                h-[30px] 
                border-2
                border-solid
                border-[#FD9255] 
                hover:bg-[#FD9255] 
                hover:cursor-pointer"
                onClick={resetData}>Clear</button>
            </div>
            <div>
                <Summary />
            </div>

        </div>

    )
}

export default Content