import { useTheme } from "../theme-provider";
import { Link } from "react-router-dom"
import { Moon, Sun } from "lucide-react" //Sun and Moon comes from Lucid React


function Header()
{
    const {theme , setTheme} = useTheme();
    const isDark = theme === "dark";

    return(
        <header className = "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
            <div className = "container mx-auto flex h-16 items-center justify-between px-4">
                <Link to  = {"/"}>
                <img src={theme == "dark" ? "../../public/logo_dark2.png" : "../../public/logo_light.png"} 
                alt="Klimate Logo" className="h-14" />
                </Link>

                <div>
                    {/* search */}
                    {/* theme toggle */}
                    <div onClick = {() => setTheme(isDark? "light":"dark")}
                         className = { `flex items-center cursor-pointer transition-transform duration-500
                                ${isDark?"rotate-180":"rotate-0"} `}>

                        {isDark? (<Sun className = "h-6 w-8 text-yellow-500 rotate-0 transition-all" />) :
                                 (<Moon className = "h-6 w-6 text-blue-500 rotate-0 transition-all" />)
                        }


                    </div>
                </div>
            </div>

        </header>
        
    )

};

export default Header;