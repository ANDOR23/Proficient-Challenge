import { useAtom } from "jotai";
import { amountAtom } from "../atoms";

const Summary = () => {
    
    const [amount] = useAtom(amountAtom) 

    const getTotalItems = () => {
        let totalItems = 0
        amount.forEach(x => {
            totalItems += x.quantity

        });
        return totalItems
    }

    const getTotalM2 = () => {
        let totalM2 = 0
        amount.forEach(x => {
            totalM2 += x.quantity * x.m2
        });
        return totalM2
    }

    return (
        <div className="flex justify-center flex-col items-center mobile:px-4 mobile:mb-4">
            <h1 className="text-2xl font-bold mb-[15px]">Summary</h1>
            <div className="bg-slate-100 flex flex-col mb-[15px] p-4 mobile:w-full tablet:w-96">
                <div className="flex justify-between "><p>Total Items</p><p> { getTotalItems() } </p></div>
                <div className="flex justify-between "><p>Total M2</p><p>{(getTotalM2()).toFixed(2)}</p></div>
                <div className="flex justify-between "><p>Subtotal</p><p>${(200 * getTotalM2()).toFixed(2) } </p></div>
                <div className="flex justify-between "><p>Tax</p><p>${((200 * getTotalM2() )*0.16).toFixed(2)} </p></div>
                <div className="font-bold flex justify-between "><p>Total</p><p>${(((200 * getTotalM2() )*0.16)+(200 * getTotalM2() )).toFixed(2)}</p></div>
                <div className="font-bold flex justify-between "><p>Due Today 50%</p><p>${((((200 * getTotalM2() )*0.16)+(200 *  getTotalM2()))/2).toFixed(2)}</p></div> 
            </div>

        </div>
    )
}

export default Summary