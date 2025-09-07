import { useNavigate } from "react-router-dom"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(useGSAP)
import { useRef } from "react"
import { ChevronDown } from "lucide-react"

export default function Home(){
    const navigate = useNavigate()
    const containerRef = useRef()
    const pageRef = useRef()
    useGSAP(() => {
        gsap.fromTo(pageRef.current, {x: '100vw', opacity:0}, {x: '0', opacity: 1, duration: 2})
    }, {scope: containerRef})
    return (
        <div ref={containerRef}>
            <div ref={pageRef} className="overflow-hidden relative w-full h-screen flex flex-col justify-center items-center font-waterbrush bg-gradient-to-r from-blue-200 to-cyan-200">
                
                <div className="flex flex-col gap-24 justify-between items-center">
                    <h1 className="text-7xl text-red-500">Para mi esposa</h1>
                    <ChevronDown className="bottom-8 text-red-500" size={96} 
                    onClick={() => navigate('/ludmila-bday2025/second')}
                    />
                </div>
            </div>
        </div>
    )
}
