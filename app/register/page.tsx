function Register() {
    return (
        <>
            <h1 className={"text-2xl font-bold mb-5"}>
                Registration
            </h1>
            <form action={"#"} method="post">
                <div className={"mb-3"}>
                    <input className="border-2 border-gray-500 focus:outline-0 p-3" type="text" name="fName"
                           placeholder={"First Name"} required/>
                </div>
                <div className={"mb-3"}>
                    <input className="border-2 border-gray-500 focus:outline-0 p-3" type="text" name="lName"
                           placeholder={"Last Name"} required/>
                </div>
                <div className={"mb-3"}>
                    <input className="border-2 border-gray-500 focus:outline-0 p-3" type="email" name="email"
                           placeholder={"E-mail"} required/>
                </div>
                <div>
                    <button className={"bg-green-700 p-3 text-white rounded-[3px] hover:bg-green-600"} type={"submit"}>
                        Register
                    </button>
                </div>
            </form>
        </>
    )
}

export default Register;