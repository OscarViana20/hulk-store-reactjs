import { Route, Routes } from "react-router-dom";
import { HulkStoreRoutes } from '../hulkstore';
import { PublicRouter } from "./PublicRouter";
import { PrivateRouter } from "./PrivateRouter";

import LoginPage from '../auth';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login/*" element={
                    <PublicRouter>
                        <Routes>
                            <Route path="/*" element={<LoginPage />} />
                        </Routes>
                    </PublicRouter>
                } />

                <Route path="/*" element={
                    <PrivateRouter>
                        <HulkStoreRoutes />
                    </PrivateRouter>
                } />
            </Routes>
        </>
    )
}
