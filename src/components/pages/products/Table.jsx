import { useEffect, useMemo, useRef, useState } from "react"
import axios from "axios"
import { API_URL } from "../../../constants/env"
import { token } from "../../../helpers/auth"
import { Link } from "react-router-dom"

const Table = () => {
	const [product, setProduct] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState()
	const [search, setSearch] = useState("")
	const searchInput = useRef(null)

	useEffect(() => {
		axios
			.get(`${API_URL}public/product`, {
				headers: {
					Authorization: `Bearer ${token()}`,
				},
			})
			.then((resp) => {
				setLoading(true)
				setProduct(resp.data.data)
			})
			.catch((error) => {
				setError(error)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [])

	const handleSearch = () => {
		setSearch(searchInput.current.value)
	}

	const filteredProduct = useMemo(() => {
		return product.filter((searchProduct) => {
			return JSON.stringify(searchProduct)
				.toLowerCase()
				.includes(search.toLowerCase())
		})
	}, [product, search])

	const deleteReserve = (product) => {
		if (window.confirm("¿Estás seguro de eliminar?")) {
			axios
				.put(`${API_URL}private/product/${product.id}`, {
					headers: {
						Authorization: `Bearer ${token()}`,
					},
				})
				.then(() => alert("Producto eliminado"))
		}
	}

	if (loading) return <h1>CARGANDO...</h1>
	if (error) return <div>{error?.message}</div>

	return (
		<div>
			<section>
				<div className="container-titleProduct">
					<h1>Listado de mis Productos</h1>
					<Link className="button" to="/producto/crear">
						AGREGAR PRODUCTO
					</Link>
					<div className="container-searchProduct">
						<span className="mt-2 mx-2">🔍</span>
						<input
							className="border border-green-300 mb-1 w-112 text-green-700"
							type="text"
							value={search}
							ref={searchInput}
							onChange={handleSearch}
							placeholder="Busqueda"
						/>
					</div>
				</div>
				<table className="container-table">
					<thead>
						<tr>
							<th>Nombre</th>
							<th>Precio</th>
							<th>Descripción</th>
							<th>Editar</th>
							<th>Borrar</th>
						</tr>
					</thead>
					<tbody>
						{product.length === 0 && (
							<tr>
								<td colSpan={4}>No existen reservaciones actualmente</td>
							</tr>
						)}
						{filteredProduct.map((product) => (
							<tr key={product.id}>
								<td>{product.name}</td>
								<td>{product.price}</td>
								<td>{product.description}</td>
								<td>
									<Link to={`/reservacion/editar/${product.id}`}>Editar</Link>
								</td>
								<td className="erase">
									<a onClick={() => deleteReserve(product)}>🗑️</a>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>
		</div>
	)
}

export default Table
