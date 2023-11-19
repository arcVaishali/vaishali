import { useScroll, animated } from '@react-spring/web'

function Test() {
  const { scrollYProgress } = useScroll()

  return (
    <animated.div style={{ opacity: scrollYProgress }}>
      Hello World
    </animated.div>
  )
}

export default Test;