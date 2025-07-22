import { ConteinerProductCategory, ProductCard } from "../Components"





function Home(){
  return (
    <>
      <ConteinerProductCategory nombre={'Watchs'} option="destacado" />
      <ConteinerProductCategory nombre={'Shoes'} />
      <ConteinerProductCategory nombre={'Coats'} />
      <ConteinerProductCategory nombre={'Set-Girl'} />
      <ConteinerProductCategory nombre={'Set-Man'} />
    </>
  )
}

export default Home
