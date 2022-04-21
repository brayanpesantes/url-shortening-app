import { extendTheme } from "@chakra-ui/react"
const colors = {
    primary: {
        100: "hsl(180, 66%, 49%)",
        200: "hsl(257, 27%, 26%)"
    },
    secondary: " hsl(0, 87%, 67%)",
    neutral: {
        50: "hsl(0, 0%, 75%, 0.1)",
        100: "hsl(257, 7%, 63%,.2)",
        200: "hsl(0, 0%, 75%)",
        300: "hsl(257, 7%, 63%)",
        400: "hsl(255, 11%, 22%)",
        500: "hsl(260, 8%, 14%)",
    },
}
const fonts = {
    body: 'Poppins, sans-serif',
}

const theme = extendTheme({ colors })

export default theme