import { BrowserRouter, Route, Routes } from "react-router-dom"

import LandingPage from "../pages/LandingPage"
import LoginPage from "../pages/LoginPage"
import ProfilePage from "../pages/ProfilePage"
import SignUpPage from "../pages/SignUpPage"
import TagPage from "../pages/TagPage"
import MainPage from "../pages/MainPage"
import EditTagPage from "../pages/EditTagPage"

const Router = () => {
  // 라우트 경로는 추후 수정 필요 임시
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<LandingPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/tag" element={<TagPage />} />
          <Route path="/tag/:tagId" element={<EditTagPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
