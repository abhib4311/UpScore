const Stats = ({icon, children}) =>{
    return (
        <div className="flex gap-4 items-center justify-center h-50 w-90 max-w-sm p-6 bg-green-500 hover:not-last ">
        <div>
            <div className="flex items-center gap-5">
                <img src={icon} className="w-12 h-12" />
            </div>
        </div>
        <div className="flex flex-col items-center justify-between mt-2">
            {children}
        </div>
    </div> 
    )
}

export default Stats;