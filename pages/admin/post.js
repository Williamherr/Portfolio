import {handler} from "../api/post"


export default async function getStaticProps(req,res) {
    // Instead of fetching your `/api` route you can call the same
    // function directly in `getStaticProps`
    var formData = new FormData();

    const posts = await handler(req,res)
 
    // Props returned will be passed to the page component
    return { props: { posts } }
  }