import Link from "next/link"

const Card = ({ group }) => {
  return (
    <div className="card w-96 bg-primary text-primary-content">
    <div className="card-body">
      <h2 className="card-title">{group.name}</h2>
      <p>{group.description}</p>
      <div className="card-actions justify-end">
        <button className="btn">Join</button>
      </div>
    </div>
  </div>
  )
}
export default Card
