import { createBrowserRouter } from "react-router";
import Products from "../components/pages/Market/Products";

const ProductRouter = createBrowserRouter([
    {
        path: "/product",
        Component: Products,
        children: [
            {
                path: ":Id",
                Component: ProductsDeatils,
            },
        ]
    }
])

export default ProductRouter;

