const c1 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/mac/Desktop/projects/echo/gridsome-non-lbs/src/templates/Post.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/mac/Desktop/projects/echo/gridsome-non-lbs/src/templates/Tag.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--author-vue" */ "/Users/mac/Desktop/projects/echo/gridsome-non-lbs/src/templates/Author.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/mac/Desktop/projects/echo/gridsome-non-lbs/src/pages/About.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/mac/Desktop/projects/echo/gridsome-non-lbs/node_modules/gridsome/app/pages/404.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/mac/Desktop/projects/echo/gridsome-non-lbs/src/pages/Index.vue")

export default [
  {
    path: "/blog/:year/:month/:day/:title/",
    component: c1
  },
  {
    path: "/tag/:title/",
    component: c2
  },
  {
    path: "/author/:title/",
    component: c3
  },
  {
    path: "/about/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
