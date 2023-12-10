// components/Butoon/BtnSkillBlack.js

export default function BtnSkillBlack ({ children }) {
    return (
        <div className='py-1'>
            <button type="button " className="align-left rounded-full tracking-wider text-white italic hover:bg-indigo-500 bg-black text-left pl-5 py-1 w-[104px] shadow-xl shadow-bg-gray-900/30 h-[25px ">#<span>{children}</span></button>
        </div>
    )
}