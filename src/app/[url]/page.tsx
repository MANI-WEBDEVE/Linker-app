



export default async function Page({
    params,
  }: {
    params: Promise<{ url: string }>
  }) {
    const url = (await params).url
    return <div>My Post: {url}</div>
  }