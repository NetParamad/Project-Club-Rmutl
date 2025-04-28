interface Params {
    id: string;
}

export default function page({params}: {params: Params}) {
  return (
    <div>page{params.id}</div>
  )
}