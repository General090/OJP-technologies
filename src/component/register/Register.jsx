import Logo from "../../assets/logo.png"

const Register = () => {
  return (
    <div className="bg-[#f3f4f6] h-screen">
      <nav className="flex items-center justify-center py-3 bg-[#95af88] gap-4 text-white font-bold text-xl">
        <img src={Logo} className="w-28 h-12" />
        <h1>OJP Technologies Ltd</h1>
      </nav>

      <div className="bg-white">
        <h1>Eligibility Test</h1>
      </div>
    </div>
  )
}

export default Register
