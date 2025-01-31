import { Link } from "react-router-dom"

export function BottomWarning ({label, buttonText, to})
{
    return (
        <div className = "flex" >
            <div>{label}</div>
            <Link className="pointer underline pl-1 cursor-pointer" to={to}>
                {buttonText}
            </Link>
        </div>
    )
}