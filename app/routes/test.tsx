import { motion } from "motion/react";

function test() {
    return (
        <div className="mx-auto mt-10 max-w-7xl">
            <div className="min-h-screen"></div>
            <motion.div
                initial={{ backgroundColor: "rgb(0, 255, 0)", opacity: 0 }}
                whileInView={{ backgroundColor: "#ff0088", opacity: 1 }}
                style={box}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 0.7 }}
            />
        </div>
    );
}

const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
};

export default test;
