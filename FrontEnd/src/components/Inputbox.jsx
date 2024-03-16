export const Inputbox = ({label, placeholder, onChange , type}) =>{
    return <div>
        <div className="text-sm font-medium text-left py-2"> 
            {label}
        </div>
        <div>
            <input onChange={onChange} type={type} placeholder={placeholder} className="p-1 text-lg w-80 border-slate-500 rounded border px-2"/>
        </div>
    </div>
}