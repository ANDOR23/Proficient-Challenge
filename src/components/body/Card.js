import { useAtom } from 'jotai';
import { amountAtom } from '../atoms';

const Card = ({ item }) => {

    const [amount, setAmount] = useAtom(amountAtom) 

    const increment = () => {
        const tempArr = [...amount]
        tempArr.forEach(x => {
            if(x.name === item.name){
                x.quantity += 1
            }
        }) 
        setAmount(tempArr)
    }

    const decrement = () => {
        const tempArr = [...amount]
        tempArr.forEach(x => {
            if(x.name === item.name && x.quantity > 0){
                x.quantity -= 1
            }
        }) 
        setAmount(tempArr)
    }

    return (
        <div className="
        mt-4
        mobile:flex
        mobile:justify-center
        mobile:flex-wrap
        mobile:h-[150px]
        mobile:w-[200px]
        tablet:w-[150px]
        tablet:h-[150px]
        tablet:flex 
        tablet:justify-center 
        tablet:flex-wrap
        desktop:flex 
        desktop:justify-center 
        desktop:flex-wrap
        desktop:ml-[60px]
        desktop:mb-[20px]
        font-light
        ">
            <div className='
            mobile:w-[120px] 
            mobile:h-[100px] 
            mobile:flex
            mobile:flex-col
            mobile:items-center
            mobile:text-justify
            tablet:h-[100px] 
            tablet:w-[120px] 
            rounded-lg
            shadow-lg'>
                <img src={require(`../../images/${item.image}.png`)} alt={item.name} className="mobile:h-[60px] " />
                <div className="flex justify-center  mt-2">{item.name}</div>
            </div>
            <div className="flex justify-center items-center mt-[-15px]">
                <div className="flex justify-center items-center pb-[3px] bg-slate-100 w-[30px] h-[20px] hover:cursor-pointer " onClick={decrement}>-</div>
                <div className="flex justify-center items-center px-[8px]">{ item.quantity }</div>
                <div className="flex justify-center items-center pb-[3px] bg-slate-100 w-[30px] h-[20px] hover:cursor-pointer" onClick={increment}>+</div>
            </div>
            
        </div>

    );

};

export default Card