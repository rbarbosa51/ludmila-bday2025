import { useNavigate } from "react-router-dom"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(useGSAP)
import { useRef } from "react"
import { ChevronDown } from "lucide-react"

export default function Second(){
    const navigate = useNavigate()
    const containerRef = useRef()
    const pageRef = useRef()
    useGSAP(() => {
        gsap.fromTo(pageRef.current, {x: '100vw', opacity:0}, {x: '0', opacity: 1, duration: 2})
    }, {scope: containerRef})
    
    return (
        <div ref={containerRef}>
            <div ref={pageRef} className="relative w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-violet-200 to-pink-200">
                <h1 className="text-7xl text-red-500">No terminado</h1>
                <ChevronDown className="absolute bottom-4 text-red-500" size={96} 
                onClick={() => navigate('/ludmila-bday2025/third')}
                />
            </div>
        </div>
    )
}
