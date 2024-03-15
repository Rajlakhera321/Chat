import { Conversations } from "./Conversations"
import { LogoutButton } from "./LogoutButton"
import { SearchInput } from "./SearchInput"

export const Sidebar = () => {
    return (
        <div className="border-r border-slate-500 flex flex-col p-4">
            <SearchInput/>
            <Conversations/>
            <LogoutButton/>
        </div>
    )
}