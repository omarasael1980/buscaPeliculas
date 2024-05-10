 

const BuscaPeliculas = () => {
  return (
    <div className="grid  w-2/5 place-items-center items-center mt-40 ">
     <h1 className="text-4xl bold ">BuscaPeliculas</h1> 
     <form className="grid grid-cols-4  w-full" >
         <label className="col-span-1 align-middle" htmlFor="">Busca Pelicula por Nombre:</label>
         <input type="text" placeholder="Batman, Avengers..." className=" align-middle col-span-3 p-2 m-2 border-2 border-gray-400 rounded-md"/>
         <input type="submit" value="Buscar" className=" col-span-4 p-2 m-2 bg-blue-500 text-white rounded-md cursor-pointer"/>
     </form>
    </div>
  )
}

export default BuscaPeliculas
