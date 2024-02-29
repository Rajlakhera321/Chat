export const Conversation = () => {
    return (
        <>
            <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
                <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="user avatar" />
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                        <p className="font-bol text-gray-200 ">Jhon Doe</p>
                        <span className="text-xl">😀</span>
                    </div>
                </div>
            </div>
            <div className="my-0 py-0 h-1 divider"/>
        </>
    )
}