import Link from "next/link"

const Card = ({ group }) => {
 // router.push('/groups')

  return (
    <div className="card w-96 bg-primary text-primary-content px-5">
    <div className="card-body py-9">
      <h2 className="card-title">{group.name}</h2>
      <p>{group.description}</p>
      <div className="card-actions justify-end">
        <button className="btn"> <Link href="/group">Join</Link></button>
      </div>
    </div>
    </div>
  )
}
export default Card
