import { createBrowserRouter } from "react-router-dom";
import Importance, {
  loader as importanceLoader,
} from "../../components/Importance";
import Revolution, {
  loader as revolutionLoader,
} from "../../components/Revolution";
import WhatIsCep, {
  loader as whatIsCepLoader,
} from "../../components/WhatIsCep";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import DisplayError from "../../pages/Shared/DisplayError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <DisplayError />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <WhatIsCep />,
            loader: whatIsCepLoader,
          },
          {
            path: "revolution",
            element: <Revolution />,
            loader: revolutionLoader,
          },
          {
            path: "importance",
            element: <Importance />,
            loader: importanceLoader,
          },
        ],
      },
    ],
  },
]);

export default router;
