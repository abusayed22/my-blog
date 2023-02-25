import {motion,useScroll} from "framer-motion"


function ScroolProgrees () {
    const {scrollYProgress} = useScroll();
    return (
        <motion.div
            style = {{
                scale:scrollYProgress,
                position: "fixed",
                top: 0,
                right: 0,
                left: 0,
                height: 5,
                transform: "0%",
                background:"#fcd34d",
                zIndex: 100
            }}
        >

        </motion.div>
    )
}
export default ScroolProgrees;