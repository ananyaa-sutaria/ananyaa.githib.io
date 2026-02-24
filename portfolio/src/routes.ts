import { createBrowserRouter } from 'react-router'
import { Root } from './Root'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Involvements } from './pages/Involvements'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'projects', Component: Projects },
      { path: 'involvements', Component: Involvements },
    ],
  },
])
