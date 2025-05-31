interface SharedPageProps {
  params: Promise<{ id: string }>;
}

async function SharedPage({ params }: SharedPageProps) {
  const { id } = await params;

  return <div>Hello, {id}</div>;
}

export default SharedPage;
