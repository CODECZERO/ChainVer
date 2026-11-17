import { createBrowserRouter } from "react-router";
import App from "../App.tsx"
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: {
            //put chlideren inside it 
        }
    }
]);


export default router;
