import { useMemo } from "react"

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort && sort != 'score') {
          return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        if (sort == 'score') {
         return ([...posts].sort((a, b) => { return a[sort] - b[sort];}).reverse())
        }

        return posts
      }, [sort, posts])
      return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
  
    const sortedPosts = useSortedPosts(posts, sort)
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(user => user.email.toLowerCase().includes(query.toLowerCase()))
      }, [query, sortedPosts])

      return sortedAndSearchedPosts;
}